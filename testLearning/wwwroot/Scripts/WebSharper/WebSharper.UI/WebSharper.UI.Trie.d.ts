import { Trie } from "./WebSharper.UI.Trie`2"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import { LookupResult } from "./WebSharper.UI.Trie.LookupResult`2"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
export function Empty():Trie<any, any>
export function Lookup<T0, T1>(trie:Trie<T0, T1>, key:IEnumerable<T0>):LookupResult<T0, T1>
export function Look<T0, T1>(key:FSharpList_T<T0>, trie:Trie<T0, T1>):LookupResult<T0, T1>
export function ToArray<T0, T1>(trie:Trie<T0, T1>):(T1)[]
export function Mapi<T0, T1, T2>(f:((a:number, b:FSharpList_T<T0>) => ((a?:T1) => T2)), trie:Trie<T0, T1>):Trie<T0, T2>
export function Map<T0, T1, T2>(f:((a:FSharpList_T<T0>) => ((a?:T1) => T2)), trie:Trie<T0, T1>):Trie<T0, T2>
export function MapLoop<T0, T1, T2>(loc:FSharpList_T<T0>, f:((a:FSharpList_T<T0>) => ((a?:T1) => T2)), trie:Trie<T0, T1>):Trie<T0, T2>
export function Merge<T0, T1>(ts:IEnumerable<Trie<T0, T1>>):FSharpOption<Trie<T0, T1>>
export function IsLeaf<T0, T1>(t:Trie<T0, T1>):boolean
export function MergeMaps<T0, T1, T2>(merge:((a:FSharpList_T<T0>) => FSharpOption<T1>), maps:IEnumerable<FSharpMap<T2, T0>>):FSharpOption<FSharpMap<T2, T1>>
export function AllSome<T0>(xs:IEnumerable<FSharpOption<T0>>):FSharpOption<IEnumerable<T0>>
export function MultiAdd<T0, T1>(key:T0, value:T1, map:FSharpMap<T0, FSharpList_T<T1>>):FSharpMap<T0, FSharpList_T<T1>>
export function MultiFind<T0, T1>(key:T0, map:FSharpMap<T0, FSharpList_T<T1>>):FSharpList_T<T1>
export function Prefix<T0, T1>(key:T0, trie:Trie<T0, T1>):Trie<T0, T1>
export function Leaf<T0, T1>():Trie<T1, T0>
export function Leaf<T0, T1>(v?:T0):Trie<T1, T0>
export function TrieBranch<T0, T1>(xs:FSharpMap<T0, Trie<T0, T1>>):Trie<T0, T1>
