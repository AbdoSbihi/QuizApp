import { Equals, Hash, Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class Pair {
  Key;
  Value;
  Equals(other){
    return Equals(this.Key, other.Key);
  }
  GetHashCode(){
    return Hash(this.Key);
  }
  CompareTo0(other){
    return Compare(this.Key, other.Key);
  }
  static New(Key, Value){
    return Create(Pair, {Key:Key, Value:Value});
  }
}
