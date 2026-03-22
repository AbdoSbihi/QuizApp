import { FSharpChoice } from "./Microsoft.FSharp.Core.FSharpChoice`2"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function Split<T0, T1, T2, T3>(f:((a?:T0) => FSharpChoice<T1, T2>), e):[any, any]
export function Scan<T0, T1, T2>(fold:((a:T0, b:T1) => T0), seed:T0, e)
export function Partition<T0, T1>(f:((a?:T0) => boolean), e):[any, any]
export function Pairwise<T0, T1>(e)
export function Merge<T0, T1, T2>(e1, e2)
export function Map<T0, T1, T2>(f:((a?:T0) => T1), e)
export function Filter<T0, T1>(ok:((a?:T0) => boolean), e)
export function Choose<T0, T1, T2>(c:((a?:T0) => FSharpOption<T1>), e)
