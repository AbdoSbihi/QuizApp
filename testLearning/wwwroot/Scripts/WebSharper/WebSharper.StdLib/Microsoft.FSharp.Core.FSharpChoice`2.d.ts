export function Choice1Of2<T0, T1>():FSharpChoice<T0, T1>
export function Choice1Of2<T0, T1>(Item:T0):FSharpChoice<T0, T1>
export function Choice2Of2<T0, T1>():FSharpChoice<T0, T1>
export function Choice2Of2<T0, T1>(Item:T1):FSharpChoice<T0, T1>
export interface Choice1Of2<T0, T1>{
  $:0;
  $0:T0;
}
export interface Choice2Of2<T0, T1>{
  $:1;
  $0:T1;
}
export type FSharpChoice<T0, T1> = (Choice1Of2<T0, T1> | Choice2Of2<T0, T1>)
