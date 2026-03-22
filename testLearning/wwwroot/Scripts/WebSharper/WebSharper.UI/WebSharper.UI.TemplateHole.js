import Object from "../WebSharper.StdLib/System.Object.js"
import { Choice1Of2 } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js"
export default class TemplateHole extends Object {
  static Value(th){
    return th.ValueObj;
  }
  get AsChoiceView(){
    console.warn("Attribute value hole filled with non-text data", this.Name);
    return Choice1Of2("");
  }
  ForTextView(){
    console.warn("Content hole filled with attribute data", this.Name);
    return null;
  }
  ApplyVarHole(el){
    console.warn("Not a var hole: ", this.Name);
  }
  AddAttribute(a, a_1){
    console.warn("Var hole filled with non-Var data", this.Name);
  }
}
