export function Choice1Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice1Of6<T0, T1, T2, T3, T4, T5>(Item:T0):FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice2Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice2Of6<T0, T1, T2, T3, T4, T5>(Item:T1):FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice3Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice3Of6<T0, T1, T2, T3, T4, T5>(Item:T2):FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice4Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice4Of6<T0, T1, T2, T3, T4, T5>(Item:T3):FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice5Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice5Of6<T0, T1, T2, T3, T4, T5>(Item:T4):FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice6Of6<T0, T1, T2, T3, T4, T5>():FSharpChoice<T0, T1, T2, T3, T4, T5>
export function Choice6Of6<T0, T1, T2, T3, T4, T5>(Item:T5):FSharpChoice<T0, T1, T2, T3, T4, T5>
export interface Choice1Of6<T0, T1, T2, T3, T4, T5>{
  $:0;
  $0:T0;
}
export interface Choice2Of6<T0, T1, T2, T3, T4, T5>{
  $:1;
  $0:T1;
}
export interface Choice3Of6<T0, T1, T2, T3, T4, T5>{
  $:2;
  $0:T2;
}
export interface Choice4Of6<T0, T1, T2, T3, T4, T5>{
  $:3;
  $0:T3;
}
export interface Choice5Of6<T0, T1, T2, T3, T4, T5>{
  $:4;
  $0:T4;
}
export interface Choice6Of6<T0, T1, T2, T3, T4, T5>{
  $:5;
  $0:T5;
}
export type FSharpChoice<T0, T1, T2, T3, T4, T5> = (Choice1Of6<T0, T1, T2, T3, T4, T5> | Choice2Of6<T0, T1, T2, T3, T4, T5> | Choice3Of6<T0, T1, T2, T3, T4, T5> | Choice4Of6<T0, T1, T2, T3, T4, T5> | Choice5Of6<T0, T1, T2, T3, T4, T5> | Choice6Of6<T0, T1, T2, T3, T4, T5>)
