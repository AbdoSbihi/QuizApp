import Model from "./WebSharper.UI.Model`2"
export function Update<T0, T1>(update:((a?:T0) => void), m:Model<T1, T0>):void
export function Create<T0, T1>(proj:((a?:T0) => T1), init:T0):Model<T1, T0>
