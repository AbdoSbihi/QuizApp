import Doc from "./WebSharper.UI.Doc"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import TemplateHole from "./WebSharper.UI.TemplateHole"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
export default class $StartupCode_Templates {
  static RenderedFullDocTemplate:FSharpOption<Doc>;
  static TextHoleRE:string;
  static GlobalHoles:Dictionary<string, TemplateHole>;
  static LocalTemplatesLoaded:boolean;
  static LoadedTemplates:Dictionary<string, Dictionary<string, Element>>;
}
