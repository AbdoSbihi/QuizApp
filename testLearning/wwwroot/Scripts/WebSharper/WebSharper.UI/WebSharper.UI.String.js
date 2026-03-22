import { forall } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { IsWhiteSpace } from "../WebSharper.StdLib/System.Char.js"
export function isBlank(s){
  return forall(IsWhiteSpace, s);
}
