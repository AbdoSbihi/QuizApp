export function Choice1Of3<T0, T1, T2>():FSharpChoice<T0, T1, T2>
export function Choice1Of3<T0, T1, T2>(Item:T0):FSharpChoice<T0, T1, T2>
export function Choice2Of3<T0, T1, T2>():FSharpChoice<T0, T1, T2>
export function Choice2Of3<T0, T1, T2>(Item:T1):FSharpChoice<T0, T1, T2>
export function Choice3Of3<T0, T1, T2>():FSharpChoice<T0, T1, T2>
export function Choice3Of3<T0, T1, T2>(Item:T2):FSharpChoice<T0, T1, T2>
export interface Choice1Of3<T0, T1, T2>{
  $:0;
  $0:T0;
}
export interface Choice2Of3<T0, T1, T2>{
  $:1;
  $0:T1;
}
export interface Choice3Of3<T0, T1, T2>{
  $:2;
  $0:T2;
}
export type FSharpChoice<T0, T1, T2> = (Choice1Of3<T0, T1, T2> | Choice2Of3<T0, T1, T2> | Choice3Of3<T0, T1, T2>)
