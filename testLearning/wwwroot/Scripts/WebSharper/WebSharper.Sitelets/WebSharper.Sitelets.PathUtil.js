import { concat, IsNullOrEmpty, Join } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { ToSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
export function WriteLink(s, q){
  const query=q.IsEmpty?"":"?"+WriteQuery(q);
  return"/"+Concat(s)+query;
}
export function WriteQuery(q){
  return concat("&", map((_1) => _1[0]+"="+_1[1], ToSeq(q)));
}
export function Concat(xs){
  let start;
  const sb=[];
  start=true;
  iter((x) => {
    if(!IsNullOrEmpty(x)){
      start?start=false:sb.push("/");
      sb.push(x);
    }
  }, xs);
  return Join("", ofSeq(sb));
}
