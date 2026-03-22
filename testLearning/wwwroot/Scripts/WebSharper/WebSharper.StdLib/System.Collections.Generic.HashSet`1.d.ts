import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import IEqualityComparer from "./System.Collections.Generic.IEqualityComparer`1"
import Object from "./System.Object"
import ICollection from "./System.Collections.Generic.ICollection`1"
export default class HashSet<T0>extends Object implements ICollection<T0> {
  equals:((a:T0, b:T0) => boolean);
  hash:((a?:T0) => number);
  data:((T0)[])[];
  count:number;
  GetEnumerator()
  get Count():number
  CopyTo(arr:(T0)[], index:number):void
  SAdd():boolean
  SAdd(item?:T0):boolean
  add():boolean
  add(item?:T0):boolean
  arrRemove(item:T0, arr:(T0)[]):boolean
  arrContains(item:T0, arr:(T0)[]):boolean
  UnionWith(xs:IEnumerable<T0>):void
  SymmetricExceptWith(xs:IEnumerable<T0>):void
  SetEquals(xs:IEnumerable<T0>):boolean
  RemoveWhere(cond:((a:T0) => boolean)):number
  Remove():boolean
  Remove(item?:T0):boolean
  Overlaps(xs:IEnumerable<T0>):boolean
  IsSupersetOf(xs:IEnumerable<T0>):boolean
  IsSubsetOf(xs:IEnumerable<T0>):boolean
  IsProperSupersetOf(xs:IEnumerable<T0>):boolean
  IsProperSubsetOf(xs:IEnumerable<T0>):boolean
  IntersectWith(xs:IEnumerable<T0>):void
  ExceptWith(xs:IEnumerable<T0>):void
  CopyTo_1(arr:(T0)[], index:number, count:number):void
  Contains():boolean
  Contains(item?:T0):boolean
  Clear():void
  Add():void
  Add(x?:T0):void
  get IsReadOnly():boolean
  constructor(i:"New_3")
  constructor(i:"New_2", init:IEnumerable<T0>)
  constructor(i:"New_1", comparer:IEqualityComparer<T0>)
  constructor(i:"New", init:IEnumerable<T0>, comparer:IEqualityComparer<T0>)
  constructor(i:"New_4", init:IEnumerable<T0>, equals:((a:T0, b:T0) => boolean), hash:((a?:T0) => number))
}
