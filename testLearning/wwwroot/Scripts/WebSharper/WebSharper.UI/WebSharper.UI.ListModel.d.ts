import ListModel from "./WebSharper.UI.ListModel`2"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Storage from "./WebSharper.UI.Storage`1"
export function Wrap<T0, T1, T2>(underlying:ListModel<T0, T2>, extract:((a?:T1) => T2), createItem:((a?:T2) => T1), updateItem:((a:T1, b:T2) => T1)):ListModel<T0, T1>
export function FromSeq<T0>(init:IEnumerable<T0>):ListModel<T0, T0>
export function Create<T0, T1>(key:((a?:T1) => T0), init:IEnumerable<T1>):ListModel<T0, T1>
export function CreateWithStorage<T0, T1>(key:((a?:T1) => T0), storage:Storage<T1>):ListModel<T0, T1>
