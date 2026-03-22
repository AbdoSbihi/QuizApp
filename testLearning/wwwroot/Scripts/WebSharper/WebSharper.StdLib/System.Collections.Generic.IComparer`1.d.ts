export function isIComparer<T0>(x):x is IComparer<T0>
export default interface IComparer<T0>{
  Compare(a:T0, b:T0):number
}
