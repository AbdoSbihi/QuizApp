import IObserver from "./System.IObserver`1"
import IDisposable from "./System.IDisposable"
export function isIObservable<T0>(x):x is IObservable<T0>
export default interface IObservable<T0>{
  Subscribe(a:IObserver<T0>):IDisposable
}
