import { map, iter2, create, forall, ofSeq, ofList, map2, init } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofSeq as ofSeq_1, ofArray, rev, map as map_1, forAll } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { map as map_2, collect, append, iteri, indexed, tryFindIndex } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Choice2Of2, Choice1Of2 } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js"
import { get, set, length } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { New } from "./WebSharper.Sitelets.Router`1.js"
import Route from "./WebSharper.Sitelets.Route.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Sum } from "./WebSharper.Sitelets.RouterModule.js"
import { startsWith } from "./WebSharper.Sitelets.List.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { DeleteEmptyFields, GetOptional } from "../WebSharper.Core.JavaScript/Runtime.js"
import $StartupCode_Router from "./$StartupCode_Router.js"
export function JSClass(ctor, fields, endpoints, subClasses){
  const partsAndRoutersLists=map((_1) =>[_1[0], ofSeq_1(map_2((p) => typeof p=="number"?Choice2Of2([p, (get(fields, p))[2]]):Choice1Of2(p), _1[1]))], endpoints);
  return subClasses.length==0?New((path) => {
    function collect_1(fields_1, path_1, arr){
      while(true)
        {
          let _1;
          if(fields_1.$==1){
            if(fields_1.$0.$==1){
              const h=fields_1.$0.$0[1];
              const i=fields_1.$0.$0[0];
              const t=fields_1.$1;
              const x=h.Parse(path_1);
              return(((m_1) =>(s) => collect(m_1, s))(((arr_1, i_1, t_2) =>(t_3) => {
                const narr=arr_1.slice();
                set(narr, i_1, t_3[1]);
                return collect_1(t_2, t_3[0], narr);
              })(arr, i, t)))(x);
            }
            else {
              const p=fields_1.$0.$0;
              const t_1=fields_1.$1;
              const m=path_1.Segments;
              if(m.$==1&&(m.$1,m.$0==p&&(_1=[m.$0, m.$1],true))){
                fields_1=t_1;
                path_1=Route.New(_1[1], path_1.QueryArgs, path_1.FormData, path_1.Method, path_1.Body);
              }
              else return[];
            }
          }
          else {
            let _2=path_1;
            const o=ctor();
            let _3=(iter2((_4, _5) =>(((_6) => {
              const fn=_6[0];
              const opt=_6[1];
              return(v) => {
                if(opt){
                  if(v!=null&&v.$==1)o[fn]=v.$0;
                }
                else o[fn]=v;
              };
            })(_4))(_5), fields, arr),o);
            return[[_2, _3]];
          }
        }
    }
    return collect((_1) => isCorrectMethod(_1[0], path.Method)?collect_1(_1[1], path, create(length(fields), null)):[], partsAndRoutersLists);
  }, (value) => {
    const values=map((_3) => {
      const fn=_3[0];
      if(_3[1]){
        const v=value[fn];
        return Equals(v, void 0)?null:Some(v);
      }
      else return value[fn];
    }, fields);
    const p=get(endpoints, 0);
    const method=p[0];
    const parts=map((a) => typeof a=="number"?(get(fields, a))[2].Write(get(values, a)):Some([Route.Segment_2(a)]), p[1]);
    if(forall((o) => o!=null, parts)){
      const w=collect((o) => o.$0, parts);
      if(method==null)return Some(w);
      else {
        const _1=Route.Empty;
        let _2=append([Route.New(_1.Segments, _1.QueryArgs, _1.FormData, method, _1.Body)], w);
        return Some(_2);
      }
    }
    else return null;
  }):Sum(append(subClasses, [New((path) => {
    function collect_1(fields_1, path_1, arr){
      while(true)
        {
          let _1;
          if(fields_1.$==1){
            if(fields_1.$0.$==1){
              const h=fields_1.$0.$0[1];
              const i=fields_1.$0.$0[0];
              const t=fields_1.$1;
              const x=h.Parse(path_1);
              return(((m_1) =>(s) => collect(m_1, s))(((arr_1, i_1, t_2) =>(t_3) => {
                const narr=arr_1.slice();
                set(narr, i_1, t_3[1]);
                return collect_1(t_2, t_3[0], narr);
              })(arr, i, t)))(x);
            }
            else {
              const p=fields_1.$0.$0;
              const t_1=fields_1.$1;
              const m=path_1.Segments;
              if(m.$==1&&(m.$1,m.$0==p&&(_1=[m.$0, m.$1],true))){
                fields_1=t_1;
                path_1=Route.New(_1[1], path_1.QueryArgs, path_1.FormData, path_1.Method, path_1.Body);
              }
              else return[];
            }
          }
          else {
            let _2=path_1;
            const o=ctor();
            let _3=(iter2((_4, _5) =>(((_6) => {
              const fn=_6[0];
              const opt=_6[1];
              return(v) => {
                if(opt){
                  if(v!=null&&v.$==1)o[fn]=v.$0;
                }
                else o[fn]=v;
              };
            })(_4))(_5), fields, arr),o);
            return[[_2, _3]];
          }
        }
    }
    return collect((_1) => isCorrectMethod(_1[0], path.Method)?collect_1(_1[1], path, create(length(fields), null)):[], partsAndRoutersLists);
  }, (value) => {
    const values=map((_3) => {
      const fn=_3[0];
      if(_3[1]){
        const v=value[fn];
        return Equals(v, void 0)?null:Some(v);
      }
      else return value[fn];
    }, fields);
    const p=get(endpoints, 0);
    const method=p[0];
    const parts=map((a) => typeof a=="number"?(get(fields, a))[2].Write(get(values, a)):Some([Route.Segment_2(a)]), p[1]);
    if(forall((o) => o!=null, parts)){
      const w=collect((o) => o.$0, parts);
      if(method==null)return Some(w);
      else {
        const _1=Route.Empty;
        let _2=append([Route.New(_1.Segments, _1.QueryArgs, _1.FormData, method, _1.Body)], w);
        return Some(_2);
      }
    }
    else return null;
  })]));
}
export function JSUnion(t, cases){
  const createCase=(tag, fieldValues) => {
    const o=t==null?{}:new t();
    const m=get(cases, tag);
    const _1=m[0];
    return _1!=null&&_1.$==1?m[0].$0:(o.$=tag,iteri((_2, _3) => {
      o["$"+String(_2)]=_3;
    }, fieldValues),o);
  };
  const parseCases=ofSeq(collect((_1) => {
    const i=_1[0];
    const a=_1[1];
    const fields=a[2];
    return map_2((_2) =>[i, _2[0], _2[1], fields], a[1]);
  }, indexed(cases)));
  return New((path) => collect((_1) => {
    const i=_1[0];
    if(isCorrectMethod(_1[1], path.Method)){
      const m=startsWith(ofArray(_1[2]), path.Segments);
      if(m==null)return[];
      else {
        const p=m.$0;
        const m_1=ofArray(_1[3]);
        if(m_1.$==0)return[[Route.New(p, path.QueryArgs, path.FormData, path.Method, path.Body), createCase(i, [])]];
        else {
          function collect_1(fields){
            return(path_1) =>(acc) => {
              if(fields.$==1){
                const t_1=fields.$1;
                return collect((_2) =>((collect_1(t_1))(_2[0]))(FSharpList.Cons(_2[1], acc)), fields.$0.Parse(path_1));
              }
              else return[[path_1, createCase(i, ofList(rev(acc)))]];
            };
          }
          return((collect_1(m_1))(Route.New(p, path.QueryArgs, path.FormData, path.Method, path.Body)))(FSharpList.Empty);
        }
      }
    }
    else return[];
  }, parseCases), (value) => {
    const constIndex=tryFindIndex((_1) => {
      const _2=_1[0];
      return _2!=null&&_2.$==1&&Equals(value, _2.$0);
    }, cases);
    const tag=constIndex!=null&&constIndex.$==1?constIndex.$0:value.$;
    const p=get(cases, tag);
    const fields=p[2];
    const p_1=get(p[1], 0);
    const casePath=[Route.Segment(ofArray(p_1[1]), p_1[0])];
    if(fields.length==0)return Some(casePath);
    else {
      const fieldParts=map2((_1, _2) => _2.Write(_1), init(length((get(cases, tag))[2]), (i) => value["$"+String(i)]), fields);
      return forall((o) => o!=null, fieldParts)?Some(append(casePath, collect((o) => o.$0, fieldParts))):null;
    }
  });
}
export function isCorrectMethod(m, p){
  return p!=null&&p.$==1?m!=null&&m.$==1?Equals(p.$0, m.$0):true:!(m!=null&&m.$==1);
}
export function JSRecord(t, fields){
  const fields_1=map((_1) => _1[2], fields);
  const fieldsList=ofArray(fields_1);
  return New((path) => {
    function collect_1(fields_2){
      return(path_1) =>(acc) => {
        if(fields_2.$==1){
          const t_1=fields_2.$1;
          return collect((_2) =>((collect_1(t_1))(_2[0]))(FSharpList.Cons(_2[1], acc)), fields_2.$0.Parse(path_1));
        }
        else {
          const fieldValues=ofList(rev(acc));
          const o=t==null?{}:new t();
          let _1=(iter2((_2, _3) =>(((_4) => {
            const fn=_4[0];
            const opt=_4[1];
            return(v) => {
              if(opt){
                if(v!=null&&v.$==1)o[fn]=v.$0;
              }
              else o[fn]=v;
            };
          })(_2))(_3), fields, fieldValues),o);
          return[[path_1, _1]];
        }
      };
    }
    return((collect_1(fieldsList))(path))(FSharpList.Empty);
  }, (value) => {
    const parts=map2((_1, _2) => _2.Write(_1), map((_1) => {
      const fn=_1[0];
      if(_1[1]){
        const v=value[fn];
        return Equals(v, void 0)?null:Some(v);
      }
      else return value[fn];
    }, fields), fields_1);
    return forall((o) => o!=null, parts)?Some(collect((o) => o.$0, parts)):null;
  });
}
export function JSTuple(items){
  return Tuple((value) => init(length(items), (i) => value[i]), (v) => v, items);
}
export function Tuple(readItems, createTuple, items){
  return New((path) => {
    function collect_1(elems){
      return(path_1) =>(acc) => {
        if(elems.$==1){
          const t=elems.$1;
          return collect((_1) =>((collect_1(t))(_1[0]))(FSharpList.Cons(_1[1], acc)), elems.$0.Parse(path_1));
        }
        else return[[path_1, createTuple(ofList(rev(acc)))]];
      };
    }
    return((collect_1(ofArray(items)))(path))(FSharpList.Empty);
  }, (value) => {
    const parts=map2((_1, _2) => _2.Write(_1), readItems(value), items);
    return forall((o) => o!=null, parts)?Some(collect((o) => o.$0, parts)):null;
  });
}
export function rCors(r){
  return New((path) => map_2((_1) => {
    const _2=Some(_1[1]);
    let _3={DefaultAllows:null?null.$0:void 0, EndPoint:_2?_2.$0:void 0};
    let _4=DeleteEmptyFields(_3, ["DefaultAllows", "EndPoint"]);
    return[_1[0], _4];
  }, r.Parse(path)), (a) => {
    const m=GetOptional(a.EndPoint);
    const a_1=m==null?Choice2Of2(null):Choice1Of2(m.$0);
    return a_1.$==1?Some([Route.Empty]):r.Write(a_1.$0);
  });
}
export function rDateTime(){
  return $StartupCode_Router.rDateTime;
}
export function rWildcardList(item){
  return New((path) => {
    function collect_1(path_1){
      return(acc) => path_1.Segments.$==0?[[path_1, rev(acc)]]:collect((_1) =>(collect_1(_1[0]))(FSharpList.Cons(_1[1], acc)), item.Parse(path_1));
    }
    return(collect_1(path))(FSharpList.Empty);
  }, (value) => {
    const parts=map_1(item.Write, value);
    return forAll((o) => o!=null, parts)?Some(collect((o) => o.$0, parts)):null;
  });
}
export function rWildcardArray(item){
  return New((path) => {
    function collect_1(path_1){
      return(acc) => path_1.Segments.$==0?[[path_1, ofList(rev(acc))]]:collect((_1) =>(collect_1(_1[0]))(FSharpList.Cons(_1[1], acc)), item.Parse(path_1));
    }
    return(collect_1(path))(FSharpList.Empty);
  }, (value) => {
    const parts=map(item.Write, value);
    return forall((o) => o!=null, parts)?Some(collect((o) => o.$0, parts)):null;
  });
}
export function rWildcard(){
  return $StartupCode_Router.rWildcard;
}
export function rBool(){
  return $StartupCode_Router.rBool;
}
export function rSingle(){
  return $StartupCode_Router.rSingle;
}
export function rUInt64(){
  return $StartupCode_Router.rUInt64;
}
export function rInt64(){
  return $StartupCode_Router.rInt64;
}
export function rUInt(){
  return $StartupCode_Router.rUInt;
}
export function rUInt16(){
  return $StartupCode_Router.rUInt16;
}
export function rInt16(){
  return $StartupCode_Router.rInt16;
}
export function rByte(){
  return $StartupCode_Router.rByte;
}
export function rSByte(){
  return $StartupCode_Router.rSByte;
}
export function rDouble(){
  return $StartupCode_Router.rDouble;
}
export function rInt(){
  return $StartupCode_Router.rInt;
}
export function rGuid(){
  return $StartupCode_Router.rGuid;
}
export function rChar(){
  return $StartupCode_Router.rChar;
}
export function rString(){
  return $StartupCode_Router.rString;
}
export function rRoot(){
  return $StartupCode_Router.rRoot;
}
