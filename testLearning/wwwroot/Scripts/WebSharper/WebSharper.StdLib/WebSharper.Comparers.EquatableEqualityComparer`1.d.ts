import IEquatable from "./System.IEquatable`1"
import EqualityComparer from "./System.Collections.Generic.EqualityComparer`1"
export default class EquatableEqualityComparer<T0>extends EqualityComparer<T0>{
  GetHashCode_1():number
  GetHashCode_1(x?:T0):number
  Equals_1(x:T0, y:T0):boolean
}
