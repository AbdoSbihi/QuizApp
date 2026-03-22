export function isIEnumerator(x):x is IEnumerator
export default interface IEnumerator {
  MoveNext():boolean
  get Current0()
}
