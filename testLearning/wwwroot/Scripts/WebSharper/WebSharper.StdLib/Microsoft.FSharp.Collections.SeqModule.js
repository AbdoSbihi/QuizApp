import { Get } from "./WebSharper.Enumerator.js"
import T from "./WebSharper.Enumerator.T`2.js"
import { Equals, Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { ofArray } from "./Microsoft.FSharp.Collections.ListModule.js"
import { isIDisposable } from "./System.IDisposable.js"
import { countBy as countBy_1, splitInto as splitInto_1, groupBy as groupBy_1, insufficient, sortInPlaceByDescending, nonNegative, transposeArray, tryFindBack, tryFindIndexBack, mapFold as mapFold_1, mapFoldBack as mapFoldBack_1, outOfBounds } from "./WebSharper.CollectionInternals.js"
import { ofSeq, sortInPlaceBy, fold2 as fold2_1, foldBack as foldBack_1, foldBack2 as foldBack2_1, permute as permute_1, reduceBack as reduceBack_1, scanBack as scanBack_1, sortInPlaceWith } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import HashSet from "./System.Collections.Generic.HashSet`1.js"
import { FailWith, InvalidOp, range } from "./Microsoft.FSharp.Core.Operators.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { enumUsing, enumWhile } from "./Microsoft.FSharp.Core.CompilerServices.RuntimeHelpers.js"
export function allPairs(source1, source2){
  const cached=cache(source2);
  return collect((x) => map((y) =>[x, y], cached), source1);
}
export function append(s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const first=[true];
    return new T(e1, null, (x) => {
      if(x.s.MoveNext()){
        x.c=x.s.Current;
        return true;
      }
      else {
        const x_1=x.s;
        if(!Equals(x_1, null))x_1.Dispose();
        x.s=null;
        return first[0]&&(first[0]=false,x.s=Get(s2),x.s.MoveNext()?(x.c=x.s.Current,true):(x.s.Dispose(),x.s=null,false));
      }
    }, (x) => {
      const x_1=x.s;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
export function cache(s){
  const cache_1=[];
  const o=[Get(s)];
  return{GetEnumerator:() => new T(0, null, (e) => {
    if(e.s<cache_1.length){
      e.c=cache_1[e.s];
      e.s=e.s+1;
      return true;
    }
    else {
      const en=o[0];
      return Equals(en, null)?false:en.MoveNext()?(e.s=e.s+1,e.c=en.Current,cache_1.push(e.c),true):(en.Dispose(),o[0]=null,false);
    }
  }, void 0)};
}
export function choose(f, s){
  return collect((x) => {
    const m=f(x);
    return m==null?FSharpList.Empty:ofArray([m.$0]);
  }, s);
}
export function collect(f, s){
  return concat(map(f, s));
}
export function compareWith(f, s1, s2){
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      let r=0;
      let loop=true;
      while(loop&&r===0)
        if(e1.MoveNext())r=e2.MoveNext()?f(e1.Current, e2.Current):1;
        else if(e2.MoveNext())r=-1;
        else loop=false;
      return r;
    }
    finally {
      const _1=e2;
      if(typeof _1=="object"&&isIDisposable(_1))e2.Dispose();
    }
  }
  finally {
    const _2=e1;
    if(typeof _2=="object"&&isIDisposable(_2))e1.Dispose();
  }
}
export function concat(ss){
  return{GetEnumerator:() => {
    const outerE=Get(ss);
    function next(st){
      while(true)
        {
          const m=st.s;
          if(Equals(m, null)){
            if(outerE.MoveNext()){
              st.s=Get(outerE.Current);
              st=st;
            }
            else {
              outerE.Dispose();
              return false;
            }
          }
          else if(m.MoveNext()){
            st.c=m.Current;
            return true;
          }
          else {
            st.Dispose();
            st.s=null;
            st=st;
          }
        }
    }
    return new T(null, null, next, (st) => {
      const x=st.s;
      if(!Equals(x, null))x.Dispose();
      const x_1=outerE;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
export function countBy(f, s){
  return delay(() => countBy_1(f, ofSeq(s)));
}
export function delay(f){
  return{GetEnumerator:() => Get(f())};
}
export function distinct(s){
  return distinctBy((x) => x, s);
}
export function distinctBy(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    const seen=new HashSet("New_3");
    return new T(null, null, (e) => {
      let cur;
      let has;
      if(o.MoveNext()){
        cur=o.Current;
        has=seen.SAdd(f(cur));
        while(!has&&o.MoveNext())
          {
            cur=o.Current;
            has=seen.SAdd(f(cur));
          }
        return has&&(e.c=cur,true);
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
export function splitInto(count, s){
  count<=0?FailWith("Count must be positive"):void 0;
  return delay(() => splitInto_1(count, ofSeq(s)));
}
export function exactlyOne(s){
  const e=Get(s);
  try {
    if(e.MoveNext()){
      const x=e.Current;
      return e.MoveNext()?InvalidOp("Sequence contains more than one element"):x;
    }
    else return InvalidOp("Sequence contains no elements");
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function tryExactlyOne(s){
  const e=Get(s);
  try {
    if(e.MoveNext()){
      const x=e.Current;
      return e.MoveNext()?null:Some(x);
    }
    else return null;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function exists(p, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=p(e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function exists2(p, s1, s2){
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      let r=false;
      while(!r&&e1.MoveNext()&&e2.MoveNext())
        r=p(e1.Current, e2.Current);
      return r;
    }
    finally {
      const _1=e2;
      if(typeof _1=="object"&&isIDisposable(_1))e2.Dispose();
    }
  }
  finally {
    const _2=e1;
    if(typeof _2=="object"&&isIDisposable(_2))e1.Dispose();
  }
}
export function filter(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    return new T(null, null, (e) => {
      let loop=o.MoveNext();
      let c;
      let res=false;
      while(loop)
        {
          c=o.Current;
          f(c)?(e.c=c,res=true,loop=false):!o.MoveNext()?loop=false:void 0;
        }
      return res;
    }, () => {
      o.Dispose();
    });
  }};
}
export function find(p, s){
  const m=tryFind(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function findIndex(p, s){
  const m=tryFindIndex(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function fold(f, x, s){
  let r=x;
  const e=Get(s);
  try {
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function forall(p, s){
  return!exists((x) =>!p(x), s);
}
export function forall2(p, s1, s2){
  return!exists2((_1, _2) =>!p(_1, _2), s1, s2);
}
export function groupBy(f, s){
  return delay(() => groupBy_1(f, ofSeq(s)));
}
export function head(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function init(n, f){
  return take(n, initInfinite(f));
}
export function initInfinite(f){
  return{GetEnumerator:() => new T(0, null, (e) => {
    e.c=f(e.s);
    e.s=e.s+1;
    return true;
  }, void 0)};
}
export function isEmpty(s){
  const e=Get(s);
  try {
    return!e.MoveNext();
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function iter2(p, s1, s2){
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      while(e1.MoveNext()&&e2.MoveNext())
        p(e1.Current, e2.Current);
    }
    finally {
      const _1=e2;
      if(typeof _1=="object"&&isIDisposable(_1))e2.Dispose();
    }
  }
  finally {
    const _2=e1;
    if(typeof _2=="object"&&isIDisposable(_2))e1.Dispose();
  }
}
export function iteri(p, s){
  let i=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        p(i, e.Current);
        i=i+1;
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function length(s){
  let i;
  if(s instanceof Array||Equals(typeof s, "string"))return s.length;
  else {
    i=0;
    const e=Get(s);
    try {
      while(e.MoveNext())
        i=i+1;
      return i;
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
}
export function map(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
export function mapi(f, s){
  return map2(f, initInfinite((x) => x), s);
}
export function map2(f, s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const e2=Get(s2);
    return new T(null, null, (e) => e1.MoveNext()&&e2.MoveNext()&&(e.c=f(e1.Current, e2.Current),true), () => {
      e1.Dispose();
      e2.Dispose();
    });
  }};
}
export function maxBy(f, s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    let fm=f(m);
    while(e.MoveNext())
      {
        const x=e.Current;
        const fx=f(x);
        if(Compare(fx, fm)===1){
          m=x;
          fm=fx;
        }
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function minBy(f, s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    let fm=f(m);
    while(e.MoveNext())
      {
        const x=e.Current;
        const fx=f(x);
        if(Compare(fx, fm)===-1){
          m=x;
          fm=fx;
        }
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function max(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===1)m=x;
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function min(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===-1)m=x;
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function nth(index, s){
  if(index<0)FailWith("negative index requested");
  let pos=-1;
  const e=Get(s);
  try {
    while(pos<index)
      {
        !e.MoveNext()?insufficient():void 0;
        pos=pos+1;
      }
    return e.Current;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function pairwise(s){
  return map((x) =>[get(x, 0), get(x, 1)], windowed(2, s));
}
export function pick(p, s){
  const m=tryPick(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function readOnly(s){
  return{GetEnumerator:() => Get(s)};
}
export function reduce(f, source){
  const e=Get(source);
  try {
    if(!e.MoveNext())seqEmpty();
    let r=e.Current;
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function scan(f, x, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(false, null, (e) => e.s?en.MoveNext()&&(e.c=f(e.c, en.Current),true):(e.c=x,e.s=true,true), () => {
      en.Dispose();
    });
  }};
}
export function skip(n, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    return new T(true, null, (e) => {
      if(e.s){
        for(let i=1, _1=n;i<=_1;i++)if(!o.MoveNext())insufficient();
        e.s=false;
      }
      else null;
      return o.MoveNext()&&(e.c=o.Current,true);
    }, () => {
      o.Dispose();
    });
  }};
}
export function skipWhile(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    return new T(true, null, (e) => {
      let go;
      let empty;
      if(e.s){
        go=true;
        empty=false;
        while(go)
          if(o.MoveNext()){
            if(!f(o.Current))go=false;
          }
          else {
            go=false;
            empty=true;
          }
        e.s=false;
        return empty?false:(e.c=o.Current,true);
      }
      else return o.MoveNext()&&(e.c=o.Current,true);
    }, () => {
      o.Dispose();
    });
  }};
}
export function sort(s){
  return sortBy((x) => x, s);
}
export function sortBy(f, s){
  return delay(() => {
    const array=ofSeq(s);
    sortInPlaceBy(f, array);
    return array;
  });
}
export function sortByDescending(f, s){
  return delay(() => {
    const array=ofSeq(s);
    sortInPlaceByDescending(f, array);
    return array;
  });
}
export function sortDescending(s){
  return sortByDescending((x) => x, s);
}
export function sum(s){
  let res=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      res=res+e.Current;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return res;
}
export function sumBy(f, s){
  let res=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      res=res+f(e.Current);
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return res;
}
export function average(s){
  let res=0;
  let count=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        res=res+e.Current;
        count=count+1;
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return count===0?seqEmpty():res/count;
}
export function averageBy(f, s){
  let res=0;
  let count=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        res=res+f(e.Current);
        count=count+1;
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return count===0?seqEmpty():res/count;
}
export function take(n, s){
  n<0?nonNegative():void 0;
  return{GetEnumerator:() => {
    const e=[Get(s)];
    return new T(0, null, (o) => {
      o.s=o.s+1;
      if(o.s>n)return false;
      else {
        const en=e[0];
        return Equals(en, null)?insufficient():en.MoveNext()?(o.c=en.Current,o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,insufficient());
      }
    }, () => {
      const x=e[0];
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
export function takeWhile(f, s){
  return delay(() => enumUsing(Get(s), (e) => enumWhile(() => e.MoveNext()&&f(e.Current), delay(() =>[e.Current]))));
}
export function transpose(x){
  return delay(() => transposeArray(ofSeq(map((s) => ofSeq(s), x))));
}
export function truncate(n, s){
  return delay(() => enumUsing(Get(s), (e) => {
    const i=[0];
    return enumWhile(() => e.MoveNext()&&i[0]<n, delay(() => {
      i[0]++;
      return[e.Current];
    }));
  }));
}
export function tryFind(ok, s){
  const e=Get(s);
  try {
    let r=null;
    while(r==null&&e.MoveNext())
      {
        const x=e.Current;
        if(ok(x))r=Some(x);
      }
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function findBack(p, s){
  const m=tryFindBack(p, ofSeq(s));
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function tryFindIndex(ok, s){
  const e=Get(s);
  try {
    let loop=true;
    let i=0;
    while(loop&&e.MoveNext())
      if(ok(e.Current))loop=false;
      else i=i+1;
    return loop?null:Some(i);
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function findIndexBack(p, s){
  const m=tryFindIndexBack(p, ofSeq(s));
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function tryPick(f, s){
  const e=Get(s);
  try {
    let r=null;
    while(Equals(r, null)&&e.MoveNext())
      r=f(e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function unfold(f, s){
  return{GetEnumerator:() => new T(s, null, (e) => {
    const m=f(e.s);
    if(m==null)return false;
    else {
      const t=m.$0[0];
      const s_1=m.$0[1];
      e.c=t;
      e.s=s_1;
      return true;
    }
  }, void 0)};
}
export function windowed(windowSize, s){
  windowSize<=0?FailWith("The input must be positive."):void 0;
  return delay(() => enumUsing(Get(s), (e) => {
    const q=[];
    return append(enumWhile(() => q.length<windowSize&&e.MoveNext(), delay(() => {
      q.push(e.Current);
      return[];
    })), delay(() => q.length===windowSize?append([q.slice(0)], delay(() => enumWhile(() => e.MoveNext(), delay(() => {
      q.shift();
      q.push(e.Current);
      return[q.slice(0)];
    })))):[]));
  }));
}
export function zip(s1, s2){
  return map2((_1, _2) =>[_1, _2], s1, s2);
}
export function map3(f, s1, s2, s3){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const e2=Get(s2);
    const e3=Get(s3);
    return new T(null, null, (e) => e1.MoveNext()&&e2.MoveNext()&&e3.MoveNext()&&(e.c=f(e1.Current, e2.Current, e3.Current),true), () => {
      e1.Dispose();
      e2.Dispose();
      e3.Dispose();
    });
  }};
}
export function zip3(s1, s2, s3){
  return map3((_1, _2, _3) =>[_1, _2, _3], s1, s2, s3);
}
export function fold2(f, s, s1, s2){
  return fold2_1(f, s, ofSeq(s1), ofSeq(s2));
}
export function foldBack(f, s, state){
  return foldBack_1(f, ofSeq(s), state);
}
export function foldBack2(f, s1, s2, s){
  return foldBack2_1(f, ofSeq(s1), ofSeq(s2), s);
}
export function iteri2(f, s1, s2){
  let i=0;
  const e1=Get(s1);
  try {
    const e2=Get(s2);
    try {
      while(e1.MoveNext()&&e2.MoveNext())
        {
          f(i, e1.Current, e2.Current);
          i=i+1;
        }
    }
    finally {
      const _1=e2;
      if(typeof _1=="object"&&isIDisposable(_1))e2.Dispose();
    }
  }
  finally {
    const _2=e1;
    if(typeof _2=="object"&&isIDisposable(_2))e1.Dispose();
  }
}
export function mapi2(f, s1, s2){
  return map3(f, initInfinite((x) => x), s1, s2);
}
export function mapFold(f, zero, s){
  return mapFold_1(f, zero, ofSeq(s));
}
export function mapFoldBack(f, s, zero){
  return mapFoldBack_1(f, ofSeq(s), zero);
}
export function permute(f, s){
  return delay(() => permute_1(f, ofSeq(s)));
}
export function reduceBack(f, s){
  return reduceBack_1(f, ofSeq(s));
}
export function replicate(size, value){
  size<0?nonNegative():void 0;
  return delay(() => map(() => value, range(0, size-1)));
}
export function rev(s){
  return delay(() => ofSeq(s).slice().reverse());
}
export function scanBack(f, l, s){
  return delay(() => scanBack_1(f, ofSeq(l), s));
}
export function indexed(s){
  return mapi((_1, _2) =>[_1, _2], s);
}
export function sortWith(f, s){
  return delay(() => {
    const a=ofSeq(s);
    sortInPlaceWith(f, a);
    return a;
  });
}
export function tail(s){
  return skip(1, s);
}
export function insertAt(index, item, arr){
  return index>=0?index===0?append([item], arr):{GetEnumerator:() => {
    let ind;
    const en=Get(arr);
    ind=0;
    return new T(null, null, (e) => ind===index?(e.c=item,ind=ind+1,true):en.MoveNext()?(e.c=en.Current,ind=ind+1,true):ind<index&&outOfBounds(), () => {
      en.Dispose();
    });
  }}:outOfBounds();
}
export function insertManyAt(index, items, arr){
  return index>=0?index===0?append(items, arr):{GetEnumerator:() => {
    let newItems;
    let ind;
    const en=Get(arr);
    newItems=null;
    ind=0;
    return new T(null, null, (e) => ind===index?(newItems==null?newItems=Get(items):void 0,newItems.MoveNext()?(e.c=newItems.Current,true):(ind=ind+1,en.MoveNext()&&(e.c=en.Current,true))):en.MoveNext()?(e.c=en.Current,ind=ind+1,true):ind<index&&outOfBounds(), () => {
      en.Dispose();
      const x=newItems;
      if(!Equals(x, null))x.Dispose();
    });
  }}:outOfBounds();
}
export function removeAt(index, arr){
  return index>=0?index===0?tail(arr):{GetEnumerator:() => {
    let ind;
    const en=Get(arr);
    ind=0;
    return new T(null, null, (e) => ind===index?en.MoveNext()?en.MoveNext()&&(e.c=en.Current,ind=ind+2,true):outOfBounds():en.MoveNext()?(e.c=en.Current,ind=ind+1,true):ind<index&&outOfBounds(), () => {
      en.Dispose();
    });
  }}:outOfBounds();
}
export function removeManyAt(index, number, arr){
  return index>=0?index===0?skip(number, arr):{GetEnumerator:() => {
    let ind;
    const en=Get(arr);
    ind=0;
    return new T(null, null, (e) => {
      let current;
      if(ind===index){
        if(en.MoveNext()){
          current=number;
          while(current>0&&(en.MoveNext()||(current=-1,false)))
            current=current-1;
          return current===0&&(e.c=en.Current,ind=ind+number+1,true);
        }
        else return outOfBounds();
      }
      else return en.MoveNext()?(e.c=en.Current,ind=ind+1,true):ind<index&&outOfBounds();
    }, () => {
      en.Dispose();
    });
  }}:outOfBounds();
}
export function updateAt(index, item, arr){
  return index>=0?index===0?append([item], tail(arr)):{GetEnumerator:() => {
    let ind;
    const en=Get(arr);
    ind=0;
    return new T(null, null, (e) => ind===index?en.MoveNext()?(e.c=item,ind=ind+1,true):outOfBounds():en.MoveNext()?(e.c=en.Current,ind=ind+1,true):ind<index&&outOfBounds(), () => {
      en.Dispose();
    });
  }}:outOfBounds();
}
export function avgByGen(add, divByInt, zero, f, s){
  let res=zero;
  let count=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        res=add(res, f(e.Current));
        count=count+1;
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return count===0?seqEmpty():divByInt(res, count);
}
export function avgGen(add, divByInt, zero, s){
  let res=zero;
  let count=0;
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        res=add(res, e.Current);
        count=count+1;
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return count===0?seqEmpty():divByInt(res, count);
}
export function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
