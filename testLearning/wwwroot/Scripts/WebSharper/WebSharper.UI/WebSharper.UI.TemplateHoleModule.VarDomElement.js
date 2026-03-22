import TemplateHole from "./WebSharper.UI.TemplateHole.js"
export default class VarDomElement extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  ApplyVarHole(el){ }
  WithName(n){
    return new VarDomElement(n, this.fillWith);
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
