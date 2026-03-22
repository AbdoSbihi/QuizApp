import $StartupCode_Animation from "./$StartupCode_Animation.js"
import { choose, map, iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { ToArray } from "./WebSharper.UI.AppendList.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { max, map as map_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Create } from "../WebSharper.StdLib/Microsoft.FSharp.Control.LazyExtensions.js"
export function UseAnimations(){
  return $StartupCode_Animation.UseAnimations;
}
export function set_UseAnimations(_1){
  $StartupCode_Animation.UseAnimations=_1;
}
export function Actions(a){
  return ConcatActions(choose((a_1) => a_1.$==1?Some(a_1.$0):null, ToArray(a.$0)));
}
export function ConcatActions(xs){
  const xs_1=ofSeqNonCopying(xs);
  const m=length(xs_1);
  if(m===0)return Const();
  else if(m===1)return get(xs_1, 0);
  else {
    const dur=max(map_1((anim) => anim.Duration, xs_1));
    const xs_2=map((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
export function Prolong(nextDuration, anim){
  const comp=anim.Compute;
  const dur=anim.Duration;
  const last=Create(() => anim.Compute(anim.Duration));
  return{Compute:(t) => t>=dur?last.f():comp(t), Duration:nextDuration};
}
export function Const(v){
  return Def(0, () => v);
}
export function Def(d, f){
  return{Compute:f, Duration:d};
}
export function Finalize(a){
  iter((a_1) => {
    if(a_1.$==0)a_1.$0();
  }, ToArray(a.$0));
}
export function List(a){
  return a.$0;
}
