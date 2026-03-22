import Doc from "../WebSharper.UI/WebSharper.UI.Doc"
import TemplateHole from "../WebSharper.UI/WebSharper.UI.TemplateHole"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
import { CompletedHoles } from "./WebSharper.UI.Templating.Runtime.Server.CompletedHoles"
import Object from "../WebSharper.StdLib/System.Object"
export default class TemplateInstance extends Object {
  doc:Doc;
  allVars:Dictionary<string, TemplateHole>;
  anchorRoot:Element;
  Anchor(name:string):Element
  SetAnchorRoot(el:Element):void
  Hole(name:string):TemplateHole
  get Doc():Doc
  constructor(c:CompletedHoles, doc:Doc)
}
