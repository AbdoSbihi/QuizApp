import { Route } from "./WebSharper.UI.Route.T.js"
import { Append as Append_1, FromArray, ToArray } from "./WebSharper.UI.AppendList.js"
import { FoldBack, OfArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { ofList, map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { concat, SplitChars, StartsWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { map as map_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { KeyValue } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { string } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
export function Append(a, a_1){
  const qa=a.$1;
  const pa=a.$0;
  const qb=a_1.$1;
  return Route(Append_1(pa, a_1.$0), FoldBack((_1, _2, _3) => _3.Add_1(_1, _2), qa, qb));
}
export function FromList(xs, q){
  return Route(FromArray(ofList(xs)), q);
}
export function ToList(a){
  const rt=a.$0;
  const q=a.$1;
  return[ofArray(ToArray(rt)), q];
}
export function SameHash(a, b){
  return NoHash(a)==NoHash(b);
}
export function MakeHash(a){
  const query=a.$1;
  const path=concat("/", map((x) => encodeURIComponent(x), ToArray(a.$0)));
  return query.IsEmpty?path:path+"?"+concat("&", map_1((a_1) => {
    const a_2=KeyValue(a_1);
    return encodeURIComponent(a_2[0])+"="+encodeURIComponent(a_2[1]);
  }, query));
}
export function ParseHash(hash){
  const hash_1=NoHash(hash);
  const m=hash_1.indexOf("?");
  const p=m===-1?[hash_1, ""]:[string(hash_1, null, Some(m-1)), string(hash_1, Some(m+1), null)];
  const path=p[0];
  return Route(FromArray(path==""?[]:map((x) => decodeURIComponent(x), SplitChars(path, ["/"], 0))), OfArray(map((s) => {
    const m_1=s.indexOf("=");
    return m_1===-1?[decodeURIComponent(s), ""]:[decodeURIComponent(string(s, null, Some(m_1-1))), decodeURIComponent(string(s, Some(m_1+1), null))];
  }, SplitChars(p[1], ["&"], 0))));
}
export function NoHash(s){
  return StartsWith(s, "#")?s.substring(1):s;
}
