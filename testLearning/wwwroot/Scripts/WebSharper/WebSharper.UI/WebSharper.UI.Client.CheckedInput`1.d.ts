export interface Valid<T0>{
  $:0;
  $0:T0;
  $1:string;
}
export interface Invalid<T0>{
  $:1;
  $0:string;
}
export interface Blank<T0>{
  $:2;
  $0:string;
}
export type CheckedInput_T<T0> = (CheckedInput<T0> & (Valid<T0> | Invalid<T0> | Blank<T0>))
export default class CheckedInput<T0>{
  static Valid<T0>(value:T0, inputText:string):CheckedInput_T<T0>
  static Invalid<T0>(inputText:string):CheckedInput_T<T0>
  static Blank<T0>(inputText:string):CheckedInput_T<T0>
  static Make<T0>():CheckedInput_T<T0>
  static Make<T0>(x?:T0):CheckedInput_T<T0>
  get Input():string
  $;
  $0;
  $1;
}
