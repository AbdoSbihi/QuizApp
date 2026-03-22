import IAttrNode from "./WebSharper.UI.Client.IAttrNode"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export interface A1 {
  $:1;
  $0:IAttrNode;
}
export interface A2 {
  $:2;
  $0:Attr_T;
  $1:Attr_T;
}
export interface A3 {
  $:3;
  $0:((a:Element) => void);
}
export interface A4 {
  $:4;
  $0:((a:Element) => void);
}
export type Attr_T = (Attr & (null | A1 | A2 | A3 | A4))
export default class Attr {
  static A1(Item:IAttrNode):Attr_T
  static A2(Item1:Attr_T, Item2:Attr_T):Attr_T
  static A3(init:((a:Element) => void)):Attr_T
  static A4(onAfterRender:((a:Element) => void)):Attr_T
  static HandlerImpl<T0 extends Event>(event:string, q):Attr_T
  static Concat(xs:IEnumerable<Attr_T>):Attr_T
  static Create(name:string, value:string):Attr_T
  $;
  $0;
  $1;
}
