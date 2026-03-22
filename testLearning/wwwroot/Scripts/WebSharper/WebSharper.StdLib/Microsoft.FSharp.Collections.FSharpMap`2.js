import Object from "./System.Object.js"
import { Get, ArrayCopyTo } from "./WebSharper.Enumerator.js"
import { map, forall2, compareWith } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Enumerate, TryFind, Remove, Contains, Change, Add } from "./WebSharper.Collections.BalancedTree.js"
import { Equals, Hash, Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
import Pair from "./WebSharper.Collections.Pair`2.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import KeyNotFoundException from "./System.Collections.Generic.KeyNotFoundException.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { fromSeq } from "./WebSharper.Collections.MapUtil.js"
export default class FSharpMap extends Object {
  tree;
  GetEnumerator(){
    return Get(map((kv) =>({K:kv.Key, V:kv.Value}), Enumerate(false, this.tree)));
  }
  get Count(){
    const tree=this.tree;
    return tree==null?0:tree.Count;
  }
  Equals(other){
    return this.Count===other.Count&&forall2(Equals, this, other);
  }
  GetHashCode(){
    return Hash(ofSeq(this));
  }
  get Values(){
    return MarkResizable(ofSeq(map((kvp) => kvp.Value, Enumerate(false, this.Tree))));
  }
  get Keys(){
    return MarkResizable(ofSeq(map((kvp) => kvp.Key, Enumerate(false, this.Tree))));
  }
  TryFind(k){
    const o=TryFind(Pair.New(k, void 0), this.tree);
    return o==null?null:Some(o.$0.Value);
  }
  Remove_1(k){
    return new FSharpMap("New_1", Remove(Pair.New(k, void 0), this.tree));
  }
  get_Item(k){
    const m=this.TryFind(k);
    if(m==null)throw new KeyNotFoundException("New");
    else return m.$0;
  }
  get IsEmpty(){
    return this.tree==null;
  }
  TryGetValue(k, r){
    const m=this.TryFind(k);
    return m!=null&&m.$==1&&(r.set(m.$0),true);
  }
  ContainsKey(k){
    return Contains(Pair.New(k, void 0), this.tree);
  }
  Change(k, f){
    return new FSharpMap("New_1", Change(Pair.New(k, void 0), (x) => {
      const o=f(x==null?null:Some(x.$0.Value));
      return o==null?null:Some(Pair.New(k, o.$0));
    }, this.tree));
  }
  Add_1(k, v){
    return new FSharpMap("New_1", Add(Pair.New(k, v), this.tree));
  }
  get Tree(){
    return this.tree;
  }
  Remove(p){
    return FailWith("Map values cannot be mutated.");
  }
  CopyTo(arr, index){
    ArrayCopyTo(ofSeq(this), arr, index);
  }
  Contains(p){
    let v;
    v=void 0;
    return this.TryGetValue(p.K, {get:() => v, set:(v_1) => {
      v=v_1;
    }})&&Equals(v, p.V);
  }
  Clear(){
    FailWith("Map values cannot be mutated.");
  }
  Add(p){
    FailWith("Map values cannot be mutated.");
  }
  get IsReadOnly(){
    return true;
  }
  CompareTo0(other){
    return compareWith((_1, _2) => Compare(_1, _2), this, other);
  }
  constructor(i, _1){
    let s;
    if(i=="New"){
      s=_1;
      i="New_1";
      _1=fromSeq(s);
    }
    if(i=="New_1"){
      const tree=_1;
      super();
      this.tree=tree;
    }
  }
}
