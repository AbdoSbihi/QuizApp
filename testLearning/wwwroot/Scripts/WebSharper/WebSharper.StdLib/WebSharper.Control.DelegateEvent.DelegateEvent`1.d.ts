import IDelegateEvent from "./Microsoft.FSharp.Control.IDelegateEvent`1"
import IDisposable from "./System.IDisposable"
export default class DelegateEvent<T0>implements IDelegateEvent<T0>, IDisposable {
  Handlers:(T0)[];
  RemoveHandler_1():void
  RemoveHandler_1(h?:T0):void
  AddHandler_1():void
  AddHandler_1(h?:T0):void
  Trigger(x:(any)[]):void
  RemoveHandler():void
  RemoveHandler(x?:T0):void
  AddHandler():void
  AddHandler(x?:T0):void
  Dispose():void
  static New<T0 extends Function>(Handlers:(T0)[]):DelegateEvent<T0>
}
