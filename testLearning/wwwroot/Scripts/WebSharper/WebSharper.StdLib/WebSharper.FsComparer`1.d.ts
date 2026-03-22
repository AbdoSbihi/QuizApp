import Object from "./System.Object"
import IComparer from "./System.Collections.Generic.IComparer`1"
export default class FsComparer<T0>extends Object implements IComparer<T0> {
  Compare(x:T0, y:T0):number
}
