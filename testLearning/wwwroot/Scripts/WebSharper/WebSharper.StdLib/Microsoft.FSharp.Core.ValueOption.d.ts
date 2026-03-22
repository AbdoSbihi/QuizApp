import { FSharpValueOption } from "./Microsoft.FSharp.Core.FSharpValueOption`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
export function filter<T0>(f:((a?:T0) => boolean), o:FSharpValueOption<T0>):FSharpValueOption<T0>
export function fold<T0, T1>(f:((a:T1, b:T0) => T1), s:T1, x:FSharpValueOption<T0>):T1
export function foldBack<T0, T1>(f:((a:T0, b:T1) => T1), x:FSharpValueOption<T0>, s:T1):T1
export function ofNullable<T0>(o:T0):FSharpValueOption<T0>
export function ofObj<T0>():FSharpValueOption<T0>
export function ofObj<T0>(o?:T0):FSharpValueOption<T0>
export function toArray<T0>(x:FSharpValueOption<T0>):(T0)[]
export function toList<T0>(x:FSharpValueOption<T0>):FSharpList_T<T0>
export function toNullable<T0>(o:FSharpValueOption<T0>):T0
export function toObj<T0>(o:FSharpValueOption<T0>):T0
