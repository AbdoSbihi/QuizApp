export function ValueSome<T0>():FSharpValueOption<T0>
export function ValueSome<T0>(Item:T0):FSharpValueOption<T0>
export function get_Value<T0>(this_1:FSharpValueOption<T0>):T0
export interface ValueNone<T0>{
  $:0;
}
export interface ValueSome<T0>{
  $:1;
  $0:T0;
}
export type FSharpValueOption<T0> = (ValueNone<T0> | ValueSome<T0>)
