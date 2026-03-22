import Object from "./System.Object"
import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import IDisposable from "./System.IDisposable"
import IEnumerator_1 from "./System.Collections.IEnumerator"
export default class Enumerator<T0>extends Object implements IEnumerator<T0>, IDisposable, IEnumerator_1 {
  arr:(T0)[];
  i:number;
  get Current_1():T0
  MoveNext_1():boolean
  Dispose():void
  get Current():T0
  get Current0()
  MoveNext():boolean
  constructor(arr:(T0)[])
}
