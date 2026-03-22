export function isIEquatable<T0>(x):x is IEquatable<T0>
export default interface IEquatable<T0>{
  EEquals(a:T0):boolean
}
