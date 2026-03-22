import Dictionary from "./System.Collections.Generic.Dictionary`2"
import Object from "./System.Object"
export default class KeyCollection<T0, T1>extends Object {
  d:Dictionary<T0, T1>;
  GetEnumerator()
  get IsReadOnly():boolean
  get Count():number
  Contains():boolean
  Contains(item?:T0):boolean
  CopyTo(arr:(T0)[], index:number):void
  constructor(d:Dictionary<T0, T1>)
}
