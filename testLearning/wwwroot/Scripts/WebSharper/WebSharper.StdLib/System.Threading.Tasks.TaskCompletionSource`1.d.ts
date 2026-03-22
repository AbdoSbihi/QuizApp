import Task from "./System.Threading.Tasks.Task`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Object from "./System.Object"
export default class TaskCompletionSource<T0>extends Object {
  task:Task<T0>;
  TrySetResult():boolean
  TrySetResult(res?:T0):boolean
  TrySetException(exs:IEnumerable<Error>):boolean
  TrySetException_1(exc:Error):boolean
  TrySetCanceled(ct:{c:boolean,r:(() => void)[]}):boolean
  TrySetCanceled_1():boolean
  SetResult():void
  SetResult(res?:T0):void
  SetException(exs:IEnumerable<Error>):void
  SetException_1(exc:Error):void
  SetCanceled():void
  get Task():Task<T0>
  constructor()
}
