import Object from "./System.Object.js"
import { Get } from "./WebSharper.Enumerator.js"
import { concat } from "./WebSharper.Collections.HashSetUtil.js"
import { set, length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { isIDisposable } from "./System.IDisposable.js"
import { exists, forall } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { forall as forall_1, ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals, Hash } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { equals, getHashCode } from "./WebSharper.Collections.DictionaryUtil.js"
export default class HashSet extends Object {
  equals;
  hash;
  data;
  count;
  GetEnumerator(){
    return Get(concat(this.data));
  }
  get Count(){
    return this.count;
  }
  CopyTo(arr, index){
    const all=concat(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++)set(arr, i+index, all[i]);
  }
  SAdd(item){
    return this.add(item);
  }
  add(item){
    const h=this.hash(item);
    const arr=this.data[h];
    return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item, arr)?false:(arr.push(item),this.count=this.count+1,true);
  }
  arrRemove(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item])){
        arr.splice(i, 1);
        c=false;
      }
      else i=i+1;
    return!c;
  }
  arrContains(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item]))c=false;
      else i=i+1;
    return!c;
  }
  UnionWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.SAdd(e.Current);
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
  SymmetricExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        {
          const item=e.Current;
          if(this.Contains(item))this.Remove(item);
          else this.SAdd(item);
        }
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
  SetEquals(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    return this.Count===other.Count&&this.IsSupersetOf(other);
  }
  RemoveWhere(cond){
    const all=concat(this.data);
    let res=0;
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(cond(item))this.Remove(item)?res=res+1:void 0;
    }
    return res;
  }
  Remove(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrRemove(item, arr)&&(this.count=this.count-1,true);
  }
  Overlaps(xs){
    return exists((i) => this.Contains(i), xs);
  }
  IsSupersetOf(xs){
    return forall((i) => this.Contains(i), xs);
  }
  IsSubsetOf(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    return forall_1((i) => other.Contains(i), concat(this.data));
  }
  IsProperSupersetOf(xs){
    const other=ofSeq(xs);
    return this.count>length(other)&&this.IsSupersetOf(other);
  }
  IsProperSubsetOf(xs){
    const other=ofSeq(xs);
    return this.count<length(other)&&this.IsSubsetOf(other);
  }
  IntersectWith(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    const all=concat(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(!other.Contains(item))this.Remove(item);
    }
  }
  ExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.Remove(e.Current);
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
  CopyTo_1(arr, index, count){
    let i=0;
    const all=concat(this.data);
    for(let i_1=0, _1=count-1;i_1<=_1;i_1++)set(arr, i_1+index, all[i_1]);
  }
  Contains(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrContains(item, arr);
  }
  Clear(){
    this.data=[];
    this.count=0;
  }
  Add(x){
    this.SAdd(x);
  }
  get IsReadOnly(){
    return false;
  }
  constructor(i, _1, _2, _3){
    if(i=="New_3"){
      i="New_4";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let init;
    if(i=="New_2"){
      init=_1;
      i="New_4";
      _1=init;
      _2=Equals;
      _3=Hash;
    }
    let comparer;
    if(i=="New_1"){
      comparer=_1;
      i="New_4";
      _1=[];
      _2=equals(comparer);
      _3=(x) => getHashCode(comparer, x);
    }
    let init_1;
    let comparer_1;
    if(i=="New"){
      init_1=_1;
      comparer_1=_2;
      i="New_4";
      _1=init_1;
      _2=equals(comparer_1);
      _3=(x) => getHashCode(comparer_1, x);
    }
    if(i=="New_4"){
      const init_2=_1;
      const equals_1=_2;
      const hash=_3;
      super();
      this.equals=equals_1;
      this.hash=hash;
      this.data=[];
      this.count=0;
      const e=Get(init_2);
      try {
        while(e.MoveNext())
          this.add(e.Current);
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
