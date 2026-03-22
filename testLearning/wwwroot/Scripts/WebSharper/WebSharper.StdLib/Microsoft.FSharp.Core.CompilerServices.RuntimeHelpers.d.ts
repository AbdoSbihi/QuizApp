import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import IDisposable from "./System.IDisposable"
export function createEvent<T0, T1>(add:((a?:T0) => void), remove:((a?:T0) => void), create:((a:((a:any) => ((a?:T1) => void))) => T0))
export function enumWhile<T0>(f:(() => boolean), s:IEnumerable<T0>):IEnumerable<T0>
export function enumFunc<T0, T1>(c:(() => T0), n:((a?:T0) => boolean), v:((a?:T0) => T1)):IEnumerable<T1>
export function enumTryWith<T0>(s:IEnumerable<T0>, f:((a:Error) => number), h:((a:Error) => IEnumerable<T0>)):IEnumerable<T0>
export function enumUsing<T0, T1, T2>(x:T0, f:((a?:T0) => T1)):IEnumerable<T2>
export function enumFinally<T0>(s:IEnumerable<T0>, f:(() => void)):IEnumerable<T0>
