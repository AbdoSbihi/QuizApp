import Var_1 from "./WebSharper.UI.Var`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import { View_T } from "./WebSharper.UI.View`1"
import Object from "../WebSharper.StdLib/System.Object"
export default class Var extends Object {
  static MapLens<T0, T1, T2>(getKey:((a?:T0) => T2), f:((a:Var_1<T0>) => T1), var_1:Var_1<FSharpList_T<T0>>):View_T<IEnumerable<T1>>
  static Lens<T0, T1>(var_1:Var_1<T0>, get:((a?:T0) => T1), update:((a:T0, b:T1) => T0)):Var_1<T1>
  static Update<T0>(var_1:Var_1<T0>, fn:((a?:T0) => T0)):void
  static SetFinal<T0>(var_1:Var_1<T0>, value:T0):void
  static Set<T0>(var_1:Var_1<T0>, value:T0):void
  static CreateWaiting<T0>():Var_1<T0>
  static Create():Var_1<void>
  static CreateLogged<T0>(name:string, v:T0):Var_1<T0>
  static Create_1<T0>():Var_1<T0>
  static Create_1<T0>(v?:T0):Var_1<T0>
}
