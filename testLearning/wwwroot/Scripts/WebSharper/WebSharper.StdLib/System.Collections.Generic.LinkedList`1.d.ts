import LinkedListNode from "./System.Collections.Generic.LinkedListNode`1"
import Enumerator from "./System.Collections.Generic.LinkedList`1.Enumerator"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Object from "./System.Object"
import ICollection from "./System.Collections.Generic.ICollection`1"
export default class LinkedList<T0>extends Object implements ICollection<T0> {
  init:number;
  c:number;
  n:LinkedListNode<T0>;
  p:LinkedListNode<T0>;
  GetEnumerator():Enumerator<T0>
  CopyTo(arr:(T0)[], index:number):void
  RemoveLast():void
  RemoveFirst():void
  Remove():boolean
  Remove(value?:T0):boolean
  Remove_1(node:LinkedListNode<T0>):void
  FindLast():LinkedListNode<T0>
  FindLast(value?:T0):LinkedListNode<T0>
  Find():LinkedListNode<T0>
  Find(value?:T0):LinkedListNode<T0>
  Contains():boolean
  Contains(value?:T0):boolean
  Clear():void
  AddLast():LinkedListNode<T0>
  AddLast(value?:T0):LinkedListNode<T0>
  AddFirst():LinkedListNode<T0>
  AddFirst(value?:T0):LinkedListNode<T0>
  AddBefore(before:LinkedListNode<T0>, value:T0):LinkedListNode<T0>
  AddAfter(after:LinkedListNode<T0>, value:T0):LinkedListNode<T0>
  Add():void
  Add(x?:T0):void
  get Count():number
  get IsReadOnly():boolean
  constructor(i:"New")
  constructor(i:"New_1", coll:IEnumerable<T0>)
}
