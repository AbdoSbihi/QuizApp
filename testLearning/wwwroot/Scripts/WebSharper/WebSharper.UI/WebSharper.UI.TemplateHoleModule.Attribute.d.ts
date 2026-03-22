import { Attr_T } from "./WebSharper.UI.Attr"
import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class Attribute extends TemplateHole {
  name:string;
  fillWith:Attr_T;
  get Value():Attr_T
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:Attr_T)
}
