import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import Var from "./WebSharper.UI.Var`1"
export function New(KeysPressed, KeyListenerActive, LastPressed)
export default interface KeyListenerSt {
  KeysPressed:Var<FSharpList_T<number>>;
  KeyListenerActive:boolean;
  LastPressed:Var<number>;
}
