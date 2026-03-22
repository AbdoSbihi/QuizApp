import Object from "./System.Object.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export default class Enumerator extends Object {
  c;
  Dispose(){ }
  MoveNext(){
    this.c=this.c.n;
    return!Equals(this.c, null);
  }
  get Current0(){
    return this.Current;
  }
  get Current(){
    return"c"in this.c?FailWith("Enumeration has not started. Call MoveNext."):this.c==null?FailWith("Enumeration already finished."):this.c.v;
  }
  constructor(l){
    super();
    this.c=l;
  }
}
