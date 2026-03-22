import { append, collect } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { SplitChars } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { ofArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { startsWith } from "./WebSharper.Sitelets.List.js"
import Route from "./WebSharper.Sitelets.Route.js"
export function op_Addition(a, b){
  return New((path) => append(a.Parse(path), b.Parse(path)), a.Segment);
}
export function op_Division(before, after){
  return New((path) => collect(after.Parse, before.Parse(path)), append(before.Segment, after.Segment));
}
export function FromString(name){
  const parts=SplitChars(name, ["/"], 1);
  if(parts.length==0)return New((path) =>[path], []);
  else {
    const parts_1=ofArray(parts);
    return New((path) => {
      const m=startsWith(parts_1, path.Segments);
      return m!=null&&m.$==1?[Route.New(m.$0, path.QueryArgs, path.FormData, path.Method, path.Body)]:[];
    }, [Route.Segment_1(parts_1)]);
  }
}
export function New(Parse, Segment){
  return{Parse:Parse, Segment:Segment};
}
