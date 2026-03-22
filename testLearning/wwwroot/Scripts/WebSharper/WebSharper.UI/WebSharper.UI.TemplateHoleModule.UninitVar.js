import TemplateHole from "./WebSharper.UI.TemplateHole.js"
export default class UninitVar extends TemplateHole {
  name;
  key;
  get Value(){
    return this.key;
  }
  WithName(n){
    return new UninitVar(n, this.key);
  }
  get ValueObj(){
    return this.key;
  }
  get Name(){
    return this.name;
  }
  constructor(name, key){
    super();
    this.name=name;
    this.key=key;
  }
}
