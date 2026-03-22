import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
import { T } from "./WebSharper.UI.Route.T"
import Var from "./WebSharper.UI.Var`1"
export function DoLink<T0>(map:{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}, va:T0):T
export function DoRoute<T0>(map:{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}, route:T):T0
export function InstallMap<T0>(rt:{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}):Var<T0>
