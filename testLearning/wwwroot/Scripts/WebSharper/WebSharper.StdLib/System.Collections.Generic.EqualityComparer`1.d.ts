import Object from "./System.Object"
import IEqualityComparer from "./System.Collections.IEqualityComparer"
import IEqualityComparer_1 from "./System.Collections.Generic.IEqualityComparer`1"
export default class EqualityComparer<T0>extends Object implements IEqualityComparer, IEqualityComparer_1<T0> {
  CGetHashCode0(x):number
  CEquals0(x, y):boolean
  CGetHashCode():number
  CGetHashCode(x?:T0):number
  CEquals(x:T0, y:T0):boolean
}
