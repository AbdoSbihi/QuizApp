import LinkedList from "../WebSharper.StdLib/System.Collections.Generic.LinkedList`1.js"
import { get, length } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { findIndex, iter, tryPick, map, ofSeq, map2 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { FailWith, toInt, KeyValue } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import FSharpSet from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpSet`1.js"
import { OfSeq } from "../WebSharper.StdLib/WebSharper.Collections.BalancedTree.js"
import { init, iter as iter_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.StdLib/System.IDisposable.js"
import { Iterate } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { iter as iter_2, map as map_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { get_DateTime } from "../WebSharper.StdLib/System.DateTimeOffset.js"
export function DecodeLinkedList(decEl){
  return() =>(o) => {
    const l=new LinkedList("New");
    const decEl_1=decEl();
    for(let i=0, _1=o.length-1;i<=_1;i++)l.AddLast(decEl_1(get(o, i)));
    return l;
  };
}
export function DecodeArrayDictionary(decKey, decEl){
  return() =>(o) => {
    const decKey_1=decKey();
    const decEl_1=decEl();
    const d=new Dictionary("New_5");
    for(let i=0, _1=o.length-1;i<=_1;i++){
      const f=get(o, i);
      d.DAdd(decKey_1(f[0]), decEl_1(f[1]));
    }
    return d;
  };
}
export function DecodeStringDictionary(decEl){
  return() =>(o) => {
    const d=new Dictionary("New_5");
    const decEl_1=decEl();
    let k;
    for(var k_1 in o)if(((k_2) => {
      d.DAdd(k_2, decEl_1(o[k_2]));
      return false;
    })(k_1))break;
    return d;
  };
}
export function DecodeArrayMap(decKey, decEl){
  return() =>(o) => {
    const decKey_1=decKey();
    const decEl_1=decEl();
    let m=new FSharpMap("New", FSharpList.Empty);
    for(let i=0, _1=o.length-1;i<=_1;i++){
      const f=get(o, i);
      m=m.Add_1(decKey_1(f[0]), decEl_1(f[1]));
    }
    return m;
  };
}
export function DecodeStringMap(decEl){
  return() =>(o) => {
    const m=[new FSharpMap("New", [])];
    const decEl_1=decEl();
    let k;
    for(var k_1 in o)if(((k_2) => {
      const v=decEl_1(o[k_2]);
      let _1=m[0].Add_1(k_2, v);
      m[0]=_1;
      return false;
    })(k_1))break;
    return m[0];
  };
}
export function DecodeSeq(decEl){
  return EncodeSeq(decEl);
}
export function DecodeArray(decEl){
  return EncodeArray(decEl);
}
export function DecodeUnion(t, discr, cases){
  return() =>(x) => {
    let tag;
    if(typeof x==="object"&&x!=null){
      const o={};
      if(typeof discr==="string"){
        const tagName=x[discr];
        tag=findIndex((case_1) =>!Equals(case_1, null)&&case_1[0]==tagName, cases);
      }
      else {
        const r=[void 0];
        let k;
        for(var k_1 in discr)if(((k_2) => x.hasOwnProperty(k_2)&&(r[0]=discr[k_2],true))(k_1))break;
        tag=r[0];
      }
      o.$=tag;
      iter((_1) => {
        const from=_1[0];
        const __to__=_1[1];
        const dec=_1[2];
        const kind=_1[3];
        if(from==null){
          const r_1=(dec())(x);
          if(__to__)delete r_1[discr];
          o.$0=r_1;
          return;
        }
        else return kind===0?void(o[from]=(dec())(x[__to__])):kind===1?void(o[from]=x.hasOwnProperty(__to__)?Some((dec())(x[__to__])):null):FailWith("Invalid field option kind");
      }, (get(cases, tag))[1]);
      return t===void 0?o:t(o);
    }
    else return x;
  };
}
export function DecodeClass(t, fields, subClassDecoders){
  return() =>(x) => {
    const o=tryPick((dec) => {
      try {
        return Some((dec())(x));
      }
      catch(m){
        return null;
      }
    }, subClassDecoders);
    return o==null?((DecodeRecord(t, fields))())(x):o.$0;
  };
}
export function DecodeRecord(t, fields){
  return() =>(x) => {
    const o={};
    iter((_1) => {
      const name=_1[0];
      const dec=_1[1];
      const kind=_1[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t===void 0?o:t(o);
  };
}
export function DecodeSet(decEl){
  return() =>(a) => new FSharpSet("New_2", OfSeq(map(decEl(), a)));
}
export function DecodeList(decEl){
  return() =>(a) => {
    const e=decEl();
    return init(length(a), (i) => e(get(a, i)));
  };
}
export function DecodeBigInteger(){
  return() =>(x) => BigInt(x);
}
export function DecodeDateTimeOffset(){
  return() =>(x) => x.hasOwnProperty("d")?{d:(new Date(x.d)).getTime(), o:toInt(x.o*6E4/6E4)}:{d:(new Date(x)).getTime(), o:toInt(0/6E4)};
}
export function DecodeDateTime(){
  return() =>(x) => x.hasOwnProperty("d")?(new Date(x.d)).getTime():(new Date(x)).getTime();
}
export function DecodeTuple(decs){
  return EncodeTuple(decs);
}
export function EncodeLinkedList(encEl){
  return() =>(d) => {
    const o=[];
    const e=encEl();
    const i=d;
    const e_1=Get(i);
    try {
      while(e_1.MoveNext())
        o.push(e(e_1.Current));
    }
    finally {
      const _1=e_1;
      if(typeof _1=="object"&&isIDisposable(_1))e_1.Dispose();
    }
    return o;
  };
}
export function EncodeArrayDictionary(encKey, encEl){
  return() =>(d) => {
    const a=[];
    const k=encKey();
    const e=encEl();
    let e_1=d.GetEnumerator();
    try {
      while(e_1.MoveNext())
        {
          const a_1=KeyValue(e_1.Current);
          let ps=[[k(a_1[0]), e(a_1[1])]];
          a.push.apply(a, ps);
        }
    }
    finally {
      e_1.Dispose();
    }
    return a;
  };
}
export function EncodeStringDictionary(encEl){
  return() =>(d) => {
    const o={};
    const e=encEl();
    const i=d;
    const e_1=Get(i);
    try {
      while(e_1.MoveNext())
        {
          const a=KeyValue(e_1.Current);
          o[a[0]]=e(a[1]);
        }
    }
    finally {
      const _1=e_1;
      if(typeof _1=="object"&&isIDisposable(_1))e_1.Dispose();
    }
    return o;
  };
}
export function EncodeArrayMap(encKey, encEl){
  return() =>(m) => {
    const a=[];
    const k=encKey();
    const e=encEl();
    Iterate((_1, _2) => {
      let ps=[[k(_1), e(_2)]];
      a.push.apply(a, ps);
    }, m);
    return a;
  };
}
export function EncodeStringMap(encEl){
  return() =>(m) => {
    const o={};
    const e=encEl();
    Iterate((_1, _2) => {
      o[_1]=e(_2);
    }, m);
    return o;
  };
}
export function EncodeSet(encEl){
  return() =>(s) => {
    const a=[];
    const e=encEl();
    iter_2((x) => {
      a.push(e(x));
    }, s);
    return a;
  };
}
export function EncodeSeq(encEl){
  return() =>(a) => ofSeq(map_1(encEl(), a));
}
export function EncodeArray(encEl){
  return() =>(a) => map(encEl(), a);
}
export function EncodeUnion(_1, discr, cases){
  return() =>(x) => {
    if(typeof x==="object"&&x!=null){
      const o={};
      const p=get(cases, x.$);
      if(Equals(typeof discr, "string"))o[discr]=p[0];
      iter((_2) => {
        const from=_2[0];
        const __to__=_2[1];
        const enc=_2[2];
        const kind=_2[3];
        if(from==null){
          const record=(enc())(x.$0);
          let k;
          for(var k_1 in record)if(((f) => {
            o[f]=record[f];
            return false;
          })(k_1))break;
          return;
        }
        else if(kind===0){
          o[__to__]=(enc())(x[from]);
          return;
        }
        else if(kind===1){
          const m=x[from];
          return m==null?null:void(o[__to__]=(enc())(m.$0));
        }
        else return FailWith("Invalid field option kind");
      }, p[1]);
      return o;
    }
    else return x;
  };
}
export function EncodeRecord(_1, fields){
  return() =>(x) => {
    const o={};
    iter((_2) => {
      const name=_2[0];
      const enc=_2[1];
      const kind=_2[2];
      if(kind===0){
        o[name]=(enc())(x[name]);
        return;
      }
      else if(kind===1){
        const m=x[name];
        return m==null?null:void(o[name]=(enc())(m.$0));
      }
      else return kind===2?x.hasOwnProperty(name)?void(o[name]=(enc())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(enc())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return o;
  };
}
export function EncodeList(encEl){
  return() =>(l) => {
    const a=[];
    const e=encEl();
    iter_1((x) => {
      a.push(e(x));
    }, l);
    return a;
  };
}
export function EncodeBigInteger(){
  return() => String;
}
export function EncodeDateTimeOffset(){
  return() =>(x) =>({d:(new Date(get_DateTime(x))).toISOString(), o:x.o});
}
export function EncodeDateTime(){
  return() =>(x) =>(new Date(x)).toISOString();
}
export function EncodeTuple(encs){
  return() =>(args) => map2((_1, _2) =>(_1())(_2), encs, args);
}
export function Id(){
  return() =>(x) => x;
}
