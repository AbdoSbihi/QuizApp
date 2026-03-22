import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export function TreeDoc(Item:{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>}):DocNode
export function TextNodeDoc(Item:Text):DocNode
export function TextDoc(Item:{Text:Text,Dirty:boolean,Value:string}):DocNode
export function EmbedDoc(Item:{Current:DocNode,Dirty:boolean}):DocNode
export function ElemDoc(Item:DocElemNode):DocNode
export function AppendDoc(Item1:DocNode, Item2:DocNode):DocNode
export interface AppendDoc {
  $:0;
  $0:DocNode;
  $1:DocNode;
}
export interface ElemDoc {
  $:1;
  $0:DocElemNode;
}
export interface EmbedDoc {
  $:2;
  $0:{Current:DocNode,Dirty:boolean};
}
export interface TextDoc {
  $:4;
  $0:{Text:Text,Dirty:boolean,Value:string};
}
export interface TextNodeDoc {
  $:5;
  $0:Text;
}
export interface TreeDoc {
  $:6;
  $0:{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>};
}
export type DocNode = (AppendDoc | ElemDoc | EmbedDoc | null | TextDoc | TextNodeDoc | TreeDoc)
