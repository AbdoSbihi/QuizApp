import IObserver from "./System.IObserver`1"
import IDisposable from "./System.IDisposable"
import IDelegateEvent from "./Microsoft.FSharp.Control.IDelegateEvent`1"
import IObservable from "./System.IObservable`1"
export default class Event<T0>implements IDelegateEvent<((a:any, b:T0) => void)>, IObservable<T0>, IDisposable {
  Handlers:(((a:any, b:T0) => void))[];
  Subscribe_1(observer:IObserver<T0>):IDisposable
  RemoveHandler_1(h:((a:any, b:T0) => void)):void
  AddHandler_1(h:((a:any, b:T0) => void)):void
  Trigger():void
  Trigger(x?:T0):void
  RemoveHandler():void
  RemoveHandler(x:((a:any, b:T0) => void)):void
  AddHandler():void
  AddHandler(x:((a:any, b:T0) => void)):void
  Subscribe(observer:IObserver<T0>):IDisposable
  Dispose():void
  static New<T0>(Handlers:(((a:any, b:T0) => void))[]):Event<T0>
}
