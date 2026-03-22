import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1"
import { DocNode } from "./WebSharper.UI.Client.DocNode"
export function NodeSet(Item:HashSet<DocElemNode>):NodeSet
export function ToArray(a:NodeSet):(DocElemNode)[]
export function get_Empty():NodeSet
export function IsEmpty(a:NodeSet):boolean
export function Intersect(a:NodeSet, a_1:NodeSet):NodeSet
export function Except(a:NodeSet, a_1:NodeSet):NodeSet
export function FindAll(doc:DocNode):NodeSet
export function Filter(f:((a:DocElemNode) => boolean), a:NodeSet):NodeSet
export interface NodeSet {
  $:0;
  $0:HashSet<DocElemNode>;
}
export type NodeSet_1 = (NodeSet)
