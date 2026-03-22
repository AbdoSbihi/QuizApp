import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class UninitVar extends TemplateHole {
  name:string;
  key:string;
  get Value():string
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, key:string)
}
