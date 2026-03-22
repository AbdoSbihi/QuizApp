import CorsAllows from "./WebSharper.Sitelets.CorsAllows"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export default interface Cors<T0>{
  DefaultAllows?:FSharpOption<CorsAllows>;
  EndPoint?:FSharpOption<T0>;
}
