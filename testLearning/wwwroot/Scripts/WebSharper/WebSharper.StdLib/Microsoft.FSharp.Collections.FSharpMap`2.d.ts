import Pair from "./WebSharper.Collections.Pair`2"
import Tree from "./WebSharper.Collections.BalancedTree.Tree`1"
import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import ICollection from "./System.Collections.Generic.ICollection`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import OutRef from "./WebSharper.OutRef`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Object from "./System.Object"
import IComparable from "./System.IComparable"
export default class FSharpMap<T0, T1>extends Object implements ICollection<{K:T0,V:T1}>, IComparable {
  tree:Tree<Pair<T0, T1>>;
  GetEnumerator():IEnumerator<{K:T0,V:T1}>
  get Count():number
  Equals(other):boolean
  GetHashCode():number
  get Values():ICollection<T1>
  get Keys():ICollection<T0>
  TryFind():FSharpOption<T1>
  TryFind(k?:T0):FSharpOption<T1>
  Remove_1():FSharpMap<T0, T1>
  Remove_1(k?:T0):FSharpMap<T0, T1>
  get_Item():T1
  get_Item(k?:T0):T1
  get IsEmpty():boolean
  TryGetValue(k:T0, r:OutRef<T1>):boolean
  ContainsKey():boolean
  ContainsKey(k?:T0):boolean
  Change(k:T0, f:((a:FSharpOption<T1>) => FSharpOption<T1>)):FSharpMap<T0, T1>
  Add_1(k:T0, v:T1):FSharpMap<T0, T1>
  get Tree():Tree<Pair<T0, T1>>
  Remove():boolean
  Remove(p:{K:T0,V:T1}):boolean
  CopyTo(arr:({K:T0,V:T1})[], index:number):void
  Contains():boolean
  Contains(p:{K:T0,V:T1}):boolean
  Clear():void
  Add():void
  Add(p:{K:T0,V:T1}):void
  get IsReadOnly():boolean
  CompareTo0(other):number
  constructor(i:"New", s:IEnumerable<[T0, T1]>)
  constructor(i:"New_1", tree:Tree<Pair<T0, T1>>)
}
