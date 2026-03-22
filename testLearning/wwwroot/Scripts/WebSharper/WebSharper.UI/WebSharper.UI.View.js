import { B } from "./WebSharper.UI.ViewBuilder.js"
import { Force, Create } from "../WebSharper.StdLib/Microsoft.FSharp.Control.LazyExtensions.js"
import { FromContinuations, scheduler } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import { WhenRun, CreateForeverAsync, Sequence as Sequence_1, JoinInner as JoinInner_1, Join as Join_1, SnapshotOn as SnapshotOn_1, WhenObsolete, WithInitOption as WithInitOption_1, WithInit as WithInit_1, TryGet as TryGet_1, MapAsync as MapAsync_1, Map3 as Map3_1, Map2Unit as Map2Unit_1, Map2 as Map2_1, MapCachedBy as MapCachedBy_1, Map as Map_1, WhenObsoleteRun } from "./WebSharper.UI.Snap.js"
import { Forever, Ready } from "./WebSharper.UI.SnapState`1.js"
import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import { mapInPlace } from "./WebSharper.UI.Array.js"
import Var from "./WebSharper.UI.Var.js"
import { ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
export function get_Do(){
  return B;
}
export function Apply(fn, view){
  return Map2((_1, _2) => _1(_2), fn, view);
}
export function AsyncAwait(filter, view){
  const c=(ok) => {
    function r(){
      return RemovableSink((value) => {
        if(filter(value)){
          (Force(r_1))();
          ok(value);
        }
      }, view);
    }
    const r_1=Create(r);
    const remove=Force(r_1);
  };
  return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
}
export function RemovableSink(act, a){
  const cont=[true];
  function loop(){
    WhenRun(a(), (x) => {
      if(cont[0])act(x);
    }, () => {
      if(cont[0])scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
  return() => {
    cont[0]=false;
  };
}
export function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
export function TryFinally(f, a){
  return CreateLazy(() => {
    try {
      return a();
    }
    finally {
      f();
    }
  });
}
export function TryWith(f, a){
  return CreateLazy(() => {
    try {
      return a();
    }
    catch(exn){
      return(f(exn))();
    }
  });
}
export function ConstAsync(a){
  const o=CreateForeverAsync(a);
  return() => o;
}
export function Const(x){
  const o={s:Forever(x)};
  return() => o;
}
export function Sequence(views){
  return CreateLazy(() => Sequence_1(map((a) => a(), views)));
}
export function UpdateWhile(def, v1, v2){
  const value=[def];
  return BindInner((pred) => pred?Map((v) => {
    value[0]=v;
    return v;
  }, v2):Const(value[0]), v1);
}
export function BindInner(fn, view){
  return JoinInner(Map(fn, view));
}
export function JoinInner(a){
  return CreateLazy(() => JoinInner_1(a()));
}
export function Bind(fn, view){
  return Join(Map(fn, view));
}
export function Join(a){
  return CreateLazy(() => Join_1(a()));
}
export function MapSeqCachedView(conv, view){
  const c=() => conv;
  return MapSeqCachedViewBy((x) => x, (_1, _2) =>(c(_1))(_2), view);
}
export function MapSeqCachedViewBy(key, conv, view){
  const state=[new Dictionary("New_5")];
  return Map((xs) => {
    const prevState=state[0];
    const newState=new Dictionary("New_5");
    const result=mapInPlace((x) => {
      let node;
      const k=key(x);
      if(prevState.ContainsKey(k)){
        const n=prevState.Item(k);
        node=(Var.Set(n.r, x),n);
      }
      else node=ConvertSeqNode((v) => conv(k, v), x);
      newState.set_Item(k, node);
      return node.e;
    }, ofSeq(xs));
    state[0]=newState;
    return result;
  }, view);
}
export function ConvertSeqNode(conv, value){
  const var_1=Var.Create_1(value);
  const view=var_1.View;
  return{
    e:conv(view), 
    r:var_1, 
    w:view
  };
}
export function MapSeqCached(conv, view){
  return MapSeqCachedBy((x) => x, conv, view);
}
export function MapSeqCachedBy(key, conv, view){
  const state=[new Dictionary("New_5")];
  return Map((xs) => {
    const prevState=state[0];
    const newState=new Dictionary("New_5");
    const result=mapInPlace((x) => {
      const k=key(x);
      const res=prevState.ContainsKey(k)?prevState.Item(k):conv(x);
      newState.set_Item(k, res);
      return res;
    }, ofSeq(xs));
    state[0]=newState;
    return result;
  }, view);
}
export function SnapshotOn(def, a, a_1){
  const sInit={s:Ready(def, [])};
  return CreateLazy(() => sInit.s==null?SnapshotOn_1(a(), a_1()):(WhenObsolete(a(), sInit),sInit));
}
export function GetAsync(v){
  return FromContinuations((ok) => Get(ok, v));
}
export function WithInitOption(a){
  return CreateLazy(() => WithInitOption_1(a()));
}
export function WithInit(x, a){
  return CreateLazy(() => WithInit_1(x, a()));
}
export function Get(f, a){
  const ok=[false];
  function obs(){
    WhenRun(a(), (v) => {
      if(!ok[0]){
        ok[0]=true;
        f(v);
      }
    }, () => {
      if(!ok[0])obs();
    });
  }
  obs();
}
export function TryGet(a){
  return TryGet_1(a());
}
export function MapAsync2(fn, v1, v2){
  return MapAsync((x) => x, Map2(fn, v1, v2));
}
export function MapAsync(fn, a){
  return CreateLazy(() => MapAsync_1(fn, a()));
}
export function Map3(fn, a, a_1, a_2){
  return CreateLazy(() => Map3_1(fn, a(), a_1(), a_2()));
}
export function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
export function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
export function MapCached(fn, v){
  return MapCachedBy(Equals, fn, v);
}
export function MapCachedBy(eq, fn, a){
  const vref=[null];
  return CreateLazy(() => MapCachedBy_1(eq, vref, fn, a()));
}
export function Map(fn, a){
  return CreateLazy(() => Map_1(fn, a()));
}
export function CreateLazy(observe){
  const lv={c:null, o:observe};
  return() => {
    let c=lv.c;
    if(c===null){
      c=lv.o();
      lv.c=c;
      const _1=c.s;
      if(_1!=null&&_1.$==0)lv.o=null;
      else WhenObsoleteRun(c, () => {
        lv.c=null;
      });
      return c;
    }
    else return c;
  };
}
