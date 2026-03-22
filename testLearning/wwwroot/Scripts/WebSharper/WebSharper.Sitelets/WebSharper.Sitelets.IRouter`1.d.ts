import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export function isIRouter<T0>(x):x is IRouter<T0>
export default interface IRouter<T0>{
  Link(a:T0):FSharpOption<any>
  Route(a):FSharpOption<T0>
}
