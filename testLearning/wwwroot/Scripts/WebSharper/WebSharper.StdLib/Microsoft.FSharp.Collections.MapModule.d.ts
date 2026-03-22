import FSharpMap from "./Microsoft.FSharp.Collections.FSharpMap`2"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function MaxKeyValue<T0, T1>(m:FSharpMap<T0, T1>):[T0, T1]
export function MinKeyValue<T0, T1>(m:FSharpMap<T0, T1>):[T0, T1]
export function Map<T0, T1, T2>(f:((a:T0, b:T1) => T2), m:FSharpMap<T0, T1>):FSharpMap<T0, T2>
export function TryPick<T0, T1, T2>(f:((a:T0, b:T1) => FSharpOption<T2>), m:FSharpMap<T0, T1>):FSharpOption<T2>
export function TryFindKey<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):FSharpOption<T0>
export function ToSeq<T0, T1>(m:FSharpMap<T0, T1>):IEnumerable<[T0, T1]>
export function Pick<T0, T1, T2>(f:((a:T0, b:T1) => FSharpOption<T2>), m:FSharpMap<T0, T1>):T2
export function Partition<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):[FSharpMap<T0, T1>, FSharpMap<T0, T1>]
export function OfArray<T0, T1>(a:([T0, T1])[]):FSharpMap<T0, T1>
export function Iterate<T0, T1>(f:((a:T0, b:T1) => void), m:FSharpMap<T0, T1>):void
export function ForAll<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):boolean
export function FoldBack<T0, T1, T2>(f:((a:T0, b:T1, c:T2) => T2), m:FSharpMap<T0, T1>, s:T2):T2
export function Fold<T0, T1, T2>(f:((a:T2, b:T0, c:T1) => T2), s:T2, m:FSharpMap<T0, T1>):T2
export function FindKey<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):T0
export function Filter<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):FSharpMap<T0, T1>
export function Exists<T0, T1>(f:((a:T0, b:T1) => boolean), m:FSharpMap<T0, T1>):boolean
