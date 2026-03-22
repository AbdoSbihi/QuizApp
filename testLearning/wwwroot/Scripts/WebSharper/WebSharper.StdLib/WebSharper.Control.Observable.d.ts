import IObservable from "./System.IObservable`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function Sequence<T0>(ios:IEnumerable<IObservable<T0>>):IObservable<FSharpList_T<T0>>
export function Aggregate<T0, T1>(io:IObservable<T0>, seed:T1, fold:((a:T1, b:T0) => T1)):IObservable<T1>
export function SelectMany<T0>(io:IObservable<IObservable<T0>>):IObservable<T0>
export function Switch<T0>(io:IObservable<IObservable<T0>>):IObservable<T0>
export function CombineLatest<T0, T1, T2>(io1:IObservable<T0>, io2:IObservable<T1>, f:((a:T0, b:T1) => T2)):IObservable<T2>
export function Range(start:number, count:number):IObservable<number>
export function Concat<T0>(io1:IObservable<T0>, io2:IObservable<T0>):IObservable<T0>
export function Merge<T0>(io1:IObservable<T0>, io2:IObservable<T0>):IObservable<T0>
export function Drop<T0>(count:number, io:IObservable<T0>):IObservable<T0>
export function Choose<T0, T1>(f:((a?:T0) => FSharpOption<T1>), io:IObservable<T0>):IObservable<T1>
export function Filter<T0>(f:((a?:T0) => boolean), io:IObservable<T0>):IObservable<T0>
export function Map<T0, T1>(f:((a?:T0) => T1), io:IObservable<T0>):IObservable<T1>
export function Protect<T0, T1>(f:(() => T0), succeed:((a?:T0) => T1), fail:((a:Error) => T1)):T1
export function Never<T0>():IObservable<T0>
export function Return<T0>():IObservable<T0>
export function Return<T0>(x?:T0):IObservable<T0>
export function Of<T0>(f:((a:((a?:T0) => void)) => (() => void))):IObservable<T0>
