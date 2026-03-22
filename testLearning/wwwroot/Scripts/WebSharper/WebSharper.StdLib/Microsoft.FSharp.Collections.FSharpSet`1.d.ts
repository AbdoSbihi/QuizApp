import Tree from "./WebSharper.Collections.BalancedTree.Tree`1"
import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Object from "./System.Object"
import ICollection from "./System.Collections.Generic.ICollection`1"
import IComparable from "./System.IComparable"
export default class FSharpSet<T0>extends Object implements ICollection<T0>, IComparable {
  tree:Tree<T0>;
  GetEnumerator():IEnumerator<T0>
  get Count():number
  Equals(other):boolean
  GetHashCode():number
  static op_Subtraction<T0>(x:FSharpSet<T0>, y:FSharpSet<T0>):FSharpSet<T0>
  static op_Addition<T0>(x:FSharpSet<T0>, y:FSharpSet<T0>):FSharpSet<T0>
  Remove_1():FSharpSet<T0>
  Remove_1(v?:T0):FSharpSet<T0>
  get MinimumElement():T0
  get MaximumElement():T0
  IsSupersetOf(s:FSharpSet<T0>):boolean
  IsSubsetOf(s:FSharpSet<T0>):boolean
  IsProperSupersetOf(s:FSharpSet<T0>):boolean
  IsProperSubsetOf(s:FSharpSet<T0>):boolean
  get Tree():Tree<T0>
  get IsEmpty():boolean
  Contains():boolean
  Contains(v?:T0):boolean
  Add_1():FSharpSet<T0>
  Add_1(x?:T0):FSharpSet<T0>
  sub(x:FSharpSet<T0>):FSharpSet<T0>
  add(x:FSharpSet<T0>):FSharpSet<T0>
  Remove():boolean
  Remove(p?:T0):boolean
  CopyTo(arr:(T0)[], index:number):void
  Clear():void
  Add():void
  Add(p?:T0):void
  get IsReadOnly():boolean
  CompareTo0(other):number
  constructor(i:"New_1", s:IEnumerable<T0>)
  constructor(i:"New")
  constructor(i:"New_2", tree:Tree<T0>)
}
