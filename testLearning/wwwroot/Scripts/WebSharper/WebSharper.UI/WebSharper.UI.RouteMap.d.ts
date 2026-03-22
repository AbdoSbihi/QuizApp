import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
import Var from "./WebSharper.UI.Var`1"
export function Install<T0>(map:{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}):Var<T0>
export function Create<T0>(ser:((a?:T0) => FSharpList_T<string>), des:((a:FSharpList_T<string>) => T0)):{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}
export function CreateWithQuery<T0>(ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>]), des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0)):{Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0),Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>])}
