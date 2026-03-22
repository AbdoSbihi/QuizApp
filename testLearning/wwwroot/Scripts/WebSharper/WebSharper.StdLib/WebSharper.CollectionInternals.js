import { length, get, set, sub } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { InvalidArg, toInt, FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { create } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { head, tail } from "./Microsoft.FSharp.Collections.ListModule.js"
import { Get } from "./WebSharper.Enumerator.js"
import { Equals, Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { isIDisposable } from "./System.IDisposable.js"
import Dictionary from "./System.Collections.Generic.Dictionary`2.js"
import HashSet from "./System.Collections.Generic.HashSet`1.js"
import T from "./WebSharper.Enumerator.T`2.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
export function randomShuffleInPlace(source){
  randomShuffleInPlaceBy(() => Math.random(), source);
}
export function randomShuffleInPlaceBy(randomizer, source){
  for(let i=length(source)-1, _1=0;i>=_1;i--){
    let si;
    const j=next(randomizer, i);
    si=get(source, i);
    set(source, i, get(source, j));
    set(source, j, si);
  }
}
export function randomSample(count, source){
  return randomSampleBy(() => Math.random(), count, source);
}
export function randomSampleBy(randomizer, count, source){
  const inputLength=length(source);
  if(inputLength===0)InvalidArg("source", "Empty source.");
  else null;
  if(count>inputLength)InvalidArg("count", "Not enough elements.");
  else null;
  const pool=source.slice();
  const result=create(count, void 0);
  for(let i=0, _1=count-1;i<=_1;i++){
    const j=next(randomizer, inputLength-i);
    set(result, i, get(pool, j));
    set(pool, j, get(pool, inputLength-i-1));
  }
  return result;
}
export function randomChoice(source){
  return randomChoiceBy(() => Math.random(), source);
}
export function randomChoiceBy(randomizer, source){
  return get(source, next(randomizer, length(source)));
}
export function next(randomizer, maxValue){
  const value=randomizer();
  if(value<0||value>=1)InvalidArg("randomizer", "Randomizer returned "+String(value)+", should be in range [0.0, 1.0).");
  return toInt(value*maxValue);
}
export function transposeArray(array){
  const len=length(array);
  if(len===0)return[];
  else {
    const lenInner=length(get(array, 0));
    for(let j=1, _1=len-1;j<=_1;j++)if(lenInner!==length(get(array, j)))FailWith("The arrays have different lengths.");
    const result=new Array(lenInner);
    for(let i=0, _2=lenInner-1;i<=_2;i++){
      result[i]=new Array(len);
      for(let j_1=0, _3=len-1;j_1<=_3;j_1++)result[i][j_1]=get(get(array, j_1), i);
    }
    return result;
  }
}
export function nonNegative(){
  return FailWith("The input must be non-negative.");
}
export function skipWhile(predicate, list){
  let rest=list;
  while(!(rest.$==0)&&predicate(head(rest)))
    rest=tail(rest);
  return rest;
}
export function seqContains(el, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=Equals(e.Current, el);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function last(s){
  const e=Get(s);
  try {
    let res;
    if(!e.MoveNext())return insufficient();
    else {
      res=e.Current;
      while(e.MoveNext())
        res=e.Current;
      return res;
    }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function outOfBounds(){
  return InvalidArg("index", "index must be within bounds");
}
export function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
export function groupBy(f, a){
  const d=new Dictionary("New_5");
  const keys=[];
  for(let i=0, _1=length(a)-1;i<=_1;i++){
    const c=a[i];
    const k=f(c);
    if(d.ContainsKey(k))d.Item(k).push(c);
    else {
      keys.push(k);
      d.DAdd(k, [c]);
    }
  }
  mapInPlace((k_1) =>[k_1, d.Item(k_1)], keys);
  return keys;
}
export function skip(i, l){
  let res=l;
  for(let j=1, _1=i;j<=_1;j++)if(res.$==0)FailWith("Input list too short.");
  else res=res.$1;
  return res;
}
export function except(itemsToExclude, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    const seen=new HashSet("New_2", itemsToExclude);
    return new T(null, null, (e) => {
      let cur;
      let has;
      if(o.MoveNext()){
        cur=o.Current;
        has=seen.SAdd(cur);
        while(!has&&o.MoveNext())
          {
            cur=o.Current;
            has=seen.SAdd(cur);
          }
        return has&&(e.c=cur,true);
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
export function countBy(f, a){
  const d=new Dictionary("New_5");
  const keys=[];
  for(let i=0, _1=length(a)-1;i<=_1;i++){
    const k=f(a[i]);
    if(d.ContainsKey(k))d.set_Item(k, d.Item(k)+1);
    else {
      keys.push(k);
      d.DAdd(k, 1);
    }
  }
  mapInPlace((k_1) =>[k_1, d.Item(k_1)], keys);
  return keys;
}
export function chunkBySize(size, s){
  size<=0?FailWith("Chunk size must be positive"):void 0;
  return{GetEnumerator:() => {
    const o=Get(s);
    return new T(true, null, (e) => {
      if(e.s&&o.MoveNext()){
        const res=[o.Current];
        while(e.s&&length(res)<size)
          if(o.MoveNext())res.push(o.Current);
          else e.s=false;
        e.c=res;
        return true;
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
export function tryLast(s){
  const e=Get(s);
  try {
    let c;
    if(e.MoveNext()){
      c=e.Current;
      while(e.MoveNext())
        c=e.Current;
      return Some(c);
    }
    else return null;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function tryItem(i, s){
  let j;
  if(i<0)return null;
  else {
    j=0;
    const e=Get(s);
    try {
      let go=true;
      while(go&&j<=i)
        if(e.MoveNext())j=j+1;
        else go=false;
      return go?Some(e.Current):null;
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
}
export function tryHead(s){
  const e=Get(s);
  try {
    return e.MoveNext()?Some(e.Current):null;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
export function sortInPlaceByDescending(f, arr){
  mapInPlace((t) => t[0], mapiInPlace((_1, _2) =>[_2, [f(_2), _1]], arr).sort((_1, _2) =>-Compare(_1[1], _2[1])));
}
export function mapiInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(i, arr[i]);
  return arr;
}
export function mapInPlace(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)arr[i]=f(arr[i]);
}
export function mapFoldBack(f, arr, zero){
  const r=new Array(arr.length);
  let acc=zero;
  const len=arr.length;
  for(let j=1, _1=len;j<=_1;j++){
    const i=len-j;
    const p=f(arr[i], acc);
    r[i]=p[0];
    acc=p[1];
  }
  return[r, acc];
}
export function mapFold(f, zero, arr){
  const r=new Array(arr.length);
  let acc=zero;
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const p=f(acc, arr[i]);
    r[i]=p[0];
    acc=p[1];
  }
  return[r, acc];
}
export function tryFindIndexBack(f, arr){
  let res=null;
  let i=arr.length-1;
  while(i>=0&&res==null)
    {
      f(get(arr, i))?res=Some(i):void 0;
      i=i-1;
    }
  return res;
}
export function tryFindBack(f, arr){
  let res=null;
  let i=arr.length-1;
  while(i>=0&&res==null)
    {
      const r=arr[i];
      if(f(r))res=Some(r);
      i=i-1;
    }
  return res;
}
export function arrContains(item, arr){
  let c=true;
  let i=0;
  const l=length(arr);
  while(c&&i<l)
    if(Equals(arr[i], item))c=false;
    else i=i+1;
  return!c;
}
export function splitInto(count, arr){
  let startIndex;
  if(count<=0)FailWith("Count must be positive");
  const len=length(arr);
  if(len===0)return[];
  else {
    const count_1=Compare(count, len)===-1?count:len;
    const res=create(count_1, null);
    const minChunkSize=len/count_1>>0;
    startIndex=0;
    for(let i=0, _1=len%count_1-1;i<=_1;i++){
      res[i]=sub(arr, startIndex, minChunkSize+1);
      startIndex=startIndex+minChunkSize+1;
    }
    for(let i_1=len%count_1, _2=count_1-1;i_1<=_2;i_1++){
      res[i_1]=sub(arr, startIndex, minChunkSize);
      startIndex=startIndex+minChunkSize;
    }
    return res;
  }
}
