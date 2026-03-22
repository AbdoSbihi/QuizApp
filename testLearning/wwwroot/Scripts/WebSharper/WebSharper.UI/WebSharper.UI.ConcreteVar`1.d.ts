import Snap from "./WebSharper.UI.Snap`1"
import { View_T } from "./WebSharper.UI.View`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Var from "./WebSharper.UI.Var`1"
export default class ConcreteVar<T0>extends Var<T0>{
  isConst:boolean;
  current:T0;
  snap:Snap<T0>;
  view:View_T<T0>;
  id:number;
  get Id():string
  get View():View_T<T0>
  UpdateMaybe(f:((a?:T0) => FSharpOption<T0>)):void
  Update(f:((a?:T0) => T0)):void
  SetFinal():void
  SetFinal(v?:T0):void
  Set():void
  Set(v?:T0):void
  Get():T0
  constructor(isConst:boolean, initSnap:Snap<T0>, initValue:T0)
}
