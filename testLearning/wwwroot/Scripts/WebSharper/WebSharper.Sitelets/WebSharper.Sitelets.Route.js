import { StartsWith, Substring, SplitChars } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js"
import { ofArray, iter, ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { WriteQuery, WriteLink } from "./WebSharper.Sitelets.PathUtil.js"
import { OfArray, FoldBack } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { ofSeq as ofSeq_1, choose, iter as iter_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { get, length } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { toSafe } from "../WebSharper.StdLib/WebSharper.Utils.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class Route {
  Segments;
  QueryArgs;
  FormData;
  Method;
  Body;
  static FromHash(path, strict){
    const m=path.indexOf("#");
    if(m===-1)return Route.Empty;
    else {
      const h=path.substring(m+1);
      return strict!=null&&strict.$0?h==""||h=="/"?Route.Empty:StartsWith(h, "/")?Route.FromUrl(h.substring(1), Some(true)):Route.Segment_2(h):Route.FromUrl(path.substring(m), Some(false));
    }
  }
  static FromUrl(path, strict){
    const m=path.indexOf("?");
    const p=m===-1?[path, new FSharpMap("New", [])]:[Substring(path, 0, m), Route.ParseQuery(path.substring(m+1))];
    const splitOptions=strict!=null&&strict.$0?0:1;
    const _1=Route.Empty;
    return Route.New(ofArray(SplitChars(p[0], ["/"], splitOptions)), p[1], _1.FormData, _1.Method, _1.Body);
  }
  static WriteQuery(q){
    return WriteQuery(q);
  }
  static ParseQuery(q){
    return OfArray(ofSeq_1(choose((kv) => {
      const m=SplitChars(kv, ["="], 0);
      return!Equals(m, null)&&m.length===2?Some([get(m, 0), get(m, 1)]):((((_1) =>(_2) => _1("wrong format for query argument: "+toSafe(_2)))((s) => {
        console.log(s);
      }))(kv),null);
    }, SplitChars(q, ["&"], 0))));
  }
  static Combine(paths){
    let method;
    let body;
    let queryArgs;
    let formData;
    const paths_1=ofSeq_1(paths);
    const m=length(paths_1);
    if(m===0)return Route.Empty;
    else if(m===1)return get(paths_1, 0);
    else {
      method=null;
      body=null;
      const segments=[];
      queryArgs=new FSharpMap("New", []);
      formData=new FSharpMap("New", []);
      iter_1((p) => {
        const m_1=p.Method;
        if(m_1!=null&&m_1.$==1)method=m_1;
        const m_2=p.Body;
        if(m_2==null){ }
        else body=m_2;
        queryArgs=FoldBack((_1, _2, _3) => _3.Add_1(_1, _2), queryArgs, p.QueryArgs);
        formData=FoldBack((_1, _2, _3) => _3.Add_1(_1, _2), formData, p.FormData);
        iter((i) => {
          segments.push(i);
        }, p.Segments);
      }, paths_1);
      return Route.New(ofSeq(segments), queryArgs, formData, method, body);
    }
  }
  static Segment(s, m){
    const _1=Route.Empty;
    return Route.New(s, _1.QueryArgs, _1.FormData, m, _1.Body);
  }
  static Segment_1(s){
    const _1=Route.Empty;
    return Route.New(s, _1.QueryArgs, _1.FormData, _1.Method, _1.Body);
  }
  static Segment_2(s){
    const _1=Route.Empty;
    return Route.New(ofArray([s]), _1.QueryArgs, _1.FormData, _1.Method, _1.Body);
  }
  static get Empty(){
    return Route.New(FSharpList.Empty, new FSharpMap("New", []), new FSharpMap("New", []), null, Some(null));
  }
  ToLink(){
    return WriteLink(this.Segments, this.QueryArgs);
  }
  static New(Segments, QueryArgs, FormData, Method, Body){
    return Create(Route, {
      Segments:Segments, 
      QueryArgs:QueryArgs, 
      FormData:FormData, 
      Method:Method, 
      Body:Body
    });
  }
}
