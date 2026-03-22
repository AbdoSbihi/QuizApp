import Router from "./WebSharper.Sitelets.Router`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import CorsAllows from "./WebSharper.Sitelets.CorsAllows"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import Router_1 from "./WebSharper.Sitelets.Router"
export function JSClass(ctor:(() => any), fields:([string, boolean, Router<any>])[], endpoints:([FSharpOption<string>, ((string | number))[]])[], subClasses:(Router<any>)[]):Router<any>
export function JSUnion(t, cases:([FSharpOption<any>, ([FSharpOption<string>, string[]])[], (Router<any>)[]])[]):Router<any>
export function isCorrectMethod<T0>(m:FSharpOption<T0>, p:FSharpOption<T0>):boolean
export function JSRecord(t, fields:([string, boolean, Router<any>])[]):Router<any>
export function JSTuple(items:(Router<any>)[]):Router<any>
export function Tuple(readItems:((a:any) => (any)[]), createTuple:((a:(any)[]) => any), items:(Router<any>)[]):Router<any>
export function rCors<T0>(r:Router<T0>):Router<{DefaultAllows:FSharpOption<CorsAllows>,EndPoint:FSharpOption<T0>}>
export function rDateTime():Router<number>
export function rWildcardList<T0>(item:Router<T0>):Router<FSharpList_T<T0>>
export function rWildcardArray<T0>(item:Router<T0>):Router<(T0)[]>
export function rWildcard():Router<string>
export function rBool():Router<boolean>
export function rSingle():Router<number>
export function rUInt64():Router<bigint>
export function rInt64():Router<bigint>
export function rUInt():Router<number>
export function rUInt16():Router<number>
export function rInt16():Router<number>
export function rByte():Router<number>
export function rSByte():Router<number>
export function rDouble():Router<number>
export function rInt():Router<number>
export function rGuid():Router<string>
export function rChar():Router<string>
export function rString():Router<string>
export function rRoot():Router_1
