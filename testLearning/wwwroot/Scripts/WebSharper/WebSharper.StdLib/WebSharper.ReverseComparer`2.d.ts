import IComparer from "./System.Collections.Generic.IComparer`1"
import Object from "./System.Object"
export default class ReverseComparer<T0, T1>extends Object implements IComparer<T0> {
  primary:IComparer<T1>;
  projection:((a:T0) => T1);
  Compare(x:T0, y:T0):number
  constructor(primary:IComparer<T1>, projection:((a:T0) => T1))
}
