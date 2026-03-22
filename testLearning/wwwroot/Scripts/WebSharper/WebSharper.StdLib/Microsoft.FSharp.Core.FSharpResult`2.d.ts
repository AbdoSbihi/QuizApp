export function Error<T0, T1>():FSharpResult<T0, T1>
export function Error<T0, T1>(ErrorValue:T1):FSharpResult<T0, T1>
export function Ok<T0, T1>():FSharpResult<T0, T1>
export function Ok<T0, T1>(ResultValue:T0):FSharpResult<T0, T1>
export interface Ok<T0, T1>{
  $:0;
  $0:T0;
}
export interface Error_1<T0, T1>{
  $:1;
  $0:T1;
}
export type FSharpResult<T0, T1> = (Ok<T0, T1> | Error_1<T0, T1>)
