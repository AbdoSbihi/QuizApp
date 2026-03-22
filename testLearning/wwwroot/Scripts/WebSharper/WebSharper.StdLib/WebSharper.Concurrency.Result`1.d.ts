import OperationCanceledException from "./System.OperationCanceledException"
export function Cc<T0>(Item:OperationCanceledException):Result<T0>
export function No<T0>(Item:Error):Result<T0>
export function Ok<T0>():Result<T0>
export function Ok<T0>(Item:T0):Result<T0>
export interface Ok<T0>{
  $:0;
  $0:T0;
}
export interface No<T0>{
  $:1;
  $0:Error;
}
export interface Cc<T0>{
  $:2;
  $0:OperationCanceledException;
}
export type Result<T0> = (Ok<T0> | No<T0> | Cc<T0>)
