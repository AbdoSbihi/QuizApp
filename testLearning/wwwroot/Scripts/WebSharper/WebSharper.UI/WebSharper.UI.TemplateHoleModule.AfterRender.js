import TemplateHole from "./WebSharper.UI.TemplateHole.js"
export default class AfterRender extends TemplateHole {
  name;
  fillWith;
  get Value(){
    return this.fillWith;
  }
  WithName(n){
    return new AfterRender(n, this.fillWith);
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
