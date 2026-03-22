export function isInterpolation<T0>(x):x is Interpolation<T0>
export default interface Interpolation<T0>{
  Interpolate(a:number, b:T0, c:T0):T0
}
