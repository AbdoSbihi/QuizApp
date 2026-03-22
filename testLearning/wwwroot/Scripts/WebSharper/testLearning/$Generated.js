import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { LoadLocalTemplates, NamedTemplate } from "../WebSharper.UI/WebSharper.UI.Client.Templates.js"
export function mainform(h){
  let n=Some("mainform");
  LoadLocalTemplates("main");
  return h?NamedTemplate("main", n, h):void 0;
}
