import { Animation } from "./WebSharper.UI.Animation"
import { AppendList } from "./WebSharper.UI.AppendList`1"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import Interpolation from "./WebSharper.UI.Interpolation`1"
import Easing from "./WebSharper.UI.Easing"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export function Anim(Item:AppendList<Animation>):Anim
export function get_Empty():Anim
export function WhenDone(f:(() => void), main:Anim):Anim
export function Run(k:(() => void), anim:{Compute:((a:number) => void),Duration:number}):((a:AsyncBody<void>) => void)
export function Play(anim:Anim):((a:AsyncBody<void>) => void)
export function Pack(anim:{Compute:((a:number) => void),Duration:number}):Anim
export function Map<T0, T1>(f:((a?:T0) => T1), anim:{Compute:((a:number) => T0),Duration:number}):{Compute:((a:number) => T1),Duration:number}
export function Delayed<T0>(inter:Interpolation<T0>, easing:Easing, dur:number, delay:number, x:T0, y:T0):{Compute:((a:number) => T0),Duration:number}
export function Simple<T0>(inter:Interpolation<T0>, easing:Easing, dur:number, x:T0, y:T0):{Compute:((a:number) => T0),Duration:number}
export function Const<T0>():{Compute:((a:number) => T0),Duration:number}
export function Const<T0>(v?:T0):{Compute:((a:number) => T0),Duration:number}
export function Concat(xs:IEnumerable<Anim>):Anim
export function Append(a:Anim, a_1:Anim):Anim
export function set_UseAnimations(v:boolean):void
export function get_UseAnimations():boolean
export interface Anim {
  $:0;
  $0:AppendList<Animation>;
}
export type Anim_1 = (Anim)
