import IEnumerator_1 from "./System.Collections.IEnumerator"
import IDisposable from "./System.IDisposable"
export function isIEnumerator<T0, T1>(x):x is IEnumerator<T0>
export default interface IEnumerator<T0>extends IEnumerator_1, IDisposable {
  get Current():T0
}
