import LinkedListNode from "./System.Collections.Generic.LinkedListNode`1"
import Object from "./System.Object"
import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import IEnumerator_1 from "./System.Collections.IEnumerator"
import IDisposable from "./System.IDisposable"
export default class Enumerator<T0>extends Object implements IEnumerator<T0>, IEnumerator_1, IDisposable {
  c:LinkedListNode<T0>;
  Dispose():void
  MoveNext():boolean
  get Current0()
  get Current():T0
  constructor(l:LinkedListNode<T0>)
}
