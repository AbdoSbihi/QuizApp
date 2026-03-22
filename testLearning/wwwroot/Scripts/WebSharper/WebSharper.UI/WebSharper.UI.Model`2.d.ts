import Var from "./WebSharper.UI.Var`1"
import { View_T } from "./WebSharper.UI.View`1"
import Object from "../WebSharper.StdLib/System.Object"
export default class Model<T0, T1>extends Object {
  u0076ar:Var<T1>;
  view:View_T<T0>;
  constructor(i:"New", proj:((a:T1) => T0), init:T1)
  constructor(i:"New_1", var_1:Var<T1>, view:View_T<T0>)
}
