import Var from "./WebSharper.UI.Var`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
export function applyTypedVarHole<T0>(bind:((a:Var<T0>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<T0>) => void)), View_T<FSharpOption<T0>>]), v:Var<T0>, el:Element):void
