import { DocNode } from "./WebSharper.UI.Client.DocNode"
import RunState from "./WebSharper.UI.Client.Docs.RunState"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import { NodeSet } from "./WebSharper.UI.Client.Docs.NodeSet"
import { Anim } from "./WebSharper.UI.Anim"
import { Attr_T } from "./WebSharper.UI.Attr"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
export function UpdateTextNode(n:{Text:Text,Dirty:boolean,Value:string}, t:string):void
export function CreateTextNode():{Text:Text,Dirty:boolean,Value:string}
export function UpdateEmbedNode(node:{Current:DocNode,Dirty:boolean}, upd:DocNode):void
export function CreateEmbedNode():{Current:DocNode,Dirty:boolean}
export function PerformSyncUpdate(childrenOnly:boolean, st:RunState, doc:DocNode):void
export function PerformAnimatedUpdate(childrenOnly:boolean, st:RunState, doc:DocNode):((a:AsyncBody<void>) => void)
export function SyncElemNodesNextFrame(childrenOnly:boolean, st:RunState):((a:AsyncBody<void>) => void)
export function ComputeEnterAnim(st:RunState, cur:NodeSet):Anim
export function ComputeChangeAnim(st:RunState, cur:NodeSet):Anim
export function ComputeExitAnim(st:RunState, cur:NodeSet):Anim
export function CreateDelimitedRunState(ldelim:Node, rdelim:Node, doc:DocNode):RunState
export function CreateRunState(parent:Element, doc:DocNode):RunState
export function CreateDelimitedElemNode(ldelim:Node, rdelim:Node, attr:Attr_T, children:DocNode):DocElemNode
export function CreateElemNode(el:Element, attr:Attr_T, children:DocNode):DocElemNode
export function SyncElemNode(childrenOnly:boolean, el:DocElemNode):void
export function Sync(doc:DocNode):void
export function AfterRender(el:DocElemNode):void
export function InsertBeforeDelim(afterDelim:Node, doc:DocNode):Node
export function LinkPrevElement(el:Node, children:DocNode):void
export function LinkElement(el:Element, children:DocNode):void
export function SyncElement(el:DocElemNode):void
export function DoSyncElement(el:DocElemNode):void
export function InsertDoc(parent:Element, doc:DocNode, pos:Node):Node
export function InsertNode(parent:Element, node:Node, pos:Node):Node
