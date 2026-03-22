import KeyCollection from "./System.Collections.Generic.Dictionary`2.KeyCollection"
import ValueCollection from "./System.Collections.Generic.Dictionary`2.ValueCollection"
import OutRef from "./WebSharper.OutRef`1"
import IDictionary from "./System.Collections.Generic.IDictionary`2"
import IEqualityComparer from "./System.Collections.Generic.IEqualityComparer`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import Object from "./System.Object"
import IDictionary_1 from "./System.Collections.IDictionary"
import ICollection from "./System.Collections.Generic.ICollection`1"
export default class Dictionary<T0, T1>extends Object implements IDictionary_1, ICollection<{K:T0,V:T1}> {
  equals:((a:T0, b:T0) => boolean);
  hash:((a?:T0) => number);
  count:number;
  data:(({K:T0,V:T1})[])[];
  get Keys():KeyCollection<T0, T1>
  get Values():ValueCollection<T0, T1>
  RemoveKey():boolean
  RemoveKey(k?:T0):boolean
  GetEnumerator()
  set_Item(k:T0, v:T1):void
  Item():T1
  Item(k?:T0):T1
  DAdd(k:T0, v:T1):void
  remove():boolean
  remove(k?:T0):boolean
  add(k:T0, v:T1):void
  set(k:T0, v:T1):void
  get():T1
  get(k?:T0):T1
  TryGetValue(k:T0, res:OutRef<T1>):boolean
  ContainsValue():boolean
  ContainsValue(v?:T1):boolean
  ContainsKey():boolean
  ContainsKey(k?:T0):boolean
  Clear():void
  get IsFixedSize():boolean
  Remove():boolean
  Remove(p:{K:T0,V:T1}):boolean
  CopyTo(arr:({K:T0,V:T1})[], index:number):void
  Contains():boolean
  Contains(p:{K:T0,V:T1}):boolean
  Add():void
  Add(p:{K:T0,V:T1}):void
  get Count():number
  get IsReadOnly():boolean
  constructor(i:"New_4", capacity:number)
  constructor(i:"New_2", capacity:number, comparer:IEqualityComparer<T0>)
  constructor(i:"New_5")
  constructor(i:"New_3", comparer:IEqualityComparer<T0>)
  constructor(i:"New_1", dictionary:IDictionary<T0, T1>)
  constructor(i:"New", dictionary:IDictionary<T0, T1>, comparer:IEqualityComparer<T0>)
  constructor(i:"New_6", init:IEnumerable<{K:T0,V:T1}>, equals:((a:T0, b:T0) => boolean), hash:((a?:T0) => number))
}
