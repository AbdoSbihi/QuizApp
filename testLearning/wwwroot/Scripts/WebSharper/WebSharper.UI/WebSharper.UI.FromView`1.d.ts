import { View_T } from "./WebSharper.UI.View`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Var from "./WebSharper.UI.Var`1"
export default class FromView<T0>extends Var<T0>{
  set:((a?:T0) => void);
  id:number;
  current:T0;
  view:View_T<T0>;
  get Id():string
  SetFinal():void
  SetFinal(x?:T0):void
  Update(f:((a?:T0) => T0)):void
  UpdateMaybe(f:((a?:T0) => FSharpOption<T0>)):void
  Set():void
  Set(x?:T0):void
  Get():T0
  get View():View_T<T0>
  constructor(view:View_T<T0>, set:((a?:T0) => void))
}
