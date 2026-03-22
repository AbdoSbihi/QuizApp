import Doc from "./WebSharper.UI.Doc"
import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class Elt extends TemplateHole {
  name:string;
  fillWith:Doc;
  get Value():Doc
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:Doc)
}
