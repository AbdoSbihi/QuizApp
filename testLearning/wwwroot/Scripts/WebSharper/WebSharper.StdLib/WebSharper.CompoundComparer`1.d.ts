import IComparer from "./System.Collections.Generic.IComparer`1"
import Object from "./System.Object"
export default class CompoundComparer<T0>extends Object implements IComparer<T0> {
  primary:IComparer<T0>;
  secondary:IComparer<T0>;
  Compare(x:T0, y:T0):number
  constructor(primary:IComparer<T0>, secondary:IComparer<T0>)
}
