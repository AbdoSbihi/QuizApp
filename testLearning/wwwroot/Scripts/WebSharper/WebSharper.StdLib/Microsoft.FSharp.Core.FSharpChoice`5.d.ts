export function Choice1Of5<T0, T1, T2, T3, T4>():FSharpChoice<T0, T1, T2, T3, T4>
export function Choice1Of5<T0, T1, T2, T3, T4>(Item:T0):FSharpChoice<T0, T1, T2, T3, T4>
export function Choice2Of5<T0, T1, T2, T3, T4>():FSharpChoice<T0, T1, T2, T3, T4>
export function Choice2Of5<T0, T1, T2, T3, T4>(Item:T1):FSharpChoice<T0, T1, T2, T3, T4>
export function Choice3Of5<T0, T1, T2, T3, T4>():FSharpChoice<T0, T1, T2, T3, T4>
export function Choice3Of5<T0, T1, T2, T3, T4>(Item:T2):FSharpChoice<T0, T1, T2, T3, T4>
export function Choice4Of5<T0, T1, T2, T3, T4>():FSharpChoice<T0, T1, T2, T3, T4>
export function Choice4Of5<T0, T1, T2, T3, T4>(Item:T3):FSharpChoice<T0, T1, T2, T3, T4>
export function Choice5Of5<T0, T1, T2, T3, T4>():FSharpChoice<T0, T1, T2, T3, T4>
export function Choice5Of5<T0, T1, T2, T3, T4>(Item:T4):FSharpChoice<T0, T1, T2, T3, T4>
export interface Choice1Of5<T0, T1, T2, T3, T4>{
  $:0;
  $0:T0;
}
export interface Choice2Of5<T0, T1, T2, T3, T4>{
  $:1;
  $0:T1;
}
export interface Choice3Of5<T0, T1, T2, T3, T4>{
  $:2;
  $0:T2;
}
export interface Choice4Of5<T0, T1, T2, T3, T4>{
  $:3;
  $0:T3;
}
export interface Choice5Of5<T0, T1, T2, T3, T4>{
  $:4;
  $0:T4;
}
export type FSharpChoice<T0, T1, T2, T3, T4> = (Choice1Of5<T0, T1, T2, T3, T4> | Choice2Of5<T0, T1, T2, T3, T4> | Choice3Of5<T0, T1, T2, T3, T4> | Choice4Of5<T0, T1, T2, T3, T4> | Choice5Of5<T0, T1, T2, T3, T4>)
