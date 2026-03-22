import { partition, ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import FSharpSet from "./Microsoft.FSharp.Collections.FSharpSet`1.js"
import { OfSeq, Enumerate, Build } from "./WebSharper.Collections.BalancedTree.js"
import { fold, filter } from "./Microsoft.FSharp.Collections.SeqModule.js"
export function Partition(f, a){
  const p=partition(f, ofSeq(a));
  return[new FSharpSet("New_2", OfSeq(p[0])), new FSharpSet("New_2", OfSeq(p[1]))];
}
export function FoldBack(f, a, s){
  return fold((_1, _2) => f(_2, _1), s, Enumerate(true, a.Tree));
}
export function Filter(f, s){
  const data=ofSeq(filter(f, s));
  let _1=Build(data, 0, data.length-1);
  return new FSharpSet("New_2", _1);
}
