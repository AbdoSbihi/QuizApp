import $StartupCode_Trie from "./$StartupCode_Trie.js"
import { ofSeq, append, ofArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { Found, NotFound } from "./WebSharper.UI.Trie.LookupResult`2.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { Map as Map_1, ToSeq, OfArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.MapModule.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { exists, ofSeq as ofSeq_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { choose, collect, fold, map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js"
import { Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
export function Empty(){
  return $StartupCode_Trie.Empty;
}
export function Lookup(trie, key){
  return Look(ofSeq(key), trie);
}
export function Look(key, trie){
  let _1;
  switch(trie.$==2?(_1=trie.$0,0):trie.$==0?key.$==1?(_1=[key.$0, key.$1, trie.$0],1):2:2){
    case 0:
      return Found(_1, key);
    case 1:
      const m=_1[2].TryFind(_1[0]);
      return m==null?NotFound:Look(_1[1], m.$0);
    case 2:
      return NotFound;
  }
}
export function ToArray(trie){
  const all=[];
  Map(() =>(v) => all.push(v), trie);
  return all.slice(0);
}
export function Mapi(f, trie){
  const counter=[0];
  return Map((x) => {
    const c=counter[0];
    let _1=(counter[0]=c+1,c);
    return f(_1, x);
  }, trie);
}
export function Map(f, trie){
  return MapLoop(FSharpList.Empty, f, trie);
}
export function MapLoop(loc, f, trie){
  if(trie.$==1)return{$:1};
  else if(trie.$==2){
    const x=trie.$0;
    return{$:2, $0:(f(loc))(x)};
  }
  else return TrieBranch(Map_1((_1, _2) => MapLoop(append(loc, ofArray([_1])), f, _2), trie.$0));
}
export function Merge(ts){
  const ts_1=ofSeqNonCopying(ts);
  const m=length(ts_1);
  if(m===0)return Some({$:1});
  else if(m===1)return Some(get(ts_1, 0));
  else if(exists(IsLeaf, ts_1))return null;
  else {
    const o=MergeMaps((t) => Merge(t), choose((a) => a.$==0?Some(a.$0):null, ts_1));
    return o==null?null:Some(TrieBranch(o.$0));
  }
}
export function IsLeaf(t){
  return t.$==2;
}
export function MergeMaps(merge, maps){
  const x=collect(ToSeq, maps);
  let _1=fold((_4, _5) => MultiAdd(_5[0], _5[1], _4), new FSharpMap("New", []), x);
  let _2=ToSeq(_1);
  let _3=map((_4) => {
    const o_1=merge(_4[1]);
    return o_1==null?null:Some([_4[0], o_1.$0]);
  }, _2);
  const o=AllSome(_3);
  return o==null?null:Some(OfArray(ofSeq_1(o.$0)));
}
export function AllSome(xs){
  const e=Get(xs);
  const r=MarkResizable([]);
  let ok=true;
  while(ok&&e.MoveNext())
    {
      const m=e.Current;
      if(m!=null&&m.$==1)r.push(m.$0);
      else ok=false;
    }
  return ok?Some(r.slice()):null;
}
export function MultiAdd(key, value, map_1){
  return map_1.Add_1(key, FSharpList.Cons(value, MultiFind(key, map_1)));
}
export function MultiFind(key, map_1){
  const x=map_1.TryFind(key);
  return x==null?FSharpList.Empty:x.$0;
}
export function Prefix(key, trie){
  return TrieBranch(new FSharpMap("New", ofArray([[key, trie]])));
}
export function Leaf(v){
  return{$:2, $0:v};
}
export function TrieBranch(xs){
  return xs.IsEmpty?{$:1}:{$:0, $0:xs};
}
