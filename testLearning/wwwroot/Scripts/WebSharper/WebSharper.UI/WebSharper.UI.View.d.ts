import { ViewBuilder } from "./WebSharper.UI.ViewBuilder"
import { View_T } from "./WebSharper.UI.View`1"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Var from "./WebSharper.UI.Var`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Snap from "./WebSharper.UI.Snap`1"
export function get_Do():ViewBuilder
export function Apply<T0, T1>(fn:View_T<((a?:T0) => T1)>, view:View_T<T0>):View_T<T1>
export function AsyncAwait<T0>(filter:((a?:T0) => boolean), view:View_T<T0>):((a:AsyncBody<T0>) => void)
export function RemovableSink<T0>(act:((a?:T0) => void), a:View_T<T0>):(() => void)
export function Sink<T0>(act:((a?:T0) => void), a:View_T<T0>):void
export function TryFinally<T0>(f:(() => void), a:View_T<T0>):View_T<T0>
export function TryWith<T0>(f:((a:Error) => View_T<T0>), a:View_T<T0>):View_T<T0>
export function ConstAsync<T0>(a:((a:AsyncBody<T0>) => void)):View_T<T0>
export function Const<T0>():View_T<T0>
export function Const<T0>(x?:T0):View_T<T0>
export function Sequence<T0>(views:IEnumerable<View_T<T0>>):View_T<IEnumerable<T0>>
export function UpdateWhile<T0>(def:T0, v1:View_T<boolean>, v2:View_T<T0>):View_T<T0>
export function BindInner<T0, T1>(fn:((a?:T0) => View_T<T1>), view:View_T<T0>):View_T<T1>
export function JoinInner<T0>(a:View_T<View_T<T0>>):View_T<T0>
export function Bind<T0, T1>(fn:((a?:T0) => View_T<T1>), view:View_T<T0>):View_T<T1>
export function Join<T0>(a:View_T<View_T<T0>>):View_T<T0>
export function MapSeqCachedView<T0, T1, T2>(conv:((a:View_T<T0>) => T1), view:View_T<T2>):View_T<IEnumerable<T1>>
export function MapSeqCachedViewBy<T0, T1, T2, T3>(key:((a?:T0) => T2), conv:((a:T2, b:View_T<T0>) => T1), view:View_T<T3>):View_T<IEnumerable<T1>>
export function ConvertSeqNode<T0, T1>(conv:((a:View_T<T0>) => T1), value:T0):{e:T1,r:Var<T0>,w:View_T<T0>}
export function MapSeqCached<T0, T1, T2>(conv:((a?:T0) => T1), view:View_T<T2>):View_T<IEnumerable<T1>>
export function MapSeqCachedBy<T0, T1, T2, T3>(key:((a?:T0) => T2), conv:((a?:T0) => T1), view:View_T<T3>):View_T<IEnumerable<T1>>
export function SnapshotOn<T0, T1>(def:T0, a:View_T<T1>, a_1:View_T<T0>):View_T<T0>
export function GetAsync<T0>(v:View_T<T0>):((a:AsyncBody<T0>) => void)
export function WithInitOption<T0>(a:View_T<T0>):View_T<FSharpOption<T0>>
export function WithInit<T0>(x:T0, a:View_T<T0>):View_T<T0>
export function Get<T0>(f:((a?:T0) => void), a:View_T<T0>):void
export function TryGet<T0>(a:View_T<T0>):FSharpOption<T0>
export function MapAsync2<T0, T1, T2>(fn:((a:T0, b:T1) => ((a:AsyncBody<T2>) => void)), v1:View_T<T0>, v2:View_T<T1>):View_T<T2>
export function MapAsync<T0, T1>(fn:((a?:T0) => ((a:AsyncBody<T1>) => void)), a:View_T<T0>):View_T<T1>
export function Map3<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), a:View_T<T0>, a_1:View_T<T1>, a_2:View_T<T2>):View_T<T3>
export function Map2Unit(a:View_T<void>, a_1:View_T<void>):View_T<void>
export function Map2<T0, T1, T2>(fn:((a:T0, b:T1) => T2), a:View_T<T0>, a_1:View_T<T1>):View_T<T2>
export function MapCached<T0, T1>(fn:((a?:T0) => T1), v:View_T<T0>):View_T<T1>
export function MapCachedBy<T0, T1>(eq:((a:T0, b:T0) => boolean), fn:((a?:T0) => T1), a:View_T<T0>):View_T<T1>
export function Map<T0, T1>(fn:((a?:T0) => T1), a:View_T<T0>):View_T<T1>
export function CreateLazy<T0>(observe:(() => Snap<T0>)):View_T<T0>
