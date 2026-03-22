import { View_T } from "./WebSharper.UI.View`1"
import { Anim } from "./WebSharper.UI.Anim"
import Object from "../WebSharper.StdLib/System.Object"
import IAttrNode from "./WebSharper.UI.Client.IAttrNode"
export default class DynamicAttrNode<T0>extends Object implements IAttrNode {
  push:((a:Element) => ((a?:T0) => void));
  value:T0;
  dirty:boolean;
  updates:View_T<void>;
  get NChanged():View_T<void>
  NSync(parent:Element):void
  NGetExitAnim(parent:Element):Anim
  NGetEnterAnim(parent:Element):Anim
  NGetChangeAnim(parent:Element):Anim
  constructor(view:View_T<T0>, push:((a:Element) => ((a?:T0) => void)))
}
