export function isIEqualityComparer(x):x is IEqualityComparer
export default interface IEqualityComparer {
  CEquals0(a, b):boolean
  CGetHashCode0(a):number
}
