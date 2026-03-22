import { Waiting, Forever, Ready } from "./WebSharper.UI.SnapState`1.js"
import { StartTo } from "./WebSharper.UI.Abbrev.Async.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Obsolete } from "./WebSharper.UI.Snap`1.js"
import { ofSeq, map, forall, iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { Clear } from "../WebSharper.StdLib/WebSharper.QueueProxy.js"
export function MapAsync(fn, snap){
  const res={s:Waiting([], [])};
  When(snap, (v) => {
    StartTo(fn(v), (v_1) => {
      MarkDone(res, snap, v_1);
    });
  }, res);
  return res;
}
export function SnapshotOn(sn1, sn2){
  const res={s:Waiting([], [])};
  const cont=() => {
    const m=res.s;
    if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
      const _1=ValueAndForever(sn1);
      const _2=ValueAndForever(sn2);
      if(_1!=null&&_1.$==1)_2!=null&&_2.$==1?_1.$0[1]||_2.$0[1]?MarkForever(res, _2.$0[0]):MarkReady(res, _2.$0[0]):void 0;
    }
  };
  When(sn1, cont, res);
  WhenReady(sn2, cont);
  return res;
}
export function Map3(fn, sn1, sn2, sn3){
  const _1=sn1.s;
  const _2=sn2.s;
  const _3=sn3.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?_3!=null&&_3.$==0?{s:Forever(fn(_1.$0, _2.$0, _3.$0))}:Map3Opt1(fn, _1.$0, _2.$0, sn3):_3!=null&&_3.$==0?Map3Opt2(fn, _1.$0, _3.$0, sn2):Map3Opt3(fn, _1.$0, sn2, sn3);
  else if(_2!=null&&_2.$==0)return _3!=null&&_3.$==0?Map3Opt4(fn, _2.$0, _3.$0, sn1):Map3Opt5(fn, _2.$0, sn1, sn3);
  else if(_3!=null&&_3.$==0)return Map3Opt6(fn, _3.$0, sn1, sn2);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _4=ValueAndForever(sn1);
        const _5=ValueAndForever(sn2);
        const _6=ValueAndForever(sn3);
        if(_4!=null&&_4.$==1)if(_5!=null&&_5.$==1)if(_6!=null&&_6.$==1)if(_4.$0[1]&&_5.$0[1]&&_6.$0[1])MarkForever(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
        else MarkReady(res, fn(_4.$0[0], _5.$0[0], _6.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    When(sn3, cont, res);
    return res;
  }
}
export function Map3Opt6(fn, z, sn1, sn2){
  return Map2((_1, _2) => fn(_1, _2, z), sn1, sn2);
}
export function Map3Opt5(fn, y, sn1, sn3){
  return Map2((_1, _2) => fn(_1, y, _2), sn1, sn3);
}
export function Map3Opt4(fn, y, z, sn1){
  return Map((x) => fn(x, y, z), sn1);
}
export function Map3Opt3(fn, x, sn2, sn3){
  return Map2((_1, _2) => fn(x, _1, _2), sn2, sn3);
}
export function Map3Opt2(fn, x, z, sn2){
  return Map((y) => fn(x, y, z), sn2);
}
export function Map3Opt1(fn, x, y, sn3){
  return Map((z) => fn(x, y, z), sn3);
}
export function Map2Unit(sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(null)}:sn2;
  else if(_2!=null&&_2.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
export function Map2(fn, sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(fn(_1.$0, _2.$0))}:Map2Opt1(fn, _1.$0, sn2);
  else if(_2!=null&&_2.$==0)return Map2Opt2(fn, _2.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, fn(_3.$0[0], _4.$0[0]));
        else MarkReady(res, fn(_3.$0[0], _4.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
export function Map2Opt2(fn, y, sn1){
  return Map((x) => fn(x, y), sn1);
}
export function Map2Opt1(fn, x, sn2){
  return Map((y) => fn(x, y), sn2);
}
export function MapCachedBy(eq, prev, fn, sn){
  return Map((x) => {
    let _1;
    const m=prev[0];
    if(m!=null&&m.$==1&&(m.$0,eq(x, m.$0[0])&&(_1=[m.$0[0], m.$0[1]],true)))return _1[1];
    else {
      const y=fn(x);
      prev[0]=Some([x, y]);
      return y;
    }
  }, sn);
}
export function Copy(sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Waiting([], [])};
    When(sn, (v) => {
      MarkDone(res_1, sn, v);
    }, res_1);
    return res_1;
  }
  else return sn;
}
export function WithInitOption(sn){
  const m=sn.s;
  if(m==null)return{s:null};
  else if(m!=null&&m.$==2){
    const res={s:Ready(Some(m.$0), [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Ready(null, [])};
    When(sn, () => {
      Obsolete(res_1);
    }, res_1);
    return res_1;
  }
  else return{s:Forever(Some(m.$0))};
}
export function WithInit(x, sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Ready(x, [])};
    When(sn, () => {
      Obsolete(res_1);
    }, res_1);
    return res_1;
  }
  else return sn;
}
export function Map(fn, sn){
  const m=sn.s;
  if(m!=null&&m.$==0)return{s:Forever(fn(m.$0))};
  else {
    const res={s:Waiting([], [])};
    When(sn, (a) => {
      MarkDone(res, sn, fn(a));
    }, res);
    return res;
  }
}
export function Sequence(snaps){
  const snaps_1=ofSeq(snaps);
  if(snaps_1.length==0)return{s:Forever([])};
  else {
    const res={s:Waiting([], [])};
    const w=[length(snaps_1)-1];
    const cont=() => {
      if(w[0]===0){
        const vs=map((s) => {
          const m=s.s;
          return m!=null&&m.$==0?m.$0:m!=null&&m.$==2?m.$0:FailWith("value not found by View.Sequence");
        }, snaps_1);
        if(forall((s) => {
          const _1=s.s;
          return _1!=null&&_1.$==0;
        }, snaps_1))MarkForever(res, vs);
        else MarkReady(res, vs);
      }
      else w[0]=w[0]-1;
    };
    iter((s) => {
      When(s, cont, res);
    }, snaps_1);
    return res;
  }
}
export function CreateForeverAsync(a){
  const o={s:Waiting([], [])};
  StartTo(a, (v) => {
    MarkForever(o, v);
  });
  return o;
}
export function JoinInner(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
    WhenObsolete(snap, y);
  }, res);
  return res;
}
export function Join(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
}
export function ValueAndForever(snap){
  const m=snap.s;
  return m!=null&&m.$==0?Some([m.$0, true]):m!=null&&m.$==2?Some([m.$0, false]):null;
}
export function WhenObsoleteRun(snap, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?(m.$0,m.$1.push(obs)):m!=null&&m.$==3?(m.$0,m.$1.push(obs)):m.$0;
}
export function WhenObsolete(snap, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?(m.$0,EnqueueSafe(m.$1, obs)):m!=null&&m.$==3?(m.$0,EnqueueSafe(m.$1, obs)):m.$0;
}
export function WhenReady(snap, avail){
  let _1;
  const m=snap.s;
  switch(m!=null&&m.$==2?(_1=m.$0,0):m==null?1:m!=null&&m.$==3?2:(_1=m.$0,0)){
    case 0:
      avail(_1);
      break;
    case 1:
      null;
      break;
    case 2:
      m.$0.push(avail);
      break;
  }
}
export function WhenRun(snap, avail, obs){
  const m=snap.s;
  if(m==null)obs();
  else if(m!=null&&m.$==2){
    const v=m.$0;
    m.$1.push(obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    q2.push(obs);
  }
  else avail(m.$0);
}
export function When(snap, avail, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else if(m!=null&&m.$==2){
    const v=m.$0;
    EnqueueSafe(m.$1, obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    EnqueueSafe(q2, obs);
  }
  else avail(m.$0);
}
export function EnqueueSafe(q, x){
  q.push(x);
  if(q.length%20===0){
    const qcopy=q.slice(0);
    Clear(q);
    for(let i=0, _1=length(qcopy)-1;i<=_1;i++){
      const o=get(qcopy, i);
      if(typeof o=="object")(((sn) => {
        if(sn.s)q.push(sn);
      })(o));
      else(((f) => {
        q.push(f);
      })(o));
    }
  }
  else void 0;
}
export function MarkDone(res, sn, v){
  const _1=sn.s;
  if(_1!=null&&_1.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
export function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q2=m.$1;
    const q1=m.$0;
    sn.s=Ready(v, q2);
    for(let i=0, _1=length(q1)-1;i<=_1;i++)(get(q1, i))(v);
  }
  else void 0;
}
export function MarkForever(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q=m.$0;
    sn.s=Forever(v);
    for(let i=0, _1=length(q)-1;i<=_1;i++)(get(q, i))(v);
  }
  else void 0;
}
export function TryGet(snap){
  let _1;
  const m=snap.s;
  return(m!=null&&m.$==0?(_1=m.$0,true):m!=null&&m.$==2&&(_1=m.$0,true))?Some(_1):null;
}
