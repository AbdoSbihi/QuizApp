import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export function DomNodes(Item:Node[]):DomNodes
export function FoldBack<T0>(f:((a:Node, b:T0) => T0), a:DomNodes, z:T0):T0
export function Iter(f:((a:Node) => void), a:DomNodes):void
export function Except(a:DomNodes, a_1:DomNodes):DomNodes
export function DocChildren(node:DocElemNode):DomNodes
export function Children(elem:Element, delims:FSharpOption<[Node, Node]>):DomNodes
export interface DomNodes {
  $:0;
  $0:Node[];
}
export type DomNodes_1 = (DomNodes)
