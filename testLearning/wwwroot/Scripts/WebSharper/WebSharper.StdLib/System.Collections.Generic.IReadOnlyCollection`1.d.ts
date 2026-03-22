import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function isIReadOnlyCollection<T0, T1>(x):x is IReadOnlyCollection<T0>
export default interface IReadOnlyCollection<T0>extends IEnumerable<T0> { }
