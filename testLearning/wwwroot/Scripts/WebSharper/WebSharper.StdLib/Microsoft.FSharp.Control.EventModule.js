import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import Event from "./WebSharper.Control.Event.Event`1.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
import { observer } from "./Microsoft.FSharp.Control.CommonExtensions.js"
import FSharpEvent from "./Microsoft.FSharp.Control.FSharpEvent`1.js"
export function Split(f, e){
  return[Choose((x) => {
    const m=f(x);
    return m.$==0?Some(m.$0):null;
  }, e), Choose((x) => {
    const m=f(x);
    return m.$==1?Some(m.$0):null;
  }, e)];
}
export function Scan(fold, seed, e){
  const state=[seed];
  return Map((value) => {
    state[0]=fold(state[0], value);
    return state[0];
  }, e);
}
export function Partition(f, e){
  return[Filter(f, e), Filter((x) =>!f(x), e)];
}
export function Pairwise(e){
  const buf=[null];
  const ev=Event.New(MarkResizable([]));
  e.Subscribe(observer((x) => {
    const m=buf[0];
    if(m!=null&&m.$==1){
      const old=m.$0;
      buf[0]=Some(x);
      ev.Trigger([old, x]);
    }
    else buf[0]=Some(x);
  }));
  return ev;
}
export function Merge(e1, e2){
  const r=Event.New(MarkResizable([]));
  e1.Subscribe(observer((x) => {
    r.Trigger(x);
  }));
  e2.Subscribe(observer((x) => {
    r.Trigger(x);
  }));
  return r;
}
export function Map(f, e){
  const r=Event.New(MarkResizable([]));
  e.Subscribe(observer((x) => {
    r.Trigger(f(x));
  }));
  return r;
}
export function Filter(ok, e){
  const r=Event.New(MarkResizable([]));
  e.Subscribe(observer((x) => {
    if(ok(x))r.Trigger(x);
  }));
  return r;
}
export function Choose(c, e){
  const r=new FSharpEvent();
  e.Subscribe(observer((x) => {
    const m=c(x);
    if(m==null){ }
    else r.event.Trigger(m.$0);
  }));
  return r.event;
}
