namespace QuizApp

open System
open System.Collections.Concurrent
open WebSharper

// ── QUESTION BANK ─────
module private QuestionBank =
    let private all : Question list = [

        // Science
        { Id=1;  Text="What is the chemical symbol for gold?";          Options=["Au";"Ag";"Fe";"Pb"];                                                                   CorrectIndex=0; Difficulty=Easy;   Category="Science" }
        { Id=2;  Text="How many bones are in the adult human body?";    Options=["196";"206";"216";"226"];                                                               CorrectIndex=1; Difficulty=Medium; Category="Science" }
        { Id=3;  Text="Which particle has a negative electric charge?"; Options=["Proton";"Neutron";"Electron";"Positron"];                                              CorrectIndex=2; Difficulty=Easy;   Category="Science" }
        { Id=4;  Text="Approximate speed of light in a vacuum?";        Options=["300,000 km/s";"150,000 km/s";"450,000 km/s";"200,000 km/s"];                          CorrectIndex=0; Difficulty=Medium; Category="Science" }
        { Id=5;  Text="What is the powerhouse of the cell?";            Options=["Nucleus";"Ribosome";"Mitochondria";"Golgi apparatus"];                                 CorrectIndex=2; Difficulty=Easy;   Category="Science" }
        { Id=6;  Text="Which element has atomic number 79?";            Options=["Silver";"Platinum";"Gold";"Mercury"];                                                  CorrectIndex=2; Difficulty=Hard;   Category="Science" }

        // History
        { Id=7;  Text="In which year did World War II end?";            Options=["1943";"1944";"1945";"1946"];                                                           CorrectIndex=2; Difficulty=Easy;   Category="History" }
        { Id=8;  Text="Who was the first US President?";                Options=["John Adams";"Thomas Jefferson";"George Washington";"Benjamin Franklin"];               CorrectIndex=2; Difficulty=Easy;   Category="History" }
        { Id=9;  Text="The Berlin Wall fell in which year?";            Options=["1987";"1988";"1989";"1990"];                                                           CorrectIndex=2; Difficulty=Medium; Category="History" }
        { Id=10; Text="Which empire was ruled by Genghis Khan?";        Options=["Ottoman";"Mongol";"Roman";"Persian"];                                                  CorrectIndex=1; Difficulty=Medium; Category="History" }
        { Id=11; Text="The Battle of Hastings took place in which year?"; Options=["1066";"1086";"1096";"1106"];                                                         CorrectIndex=0; Difficulty=Hard;   Category="History" }

        // Technology
        { Id=12; Text="What does HTML stand for?";                      Options=["HyperText Markup Language";"High Tech Modern Language";"HyperText Modern Links";"High Transfer Markup Language"]; CorrectIndex=0; Difficulty=Easy;   Category="Technology" }
        { Id=13; Text="Which company created F#?";                      Options=["Google";"Apple";"Microsoft";"Oracle"];                                                 CorrectIndex=2; Difficulty=Medium; Category="Technology" }
        { Id=14; Text="What does CPU stand for?";                       Options=["Central Processing Unit";"Core Processing Unit";"Central Program Utility";"Computer Power Unit"]; CorrectIndex=0; Difficulty=Easy;   Category="Technology" }
        { Id=15; Text="In which year was the first iPhone released?";   Options=["2005";"2006";"2007";"2008"];                                                           CorrectIndex=2; Difficulty=Medium; Category="Technology" }
        { Id=16; Text="What is the time complexity of binary search?";  Options=["O(n)";"O(n squared)";"O(log n)";"O(1)"];                                               CorrectIndex=2; Difficulty=Hard;   Category="Technology" }

        // Geography
        { Id=17; Text="What is the capital of Australia?";              Options=["Sydney";"Melbourne";"Brisbane";"Canberra"];                                            CorrectIndex=3; Difficulty=Medium; Category="Geography" }
        { Id=18; Text="Which is the largest ocean on Earth?";           Options=["Atlantic";"Indian";"Arctic";"Pacific"];                                                CorrectIndex=3; Difficulty=Easy;   Category="Geography" }
        { Id=19; Text="Mount Everest is in which mountain range?";      Options=["Andes";"Alps";"Himalayas";"Rockies"];                                                  CorrectIndex=2; Difficulty=Easy;   Category="Geography" }
        { Id=20; Text="Which country has the most natural lakes?";      Options=["Russia";"Brazil";"USA";"Canada"];                                                      CorrectIndex=3; Difficulty=Hard;   Category="Geography" }
    ]

    let private rng = Random()

    let categories () =
        all |> List.map (fun q -> q.Category) |> List.distinct |> List.sort

    let findById (id: int) =
        all |> List.tryFind (fun q -> q.Id = id)

    let select (cfg: QuizConfig) : Question list =
        all
        |> List.filter (fun q ->
            match cfg.Difficulty with
            | None   -> true
            | Some d -> q.Difficulty = d)
        |> List.filter (fun q ->
            cfg.Category = "" || q.Category = cfg.Category)
        |> List.sortBy (fun _ -> rng.Next())
        |> List.truncate cfg.QuestionCount

module private Leaderboard =

    let private results = ConcurrentBag<QuizResult>()

    let add (r: QuizResult) = results.Add(r)

    let getTop () : LeaderboardEntry list =
        results
        |> Seq.toList
        |> List.sortByDescending (fun r -> r.Score)
        |> List.truncate 10
        |> List.mapi (fun i r ->
            { Rank       = i + 1
              PlayerName = r.PlayerName
              Score      = r.Score
              Correct    = r.CorrectAnswers
              Total      = r.TotalQuestions
              Grade      = QuizResult.grade r
              Difficulty = r.Difficulty
              Date       = r.CompletedAt.ToString("MMM dd, yyyy") })

module Server =

    [<Rpc>]
    let GetCategories () : Async<string list> =
        async { return QuestionBank.categories () }

    [<Rpc>]
    let GetQuestions (cfg: QuizConfig) : Async<Result<ClientQuestion list, string>> =
        async {
            match QuizConfig.validate cfg with
            | Error msg -> return Error msg
            | Ok () ->
                let qs = QuestionBank.select cfg
                if qs.IsEmpty then
                    return Error "No questions found for those settings. Try different options."
                else
                    return Ok (qs |> List.map Question.toClient)
        }

    [<Rpc>]
    let SubmitAnswer (questionId: int) (selectedIndex: int) (timeRemaining: int) : Async<AnswerResult> =
        async {
            match QuestionBank.findById questionId with
            | None ->
                return { IsCorrect=false; CorrectIndex=0; PointsEarned=0; TimeBonus=0 }
            | Some q ->
                let isCorrect = selectedIndex = q.CorrectIndex
                return {
                    IsCorrect    = isCorrect
                    CorrectIndex = q.CorrectIndex
                    PointsEarned = if isCorrect then q.Difficulty.Points else 0
                    TimeBonus    = if isCorrect then max 0 timeRemaining else 0
                }
        }

    [<Rpc>]
    let SaveResult (result: QuizResult) : Async<unit> =
        async { Leaderboard.add result }

    [<Rpc>]
    let GetLeaderboard () : Async<LeaderboardEntry list> =
        async { return Leaderboard.getTop () }