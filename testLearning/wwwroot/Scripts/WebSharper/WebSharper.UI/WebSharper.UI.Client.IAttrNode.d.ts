import { Anim } from "./WebSharper.UI.Anim"
import { View_T } from "./WebSharper.UI.View`1"
export function isIAttrNode(x):x is IAttrNode
export default interface IAttrNode {
  NGetChangeAnim(a:Element):Anim
  NGetEnterAnim(a:Element):Anim
  NGetExitAnim(a:Element):Anim
  NSync(a:Element):void
  get NChanged():View_T<void>
}
