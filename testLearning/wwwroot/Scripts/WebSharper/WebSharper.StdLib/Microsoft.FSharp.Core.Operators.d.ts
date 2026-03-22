import IDisposable from "./System.IDisposable"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function range<T0>(min:T0, max:T0):IEnumerable<T0>
export function step<T0, T1>(min:T0, step_1:T1, max:T0):IEnumerable<T0>
export function bigIntAbs(x:bigint):bigint
export function bigIntSign(x:bigint):number
export function KeyValue<T0, T1>(kvp:{K:T0,V:T1}):[T0, T1]
export function Sign<T0>():number
export function Sign<T0>(x?:T0):number
export function toInt(x:number):number
export function toUInt(x:number):number
export function InvalidArg<T0>(arg:string, msg:string):T0
export function InvalidOp<T0>(msg:string):T0
export function FailWith<T0>(msg:string):T0
