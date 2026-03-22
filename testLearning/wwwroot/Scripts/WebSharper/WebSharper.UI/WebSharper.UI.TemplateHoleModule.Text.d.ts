import { View_T } from "./WebSharper.UI.View`1"
import { FSharpChoice } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2"
import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class Text extends TemplateHole {
  name:string;
  fillWith:string;
  get Value():string
  get AsChoiceView():FSharpChoice<string, View_T<string>>
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:string)
}
