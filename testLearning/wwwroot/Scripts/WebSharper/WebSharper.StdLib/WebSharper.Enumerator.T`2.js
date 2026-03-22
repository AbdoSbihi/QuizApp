import Object from "./System.Object.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export default class T extends Object {
  s;
  c;
  n;
  d;
  e;
  Dispose(){
    if(this.d)this.d(this);
  }
  get Current(){
    return this.e===1?this.c:this.e===0?FailWith("Enumeration has not started. Call MoveNext."):FailWith("Enumeration already finished.");
  }
  get Current0(){
    return this.Current;
  }
  MoveNext(){
    const m=this.n(this);
    this.e=m?1:2;
    return m;
  }
  constructor(s, c, n, d){
    super();
    this.s=s;
    this.c=c;
    this.n=n;
    this.d=d;
    this.e=0;
  }
}
