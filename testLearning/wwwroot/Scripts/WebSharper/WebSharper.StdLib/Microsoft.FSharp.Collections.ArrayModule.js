import { length, set, checkRange } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { outOfBounds, nonNegative, insufficient, tryFindIndexBack, tryFindBack, except as except_1, chunkBySize as chunkBySize_1, transposeArray, mapInPlace, mapiInPlace } from "./WebSharper.CollectionInternals.js"
import { windowed as windowed_1, unfold as unfold_1, pairwise as pairwise_1, distinctBy as distinctBy_1, distinct as distinct_1, compareWith as compareWith_1 } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { Get } from "./WebSharper.Enumerator.js"
import { isIDisposable } from "./System.IDisposable.js"
import { head as head_1, tail as tail_1 } from "./Microsoft.FSharp.Collections.ListModule.js"
export function sumBy(f, arr){
  let sum_1=0;
  for(let i=0;i<arr.length;i++)sum_1+=f(arr[i]);
  return sum_1;
}
export function sum(arr){
  let sum_1=0;
  for(let i=0;i<arr.length;i++)sum_1+=arr[i];
  return sum_1;
}
export function updateAt(index, item, arr){
  if(index>=0&&length(arr)>index){
    const res=arr.slice();
    set(res, index, item);
    return res;
  }
  else return outOfBounds();
}
export function removeManyAt(index, number, arr){
  if(index>=0&&length(arr)>index+number){
    const res=arr.slice();
    res.splice(index, number);
    return res;
  }
  else return outOfBounds();
}
export function removeAt(index, arr){
  if(index>=0&&length(arr)>index){
    const res=arr.slice();
    res.splice(index, 1);
    return res;
  }
  else return outOfBounds();
}
export function insertManyAt(index, items, arr){
  if(index>=0&&length(arr)>=index){
    const res=arr.slice();
    let ps=ofSeq(items);
    res.splice.apply(res, [index, 0].concat(ps));
    return res;
  }
  else return outOfBounds();
}
export function insertAt(index, item, arr){
  if(index>=0&&length(arr)>=index){
    const res=arr.slice();
    res.splice(index, 0, item);
    return res;
  }
  else return outOfBounds();
}
export function splitAt(n, ar){
  return[take(n, ar), skip(n, ar)];
}
export function windowed(windowSize, s){
  return ofSeq(windowed_1(windowSize, s));
}
export function unfold(f, s){
  return ofSeq(unfold_1(f, s));
}
export function tryExactlyOne(ar){
  return ar.length===1?Some(ar[0]):null;
}
export function exactlyOne(ar){
  return ar.length===1?ar[0]:FailWith("The input does not have precisely one element.");
}
export function takeWhile(predicate, ar){
  let i=0;
  while(i<ar.length&&predicate(ar[i]))
    i=i+1;
  return ar.slice(0, i);
}
export function take(n, ar){
  return n<0?nonNegative():n>ar.length?insufficient():ar.slice(0, n);
}
export function tail(ar){
  return skip(1, ar);
}
export function skipWhile(predicate, ar){
  let i=0;
  while(i<ar.length&&predicate(ar[i]))
    i=i+1;
  return ar.slice(i);
}
export function skip(i, ar){
  return i<0?nonNegative():i>ar.length?insufficient():ar.slice(i);
}
export function indexed(ar){
  return mapi((_1, _2) =>[_1, _2], ar);
}
export function replicate(size, value){
  return create(size, value);
}
export function pairwise(a){
  return ofSeq(pairwise_1(a));
}
export function map3(f, arr1, arr2, arr3){
  checkLength(arr1, arr2);
  checkLength(arr1, arr3);
  const r=new Array(arr3.length);
  for(let i=0, _1=arr3.length-1;i<=_1;i++)r[i]=f(arr1[i], arr2[i], arr3[i]);
  return r;
}
export function last(arr){
  nonEmpty(arr);
  return arr[arr.length-1];
}
export function head(arr){
  nonEmpty(arr);
  return arr[0];
}
export function findIndexBack(p, s){
  const m=tryFindIndexBack(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function findBack(p, s){
  const m=tryFindBack(p, s);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function except(itemsToExclude, a){
  return ofSeq(except_1(itemsToExclude, a));
}
export function distinctBy(f, a){
  return ofSeq(distinctBy_1(f, a));
}
export function distinct(l){
  return ofSeq(distinct_1(l));
}
export function compareWith(f, a1, a2){
  return compareWith_1(f, a1, a2);
}
export function chunkBySize(size, array){
  return ofSeq(chunkBySize_1(size, array));
}
export function zip3(arr1, arr2, arr3){
  checkLength(arr1, arr2);
  checkLength(arr2, arr3);
  const res=create(arr1.length, null);
  for(let i=0, _1=arr1.length-1;i<=_1;i++)res[i]=[arr1[i], arr2[i], arr3[i]];
  return res;
}
export function zip(arr1, arr2){
  checkLength(arr1, arr2);
  const res=create(arr1.length, null);
  for(let i=0, _1=arr1.length-1;i<=_1;i++)res[i]=[arr1[i], arr2[i]];
  return res;
}
export function unzip3(arr){
  const x=[];
  const y=[];
  const z=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=arr[i];
    x.push(m[0]);
    y.push(m[1]);
    z.push(m[2]);
  }
  return[x, y, z];
}
export function unzip(arr){
  const x=[];
  const y=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const p=arr[i];
    x.push(p[0]);
    y.push(p[1]);
  }
  return[x, y];
}
export function tryPick(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      const m=f(arr[i]);
      if(m!=null&&m.$==1)res=m;
      i=i+1;
    }
  return res;
}
export function tryLast(arr){
  const len=arr.length;
  return len===0?null:Some(arr[len-1]);
}
export function tryItem(i, arr){
  return arr.length<=i||i<0?null:Some(arr[i]);
}
export function tryHead(arr){
  return arr.length===0?null:Some(arr[0]);
}
export function tryFindIndex(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(i):void 0;
      i=i+1;
    }
  return res;
}
export function tryFind(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(arr[i]):void 0;
      i=i+1;
    }
  return res;
}
export function transpose(x){
  return x instanceof Array?transposeArray(x):transposeArray(ofSeq(x));
}
export function averageBy(f, arr){
  nonEmpty(arr);
  return sumBy(f, arr)/arr.length;
}
export function average(arr){
  nonEmpty(arr);
  return sum(arr)/arr.length;
}
export function sortDescending(arr){
  return map((t) => t[0], mapi((_1, _2) =>[_2, _1], arr).sort((_1, _2) =>-Compare(_1, _2)));
}
export function sortByDescending(f, arr){
  return map((t) => t[0], mapi((_1, _2) =>[_2, [f(_2), _1]], arr).sort((_1, _2) =>-Compare(_1[1], _2[1])));
}
export function sortWith(comparer, arr){
  return arr.slice().sort(comparer);
}
export function sortInPlaceWith(comparer, arr){
  arr.sort(comparer);
}
export function sortInPlaceBy(f, arr){
  mapInPlace((t) => t[0], mapiInPlace((_1, _2) =>[_2, [f(_2), _1]], arr).sort((_1, _2) => Compare(_1[1], _2[1])));
}
export function sortInPlace(arr){
  mapInPlace((t) => t[0], mapiInPlace((_1, _2) =>[_2, _1], arr).sort(Compare));
}
export function sortBy(f, arr){
  return map((t) => t[0], mapi((_1, _2) =>[_2, [f(_2), _1]], arr).sort((_1, _2) => Compare(_1[1], _2[1])));
}
export function sort(arr){
  return map((t) => t[0], mapi((_1, _2) =>[_2, _1], arr).sort(Compare));
}
export function scanBack(f, arr, zero){
  const len=arr.length;
  const ret=new Array(1+len);
  ret[len]=zero;
  for(let i=0, _1=len-1;i<=_1;i++)ret[len-i-1]=f(arr[len-i-1], ret[len-i]);
  return ret;
}
export function scan(f, zero, arr){
  const ret=new Array(1+arr.length);
  ret[0]=zero;
  for(let i=0, _1=arr.length-1;i<=_1;i++)ret[i+1]=f(ret[i], arr[i]);
  return ret;
}
export function reduceBack(f, arr){
  nonEmpty(arr);
  const len=arr.length;
  let acc=arr[len-1];
  for(let i=2, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
export function reduce(f, arr){
  nonEmpty(arr);
  let acc=arr[0];
  for(let i=1, _1=arr.length-1;i<=_1;i++)acc=f(acc, arr[i]);
  return acc;
}
export function pick(f, arr){
  const m=tryPick(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function permute(f, arr){
  const ret=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)ret[f(i)]=arr[i];
  return ret;
}
export function partition(f, arr){
  const ret1=[];
  const ret2=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))ret1.push(arr[i]);
  else ret2.push(arr[i]);
  return[ret1, ret2];
}
export function ofSeq(xs){
  if(xs instanceof Array)return xs.slice();
  else if(xs instanceof FSharpList)return ofList(xs);
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      const _1=o;
      if(typeof _1=="object"&&isIDisposable(_1))o.Dispose();
    }
  }
}
export function ofList(xs){
  const q=[];
  let l=xs;
  while(!(l.$==0))
    {
      q.push(head_1(l));
      l=tail_1(l);
    }
  return q;
}
export function minBy(f, arr){
  nonEmpty(arr);
  let m=arr[0];
  let fm=f(m);
  for(let i=1, _1=arr.length-1;i<=_1;i++){
    const x=arr[i];
    const fx=f(x);
    if(Compare(fx, fm)===-1){
      m=x;
      fm=fx;
    }
  }
  return m;
}
export function min(arr){
  nonEmpty(arr);
  let m=arr[0];
  for(let i=1, _1=arr.length-1;i<=_1;i++){
    const x=arr[i];
    if(Compare(x, m)===-1)m=x;
  }
  return m;
}
export function maxBy(f, arr){
  nonEmpty(arr);
  let m=arr[0];
  let fm=f(m);
  for(let i=1, _1=arr.length-1;i<=_1;i++){
    const x=arr[i];
    const fx=f(x);
    if(Compare(fx, fm)===1){
      m=x;
      fm=fx;
    }
  }
  return m;
}
export function max(arr){
  nonEmpty(arr);
  let m=arr[0];
  for(let i=1, _1=arr.length-1;i<=_1;i++){
    const x=arr[i];
    if(Compare(x, m)===1)m=x;
  }
  return m;
}
export function mapi2(f, arr1, arr2){
  checkLength(arr1, arr2);
  const res=new Array(arr1.length);
  for(let i=0, _1=arr1.length-1;i<=_1;i++)res[i]=f(i, arr1[i], arr2[i]);
  return res;
}
export function mapi(f, arr){
  const y=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)y[i]=f(i, arr[i]);
  return y;
}
export function map2(f, arr1, arr2){
  checkLength(arr1, arr2);
  const r=new Array(arr2.length);
  for(let i=0, _1=arr2.length-1;i<=_1;i++)r[i]=f(arr1[i], arr2[i]);
  return r;
}
export function map(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
  return r;
}
export function iteri2(f, arr1, arr2){
  checkLength(arr1, arr2);
  for(let i=0, _1=arr1.length-1;i<=_1;i++)f(i, arr1[i], arr2[i]);
}
export function iteri(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(i, arr[i]);
}
export function iter2(f, arr1, arr2){
  checkLength(arr1, arr2);
  for(let i=0, _1=arr1.length-1;i<=_1;i++)f(arr1[i], arr2[i]);
}
export function iter(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
}
export function init(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=f(i);
  return r;
}
export function forall2(f, x1, x2){
  checkLength(x1, x2);
  let a=true;
  let i=0;
  const l=length(x1);
  while(a&&i<l)
    if(f(x1[i], x2[i]))i=i+1;
    else a=false;
  return a;
}
export function forall(f, x){
  let a=true;
  let i=0;
  const l=length(x);
  while(a&&i<l)
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
export function foldBack2(f, arr1, arr2, zero){
  checkLength(arr1, arr2);
  const len=arr1.length;
  let accum=zero;
  for(let i=1, _1=len;i<=_1;i++)accum=f(arr1[len-i], arr2[len-i], accum);
  return accum;
}
export function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
export function fold2(f, zero, arr1, arr2){
  checkLength(arr1, arr2);
  let accum=zero;
  for(let i=0, _1=arr1.length-1;i<=_1;i++)accum=f(accum, arr1[i], arr2[i]);
  return accum;
}
export function fold(f, zero, arr){
  let acc=zero;
  for(let i=0, _1=arr.length-1;i<=_1;i++)acc=f(acc, arr[i]);
  return acc;
}
export function findIndex(f, arr){
  const m=tryFindIndex(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function find(f, arr){
  const m=tryFind(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
export function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
export function fill(arr, start, length_1, value){
  checkRange(arr, start, length_1);
  for(let i=start, _1=start+length_1-1;i<=_1;i++)arr[i]=value;
}
export function exists2(f, x1, x2){
  checkLength(x1, x2);
  let e=false;
  let i=0;
  const l=length(x1);
  while(!e&&i<l)
    if(f(x1[i], x2[i]))e=true;
    else i=i+1;
  return e;
}
export function exists(f, x){
  let e=false;
  let i=0;
  const l=length(x);
  while(!e&&i<l)
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
}
export function create(size, value){
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=value;
  return r;
}
export function concat(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
export function collect(f, x){
  return Array.prototype.concat.apply([], map(f, x));
}
export function choose(f, arr){
  const q=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
  }
  return q;
}
export function blit(arr1, start1, arr2, start2, length_1){
  checkRange(arr1, start1, length_1);
  checkRange(arr2, start2, length_1);
  for(let i=0, _1=length_1-1;i<=_1;i++)arr2[start2+i]=arr1[start1+i];
}
export function allPairs(array1, array2){
  const len1=array1.length;
  const len2=array2.length;
  const res=new Array(len1*len2);
  for(let i=0, _1=len1-1;i<=_1;i++)for(let j=0, _2=len2-1;j<=_2;j++)res[i*len2+j]=[array1[i], array2[j]];
  return res;
}
export function avgByGen(add, divByInt, zero, f, arr){
  nonEmpty(arr);
  return divByInt(fold((_1, _2) => add(_1, f(_2)), zero, arr), arr.length);
}
export function avgGen(add, divByInt, zero, arr){
  nonEmpty(arr);
  return divByInt(fold(add, zero, arr), arr.length);
}
export function nonEmpty(arr){
  if(arr.length===0)FailWith("The input array was empty.");
}
export function checkLength(arr1, arr2){
  if(arr1.length!==arr2.length)FailWith("The arrays have different lengths.");
}
