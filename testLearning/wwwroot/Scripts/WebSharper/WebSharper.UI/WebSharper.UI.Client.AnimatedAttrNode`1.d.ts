import Trans from "./WebSharper.UI.Trans`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
import { Anim } from "./WebSharper.UI.Anim"
import Object from "../WebSharper.StdLib/System.Object"
import IAttrNode from "./WebSharper.UI.Client.IAttrNode"
export default class AnimatedAttrNode<T0>extends Object implements IAttrNode {
  tr:Trans<T0>;
  push:((a:Element) => ((a?:T0) => void));
  logical:FSharpOption<T0>;
  visible:FSharpOption<T0>;
  dirty:boolean;
  updates:View_T<void>;
  sync(p:Element):void
  pushVisible(el:Element, v:T0):void
  get NChanged():View_T<void>
  NSync(parent:Element):void
  NGetExitAnim(parent:Element):Anim
  NGetEnterAnim(parent:Element):Anim
  NGetChangeAnim(parent:Element):Anim
  constructor(tr:Trans<T0>, view:View_T<T0>, push:((a:Element) => ((a?:T0) => void)))
}
