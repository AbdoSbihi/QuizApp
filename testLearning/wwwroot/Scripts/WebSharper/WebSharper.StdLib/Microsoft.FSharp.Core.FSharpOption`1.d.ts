export function Some<T0>():FSharpOption<T0>
export function Some<T0>(Value:T0):FSharpOption<T0>
export interface Some<T0>{
  $:1;
  $0:T0;
}
export type FSharpOption<T0> = (null | Some<T0>)
