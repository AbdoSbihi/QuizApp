import Var from "./WebSharper.UI.Var`1"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
export function GetAsync<T0>(v:Var<T0>):((a:AsyncBody<T0>) => void)
