namespace QuizApp

open System
open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html
open WebSharper.UI.Notation

[<JavaScript>]
module Client =

    let quizState        : Var<QuizState> = Var.Create Welcome
    let playerName       : Var<string>   = Var.Create ""
    let difficultyStr    : Var<string>   = Var.Create ""
    let categoryStr      : Var<string>   = Var.Create ""
    let questionCountStr : Var<string>   = Var.Create "10"
    let startError       : Var<string>   = Var.Create ""
    let timerSeconds     : Var<int>      = Var.Create 0
    let timerMax         : Var<int>      = Var.Create 20
    let mutable private timerCancel  : (unit -> unit) option = None
    let mutable private quizStartTime = DateTime.Now

    let parseDifficulty (s: string) =
        match s with
        | "Easy"   -> Some Easy
        | "Medium" -> Some Medium
        | "Hard"   -> Some Hard
        | _        -> None

    let buildConfig () : QuizConfig =
        { PlayerName    = playerName.Value.Trim()
          Difficulty    = parseDifficulty difficultyStr.Value
          Category      = categoryStr.Value
          QuestionCount =
              match Int32.TryParse(questionCountStr.Value) with
              | true, n -> n
              | _       -> 10 }

    let stopTimer () =
        match timerCancel with
        | Some f -> f (); timerCancel <- None
        | None   -> ()

    let startTimer (seconds: int) (onExpire: unit -> unit) =
        stopTimer ()
        timerSeconds.Value <- seconds
        timerMax.Value     <- seconds
        let mutable cancelled = false
        timerCancel <- Some (fun () -> cancelled <- true)
        async {
            let mutable rem = seconds
            while rem > 0 && not cancelled do
                do! Async.Sleep 1000
                if not cancelled then
                    rem <- rem - 1
                    timerSeconds.Value <- rem
            if rem = 0 && not cancelled then onExpire ()
        } |> Async.Start

    let getElementValue (el: Dom.Element) : string =
        JS.Get<string> "value" el

    let welcomeScreen (categories: string list) : Doc =

        let diffSelect =
            let opts : Doc list =
                (Doc.Element "option" [attr.value ""] [Doc.TextNode "All Difficulties"] :> Doc)
                :: (["Easy";"Medium";"Hard"] |> List.map (fun d ->
                        Doc.Element "option" [attr.value d] [Doc.TextNode d] :> Doc))
            Doc.Element "select"
                [ attr.``class`` "form-select"
                  on.change (fun el _ -> difficultyStr.Value <- getElementValue el) ]
                opts

        let catSelect =
            let opts : Doc list =
                (Doc.Element "option" [attr.value ""] [Doc.TextNode "All Categories"] :> Doc)
                :: (categories |> List.map (fun c ->
                        Doc.Element "option" [attr.value c] [Doc.TextNode c] :> Doc))
            Doc.Element "select"
                [ attr.``class`` "form-select"
                  on.change (fun el _ -> categoryStr.Value <- getElementValue el) ]
                opts

        let countSelect =
            let opts : Doc list =
                [5; 10; 15] |> List.map (fun n ->
                    let extraAttrs = if n = 10 then [attr.selected "selected"] else []
                    Doc.Element "option"
                        (attr.value (string n) :: extraAttrs)
                        [Doc.TextNode (string n)] :> Doc)
            Doc.Element "select"
                [ attr.``class`` "form-select"
                  on.change (fun el _ -> questionCountStr.Value <- getElementValue el) ]
                opts

        let errorDoc : Doc =
            startError.View |> Doc.BindView (fun err ->
                if err = "" then Doc.Empty
                else div [attr.``class`` "error-box"] [Doc.TextNode err] :> Doc)

        let handleStart () =
            startError.Value <- ""
            let cfg = buildConfig ()
            match QuizConfig.validate cfg with
            | Error msg -> startError.Value <- msg
            | Ok () ->
                quizState.Value <- Loading
                async {
                    let! result = Server.GetQuestions cfg
                    match result with
                    | Error msg ->
                        quizState.Value  <- Welcome
                        startError.Value <- msg
                    | Ok questions ->
                        quizStartTime   <- DateTime.Now
                        quizState.Value <- InQuestion(questions, 0, 0, 0)
                } |> Async.StartImmediate

        div [attr.``class`` "screen welcome-screen"] [
            h1  [attr.``class`` "app-title"] [text "QuizApp"]
            div [attr.``class`` "form-card"] [
                div [attr.``class`` "form-field"] [
                    label [] [text "Your Name"]
                    // FIX: Doc.Input is deprecated. Use Doc.InputType.Text instead.
                    // Doc.InputType.Text [attrs] var  — same two-way binding, new API.
                    Doc.InputType.Text [attr.``class`` "form-input"; attr.placeholder "Enter your name…"] playerName
                ]
                div [attr.``class`` "form-field"] [label [] [text "Difficulty"];           diffSelect]
                div [attr.``class`` "form-field"] [label [] [text "Category"];             catSelect]
                div [attr.``class`` "form-field"] [label [] [text "Number of Questions"];  countSelect]
                errorDoc
                button
                    [attr.``class`` "btn btn-start"; on.click (fun _ _ -> handleStart ())]
                    [text "Start Quiz"]
            ]
        ]

    let loadingScreen () : Doc =
        div [attr.``class`` "screen loading-screen"] [
            div [attr.``class`` "spinner"] []
            p [] [text "Loading questions…"]
        ]

    let questionScreen
            (questions : ClientQuestion list)
            (idx       : int)
            (score     : int)
            (correct   : int)
            (lastResult: AnswerResult option) : Doc =

        let q        = questions.[idx]
        let total    = questions.Length
        let answered = lastResult.IsSome

        if not answered then
            startTimer q.TimeLimit (fun () ->
                stopTimer ()
                async {
                    let! res = Server.SubmitAnswer q.Id (-1) 0
                    quizState.Value <- ShowingAnswer(questions, idx, score, correct, res)
                } |> Async.StartImmediate)

        let progressPct = int (float idx / float total * 100.0)
        let progressBar =
            div [attr.``class`` "progress-wrap"] [
                div [attr.``class`` "progress-label"] [
                    span [] [text (sprintf "Question %d / %d" (idx+1) total)]
                    span [] [text (sprintf "Score: %d" score)]
                ]
                div [attr.``class`` "progress-track"] [
                    div [attr.``class`` "progress-fill"
                         attr.style (sprintf "width:%d%%" progressPct)] []
                ]
            ]

        let timerDoc =
            div [attr.``class`` "timer-row"] [
                timerSeconds.View |> Doc.BindView (fun secs ->
                    let urgent = secs <= 5 && not answered
                    div [attr.``class`` (if urgent then "timer-circle urgent" else "timer-circle")]
                        [Doc.TextNode (string secs)])
                div [attr.``class`` "timer-bar-wrap"] [
                    div [attr.``class`` "timer-bar-track"] [
                        View.Map2
                            (fun secs mx ->
                                let pct = if mx = 0 then 0 else int (float secs / float mx * 100.0)
                                sprintf "width:%d%%" pct)
                            timerSeconds.View timerMax.View
                        |> Doc.BindView (fun style ->
                            div [attr.``class`` "timer-bar-fill"; attr.style style] [])
                    ]
                ]
            ]

        let diffClass =
            match q.Difficulty with
            | Easy   -> "badge badge-easy"
            | Medium -> "badge badge-medium"
            | Hard   -> "badge badge-hard"

        let optionsDoc =
            div [attr.``class`` "options-grid"] (
                q.Options |> List.mapi (fun i optText ->
                    let btnClass =
                        match lastResult with
                        | Some res ->
                            if i = res.CorrectIndex then "btn-option correct"
                            else "btn-option dimmed"
                        | None -> "btn-option"
                    button
                        [ attr.``class`` btnClass
                          on.click (fun _ _ ->
                              if not answered then
                                  stopTimer ()
                                  let timeLeft = timerSeconds.Value
                                  async {
                                      let! res = Server.SubmitAnswer q.Id i timeLeft
                                      let newScore   = score   + res.PointsEarned + res.TimeBonus
                                      let newCorrect = correct + (if res.IsCorrect then 1 else 0)
                                      quizState.Value <- ShowingAnswer(questions, idx, newScore, newCorrect, res)
                                  } |> Async.StartImmediate) ]
                        [ span [attr.``class`` "option-letter"] [text (sprintf "%c." (char (65+i)))]
                          span [] [text optText] ]
                    :> Doc
                )
            )

        let feedbackDoc : Doc =
            match lastResult with
            | None -> Doc.Empty
            | Some res ->
                let cls = if res.IsCorrect then "feedback correct-feedback" else "feedback wrong-feedback"
                let msg =
                    if res.IsCorrect then
                        sprintf "Correct! +%d pts%s" res.PointsEarned
                            (if res.TimeBonus > 0 then sprintf " + %d time bonus" res.TimeBonus else "")
                    else
                        sprintf "Wrong. Correct answer: %s" (q.Options).[res.CorrectIndex]
                div [attr.``class`` cls] [text msg]

        let nextDoc : Doc =
            match lastResult with
            | None -> Doc.Empty
            | Some _ ->
                let isLast = idx + 1 >= total
                button
                    [ attr.``class`` "btn btn-next"
                      on.click (fun _ _ ->
                          stopTimer ()
                          if isLast then
                              let timeTaken = int (DateTime.Now - quizStartTime).TotalSeconds
                              let cfg       = buildConfig ()
                              let diffLabel =
                                  match cfg.Difficulty with
                                  | None   -> "Mixed"
                                  | Some d -> d.Label
                              let result = {
                                  PlayerName     = playerName.Value.Trim()
                                  Score          = score
                                  TotalQuestions = total
                                  CorrectAnswers = correct
                                  TimeTaken      = timeTaken
                                  Difficulty     = diffLabel
                                  CompletedAt    = DateTime.Now }
                              async {
                                  do! Server.SaveResult result
                                  quizState.Value <- Finished result
                              } |> Async.StartImmediate
                          else
                              quizState.Value <- InQuestion(questions, idx+1, score, correct)) ]
                    [text (if isLast then "See Results" else "Next Question")]

        div [attr.``class`` "screen question-screen"] [
            progressBar
            timerDoc
            div [attr.``class`` "question-meta"] [
                span [attr.``class`` diffClass]         [text q.Difficulty.Label]
                span [attr.``class`` "badge badge-cat"] [text q.Category]
            ]
            p   [attr.``class`` "question-text"] [text q.Text]
            feedbackDoc
            optionsDoc
            nextDoc
        ]

    let resultScreen (result: QuizResult) (leaderboard: LeaderboardEntry list) : Doc =
        let pct   = QuizResult.percentage result
        let grade = QuizResult.grade result
        let leaderboardDoc : Doc =
            if leaderboard.IsEmpty then
                p [attr.``class`` "empty-lb"] [text "No scores yet — you are first!"]
            else
                Doc.Element "table" [attr.``class`` "lb-table"] [
                    Doc.Element "thead" [] [
                        Doc.Element "tr" [] (
                            ["#"; "Player"; "Score"; "Grade"; "Mode"]
                            |> List.map (fun h ->
                                Doc.Element "th" [] [Doc.TextNode h] :> Doc))
                    ]
                    Doc.Element "tbody" [] (
                        leaderboard |> List.map (fun e ->
                            let rankCls =
                                match e.Rank with
                                | 1 -> "rank-gold" | 2 -> "rank-silver" | 3 -> "rank-bronze" | _ -> ""
                            Doc.Element "tr" [] [
                                Doc.Element "td" [attr.``class`` rankCls] [Doc.TextNode (string e.Rank)]    :> Doc
                                Doc.Element "td" []                       [Doc.TextNode e.PlayerName]        :> Doc
                                Doc.Element "td" []                       [Doc.TextNode (string e.Score)]    :> Doc
                                Doc.Element "td" []                       [Doc.TextNode e.Grade]             :> Doc
                                Doc.Element "td" []                       [Doc.TextNode e.Difficulty]        :> Doc
                            ] :> Doc)
                    )
                ]

        div [attr.``class`` "screen result-screen"] [
            p   [attr.``class`` "result-score"] [text (sprintf "%d pts" result.Score)]
            p   [attr.``class`` "result-grade"] [text (sprintf "Grade %s — %d%% correct" grade pct)]
            div [attr.``class`` "result-grid"] [
                div [attr.``class`` "stat-card"] [
                    span [attr.``class`` "stat-val"] [text (string result.CorrectAnswers)]
                    span [attr.``class`` "stat-lbl"] [text "Correct"]
                ]
                div [attr.``class`` "stat-card"] [
                    span [attr.``class`` "stat-val"] [text (string (result.TotalQuestions - result.CorrectAnswers))]
                    span [attr.``class`` "stat-lbl"] [text "Wrong"]
                ]
                div [attr.``class`` "stat-card"] [
                    span [attr.``class`` "stat-val"] [text (sprintf "%ds" result.TimeTaken)]
                    span [attr.``class`` "stat-lbl"] [text "Time"]
                ]
                div [attr.``class`` "stat-card"] [
                    span [attr.``class`` "stat-val"] [text result.Difficulty]
                    span [attr.``class`` "stat-lbl"] [text "Mode"]
                ]
            ]
            button
                [ attr.``class`` "btn btn-start"
                  on.click (fun _ _ ->
                      playerName.Value       <- ""
                      difficultyStr.Value    <- ""
                      categoryStr.Value      <- ""
                      questionCountStr.Value <- "10"
                      startError.Value       <- ""
                      timerSeconds.Value     <- 0
                      quizState.Value        <- Welcome) ]
                [text "Play Again"]
            h3 [attr.``class`` "lb-title"] [text "Leaderboard — Top 10"]
            leaderboardDoc
        ]

    let renderApp () : Doc =
        quizState.View |> Doc.BindView (fun state ->
            match state with
            | Welcome ->
                let cats = Var.Create ([] : string list)
                async {
                    let! cs = Server.GetCategories ()
                    cats.Value <- cs
                } |> Async.Start
                cats.View |> Doc.BindView (fun cs -> welcomeScreen cs)
            | Loading ->
                loadingScreen ()
            | InQuestion(questions, idx, score, correct) ->
                questionScreen questions idx score correct None
            | ShowingAnswer(questions, idx, score, correct, res) ->
                questionScreen questions idx score correct (Some res)
            | Finished result ->
                let lb = Var.Create ([] : LeaderboardEntry list)
                async {
                    let! es = Server.GetLeaderboard ()
                    lb.Value <- es
                } |> Async.Start
                lb.View |> Doc.BindView (fun es -> resultScreen result es)
        )

    [<SPAEntryPoint>]
    let Main () =
        renderApp () |> Doc.RunById "main"