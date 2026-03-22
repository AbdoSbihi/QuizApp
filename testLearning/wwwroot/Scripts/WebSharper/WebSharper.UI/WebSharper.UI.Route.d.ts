import { T } from "./WebSharper.UI.Route.T"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
export function Append(a:T, a_1:T):T
export function FromList(xs:FSharpList_T<string>, q:FSharpMap<string, string>):T
export function ToList(a:T):[FSharpList_T<string>, FSharpMap<string, string>]
export function SameHash(a:string, b:string):boolean
export function MakeHash(a:T):string
export function ParseHash(hash:string):T
export function NoHash(s:string):string
