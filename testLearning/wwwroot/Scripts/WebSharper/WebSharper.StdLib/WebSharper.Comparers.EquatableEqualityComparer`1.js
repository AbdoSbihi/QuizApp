import EqualityComparer from "./System.Collections.Generic.EqualityComparer`1.js"
import { Hash } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export default class EquatableEqualityComparer extends EqualityComparer {
  GetHashCode_1(x){
    return Hash(x);
  }
  Equals_1(x, y){
    return x.EEquals(y);
  }
}
