import Object from "./System.Object.js"
import { Get, ArrayCopyTo } from "./WebSharper.Enumerator.js"
import { Enumerate, OfSeq, Remove, Contains, Add } from "./WebSharper.Collections.BalancedTree.js"
import { forall2, append, head, forall, compareWith } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Equals, Hash, Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Filter } from "./Microsoft.FSharp.Collections.SetModule.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export default class FSharpSet extends Object {
  tree;
  GetEnumerator(){
    return Get(Enumerate(false, this.tree));
  }
  get Count(){
    const tree=this.tree;
    return tree==null?0:tree.Count;
  }
  Equals(other){
    return this.Count===other.Count&&forall2(Equals, this, other);
  }
  GetHashCode(){
    return -1741749453+Hash(ofSeq(this));
  }
  static op_Subtraction(x, y){
    return Filter((x_1) =>!y.Contains(x_1), x);
  }
  static op_Addition(x, y){
    return new FSharpSet("New_2", OfSeq(append(x, y)));
  }
  Remove_1(v){
    return new FSharpSet("New_2", Remove(v, this.tree));
  }
  get MinimumElement(){
    return head(Enumerate(false, this.tree));
  }
  get MaximumElement(){
    return head(Enumerate(true, this.tree));
  }
  IsSupersetOf(s){
    return forall((v) => this.Contains(v), s);
  }
  IsSubsetOf(s){
    return forall((v) => s.Contains(v), this);
  }
  IsProperSupersetOf(s){
    return this.IsSupersetOf(s)&&this.Count>s.Count;
  }
  IsProperSubsetOf(s){
    return this.IsSubsetOf(s)&&this.Count<s.Count;
  }
  get Tree(){
    return this.tree;
  }
  get IsEmpty(){
    return this.tree==null;
  }
  Contains(v){
    return Contains(v, this.tree);
  }
  Add_1(x){
    return new FSharpSet("New_2", Add(x, this.tree));
  }
  sub(x){
    return Filter((x_1) =>!x.Contains(x_1), this);
  }
  add(x){
    return new FSharpSet("New_2", OfSeq(append(this, x)));
  }
  Remove(p){
    return FailWith("Set values cannot be mutated.");
  }
  CopyTo(arr, index){
    ArrayCopyTo(ofSeq(this), arr, index);
  }
  Clear(){
    FailWith("Set values cannot be mutated.");
  }
  Add(p){
    FailWith("Set values cannot be mutated.");
  }
  get IsReadOnly(){
    return true;
  }
  CompareTo0(other){
    return compareWith(Compare, this, other);
  }
  constructor(i, _1){
    let s;
    if(i=="New_1"){
      s=_1;
      i="New_2";
      _1=OfSeq(s);
    }
    if(i=="New"){
      i="New_2";
      _1=null;
    }
    if(i=="New_2"){
      const tree=_1;
      super();
      this.tree=tree;
    }
  }
}
