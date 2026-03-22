import { View_T } from "./WebSharper.UI.View`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpChoice } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2"
import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class TextView extends TemplateHole {
  name:string;
  fillWith:View_T<string>;
  get Value():View_T<string>
  ForTextView():FSharpOption<View_T<string>>
  get AsChoiceView():FSharpChoice<string, View_T<string>>
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:View_T<string>)
}
