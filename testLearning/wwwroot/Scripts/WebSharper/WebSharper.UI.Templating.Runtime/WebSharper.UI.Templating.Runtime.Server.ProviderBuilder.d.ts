import TemplateInstance from "./WebSharper.UI.Templating.Runtime.Server.TemplateInstance"
import TemplateHole from "../WebSharper.UI/WebSharper.UI.TemplateHole"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Object from "../WebSharper.StdLib/System.Object"
export default class ProviderBuilder extends Object {
  i:TemplateInstance;
  k:string;
  h:(TemplateHole)[];
  s?:FSharpOption<string>;
  constructor(i:"New_1")
  constructor(i:"New", src:string)
}
