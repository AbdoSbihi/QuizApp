import { AppendList } from "./WebSharper.UI.AppendList`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export function FromArray<T0>(xs:(T0)[]):AppendList<T0>
export function ToArray<T0>(xs:AppendList<T0>):(T0)[]
export function Single<T0>():AppendList<T0>
export function Single<T0>(x?:T0):AppendList<T0>
export function Concat<T0>(xs:IEnumerable<AppendList<T0>>):AppendList<T0>
export function Append<T0>(x:AppendList<T0>, y:AppendList<T0>):AppendList<T0>
export function Empty():AppendList<any>
