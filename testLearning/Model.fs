namespace QuizApp

open System
open WebSharper

[<JavaScript>]
type Difficulty =
    | Easy
    | Medium
    | Hard
    member this.Label =
        match this with Easy -> "Easy" | Medium -> "Medium" | Hard -> "Hard"
    member this.Points =
        match this with Easy -> 10 | Medium -> 20 | Hard -> 30
    member this.TimeLimit =
        match this with Easy -> 20 | Medium -> 15 | Hard -> 10
[<JavaScript>]
type Question = {
    Id           : int
    Text         : string
    Options      : string list
    CorrectIndex : int
    Difficulty   : Difficulty
    Category     : string
}

[<JavaScript>]
type ClientQuestion = {
    Id         : int
    Text       : string
    Options    : string list
    Difficulty : Difficulty
    Category   : string
    TimeLimit  : int
}

[<JavaScript>]
module Question =
    let toClient (q: Question) : ClientQuestion =
        { Id        = q.Id
          Text      = q.Text
          Options   = q.Options
          Difficulty= q.Difficulty
          Category  = q.Category
          TimeLimit = q.Difficulty.TimeLimit }

[<JavaScript>]
type AnswerResult = {
    IsCorrect    : bool
    CorrectIndex : int
    PointsEarned : int
    TimeBonus    : int
}

[<JavaScript>]
type QuizConfig = {
    PlayerName    : string
    Difficulty    : Difficulty option
    Category      : string
    QuestionCount : int
}

[<JavaScript>]
module QuizConfig =
    let validate (cfg: QuizConfig) : Result<unit, string> =
        if cfg.PlayerName.Trim() = "" then Error "Please enter your name."
        elif cfg.QuestionCount < 1 || cfg.QuestionCount > 15 then Error "Pick 1–15 questions."
        else Ok ()

[<JavaScript>]
type QuizResult = {
    PlayerName     : string
    Score          : int
    TotalQuestions : int
    CorrectAnswers : int
    TimeTaken      : int
    Difficulty     : string
    CompletedAt    : DateTime
}

[<JavaScript>]
module QuizResult =
    let percentage (r: QuizResult) =
        if r.TotalQuestions = 0 then 0
        else int (float r.CorrectAnswers / float r.TotalQuestions * 100.0)
    let grade (r: QuizResult) =
        match percentage r with
        | p when p >= 90 -> "A+"
        | p when p >= 80 -> "A"
        | p when p >= 70 -> "B"
        | p when p >= 60 -> "C"
        | _              -> "F"

[<JavaScript>]
type LeaderboardEntry = {
    Rank       : int
    PlayerName : string
    Score      : int
    Correct    : int
    Total      : int
    Grade      : string
    Difficulty : string
    Date       : string
}

[<JavaScript>]
type QuizState =
    | Welcome
    | Loading
    | InQuestion     of ClientQuestion list * int * int * int
    | ShowingAnswer  of ClientQuestion list * int * int * int * AnswerResult
    | Finished       of QuizResult