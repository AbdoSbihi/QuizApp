export function Choice1Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice1Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T0):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice2Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice2Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T1):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice3Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice3Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T2):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice4Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice4Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T3):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice5Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice5Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T4):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice6Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice6Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T5):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice7Of7<T0, T1, T2, T3, T4, T5, T6>():FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export function Choice7Of7<T0, T1, T2, T3, T4, T5, T6>(Item:T6):FSharpChoice<T0, T1, T2, T3, T4, T5, T6>
export interface Choice1Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:0;
  $0:T0;
}
export interface Choice2Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:1;
  $0:T1;
}
export interface Choice3Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:2;
  $0:T2;
}
export interface Choice4Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:3;
  $0:T3;
}
export interface Choice5Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:4;
  $0:T4;
}
export interface Choice6Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:5;
  $0:T5;
}
export interface Choice7Of7<T0, T1, T2, T3, T4, T5, T6>{
  $:6;
  $0:T6;
}
export type FSharpChoice<T0, T1, T2, T3, T4, T5, T6> = (Choice1Of7<T0, T1, T2, T3, T4, T5, T6> | Choice2Of7<T0, T1, T2, T3, T4, T5, T6> | Choice3Of7<T0, T1, T2, T3, T4, T5, T6> | Choice4Of7<T0, T1, T2, T3, T4, T5, T6> | Choice5Of7<T0, T1, T2, T3, T4, T5, T6> | Choice6Of7<T0, T1, T2, T3, T4, T5, T6> | Choice7Of7<T0, T1, T2, T3, T4, T5, T6>)
