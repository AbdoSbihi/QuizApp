import Router_1 from "./WebSharper.Sitelets.Router"
import Route from "./WebSharper.Sitelets.Route"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export function op_Addition<T0>(a:Router<T0>, b:Router<T0>):Router<T0>
export function op_Division<T0>(before:Router<T0>, after:Router_1):Router<T0>
export function op_Division_1<T0>(before:Router_1, after:Router<T0>):Router<T0>
export function op_Division_2<T0, T1>(before:Router<T0>, after:Router<T1>):Router<[T0, T1]>
export function New<T0>(Parse, Write)
export default interface Router<T0>{
  Parse:((a:Route) => IEnumerable<[Route, T0]>);
  Write:((a?:T0) => FSharpOption<IEnumerable<Route>>);
}
