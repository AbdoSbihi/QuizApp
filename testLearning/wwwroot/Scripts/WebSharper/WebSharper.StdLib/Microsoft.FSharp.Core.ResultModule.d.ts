import { FSharpResult } from "./Microsoft.FSharp.Core.FSharpResult`2"
import { FSharpValueOption } from "./Microsoft.FSharp.Core.FSharpValueOption`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
export function ToValueOption<T0, T1>(result:FSharpResult<T0, T1>):FSharpValueOption<T0>
export function ToOption<T0, T1>(result:FSharpResult<T0, T1>):FSharpOption<T0>
export function ToSeq<T0, T1>(result:FSharpResult<T0, T1>):FSharpList_T<T0>
export function ToList<T0, T1>(result:FSharpResult<T0, T1>):FSharpList_T<T0>
export function ToArray<T0, T1>(result:FSharpResult<T0, T1>):(T0)[]
export function Iterate<T0, T1>(action:((a?:T0) => void), result:FSharpResult<T0, T1>):void
export function Contains<T0, T1>(value:T0, result:FSharpResult<T0, T1>):boolean
export function ForAll<T0, T1>(predicate:((a?:T0) => boolean), result:FSharpResult<T0, T1>):boolean
export function Exists<T0, T1>(predicate:((a?:T0) => boolean), result:FSharpResult<T0, T1>):boolean
export function FoldBack<T0, T1, T2>(folder:((a:T0, b:T2) => T2), result:FSharpResult<T0, T1>, state:T2):T2
export function Fold<T0, T1, T2>(folder:((a:T2, b:T0) => T2), state:T2, result:FSharpResult<T0, T1>):T2
export function Count<T0, T1>(result:FSharpResult<T0, T1>):number
export function DefaultWith<T0, T1>(defThunk:((a?:T0) => T1), result:FSharpResult<T1, T0>):T1
export function DefaultValue<T0, T1>(value:T0, result:FSharpResult<T0, T1>):T0
export function IsError<T0, T1>(result:FSharpResult<T0, T1>):boolean
export function IsOk<T0, T1>(result:FSharpResult<T0, T1>):boolean
export function MapError<T0, T1, T2>(f:((a?:T0) => T1), r:FSharpResult<T2, T0>):FSharpResult<T2, T1>
export function Map<T0, T1, T2>(f:((a?:T0) => T1), r:FSharpResult<T0, T2>):FSharpResult<T1, T2>
export function Bind<T0, T1, T2>(f:((a?:T0) => FSharpResult<T1, T2>), r:FSharpResult<T0, T2>):FSharpResult<T1, T2>
