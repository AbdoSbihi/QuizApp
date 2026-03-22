import Object from "./System.Object"
import IComparer from "./System.Collections.IComparer"
import IComparer_1 from "./System.Collections.Generic.IComparer`1"
export default class Comparer<T0>extends Object implements IComparer, IComparer_1<T0> {
  Compare0(x, y):number
  Compare(x:T0, y:T0):number
}
