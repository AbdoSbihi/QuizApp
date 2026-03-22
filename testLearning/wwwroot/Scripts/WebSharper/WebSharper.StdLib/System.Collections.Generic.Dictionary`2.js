import Object from "./System.Object.js"
import KeyCollection from "./System.Collections.Generic.Dictionary`2.KeyCollection.js"
import ValueCollection from "./System.Collections.Generic.Dictionary`2.ValueCollection.js"
import { Get0, ArrayCopyTo, Get } from "./WebSharper.Enumerator.js"
import { concat, filter, exists, tryFindIndex, pick, tryPick, ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { GetFieldValues } from "./WebSharper.JavaScript.JS.js"
import { KeyValue } from "./Microsoft.FSharp.Core.Operators.js"
import { length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { alreadyAdded, notPresent, equals, getHashCode } from "./WebSharper.Collections.DictionaryUtil.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { exists as exists_1 } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Equals, Hash } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { isIDisposable } from "./System.IDisposable.js"
export default class Dictionary extends Object {
  equals;
  hash;
  count;
  data;
  get Keys(){
    return new KeyCollection(this);
  }
  get Values(){
    return new ValueCollection(this);
  }
  RemoveKey(k){
    return this.remove(k);
  }
  GetEnumerator(){
    return Get0(concat(GetFieldValues(this.data)));
  }
  set_Item(k, v){
    this.set(k, v);
  }
  Item(k){
    return this.get(k);
  }
  DAdd(k, v){
    this.add(k, v);
  }
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  add(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      exists((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d)?alreadyAdded():void 0;
      this.count=this.count+1;
      d.push({K:k, V:v});
    }
  }
  set(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      const m=tryFindIndex((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      if(m==null){
        this.count=this.count+1;
        d.push({K:k, V:v});
      }
      else d[m.$0]={K:k, V:v};
    }
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  TryGetValue(k, res){
    const d=this.data[this.hash(k)];
    if(d==null)return false;
    else {
      const v=tryPick((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  ContainsValue(v){
    return exists_1((a) => Equals((KeyValue(a))[1], v), this);
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
  }
  Clear(){
    this.data=[];
    this.count=0;
  }
  get IsFixedSize(){
    return false;
  }
  Remove(p){
    let o;
    const m=(o=void 0,[this.TryGetValue(p.K, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    return m[0]&&(Equals(m[1], p.V)&&this.RemoveKey(p.K));
  }
  CopyTo(arr, index){
    ArrayCopyTo(ofSeq(this), arr, index);
  }
  Contains(p){
    let o;
    const m=(o=void 0,[this.TryGetValue(p.K, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    return m[0]&&Equals(m[1], p.V);
  }
  Add(p){
    this.DAdd(p.K, p.V);
  }
  get Count(){
    return this.count;
  }
  get IsReadOnly(){
    return false;
  }
  constructor(i, _1, _2, _3){
    let capacity;
    if(i=="New_4"){
      capacity=_1;
      i="New_5";
    }
    let capacity_1;
    let comparer;
    if(i=="New_2"){
      capacity_1=_1;
      comparer=_2;
      i="New_3";
      _1=comparer;
    }
    if(i=="New_5"){
      i="New_6";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let comparer_1;
    if(i=="New_3"){
      comparer_1=_1;
      i="New_6";
      _1=[];
      _2=equals(comparer_1);
      _3=(x_1) => getHashCode(comparer_1, x_1);
    }
    let dictionary;
    if(i=="New_1"){
      dictionary=_1;
      i="New_6";
      _1=dictionary;
      _2=Equals;
      _3=Hash;
    }
    let dictionary_1;
    let comparer_2;
    if(i=="New"){
      dictionary_1=_1;
      comparer_2=_2;
      i="New_6";
      _1=dictionary_1;
      _2=equals(comparer_2);
      _3=(x_1) => getHashCode(comparer_2, x_1);
    }
    if(i=="New_6"){
      const init=_1;
      const equals_1=_2;
      const hash=_3;
      super();
      this.equals=equals_1;
      this.hash=hash;
      this.count=0;
      this.data=[];
      const e=Get(init);
      try {
        while(e.MoveNext())
          {
            const x=e.Current;
            this.set(x.K, x.V);
          }
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
