import { Max, Min, OfSeq, Enumerate, Build } from "./WebSharper.Collections.BalancedTree.js"
import FSharpMap from "./Microsoft.FSharp.Collections.FSharpMap`2.js"
import { map, tryPick, pick, iter, forall, fold, filter, exists } from "./Microsoft.FSharp.Collections.SeqModule.js"
import Pair from "./WebSharper.Collections.Pair`2.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { partition, ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
export function MaxKeyValue(m){
  const x=Max(m.Tree);
  return[x.Key, x.Value];
}
export function MinKeyValue(m){
  const x=Min(m.Tree);
  return[x.Key, x.Value];
}
export function Map(f, m){
  return new FSharpMap("New_1", OfSeq(map((kv) => Pair.New(kv.Key, f(kv.Key, kv.Value)), Enumerate(false, m.Tree))));
}
export function TryPick(f, m){
  return tryPick((kv) => f(kv.K, kv.V), m);
}
export function TryFindKey(f, m){
  return tryPick((kv) => f(kv.K, kv.V)?Some(kv.K):null, m);
}
export function ToSeq(m){
  return map((kv) =>[kv.Key, kv.Value], Enumerate(false, m.Tree));
}
export function Pick(f, m){
  return pick((kv) => f(kv.K, kv.V), m);
}
export function Partition(f, m){
  const p=partition((kv) => f(kv.Key, kv.Value), ofSeq(Enumerate(false, m.Tree)));
  const data=p[0];
  let _1=Build(data, 0, data.length-1);
  let _2=new FSharpMap("New_1", _1);
  const data_1=p[1];
  let _3=Build(data_1, 0, data_1.length-1);
  let _4=new FSharpMap("New_1", _3);
  return[_2, _4];
}
export function OfArray(a){
  return new FSharpMap("New_1", OfSeq(map((_1) => Pair.New(_1[0], _1[1]), a)));
}
export function Iterate(f, m){
  iter((kv) => {
    f(kv.K, kv.V);
  }, m);
}
export function ForAll(f, m){
  return forall((kv) => f(kv.K, kv.V), m);
}
export function FoldBack(f, m, s){
  return fold((_1, _2) => f(_2.Key, _2.Value, _1), s, Enumerate(true, m.Tree));
}
export function Fold(f, s, m){
  return fold((_1, _2) => f(_1, _2.Key, _2.Value), s, Enumerate(false, m.Tree));
}
export function FindKey(f, m){
  return pick((kv) => f(kv.K, kv.V)?Some(kv.K):null, m);
}
export function Filter(f, m){
  const d=ofSeq(filter((kv) => f(kv.Key, kv.Value), Enumerate(false, m.Tree)));
  let _1=Build(d, 0, d.length-1);
  return new FSharpMap("New_1", _1);
}
export function Exists(f, m){
  return exists((kv) => f(kv.K, kv.V), m);
}
