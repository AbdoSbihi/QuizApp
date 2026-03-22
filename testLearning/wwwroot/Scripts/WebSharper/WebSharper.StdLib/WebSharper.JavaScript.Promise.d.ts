import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Task from "./System.Threading.Tasks.Task`1"
import AsyncBody from "./WebSharper.Concurrency.AsyncBody`1"
export function For<T0>(xs:IEnumerable<T0>, f:((a?:T0) => Promise<void>)):Promise<void>
export function AsTask<T0>(p:Promise<T0>):Task<T0>
export function AsAsync<T0>(p:Promise<T0>):((a:AsyncBody<T0>) => void)
export function OfTask<T0>(t:Task<T0>):Promise<T0>
export function OfAsync<T0>(a:((a:AsyncBody<T0>) => void)):Promise<T0>
export function unwrapExn(x):Error
