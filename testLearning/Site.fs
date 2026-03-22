namespace QuizApp

open WebSharper
open WebSharper.Sitelets

[<EndPoint "/">]
type EndPoint = | Home

module Site =
    [<Website>]
    let Main : Sitelet<EndPoint> =
        Sitelet.Empty 