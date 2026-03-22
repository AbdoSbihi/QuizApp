import Object from "./System.Object.js"
import Enumerator from "./System.Collections.Generic.LinkedList`1.Enumerator.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { set } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Get } from "./WebSharper.Enumerator.js"
export default class LinkedList extends Object {
  init;
  c;
  n;
  p;
  GetEnumerator(){
    return new Enumerator(this);
  }
  CopyTo(arr, index){
    let node=this.n;
    let i=index;
    while(!Equals(node, null))
      {
        set(arr, i, node.v);
        node=node.n;
        i=i+1;
      }
  }
  RemoveLast(){
    this.Remove_1(this.p);
  }
  RemoveFirst(){
    this.Remove_1(this.n);
  }
  Remove(value){
    const node=this.Find(value);
    return Equals(node, null)?false:(this.Remove_1(node),true);
  }
  Remove_1(node){
    const before=node.p;
    const after=node.n;
    if(Equals(before, null))this.n=after;
    else before.n=after;
    if(Equals(after, null))this.p=before;
    else after.p=before;
    this.c=this.c-1;
  }
  FindLast(value){
    let node=this.p;
    let notFound=true;
    while(notFound&&!Equals(node, null))
      if(node.v==value)notFound=false;
      else node=node.p;
    return notFound?null:node;
  }
  Find(value){
    let node=this.n;
    let notFound=true;
    while(notFound&&!Equals(node, null))
      if(node.v==value)notFound=false;
      else node=node.n;
    return notFound?null:node;
  }
  Contains(value){
    let found=false;
    let node=this.n;
    while(!Equals(node, null)&&!found)
      if(node.v==value)found=true;
      else node=node.n;
    return found;
  }
  Clear(){
    this.c=0;
    this.n=null;
    this.p=null;
  }
  AddLast(value){
    if(this.c===0){
      const node={
        p:null, 
        n:null, 
        v:value, 
        l:this
      };
      this.n=node;
      this.p=this.n;
      this.c=1;
      return node;
    }
    else return this.AddAfter(this.p, value);
  }
  AddFirst(value){
    if(this.c===0){
      const node={
        p:null, 
        n:null, 
        v:value, 
        l:this
      };
      this.n=node;
      this.p=this.n;
      this.c=1;
      return node;
    }
    else return this.AddBefore(this.n, value);
  }
  AddBefore(before, value){
    const after=before.p;
    const node={
      p:after, 
      n:before, 
      v:value, 
      l:this
    };
    if(Equals(before.p, null))this.n=node;
    before.p=node;
    if(!Equals(after, null))after.n=node;
    this.c=this.c+1;
    return node;
  }
  AddAfter(after, value){
    const before=after.n;
    const node={
      p:after, 
      n:before, 
      v:value, 
      l:this
    };
    if(Equals(after.n, null))this.p=node;
    after.n=node;
    if(!Equals(before, null))before.p=node;
    this.c=this.c+1;
    return node;
  }
  Add(x){
    this.AddLast(x);
  }
  get Count(){
    return this.c;
  }
  get IsReadOnly(){
    return false;
  }
  constructor(i, _1){
    let _2;
    if(i=="New"){
      _2=true;
      i="New_1";
      _1=[];
    }
    if(i=="New_1"){
      const coll=_1;
      super();
      this[0]=this;
      this.c=0;
      this.n=null;
      this.p=null;
      this.init=1;
      const ie=Get(coll);
      if(ie.MoveNext()){
        this.n={
          p:null, 
          n:null, 
          v:ie.Current, 
          l:this
        };
        this.p=this.n;
        this.c=1;
      }
      while(ie.MoveNext())
        {
          const node={
            p:this.p, 
            n:null, 
            v:ie.Current, 
            l:this
          };
          this.p.n=node;
          this.p=node;
          this.c=this.c+1;
        }
    }
    if(_2){
      this.init=1;
    }
  }
}
