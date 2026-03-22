import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export default interface CorsAllows {
  Origins:FSharpList_T<string>;
  Methods:FSharpList_T<string>;
  Headers:FSharpList_T<string>;
  ExposeHeaders:FSharpList_T<string>;
  MaxAge:FSharpOption<number>;
  Credentials:boolean;
}
