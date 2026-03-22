import TemplateHole from "../WebSharper.UI/WebSharper.UI.TemplateHole"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
import TemplateInitializer from "./WebSharper.UI.Templating.Runtime.Server.TemplateInitializer"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export interface Client {
  $:0;
  $0:Dictionary<string, TemplateHole>;
}
export interface Server {
  $:1;
  $0:FSharpOption<TemplateInitializer>;
}
export type CompletedHoles = (Client | Server)
