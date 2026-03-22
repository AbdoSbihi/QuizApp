import { View_T } from "./WebSharper.UI.View`1"
import { Attr_T } from "./WebSharper.UI.Attr"
import Trans from "./WebSharper.UI.Trans`1"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { Anim } from "./WebSharper.UI.Anim"
import IAttrNode from "./WebSharper.UI.Client.IAttrNode"
export function Dynamic<T0>(view:View_T<T0>, set:((a:Element) => ((a?:T0) => void))):Attr_T
export function Animated<T0>(tr:Trans<T0>, view:View_T<T0>, set:((a:Element) => ((a?:T0) => void))):Attr_T
export function EmptyAttr():Attr_T
export function AppendTree(a:Attr_T, b:Attr_T):Attr_T
export function GetChangeAnim(dyn:Dyn):Anim
export function GetExitAnim(dyn:Dyn):Anim
export function GetEnterAnim(dyn:Dyn):Anim
export function GetAnim(dyn:Dyn, f:((a:IAttrNode, b:Element) => Anim)):Anim
export function Updates(dyn:Dyn):View_T<void>
export function Empty(e:Element):Dyn
export function Insert(elem:Element, tree:Attr_T):Dyn
export function Sync(elem:Element, dyn:Dyn):void
export function SetFlags(a:Attr_T, f:number):void
export function Flags<T0>():number
export function Flags<T0>(a?:T0):number
export function HasExitAnim(attr:Dyn):boolean
export function HasEnterAnim(attr:Dyn):boolean
export function HasChangeAnim(attr:Dyn):boolean
