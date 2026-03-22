import { New as New_1 } from "./WebSharper.Sitelets.Router`1.js"
import { choose, map, append, collect, tryPick, filter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { ofArray, rev } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { ofList, map as map_1, forall, ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import Route from "./WebSharper.Sitelets.Route.js"
import { get } from "../WebSharper.StdLib/WebSharper.Nullable.js"
import { TryParse } from "../WebSharper.StdLib/System.Int32.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { length } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Create as Create_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Control.LazyExtensions.js"
import { SplitChars, TrimEnd } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { startsWith } from "./WebSharper.Sitelets.List.js"
import { FromString, New as New_2 } from "./WebSharper.Sitelets.Router.js"
import { Iterate, OfArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { FromContinuations } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js"
import BodyTextNeededForRoute from "./WebSharper.Sitelets.RouterModule.BodyTextNeededForRoute.js"
import $StartupCode_Router from "./$StartupCode_Router.js"
export function Cast(tryParseCast, tryWriteCast, router){
  return New_1((path) => choose((_1) => {
    const m=tryParseCast(_1[1]);
    return m!=null&&m.$==1?Some([_1[0], m.$0]):null;
  }, router.Parse(path)), (value) => {
    const o=tryWriteCast(value);
    return o==null?null:router.Write(o.$0);
  });
}
export function Unbox(tryUnbox, router){
  return New_1((path) => choose((_1) => {
    const m=tryUnbox(_1[1]);
    return m!=null&&m.$==1?Some([_1[0], m.$0]):null;
  }, router.Parse(path)), router.Write);
}
export function Box(tryUnbox, router){
  return New_1((path) => map((_1) =>[_1[0], _1[1]], router.Parse(path)), (value) => {
    const o=tryUnbox(value);
    return o==null?null:router.Write(o.$0);
  });
}
export function List(item){
  return Map(ofArray, ofList, Array(item));
}
export function Option(item){
  return New_1((path) => {
    let _1;
    const m=path.Segments;
    switch(m.$==1?m.$0=="None"?(_1=m.$1,0):m.$0=="Some"?(_1=m.$1,1):2:2){
      case 0:
        return[[Route.New(_1, path.QueryArgs, path.FormData, path.Method, path.Body), null]];
      case 1:
        return map((_2) =>[_2[0], Some(_2[1])], item.Parse(Route.New(_1, path.QueryArgs, path.FormData, path.Method, path.Body)));
      case 2:
        return[];
    }
  }, (value) => {
    if(value!=null&&value.$==1){
      const x=item.Write(value.$0);
      const s=[Route.Segment_2("Some")];
      const m=(s_1) => append(s, s_1);
      return x==null?null:Some(m(x.$0));
    }
    else return Some([Route.Segment_2("None")]);
  });
}
export function Nullable(item){
  return New_1((path) => {
    let _1;
    const m=path.Segments;
    return m.$==1&&(m.$0=="null"&&(_1=m.$1,true))?[[Route.New(_1, path.QueryArgs, path.FormData, path.Method, path.Body), null]]:map((_2) =>[_2[0], _2[1]], item.Parse(path));
  }, (value) => value!=null?item.Write(get(value)):Some([Route.Segment_2("null")]));
}
export function Array(item){
  return New_1((path) => {
    let o;
    const m=path.Segments;
    if(m.$==1){
      const t=m.$1;
      const h=m.$0;
      const m_1=(o=0,[TryParse(h, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m_1[0]){
        function collect_1(l){
          return(path_1) =>(acc) => l===0?[[path_1, ofList(rev(acc))]]:collect((_1) =>((collect_1(l-1))(_1[0]))(FSharpList.Cons(_1[1], acc)), item.Parse(path_1));
        }
        return((collect_1(m_1[1]))(Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body)))(FSharpList.Empty);
      }
      else return[];
    }
    else return[];
  }, (value) => {
    const parts=map_1(item.Write, value);
    return forall((o) => o!=null, parts)?Some(append([Route.Segment_2(String(length(value)))], collect((o) => o.$0, parts))):null;
  });
}
export function Delay(getRouter){
  const r=Create_1(getRouter);
  return New_1((path) => r.f().Parse(path), (value) => r.f().Write(value));
}
export function Single(endpoint, route){
  const parts=SplitChars(route, ["/"], 1);
  if(parts.length==0)return New_1((path) =>[[path, endpoint]], (value) => Equals(value, endpoint)?Some([]):null);
  else {
    const parts_1=ofArray(parts);
    return New_1((path) => {
      const m=startsWith(parts_1, path.Segments);
      return m!=null&&m.$==1?[[Route.New(m.$0, path.QueryArgs, path.FormData, path.Method, path.Body), endpoint]]:[];
    }, (value) => Equals(value, endpoint)?Some([Route.Segment_1(parts_1)]):null);
  }
}
export function Table(mapping){
  return Sum(map((_1) => MapTo(_1[0], FromString(_1[1])), mapping));
}
export function Sum(routers){
  const routers_1=ofSeq(routers);
  return New_1((path) => collect((r) => r.Parse(path), routers_1), (value) => tryPick((r) => r.Write(value), routers_1));
}
export function MapTo(value, router){
  return New_1((path) => map((p) =>[p, value], router.Parse(path)), (v) => Equals(v, value)?Some(router.Segment):null);
}
export function Filter(predicate, router){
  return New_1((path) => filter((x) => predicate(x[1]), router.Parse(path)), (value) => predicate(value)?router.Write(value):null);
}
export function TryMap(decode, encode, router){
  return New_1((path) => choose((_1) => {
    const o=decode(_1[1]);
    return o==null?null:Some([_1[0], o.$0]);
  }, router.Parse(path)), (value) => {
    const o=encode(value);
    return o==null?null:router.Write(o.$0);
  });
}
export function Map(decode, encode, router){
  return New_1((path) => map((_1) =>[_1[0], decode(_1[1])], router.Parse(path)), (value) => router.Write(encode(value)));
}
export function Embed(decode, encode, router){
  return New_1((path) => map((_1) =>[_1[0], decode(_1[1])], router.Parse(path)), (value) => {
    const o=encode(value);
    return o==null?null:router.Write(o.$0);
  });
}
export function Slice(decode, encode, router){
  return New_1((path) => choose((_1) => {
    const o=decode(_1[1]);
    return o==null?null:Some([_1[0], o.$0]);
  }, router.Parse(path)), (value) => router.Write(encode(value)));
}
export function HashLink(router, endpoint){
  return"#"+Link(router, endpoint);
}
export function Fetch(router, endpoint){
  return FetchWith(null, {}, router, endpoint);
}
export function FetchWith(baseUrl, options, router, endpoint){
  const options_1=options?options:{};
  const m=Write(router, endpoint);
  if(m!=null&&m.$==1){
    const path=m.$0;
    const x=path.Method;
    let _1=x==null?"POST":x.$0;
    options_1.method=_1;
    const m_1=path.Body.$0;
    if(m_1==null){
      if(!path.FormData.IsEmpty){
        const fd=new globalThis.FormData();
        Iterate((_2, _3) => fd.append(_2, _3), path.FormData);
        options_1.body=fd;
      }
    }
    else options_1.body=m_1;
    const url=path.ToLink();
    return globalThis.fetch(baseUrl==null?url:TrimEnd(baseUrl.$0, ["/"])+url, options_1);
  }
  else return FailWith("Failed to map endpoint to request");
}
export function XHR(router, endpoint){
  return XHRWith({
    ResponseT:"text", 
    Url:"", 
    IsAsync:true, 
    Username:"", 
    Password:"", 
    Timeout:0, 
    WithCredentials:false
  }, router, endpoint);
}
export function XHRWith(conf, router, endpoint){
  const xhr=new XMLHttpRequest();
  const m=Write(router, endpoint);
  if(m!=null&&m.$==1){
    const path=m.$0;
    if(conf.ResponseT===void 0)conf.ResponseT="text";
    const m_1=path.Method;
    const method=m_1==null?"POST":m_1.$0;
    return FromContinuations((ok, err) => {
      xhr.onload=() => ok(xhr.response);
      xhr.onerror=() => err(new Error(xhr.statusText));
      const url=path.ToLink();
      conf.Url=conf.Url?TrimEnd(conf.Url, ["/"])+url:url;
      if(conf.Username!=""&&conf.Password!="")xhr.open(method, conf.Url, conf.IsAsync, conf.Username, conf.Password);
      else xhr.open(method, conf.Url, conf.IsAsync);
      if(conf.Timeout!==0)xhr.timeout=conf.Timeout;
      if(conf.WithCredentials)xhr.withCredentials=conf.WithCredentials;
      const m_2=path.Body.$0;
      if(m_2==null){
        if(!path.FormData.IsEmpty){
          const fd=new globalThis.FormData();
          Iterate((_1, _2) => fd.append(_1, _2), path.FormData);
          return xhr.send(fd);
        }
        else return xhr.send();
      }
      else return xhr.send(m_2);
    });
  }
  else return FailWith("Failed to map endpoint to request");
}
export function Link(router, endpoint){
  const m=Write(router, endpoint);
  return m==null?"":m.$0.ToLink();
}
export function TryLink(router, endpoint){
  const m=Write(router, endpoint);
  return m==null?null:Some(m.$0.ToLink());
}
export function Write(router, endpoint){
  const o=router.Write(endpoint);
  return o==null?null:Some(Route.Combine(o.$0));
}
export function Parse(router, path){
  return tryPick((_1) => _1[0].Segments.$==0?Some(_1[1]):null, router.Parse(path));
}
export function FormData(item){
  return New_1((path) => map((_1) =>[path, _1[1]], item.Parse(Route.New(path.Segments, path.FormData, path.FormData, path.Method, path.Body))), (value) => {
    const o=item.Write(value);
    return o==null?null:Some(map((p) => Route.New(p.Segments, new FSharpMap("New", []), p.QueryArgs, p.Method, p.Body), o.$0));
  });
}
export function Body(deserialize, serialize){
  return New_1((path) => {
    const m=path.Body;
    if(m!=null&&m.$==1){
      if(m.$0==null)return[];
      else {
        const m_1=deserialize(m.$0);
        return m_1!=null&&m_1.$==1?[[Route.New(path.Segments, path.QueryArgs, path.FormData, path.Method, Some(null)), m_1.$0]]:[];
      }
    }
    else throw new BodyTextNeededForRoute();
  }, (value) => {
    const _1=Route.Empty;
    let _2=[Route.New(_1.Segments, _1.QueryArgs, _1.FormData, _1.Method, Some(serialize(value)))];
    return Some(_2);
  });
}
export function Method(m){
  const _1=Route.Empty;
  let _2=[Route.New(_1.Segments, _1.QueryArgs, _1.FormData, Some(m), _1.Body)];
  return New_2((path) => {
    let _3;
    const m_1=path.Method;
    return m_1!=null&&m_1.$==1&&(m_1.$0==m&&(_3=m_1.$0,true))?[path]:[];
  }, _2);
}
export function QueryNullable(key, item){
  return New_1((path) => {
    const m=path.QueryArgs.TryFind(key);
    if(m!=null&&m.$==1){
      const q=m.$0;
      const newQa=path.QueryArgs.Remove_1(key);
      const _1=Route.Empty;
      let _2=Route.New(ofArray([q]), _1.QueryArgs, _1.FormData, _1.Method, _1.Body);
      let _3=item.Parse(_2);
      return map((_4) =>[Route.New(path.Segments, newQa, path.FormData, path.Method, path.Body), _4[1]], _3);
    }
    else return[[path, null]];
  }, (value) => {
    let _1;
    let _2;
    if(value!=null){
      const o=item.Write(get(value));
      if(o==null)return null;
      else {
        const m=Route.Combine(o.$0).Segments;
        if(m.$==1&&(m.$1.$==0&&(_1=m.$0,true))){
          const _3=Route.Empty;
          _2=[Route.New(_3.Segments, OfArray(ofSeq(ofArray([[key, _1]]))), _3.FormData, _3.Method, _3.Body)];
        }
        else _2=[];
        return Some(_2);
      }
    }
    else return Some([]);
  });
}
export function QueryOption(key, item){
  return New_1((path) => {
    const m=path.QueryArgs.TryFind(key);
    if(m!=null&&m.$==1){
      const q=m.$0;
      const newQa=path.QueryArgs.Remove_1(key);
      const _1=Route.Empty;
      let _2=Route.New(ofArray([q]), _1.QueryArgs, _1.FormData, _1.Method, _1.Body);
      let _3=item.Parse(_2);
      return map((_4) =>[Route.New(path.Segments, newQa, path.FormData, path.Method, path.Body), Some(_4[1])], _3);
    }
    else return[[path, null]];
  }, (value) => {
    let _1;
    let _2;
    if(value!=null&&value.$==1){
      const o=item.Write(value.$0);
      if(o==null)return null;
      else {
        const m=Route.Combine(o.$0).Segments;
        if(m.$==1&&(m.$1.$==0&&(_1=m.$0,true))){
          const _3=Route.Empty;
          _2=[Route.New(_3.Segments, OfArray(ofSeq(ofArray([[key, _1]]))), _3.FormData, _3.Method, _3.Body)];
        }
        else _2=[];
        return Some(_2);
      }
    }
    else return Some([]);
  });
}
export function Query(key, item){
  return New_1((path) => {
    const m=path.QueryArgs.TryFind(key);
    if(m!=null&&m.$==1){
      const q=m.$0;
      const newQa=path.QueryArgs.Remove_1(key);
      const _1=Route.Empty;
      let _2=Route.New(ofArray([q]), _1.QueryArgs, _1.FormData, _1.Method, _1.Body);
      let _3=item.Parse(_2);
      return map((_4) =>[Route.New(path.Segments, newQa, path.FormData, path.Method, path.Body), _4[1]], _3);
    }
    else return[];
  }, (value) => {
    let _1;
    let _2;
    const o=item.Write(value);
    if(o==null)return null;
    else {
      const m=Route.Combine(o.$0).Segments;
      if(m.$==1&&(m.$1.$==0&&(_1=m.$0,true))){
        const _3=Route.Empty;
        _2=[Route.New(_3.Segments, OfArray(ofSeq(ofArray([[key, _1]]))), _3.FormData, _3.Method, _3.Body)];
      }
      else _2=[];
      return Some(_2);
    }
  });
}
export function CreateWithQuery(ser, des){
  return New_1((path) => {
    const m=des(path.Segments, path.QueryArgs);
    return m==null?[]:[[Route.New(FSharpList.Empty, path.QueryArgs, path.FormData, path.Method, path.Body), m.$0]];
  }, (value) => {
    const p=ser(value);
    const _1=Route.Empty;
    return Some([Route.New(p[0], p[1], _1.FormData, _1.Method, _1.Body)]);
  });
}
export function Create(ser, des){
  return New_1((path) => {
    const m=des(path.Segments);
    return m==null?[]:[[Route.New(FSharpList.Empty, path.QueryArgs, path.FormData, path.Method, path.Body), m.$0]];
  }, (value) => Some([Route.Segment_1(ser(value))]));
}
export function New(route, link){
  return{Route(req){
    return route(req);
  }, Link(e){
    return link(e);
  }};
}
export function Empty(){
  return $StartupCode_Router.Empty;
}
