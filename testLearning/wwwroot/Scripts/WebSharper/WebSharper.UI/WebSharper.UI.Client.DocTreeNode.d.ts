import { DocNode } from "./WebSharper.UI.Client.DocNode"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export default interface DocTreeNode {
  Els:((Node | DocNode))[];
  Dirty:boolean;
  Holes:(DocElemNode)[];
  Attrs:([Element, Dyn])[];
  Render?:FSharpOption<((a:Element) => void)>;
  El?:FSharpOption<Element>;
}
