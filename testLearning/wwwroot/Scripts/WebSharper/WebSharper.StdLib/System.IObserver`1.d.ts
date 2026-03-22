export function isIObserver<T0>(x):x is IObserver<T0>
export default interface IObserver<T0>{
  OnCompleted():void
  OnError(a:Error):void
  OnNext(a:T0):void
}
