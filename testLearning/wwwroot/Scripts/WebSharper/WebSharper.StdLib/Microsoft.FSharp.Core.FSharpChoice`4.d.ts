export function Choice1Of4<T0, T1, T2, T3>():FSharpChoice<T0, T1, T2, T3>
export function Choice1Of4<T0, T1, T2, T3>(Item:T0):FSharpChoice<T0, T1, T2, T3>
export function Choice2Of4<T0, T1, T2, T3>():FSharpChoice<T0, T1, T2, T3>
export function Choice2Of4<T0, T1, T2, T3>(Item:T1):FSharpChoice<T0, T1, T2, T3>
export function Choice3Of4<T0, T1, T2, T3>():FSharpChoice<T0, T1, T2, T3>
export function Choice3Of4<T0, T1, T2, T3>(Item:T2):FSharpChoice<T0, T1, T2, T3>
export function Choice4Of4<T0, T1, T2, T3>():FSharpChoice<T0, T1, T2, T3>
export function Choice4Of4<T0, T1, T2, T3>(Item:T3):FSharpChoice<T0, T1, T2, T3>
export interface Choice1Of4<T0, T1, T2, T3>{
  $:0;
  $0:T0;
}
export interface Choice2Of4<T0, T1, T2, T3>{
  $:1;
  $0:T1;
}
export interface Choice3Of4<T0, T1, T2, T3>{
  $:2;
  $0:T2;
}
export interface Choice4Of4<T0, T1, T2, T3>{
  $:3;
  $0:T3;
}
export type FSharpChoice<T0, T1, T2, T3> = (Choice1Of4<T0, T1, T2, T3> | Choice2Of4<T0, T1, T2, T3> | Choice3Of4<T0, T1, T2, T3> | Choice4Of4<T0, T1, T2, T3>)
