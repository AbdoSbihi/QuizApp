import { DocNode } from "./WebSharper.UI.Client.DocNode"
import { View_T } from "./WebSharper.UI.View`1"
import Updates from "./WebSharper.UI.Updates"
import Doc from "./WebSharper.UI.Doc"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { Attr_T } from "./WebSharper.UI.Attr"
import EltUpdater from "./WebSharper.UI.Client.EltUpdater"
export default class Elt extends Doc {
  docNode_1:DocNode;
  updates_1:View_T<void>;
  elt:Element;
  rvUpdates:Updates;
  SetStyle(style:string, value:string):void
  HasClass(cls:string):boolean
  GetProperty<T0>(name:string):T0
  SetProperty<T0>(name:string, value:T0):void
  RemoveAttribute(name:string):void
  HasAttribute(name:string):boolean
  GetAttribute(name:string):string
  SetAttribute(name:string, value:string):void
  SetText(v:string):void
  GetText():string
  SetValue(v:string):void
  GetValue():string
  Id():string
  Html():string
  Clear():void
  Prepend(doc:Doc):void
  Append(doc:Doc):void
  static TreeNode(tree:{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>}, updates:View_T<void>):Elt
  static New(el:Element, attr:Attr_T, children:Doc):Elt
  ToUpdater():EltUpdater
  OnAfterRenderView<T0>(view:View_T<T0>, cb:((a:Element, b:T0) => void)):Elt
  OnAfterRender(cb):Elt
  OnAfterRenderu0027(cb:((a:Element) => void)):Elt
  onView<T0, T1 extends Event>(ev:string, view:View_T<T0>, cb:((a:Element) => ((a?:T1) => ((a?:T0) => void)))):Elt
  on<T0 extends Event>(ev:string, cb:((a:Element, b:T0) => void)):Elt
  ClearHoles():void
  AddHole(h:DocElemNode):void
  constructor(docNode:DocNode, updates:View_T<void>, elt:Element, rvUpdates:Updates)
}
