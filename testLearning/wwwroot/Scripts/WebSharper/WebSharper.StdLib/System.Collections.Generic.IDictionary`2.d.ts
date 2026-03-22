import ByRef from "./WebSharper.ByRef`1"
import ICollection from "./System.Collections.Generic.ICollection`1"
export function isIDictionary<T0, T1>(x):x is IDictionary<T0, T1>
export default interface IDictionary<T0, T1>extends ICollection<{K:T0,V:T1}> {
  DAdd(a:T0, b:T1):void
  ContainsKey(a:T0):boolean
  RemoveKey(a:T0):boolean
  TryGetValue(a:T0, b:ByRef<T1>):boolean
  Item(a:T0):T1
  get Keys():ICollection<T0>
  get Values():ICollection<T1>
  set_Item(a:T0, b:T1):void
}
