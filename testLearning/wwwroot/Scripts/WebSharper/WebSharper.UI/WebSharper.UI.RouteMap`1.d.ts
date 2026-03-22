import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
export default interface RouteMap<T0>{
  Des:((a:[FSharpList_T<string>, FSharpMap<string, string>]) => T0);
  Ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>]);
}
