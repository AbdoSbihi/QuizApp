import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Map } from "./WebSharper.UI.View.js"
import { concat } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { Choice2Of2 } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js"
import { StringListValue } from "./WebSharper.UI.Client.Attr.js"
import { applyTypedVarHole } from "./WebSharper.UI.TemplateHoleModule.js"
import { StringListApply } from "./WebSharper.UI.Client.BindVar.js"
export default class VarStrList extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  ForTextView(){
    return Some(Map((l) => concat(",", l), this.fillWith.View));
  }
  get AsChoiceView(){
    return Choice2Of2(Map(String, this.fillWith.View));
  }
  AddAttribute(addAttr, el){
    (addAttr(el))(StringListValue(this.fillWith));
  }
  ApplyVarHole(el){
    applyTypedVarHole(StringListApply(), this.fillWith, el);
  }
  WithName(n){
    return new VarStrList(n, this.fillWith);
  }
  get ValueObj(){
    return this.Value;
  }
  get Name(){
    return this.name;
  }
  constructor(name, fillWith){
    super();
    this.name=name;
    this.fillWith=fillWith;
  }
}
