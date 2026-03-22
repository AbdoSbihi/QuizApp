import IComparer from "./System.Collections.Generic.IComparer`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function isIOrderedEnumerable<T0>(x):x is IOrderedEnumerable<T0>
export default interface IOrderedEnumerable<T0>extends IEnumerable<T0> {
  System_Linq_IOrderedEnumerable_1$CreateOrderedEnumerable<T1>(a:((a:T0) => T1), b:IComparer<T1>, c:boolean):IOrderedEnumerable<T0>
}
