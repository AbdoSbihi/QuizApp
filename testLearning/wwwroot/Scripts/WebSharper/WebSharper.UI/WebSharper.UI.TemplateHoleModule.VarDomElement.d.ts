import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Var from "./WebSharper.UI.Var`1"
import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class VarDomElement extends TemplateHole {
  name:string;
  fillWith:Var<FSharpOption<Element>>;
  get Value():Var<FSharpOption<Element>>
  ApplyVarHole(el:Element):void
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:Var<FSharpOption<Element>>)
}
