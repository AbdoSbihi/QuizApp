import AsyncBody from "./WebSharper.Concurrency.AsyncBody`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import FSharpEvent from "./Microsoft.FSharp.Control.FSharpEvent`1"
import LinkedList from "./System.Collections.Generic.LinkedList`1"
import Object from "./System.Object"
export default class FSharpMailboxProcessor<T0>extends Object {
  initial:((a:FSharpMailboxProcessor<T0>) => ((a:AsyncBody<void>) => void));
  token:FSharpOption<{c:boolean,r:(() => void)[]}>;
  started:boolean;
  errorEvent:FSharpEvent<Error>;
  mailbox:LinkedList<T0>;
  savedCont:FSharpOption<((a:AsyncBody<void>) => void)>;
  DefaultTimeout:number;
  static Start<T0>(initial:((a:FSharpMailboxProcessor<T0>) => ((a:AsyncBody<void>) => void)), token:FSharpOption<{c:boolean,r:(() => void)[]}>):FSharpMailboxProcessor<T0>
  dequeue():T0
  resume():void
  startAsync(a:((a:AsyncBody<void>) => void)):void
  Scan<T1>(scanner:((a?:T0) => FSharpOption<((a:AsyncBody<T1>) => void)>), timeout:FSharpOption<number>):((a:AsyncBody<T1>) => void)
  TryScan<T1>(scanner:((a?:T0) => FSharpOption<((a:AsyncBody<T1>) => void)>), timeout:FSharpOption<number>):((a:AsyncBody<FSharpOption<T1>>) => void)
  PostAndAsyncReply<T1>(msgf:((a:((a:T1) => void)) => T0), timeout:FSharpOption<number>):((a:AsyncBody<T1>) => void)
  PostAndTryAsyncReply<T1>(msgf:((a:((a:T1) => void)) => T0), timeout:FSharpOption<number>):((a:AsyncBody<FSharpOption<T1>>) => void)
  get CurrentQueueLength():number
  Receive(timeout:FSharpOption<number>):((a:AsyncBody<T0>) => void)
  TryReceive(timeout:FSharpOption<number>):((a:AsyncBody<FSharpOption<T0>>) => void)
  Start():void
  set DefaultTimeout_1(v:number)
  get DefaultTimeout_1():number
  remove_Error(handler:((a:any, b:Error) => void)):void
  add_Error(handler:((a:any, b:Error) => void)):void
  get Error()
  constructor(initial:((a:FSharpMailboxProcessor<T0>) => ((a:AsyncBody<void>) => void)), token:FSharpOption<{c:boolean,r:(() => void)[]}>)
}
