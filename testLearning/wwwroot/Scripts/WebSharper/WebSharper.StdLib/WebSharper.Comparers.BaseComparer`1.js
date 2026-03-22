import Comparer from "./System.Collections.Generic.Comparer`1.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export default class BaseComparer extends Comparer {
  Compare_1(x, y){
    return Compare(x, y);
  }
}
