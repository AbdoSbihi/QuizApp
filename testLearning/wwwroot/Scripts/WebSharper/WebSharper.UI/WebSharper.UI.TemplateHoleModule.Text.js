import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Choice1Of2 } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js"
export default class Text extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  get AsChoiceView(){
    return Choice1Of2(this.fillWith);
  }
  WithName(n){
    return new Text(n, this.fillWith);
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
