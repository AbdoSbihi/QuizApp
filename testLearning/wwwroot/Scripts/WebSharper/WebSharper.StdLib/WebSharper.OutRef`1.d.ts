export function isOutRef<T0>(x):x is OutRef<T0>
export default interface OutRef<T0>{
  set(a:T0):void
}
