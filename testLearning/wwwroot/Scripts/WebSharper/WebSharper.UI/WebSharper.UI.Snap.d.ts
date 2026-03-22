import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import Snap from "./WebSharper.UI.Snap`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import ISnap from "./WebSharper.UI.ISnap"
export function MapAsync<T0, T1>(fn:((a?:T0) => ((a:AsyncBody<T1>) => void)), snap:Snap<T0>):Snap<T1>
export function SnapshotOn<T0, T1>(sn1:Snap<T0>, sn2:Snap<T1>):Snap<T1>
export function Map3<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), sn1:Snap<T0>, sn2:Snap<T1>, sn3:Snap<T2>):Snap<T3>
export function Map3Opt6<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), z:T2, sn1:Snap<T0>, sn2:Snap<T1>):Snap<T3>
export function Map3Opt5<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), y:T1, sn1:Snap<T0>, sn3:Snap<T2>):Snap<T3>
export function Map3Opt4<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), y:T1, z:T2, sn1:Snap<T0>):Snap<T3>
export function Map3Opt3<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), x:T0, sn2:Snap<T1>, sn3:Snap<T2>):Snap<T3>
export function Map3Opt2<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), x:T0, z:T2, sn2:Snap<T1>):Snap<T3>
export function Map3Opt1<T0, T1, T2, T3>(fn:((a:T0, b:T1, c:T2) => T3), x:T0, y:T1, sn3:Snap<T2>):Snap<T3>
export function Map2Unit(sn1:Snap<void>, sn2:Snap<void>):Snap<void>
export function Map2<T0, T1, T2>(fn:((a:T0, b:T1) => T2), sn1:Snap<T0>, sn2:Snap<T1>):Snap<T2>
export function Map2Opt2<T0, T1, T2>(fn:((a:T0, b:T1) => T2), y:T1, sn1:Snap<T0>):Snap<T2>
export function Map2Opt1<T0, T1, T2>(fn:((a:T0, b:T1) => T2), x:T0, sn2:Snap<T1>):Snap<T2>
export function MapCachedBy<T0, T1>(eq:((a:T0, b:T0) => boolean), prev:[FSharpOption<[T0, T1]>], fn:((a?:T0) => T1), sn:Snap<T0>):Snap<T1>
export function Copy<T0>(sn:Snap<T0>):Snap<T0>
export function WithInitOption<T0>(sn:Snap<T0>):Snap<FSharpOption<T0>>
export function WithInit<T0>(x:T0, sn:Snap<T0>):Snap<T0>
export function Map<T0, T1>(fn:((a?:T0) => T1), sn:Snap<T0>):Snap<T1>
export function Sequence<T0>(snaps:IEnumerable<Snap<T0>>):Snap<IEnumerable<T0>>
export function CreateForeverAsync<T0>(a:((a:AsyncBody<T0>) => void)):Snap<T0>
export function JoinInner<T0>(snap:Snap<(() => Snap<T0>)>):Snap<T0>
export function Join<T0>(snap:Snap<(() => Snap<T0>)>):Snap<T0>
export function ValueAndForever<T0>(snap:Snap<T0>):FSharpOption<[T0, boolean]>
export function WhenObsoleteRun<T0>(snap:Snap<T0>, obs:(() => void)):void
export function WhenObsolete<T0>(snap:Snap<T0>, obs:ISnap):void
export function WhenReady<T0>(snap:Snap<T0>, avail:((a?:T0) => void)):void
export function WhenRun<T0>(snap:Snap<T0>, avail:((a?:T0) => void), obs:(() => void)):void
export function When<T0>(snap:Snap<T0>, avail:((a?:T0) => void), obs:ISnap):void
export function EnqueueSafe(q:((ISnap | (() => void)))[], x:(ISnap | (() => void))):void
export function MarkDone<T0, T1>(res:Snap<T0>, sn:Snap<T1>, v:T0):void
export function MarkReady<T0>(sn:Snap<T0>, v:T0):void
export function MarkForever<T0>(sn:Snap<T0>, v:T0):void
export function TryGet<T0>(snap:Snap<T0>):FSharpOption<T0>
