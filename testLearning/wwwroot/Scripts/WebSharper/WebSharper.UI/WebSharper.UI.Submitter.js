import Submitter from "./WebSharper.UI.Submitter`1.js"
import { Map } from "./WebSharper.UI.View.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
export function CreateOption(input){
  return new Submitter(Map((V) => Some(V), input), null);
}
