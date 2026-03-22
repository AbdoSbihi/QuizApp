import { Empty, Single, Concat as Concat_1, Append as Append_1 } from "./WebSharper.UI.AppendList.js"
import { Zero, FromContinuations, Delay, Bind, Return } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import { Actions, Finalize, Def, Const as Const_1, List, set_UseAnimations as set_UseAnimations_1, UseAnimations } from "./WebSharper.UI.Anims.js"
import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
export function Anim(Item){
  return{$:0, $0:Item};
}
export function get_Empty(){
  return Anim(Empty());
}
export function WhenDone(f, main){
  return Append(Anim(Single({$:0, $0:f})), main);
}
export function Run(k, anim){
  const dur=anim.Duration;
  if(dur===0)return Zero();
  else {
    const c=(ok) => {
      function loop(start){
        return(now) => {
          const t=now-start;
          anim.Compute(t);
          k();
          return t<=dur?void requestAnimationFrame((t_1) => {
            (loop(start))(t_1);
          }):ok();
        };
      }
      requestAnimationFrame((t) => {
        (loop(t))(t);
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
}
export function Play(anim){
  return Delay(() => Bind(Run(() => { }, Actions(anim)), () => {
    Finalize(anim);
    return Return(null);
  }));
}
export function Pack(anim){
  return Anim(Single({$:1, $0:anim}));
}
export function Map(f, anim){
  const f_1=anim.Compute;
  return Def(anim.Duration, (x) => f(f_1(x)));
}
export function Delayed(inter, easing, dur, delay, x, y){
  return{Compute:(t) => t<=delay?x:inter.Interpolate(easing.TransformTime((t-delay)/dur), x, y), Duration:dur+delay};
}
export function Simple(inter, easing, dur, x, y){
  return{Compute:(t) => inter.Interpolate(easing.TransformTime(t/dur), x, y), Duration:dur};
}
export function Const(v){
  return Const_1(v);
}
export function Concat(xs){
  return Anim(Concat_1(map(List, xs)));
}
export function Append(a, a_1){
  return Anim(Append_1(a.$0, a_1.$0));
}
export function set_UseAnimations(v){
  set_UseAnimations_1(v);
}
export function get_UseAnimations(){
  return UseAnimations();
}
