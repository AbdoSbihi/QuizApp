export function isInRef<T0>(x):x is InRef<T0>
export default interface InRef<T0>{
  get():T0
}
