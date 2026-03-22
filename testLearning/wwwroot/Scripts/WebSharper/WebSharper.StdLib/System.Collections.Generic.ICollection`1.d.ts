import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function isICollection<T0, T1>(x):x is ICollection<T0>
export default interface ICollection<T0>extends IEnumerable<T0> { }
