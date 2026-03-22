import { allPairs as allPairs_1, ofList, fold2 as fold2_1, foldBack as foldBack_1, foldBack2 as foldBack2_1, init as init_1, partition as partition_1, permute as permute_1, reduceBack as reduceBack_1, create, scanBack as scanBack_1, sortInPlace, sortInPlaceBy, sortInPlaceWith, ofSeq as ofSeq_1 } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { choose as choose_1, collect as collect_1, concat as concat_1, scan as scan_1, map as map_1, compareWith as compareWith_1, distinct as distinct_1, distinctBy as distinctBy_1, pairwise as pairwise_1, unfold as unfold_1, windowed as windowed_1, take } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Compare, Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { length as length_1, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Get } from "./WebSharper.Enumerator.js"
import { isIDisposable } from "./System.IDisposable.js"
import { sortInPlaceByDescending, transposeArray, chunkBySize as chunkBySize_1, countBy as countBy_1, splitInto as splitInto_1, except as except_1, tryFindBack as tryFindBack_1, tryFindIndexBack, groupBy as groupBy_1, mapInPlace, mapFold as mapFold_1, mapFoldBack as mapFoldBack_1, skip, outOfBounds } from "./WebSharper.CollectionInternals.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
export function allPairs(l1, l2){
  return ofArray(allPairs_1(ofList(l1), ofList(l2)));
}
export function append(x, y){
  let r;
  let l;
  let go;
  if(x.$==0)return y;
  else if(y.$==0)return x;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=l.$0;
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
      }
    r.$1=y;
    return res;
  }
}
export function choose(f, l){
  return ofSeq(choose_1(f, l));
}
export function collect(f, l){
  return ofSeq(collect_1(f, l));
}
export function concat(s){
  return ofSeq(concat_1(s));
}
export function exists(p, x){
  let e=false;
  let l=x;
  while(!e&&l.$==1)
    {
      e=p(l.$0);
      l=l.$1;
    }
  return e;
}
export function exists2(p, x1, x2){
  let e=false;
  let l1=x1;
  let l2=x2;
  while(!e&&l1.$==1&&l2.$==1)
    {
      e=p(l1.$0, l2.$0);
      l1=l1.$1;
      l2=l2.$1;
    }
  if(!e&&(l1.$==1||l2.$==1))badLengths();
  return e;
}
export function filter(p, x){
  let res;
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    res=FSharpList.Empty;
    r=res;
    l=x;
    go=true;
    while(go)
      {
        if(p(l.$0)){
          if(res.$==0){
            res=Create(FSharpList, {$:1});
            r=res;
          }
          else {
            const t=Create(FSharpList, {$:1});
            r=(r.$1=t,t);
          }
          const v=l.$0;
          r.$=1;
          r.$0=v;
        }
        l=l.$1;
        if(l.$==0)go=false;
      }
    if(!(res.$==0))r.$1=FSharpList.Empty;
    return res;
  }
}
export function fold2(f, s, l1, l2){
  return fold2_1(f, s, ofList(l1), ofList(l2));
}
export function foldBack(f, l, s){
  return foldBack_1(f, ofList(l), s);
}
export function foldBack2(f, l1, l2, s){
  return foldBack2_1(f, ofList(l1), ofList(l2), s);
}
export function forAll(p, x){
  let a=true;
  let l=x;
  while(a&&l.$==1)
    {
      a=p(l.$0);
      l=l.$1;
    }
  return a;
}
export function forall2(p, x1, x2){
  let a=true;
  let l1=x1;
  let l2=x2;
  while(a&&l1.$==1&&l2.$==1)
    {
      a=p(l1.$0, l2.$0);
      l1=l1.$1;
      l2=l2.$1;
    }
  if(a&&(l1.$==1||l2.$==1))badLengths();
  return a;
}
export function head(l){
  return l.$==1?l.$0:listEmpty();
}
export function init(s, f){
  return ofArray(init_1(s, f));
}
export function iter(f, l){
  let r=l;
  while(r.$==1)
    {
      f(head(r));
      r=tail(r);
    }
}
export function iter2(f, l1, l2){
  let r1=l1;
  let r2=l2;
  while(r1.$==1)
    {
      r2.$==0?badLengths():void 0;
      f(head(r1), head(r2));
      r1=tail(r1);
      r2=tail(r2);
    }
  if(r2.$==1)badLengths();
}
export function iteri(f, l){
  let r=l;
  let i=0;
  while(r.$==1)
    {
      f(i, head(r));
      r=tail(r);
      i=i+1;
    }
}
export function iteri2(f, l1, l2){
  let r1=l1;
  let r2=l2;
  let i=0;
  while(r1.$==1)
    {
      r2.$==0?badLengths():void 0;
      f(i, head(r1), head(r2));
      r1=tail(r1);
      r2=tail(r2);
      i=i+1;
    }
  if(r2.$==1)badLengths();
}
export function length(l){
  let r=l;
  let i=0;
  while(r.$==1)
    {
      r=tail(r);
      i=i+1;
    }
  return i;
}
export function map(f, x){
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=f(l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
      }
    r.$1=FSharpList.Empty;
    return res;
  }
}
export function map2(f, x1, x2){
  let r;
  let l1;
  let l2;
  let go=x1.$==1&&x2.$==1;
  if(!go)return x1.$==1||x2.$==1?badLengths():x1;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l1=x1;
    l2=x2;
    while(go)
      {
        r.$0=f(l1.$0, l2.$0);
        l1=l1.$1;
        l2=l2.$1;
        if(l1.$==1&&l2.$==1){
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
        else go=false;
      }
    if(l1.$==1||l2.$==1)badLengths();
    r.$1=FSharpList.Empty;
    return res;
  }
}
export function map3(f, x1, x2, x3){
  let r;
  let l1;
  let l2;
  let l3;
  let go=x1.$==1&&x2.$==1&&x3.$==1;
  if(!go)return x1.$==1||x2.$==1||x3.$==1?badLengths():x1;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l1=x1;
    l2=x2;
    l3=x3;
    while(go)
      {
        r.$0=f(l1.$0, l2.$0, l3.$0);
        l1=l1.$1;
        l2=l2.$1;
        l3=l3.$1;
        if(l1.$==1&&l2.$==1&&l3.$==1){
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
        else go=false;
      }
    if(l1.$==1||l2.$==1||l3.$==1)badLengths();
    r.$1=FSharpList.Empty;
    return res;
  }
}
export function mapi(f, x){
  let r;
  let l;
  let i;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l=x;
    i=0;
    go=true;
    while(go)
      {
        r.$0=f(i, l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
          i=i+1;
        }
      }
    r.$1=FSharpList.Empty;
    return res;
  }
}
export function mapi2(f, x1, x2){
  let r;
  let l1;
  let l2;
  let i;
  let go=x1.$==1&&x2.$==1;
  if(!go)return x1.$==1||x2.$==1?badLengths():x1;
  else {
    const res=Create(FSharpList, {$:1});
    r=res;
    l1=x1;
    l2=x2;
    i=0;
    while(go)
      {
        r.$0=f(i, l1.$0, l2.$0);
        l1=l1.$1;
        l2=l2.$1;
        if(l1.$==1&&l2.$==1){
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
          i=i+1;
        }
        else go=false;
      }
    if(l1.$==1||l2.$==1)badLengths();
    r.$1=FSharpList.Empty;
    return res;
  }
}
export function max(list){
  nonEmpty(list);
  let m=list.$0;
  let l=list.$1;
  while(l.$==1)
    {
      const x=l.$0;
      if(Compare(x, m)===1)m=x;
      l=l.$1;
    }
  return m;
}
export function maxBy(f, list){
  nonEmpty(list);
  let m=list.$0;
  let fm=f(m);
  let l=list.$1;
  while(l.$==1)
    {
      const x=l.$0;
      const fx=f(x);
      if(Compare(fx, fm)===1){
        m=x;
        fm=fx;
      }
      l=l.$1;
    }
  return m;
}
export function min(list){
  nonEmpty(list);
  let m=list.$0;
  let l=list.$1;
  while(l.$==1)
    {
      const x=l.$0;
      if(Compare(x, m)===-1)m=x;
      l=l.$1;
    }
  return m;
}
export function minBy(f, list){
  nonEmpty(list);
  let m=list.$0;
  let fm=f(m);
  let l=list.$1;
  while(l.$==1)
    {
      const x=l.$0;
      const fx=f(x);
      if(Compare(fx, fm)===-1){
        m=x;
        fm=fx;
      }
      l=l.$1;
    }
  return m;
}
export function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length_1(arr)-1, _1=0;i>=_1;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
export function ofSeq(s){
  if(s instanceof FSharpList)return s;
  else if(s instanceof Array)return ofArray(s);
  else {
    const e=Get(s);
    try {
      let r;
      let go=e.MoveNext();
      if(!go)return FSharpList.Empty;
      else {
        const res=Create(FSharpList, {$:1});
        r=res;
        while(go)
          {
            r.$0=e.Current;
            if(e.MoveNext()){
              const t=Create(FSharpList, {$:1});
              r=(r.$1=t,t);
            }
            else go=false;
          }
        r.$1=FSharpList.Empty;
        return res;
      }
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
}
export function partition(p, l){
  const p_1=partition_1(p, ofList(l));
  return[ofArray(p_1[0]), ofArray(p_1[1])];
}
export function permute(f, l){
  return ofArray(permute_1(f, ofList(l)));
}
export function reduce(f, list){
  nonEmpty(list);
  let r=list.$0;
  let l=list.$1;
  while(l.$==1)
    {
      r=f(r, l.$0);
      l=l.$1;
    }
  return r;
}
export function reduceBack(f, l){
  return reduceBack_1(f, ofList(l));
}
export function replicate(size, value){
  return ofArray(create(size, value));
}
export function rev(l){
  let res=FSharpList.Empty;
  let r=l;
  while(r.$==1)
    {
      res=FSharpList.Cons(r.$0, res);
      r=r.$1;
    }
  return res;
}
export function scan(f, s, l){
  return ofSeq(scan_1(f, s, l));
}
export function scanBack(f, l, s){
  return ofArray(scanBack_1(f, ofList(l), s));
}
export function sort(l){
  const a=ofList(l);
  sortInPlace(a);
  return ofArray(a);
}
export function sortBy(f, l){
  const a=ofList(l);
  sortInPlaceBy(f, a);
  return ofArray(a);
}
export function sortByDescending(f, l){
  const a=ofList(l);
  sortInPlaceByDescending(f, a);
  return ofArray(a);
}
export function sortDescending(l){
  const a=ofList(l);
  sortInPlaceByDescending((x) => x, a);
  return ofArray(a);
}
export function sortWith(f, l){
  const a=ofList(l);
  sortInPlaceWith(f, a);
  return ofArray(a);
}
export function tail(l){
  return l.$==1?l.$1:listEmpty();
}
export function transpose(x){
  return ofSeq(map_1(ofArray, transposeArray(ofSeq_1(map_1(ofList, x)))));
}
export function unzip(l){
  const x=[];
  const y=[];
  const e=Get(l);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        x.push(f[0]);
        y.push(f[1]);
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return[ofArray(x.slice(0)), ofArray(y.slice(0))];
}
export function unzip3(l){
  const x=[];
  const y=[];
  const z=[];
  const e=Get(l);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        x.push(f[0]);
        y.push(f[1]);
        z.push(f[2]);
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return[ofArray(x.slice(0)), ofArray(y.slice(0)), ofArray(z.slice(0))];
}
export function zip(l1, l2){
  return map2((_1, _2) =>[_1, _2], l1, l2);
}
export function zip3(l1, l2, l3){
  return map3((_1, _2, _3) =>[_1, _2, _3], l1, l2, l3);
}
export function chunkBySize(size, list){
  return map(ofArray, ofSeq(chunkBySize_1(size, list)));
}
export function compareWith(f, l1, l2){
  return compareWith_1(f, l1, l2);
}
export function countBy(f, l){
  return ofArray(countBy_1(f, ofList(l)));
}
export function distinct(l){
  return ofSeq(distinct_1(l));
}
export function distinctBy(f, l){
  return ofSeq(distinctBy_1(f, l));
}
export function splitInto(count, list){
  return map(ofArray, ofArray(splitInto_1(count, ofList(list))));
}
export function except(itemsToExclude, l){
  return ofSeq(except_1(itemsToExclude, l));
}
export function tryFindBack(ok, l){
  return tryFindBack_1(ok, ofList(l));
}
export function findBack(p, s){
  const m=tryFindBack(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function findIndexBack(p, s){
  const m=tryFindIndexBack(p, ofList(s));
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function groupBy(f, l){
  const arr=groupBy_1(f, ofList(l));
  mapInPlace((_1) =>[_1[0], ofArray(_1[1])], arr);
  return ofArray(arr);
}
export function last(list){
  nonEmpty(list);
  let r=list;
  let t=r.$1;
  while(t.$==1)
    {
      r=t;
      t=r.$1;
    }
  return r.$0;
}
export function contains(el, x){
  let c=false;
  let l=x;
  while(!c&&l.$==1)
    {
      c=Equals(el, l.$0);
      l=l.$1;
    }
  return c;
}
export function mapFold(f, zero, list){
  const t=mapFold_1(f, zero, ofList(list));
  return[ofArray(t[0]), t[1]];
}
export function mapFoldBack(f, list, zero){
  const t=mapFoldBack_1(f, ofList(list), zero);
  return[ofArray(t[0]), t[1]];
}
export function pairwise(l){
  return ofSeq(pairwise_1(l));
}
export function indexed(list){
  return mapi((_1, _2) =>[_1, _2], list);
}
export function tryHead(list){
  return list.$==0?null:Some(list.$0);
}
export function exactlyOne(list){
  let _1;
  return list.$==1&&(list.$1.$==0&&(_1=list.$0,true))?_1:FailWith("The input does not have precisely one element.");
}
export function tryExactlyOne(list){
  let _1;
  return list.$==1&&(list.$1.$==0&&(_1=list.$0,true))?Some(_1):null;
}
export function unfold(f, s){
  return ofSeq(unfold_1(f, s));
}
export function windowed(windowSize, s){
  return ofSeq(map_1(ofArray, windowed_1(windowSize, s)));
}
export function splitAt(n, list){
  return[ofSeq(take(n, list)), skip(n, list)];
}
export function insertAt(index, item, l){
  let l_1;
  let r;
  let i;
  if(index>=0){
    l_1=l;
    const res=Create(FSharpList, {$:1});
    r=res;
    i=0;
    while(i<index)
      if(l_1.$==1){
        const lt=l_1.$1;
        r.$0=l_1.$0;
        const t=Create(FSharpList, {$:1});
        r=(r.$1=t,t);
        l_1=lt;
        i=i+1;
      }
      else outOfBounds();
    r.$0=item;
    r.$1=l_1;
    return res;
  }
  else return outOfBounds();
}
export function insertManyAt(index, items, l){
  let l_1;
  let r;
  let lr;
  let i;
  let empty;
  if(index>=0){
    l_1=l;
    const res=Create(FSharpList, {$:1});
    r=res;
    lr=null;
    i=0;
    empty=true;
    while(i<index)
      if(l_1.$==1){
        const lt=l_1.$1;
        const lh=l_1.$0;
        empty=false;
        r.$0=lh;
        lr=r;
        const t=Create(FSharpList, {$:1});
        r=(r.$1=t,t);
        l_1=lt;
        i=i+1;
      }
      else outOfBounds();
    const e=Get(items);
    try {
      while(e.MoveNext())
        {
          const item=e.Current;
          empty=false;
          r.$0=item;
          lr=r;
          const t_1=Create(FSharpList, {$:1});
          r=(r.$1=t_1,t_1);
        }
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
    return empty?l_1:(lr.$1=l_1,res);
  }
  else return outOfBounds();
}
export function removeAt(index, l){
  let l_1;
  let r;
  let lr;
  let i;
  if(index>=0){
    if(index===0)return tail(l);
    else {
      l_1=l;
      const res=Create(FSharpList, {$:1});
      r=res;
      lr=null;
      i=0;
      while(i<index)
        if(l_1.$==1){
          const lt=l_1.$1;
          r.$0=l_1.$0;
          lr=r;
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
          l_1=lt;
          i=i+1;
        }
        else outOfBounds();
      lr.$1=tail(l_1);
      return res;
    }
  }
  else return outOfBounds();
}
export function removeManyAt(index, number, l){
  let l_1;
  let r;
  let lr;
  let i;
  if(index>=0){
    if(index===0)return skip(number, l);
    else {
      l_1=l;
      const res=Create(FSharpList, {$:1});
      r=res;
      lr=null;
      i=0;
      while(i<index)
        if(l_1.$==1){
          const lt=l_1.$1;
          r.$0=l_1.$0;
          lr=r;
          const t=Create(FSharpList, {$:1});
          r=(r.$1=t,t);
          l_1=lt;
          i=i+1;
        }
        else outOfBounds();
      lr.$1=skip(number, l_1);
      return res;
    }
  }
  else return outOfBounds();
}
export function updateAt(index, item, l){
  let l_1;
  let r;
  let i;
  if(index>=0){
    l_1=l;
    const res=Create(FSharpList, {$:1});
    r=res;
    i=0;
    while(i<index)
      if(l_1.$==1){
        const lt=l_1.$1;
        r.$0=l_1.$0;
        const t=Create(FSharpList, {$:1});
        r=(r.$1=t,t);
        l_1=lt;
        i=i+1;
      }
      else outOfBounds();
    if(l_1.$==1){
      const lt_1=l_1.$1;
      r.$0=item;
      r.$1=lt_1;
    }
    else outOfBounds();
    return res;
  }
  else return outOfBounds();
}
export function nonEmpty(l){
  if(l.$==0)listEmpty();
}
export function listEmpty(){
  return FailWith("The input list was empty.");
}
export function badLengths(){
  return FailWith("The lists have different lengths.");
}
