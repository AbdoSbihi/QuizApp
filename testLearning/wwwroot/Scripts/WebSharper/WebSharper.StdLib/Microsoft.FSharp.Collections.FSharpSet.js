import FSharpSet from "./Microsoft.FSharp.Collections.FSharpSet`1.js"
import { OfSeq } from "./WebSharper.Collections.BalancedTree.js"
export function Create(items){
  return new FSharpSet("New_2", OfSeq(items));
}
