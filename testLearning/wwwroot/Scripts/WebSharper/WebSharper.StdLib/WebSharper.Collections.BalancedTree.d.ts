import Tree from "./WebSharper.Collections.BalancedTree.Tree`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function Max<T0>(t:Tree<T0>):T0
export function Min<T0>(t:Tree<T0>):T0
export function TryFind<T0>(v:T0, t:Tree<T0>):FSharpOption<T0>
export function Contains<T0>(v:T0, t:Tree<T0>):boolean
export function Change<T0>(k:T0, f:((a:FSharpOption<T0>) => FSharpOption<T0>), ot:Tree<T0>):Tree<T0>
export function Add<T0>(x:T0, t:Tree<T0>):Tree<T0>
export function Remove<T0>(k:T0, src:Tree<T0>):Tree<T0>
export function Put<T0>(combine:((a:T0, b:T0) => T0), k:T0, t:Tree<T0>):Tree<T0>
export function Rebuild<T0>(spine:([boolean, T0, Tree<T0>])[], t:Tree<T0>):Tree<T0>
export function Lookup<T0, T1>(k:T0, t:Tree<T0>):[Tree<T0>, (T1)[]]
export function OfSeq<T0>(data:IEnumerable<T0>):Tree<T0>
export function Build<T0>(data:(T0)[], min:number, max:number):Tree<T0>
export function Enumerate<T0>(flip:boolean, t:Tree<T0>):IEnumerable<T0>
export function Branch<T0>(node:T0, left:Tree<T0>, right:Tree<T0>):Tree<T0>
