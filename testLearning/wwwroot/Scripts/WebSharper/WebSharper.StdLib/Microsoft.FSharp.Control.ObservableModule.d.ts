import { FSharpChoice } from "./Microsoft.FSharp.Core.FSharpChoice`2"
import IObservable from "./System.IObservable`1"
export function Split<T0, T1, T2>(f:((a?:T0) => FSharpChoice<T1, T2>), e:IObservable<T0>):[IObservable<T1>, IObservable<T2>]
export function Scan<T0, T1>(fold:((a:T0, b:T1) => T0), seed:T0, e:IObservable<T1>):IObservable<T0>
export function Partition<T0>(f:((a?:T0) => boolean), e:IObservable<T0>):[IObservable<T0>, IObservable<T0>]
export function Pairwise<T0>(e:IObservable<T0>):IObservable<[T0, T0]>
