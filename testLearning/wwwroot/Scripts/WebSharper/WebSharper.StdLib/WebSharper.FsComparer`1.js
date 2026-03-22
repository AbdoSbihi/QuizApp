import Object from "./System.Object.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export default class FsComparer extends Object {
  Compare(x, y){
    return Compare(x, y);
  }
}
