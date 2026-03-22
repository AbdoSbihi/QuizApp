import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import Object from "./System.Object"
export default class CancellationTokenSource extends Object {
  init:number;
  c:boolean;
  pending:FSharpOption<any>;
  r:((() => void))[];
  static CreateLinkedTokenSource(t1:{c:boolean,r:(() => void)[]}, t2:{c:boolean,r:(() => void)[]}):CancellationTokenSource
  static CreateLinkedTokenSource_1(tokens:({c:boolean,r:(() => void)[]})[]):CancellationTokenSource
  CancelAfter(delay:number):void
  Cancel(throwOnFirstException:boolean):void
  Cancel_1():void
  constructor()
}
