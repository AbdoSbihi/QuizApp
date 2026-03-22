import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import AsyncBody from "./WebSharper.Concurrency.AsyncBody`1"
import IDisposable from "./System.IDisposable"
import OperationCanceledException from "./System.OperationCanceledException"
import Task from "./System.Threading.Tasks.Task`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import CT from "./WebSharper.Concurrency.CT"
import Task_1 from "./System.Threading.Tasks.Task"
import { FSharpChoice } from "./Microsoft.FSharp.Core.FSharpChoice`2"
import CancellationTokenSource from "./System.Threading.CancellationTokenSource"
import Scheduler from "./WebSharper.Concurrency.Scheduler"
export function For<T0>(s:IEnumerable<T0>, b:((a?:T0) => ((a:AsyncBody<void>) => void))):((a:AsyncBody<void>) => void)
export function While(g:(() => boolean), c:((a:AsyncBody<void>) => void)):((a:AsyncBody<void>) => void)
export function Using<T0, T1>(x:T0, f:((a?:T0) => ((a:AsyncBody<T1>) => void))):((a:AsyncBody<T1>) => void)
export function TryCancelled<T0>(run:((a:AsyncBody<T0>) => void), comp:((a:OperationCanceledException) => void)):((a:AsyncBody<T0>) => void)
export function OnCancel(action:(() => void)):((a:AsyncBody<IDisposable>) => void)
export function StartChildAsTask<T0>(r:((a:AsyncBody<T0>) => void)):((a:AsyncBody<Task<T0>>) => void)
export function StartChild<T0>(r:((a:AsyncBody<T0>) => void), t:FSharpOption<number>):((a:AsyncBody<((a:AsyncBody<T0>) => void)>) => void)
export function Sequential<T0>(cs:IEnumerable<((a:AsyncBody<T0>) => void)>):((a:AsyncBody<(T0)[]>) => void)
export function ParallelWithMaxDegree<T0>(cs:IEnumerable<((a:AsyncBody<T0>) => void)>, d:number):((a:AsyncBody<(T0)[]>) => void)
export function Parallel<T0>(cs:IEnumerable<((a:AsyncBody<T0>) => void)>):((a:AsyncBody<(T0)[]>) => void)
export function Sleep(ms:number):((a:AsyncBody<void>) => void)
export function StartImmediateAsTask<T0>(c:((a:AsyncBody<T0>) => void), ctOpt:FSharpOption<CT>):Task<T0>
export function StartAsTask<T0>(c:((a:AsyncBody<T0>) => void), ctOpt:FSharpOption<CT>):Task<T0>
export function AwaitTask1<T0>(t:Task<T0>):((a:AsyncBody<T0>) => void)
export function AwaitTask(t:Task_1):((a:AsyncBody<void>) => void)
export function AwaitEvent<T0>(e, ca:FSharpOption<(() => void)>):((a:AsyncBody<T0>) => void)
export function StartImmediate(c:((a:AsyncBody<void>) => void), ctOpt:FSharpOption<CT>):void
export function Start(c:((a:AsyncBody<void>) => void), ctOpt:FSharpOption<CT>):void
export function UncaughtAsyncError(e:Error):void
export function StartWithContinuations<T0>(c:((a:AsyncBody<T0>) => void), s:((a?:T0) => void), f:((a:Error) => void), cc:((a:OperationCanceledException) => void), ctOpt:FSharpOption<CT>):void
export function FromContinuations<T0>(subscribe:((a:((a?:T0) => void), b:((a:Error) => void), c:((a:OperationCanceledException) => void)) => void)):((a:AsyncBody<T0>) => void)
export function GetCT():((a:AsyncBody<CT>) => void)
export function Catch<T0>(r:((a:AsyncBody<T0>) => void)):((a:AsyncBody<FSharpChoice<T0, Error>>) => void)
export function TryWith<T0>(r:((a:AsyncBody<T0>) => void), f:((a:Error) => ((a:AsyncBody<T0>) => void))):((a:AsyncBody<T0>) => void)
export function TryFinally<T0>(run:((a:AsyncBody<T0>) => void), f:(() => void)):((a:AsyncBody<T0>) => void)
export function Delay<T0>(mk:(() => ((a:AsyncBody<T0>) => void))):((a:AsyncBody<T0>) => void)
export function Combine<T0>(a:((a:AsyncBody<void>) => void), b:((a:AsyncBody<T0>) => void)):((a:AsyncBody<T0>) => void)
export function Bind<T0, T1>(r:((a:AsyncBody<T0>) => void), f:((a?:T0) => ((a:AsyncBody<T1>) => void))):((a:AsyncBody<T1>) => void)
export function Zero():((a:AsyncBody<void>) => void)
export function Return<T0>():((a:AsyncBody<T0>) => void)
export function Return<T0>(x?:T0):((a:AsyncBody<T0>) => void)
export function checkCancel<T0>(r:((a:AsyncBody<T0>) => void)):((a:AsyncBody<T0>) => void)
export function cancel<T0>(c:AsyncBody<T0>):void
export function defCTS():[CancellationTokenSource]
export function scheduler():Scheduler
export function Register(ct:CT, callback:(() => void)):IDisposable
export function noneCT():CT
