import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export default class Route {
  Segments:FSharpList_T<string>;
  QueryArgs:FSharpMap<string, string>;
  FormData:FSharpMap<string, string>;
  Method:FSharpOption<string>;
  Body:FSharpOption<string>;
  static FromHash(path:string, strict:FSharpOption<boolean>):Route
  static FromUrl(path:string, strict:FSharpOption<boolean>):Route
  static WriteQuery(q:FSharpMap<string, string>):string
  static ParseQuery(q:string):FSharpMap<string, string>
  static Combine(paths:IEnumerable<Route>):Route
  static Segment(s:FSharpList_T<string>, m:FSharpOption<string>):Route
  static Segment_1(s:FSharpList_T<string>):Route
  static Segment_2(s:string):Route
  static get Empty():Route
  ToLink():string
  static New(Segments:FSharpList_T<string>, QueryArgs:FSharpMap<string, string>, FormData:FSharpMap<string, string>, Method:FSharpOption<string>, Body:FSharpOption<string>):Route
}
