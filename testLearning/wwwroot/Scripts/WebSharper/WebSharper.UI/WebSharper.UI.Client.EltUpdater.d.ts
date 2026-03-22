import { DocNode } from "./WebSharper.UI.Client.DocNode"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
import Var from "./WebSharper.UI.Var`1"
import Elt from "./WebSharper.UI.Elt"
import Updates from "./WebSharper.UI.Updates"
export default class EltUpdater extends Elt {
  treeNode:{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>};
  holeUpdates:Var<([number, View_T<void>])[]>;
  origHoles:(DocElemNode)[];
  RemoveAllUpdated():void
  RemoveUpdated(doc:Elt):void
  AddUpdated(doc:Elt):void
  ClearHoles():void
  AddHole(h:DocElemNode):void
  constructor(treeNode:{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>}, updates:View_T<void>, elt:Element, rvUpdates:Updates, holeUpdates:Var<([number, View_T<void>])[]>)
}
