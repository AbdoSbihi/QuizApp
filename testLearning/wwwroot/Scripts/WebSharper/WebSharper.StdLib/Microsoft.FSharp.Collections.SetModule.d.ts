import FSharpSet from "./Microsoft.FSharp.Collections.FSharpSet`1"
export function Partition<T0>(f:((a?:T0) => boolean), a:FSharpSet<T0>):[FSharpSet<T0>, FSharpSet<T0>]
export function FoldBack<T0, T1>(f:((a:T0, b:T1) => T1), a:FSharpSet<T0>, s:T1):T1
export function Filter<T0>(f:((a?:T0) => boolean), s:FSharpSet<T0>):FSharpSet<T0>
