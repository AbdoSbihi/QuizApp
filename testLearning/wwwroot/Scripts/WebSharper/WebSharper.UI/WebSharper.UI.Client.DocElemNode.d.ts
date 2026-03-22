import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { DocNode } from "./WebSharper.UI.Client.DocNode"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export default class DocElemNode {
  Attr:Dyn;
  Children:DocNode;
  Delimiters?:FSharpOption<[Node, Node]>;
  El:Element;
  ElKey:number;
  Render?:FSharpOption<((a:Element) => void)>;
  GetHashCode():number
  Equals(o):boolean
  static New(Attr:Dyn, Children:DocNode, Delimiters:FSharpOption<[Node, Node]>, El:Element, ElKey:number, Render:FSharpOption<((a:Element) => void)>):DocElemNode
}
