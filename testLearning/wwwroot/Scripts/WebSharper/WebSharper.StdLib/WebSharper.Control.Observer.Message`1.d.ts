export function Error<T0>(Item:Error):Message<T0>
export function Message<T0>():Message<T0>
export function Message<T0>(Item:T0):Message<T0>
export interface Message<T0>{
  $:0;
  $0:T0;
}
export interface Error_1<T0>{
  $:1;
  $0:Error;
}
export interface Completed<T0>{
  $:2;
}
export type Message_1<T0> = (Message<T0> | Error_1<T0> | Completed<T0>)
