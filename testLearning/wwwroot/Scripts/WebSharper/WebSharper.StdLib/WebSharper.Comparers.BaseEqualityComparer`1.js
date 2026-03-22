import EqualityComparer from "./System.Collections.Generic.EqualityComparer`1.js"
import { Hash, Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export default class BaseEqualityComparer extends EqualityComparer {
  GetHashCode_1(x){
    return Hash(x);
  }
  Equals_1(x, y){
    return Equals(x, y);
  }
}
