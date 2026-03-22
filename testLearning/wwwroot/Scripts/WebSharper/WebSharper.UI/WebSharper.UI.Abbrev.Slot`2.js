import Object from "../WebSharper.StdLib/System.Object.js"
import { Hash, Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
export default class Slot extends Object {
  key;
  value;
  GetHashCode(){
    return Hash(this.key(this.value));
  }
  Equals(o){
    return Equals(this.key(this.value), this.key(o.Value));
  }
  get Value(){
    return this.value;
  }
  constructor(key, value){
    super();
    this.key=key;
    this.value=value;
  }
}
