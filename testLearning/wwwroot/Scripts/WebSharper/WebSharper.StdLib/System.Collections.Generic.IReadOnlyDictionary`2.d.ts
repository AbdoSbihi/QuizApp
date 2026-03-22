import ByRef from "./WebSharper.ByRef`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import IReadOnlyCollection from "./System.Collections.Generic.IReadOnlyCollection`1"
export function isIReadOnlyDictionary<T0, T1>(x):x is IReadOnlyDictionary<T0, T1>
export default interface IReadOnlyDictionary<T0, T1>extends IReadOnlyCollection<{K:T0,V:T1}> {
  ContainsKey(a:T0):boolean
  TryGetValue(a:T0, b:ByRef<T1>):boolean
  Item(a:T0):T1
  get Keys():IEnumerable<T0>
  get Values():IEnumerable<T1>
}
