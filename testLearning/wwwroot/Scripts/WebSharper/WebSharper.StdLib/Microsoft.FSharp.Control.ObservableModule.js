import { Choose, Protect, Filter } from "./WebSharper.Control.Observable.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { New } from "./WebSharper.Control.Observer.js"
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
  return{Subscribe(o){
    const state=[seed];
    return e.Subscribe(New((v) => {
      Protect(() => fold(state[0], v), (s) => {
        state[0]=s;
        o.OnNext(s);
      }, (e_1) => {
        o.OnError(e_1);
      });
    }, (e_1) => {
      o.OnError(e_1);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function Partition(f, e){
  return[Filter(f, e), Filter((x) =>!f(x), e)];
}
export function Pairwise(e){
  return{Subscribe(o){
    const last=[null];
    return e.Subscribe(New((v) => {
      const m=last[0];
      if(m!=null&&m.$==1)o.OnNext([m.$0, v]);
      last[0]=Some(v);
    }, (e_1) => {
      o.OnError(e_1);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
