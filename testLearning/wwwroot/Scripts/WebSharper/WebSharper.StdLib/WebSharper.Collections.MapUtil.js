import { ofSeq, sortInPlace } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { map, distinctBy, rev } from "./Microsoft.FSharp.Collections.SeqModule.js"
import Pair from "./WebSharper.Collections.Pair`2.js"
import { Build } from "./WebSharper.Collections.BalancedTree.js"
export function fromSeq(s){
  const a=ofSeq(map((_1) => Pair.New(_1[0], _1[1]), distinctBy((t) => t[0], rev(s))));
  sortInPlace(a);
  return Build(a, 0, a.length-1);
}
