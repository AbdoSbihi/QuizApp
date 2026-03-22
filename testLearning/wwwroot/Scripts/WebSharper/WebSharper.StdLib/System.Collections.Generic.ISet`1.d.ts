import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import ICollection from "./System.Collections.Generic.ICollection`1"
export function isISet<T0>(x):x is ISet<T0>
export default interface ISet<T0>extends ICollection<T0> {
  SAdd(a:T0):boolean
  ExceptWith(a:IEnumerable<T0>):void
  IntersectWith(a:IEnumerable<T0>):void
  IsProperSubsetOf(a:IEnumerable<T0>):boolean
  IsProperSupersetOf(a:IEnumerable<T0>):boolean
  IsSubsetOf(a:IEnumerable<T0>):boolean
  IsSupersetOf(a:IEnumerable<T0>):boolean
  Overlaps(a:IEnumerable<T0>):boolean
  SetEquals(a:IEnumerable<T0>):boolean
  SymmetricExceptWith(a:IEnumerable<T0>):void
  UnionWith(a:IEnumerable<T0>):void
}
