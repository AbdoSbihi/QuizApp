import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ListModule.js"
import { New } from "./WebSharper.Control.Observer.js"
import { observer } from "./Microsoft.FSharp.Control.CommonExtensions.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { Choice1Of2, Choice2Of2 } from "./Microsoft.FSharp.Core.FSharpChoice`2.js"
export function Sequence(ios){
  function sequence(ios_1){
    return ios_1.$==1?CombineLatest(ios_1.$0, sequence(ios_1.$1), (_1, _2) => FSharpList.Cons(_1, _2)):Return(FSharpList.Empty);
  }
  return sequence(ofSeq(ios));
}
export function Aggregate(io, seed, fold){
  return{Subscribe(o){
    const state=[seed];
    return io.Subscribe(New((v) => {
      Protect(() => fold(state[0], v), (s) => {
        state[0]=s;
        o.OnNext(s);
      }, (e) => {
        o.OnError(e);
      });
    }, (e) => {
      o.OnError(e);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function SelectMany(io){
  return{Subscribe(o){
    const disp=[() => { }];
    const d=io.Subscribe(observer((o1) => {
      const d_1=o1.Subscribe(observer((v) => {
        o.OnNext(v);
      }));
      disp[0]=() => {
        disp[0]();
        d_1.Dispose();
      };
    }));
    return{Dispose(){
      disp[0]();
      return d.Dispose();
    }};
  }};
}
export function Switch(io){
  return{Subscribe(o){
    const index=[0];
    const disp=[null];
    return io.Subscribe(observer((o1) => {
      index[0]++;
      if(disp[0]!=null)disp[0].$0.Dispose();
      const currentIndex=index[0];
      disp[0]=Some(o1.Subscribe(observer((v) => {
        if(currentIndex===index[0])o.OnNext(v);
      })));
    }));
  }};
}
export function CombineLatest(io1, io2, f){
  return{Subscribe(o){
    const lv1=[null];
    const lv2=[null];
    const update=() => {
      const _1=lv1[0];
      const _2=lv2[0];
      if(_1!=null&&_1.$==1){
        if(_2!=null&&_2.$==1){
          const v1=_1.$0;
          const v2=_2.$0;
          Protect(() => f(v1, v2), (v) => {
            o.OnNext(v);
          }, (e) => {
            o.OnError(e);
          });
        }
        else void 0;
      }
      else void 0;
    };
    const d1=io1.Subscribe(New((x) => {
      lv1[0]=Some(x);
      update();
    }, () => { }, () => { }));
    const d2=io2.Subscribe(New((y) => {
      lv2[0]=Some(y);
      update();
    }, () => { }, () => { }));
    return{Dispose(){
      d1.Dispose();
      return d2.Dispose();
    }};
  }};
}
export function Range(start, count){
  return{Subscribe(o){
    for(let i=start, _1=start+count;i<=_1;i++)o.OnNext(i);
    return{Dispose(){ }};
  }};
}
export function Concat(io1, io2){
  return{Subscribe(o){
    const innerDisp=[null];
    const outerDisp=io1.Subscribe(New((v) => {
      o.OnNext(v);
    }, () => { }, () => {
      innerDisp[0]=Some(io2.Subscribe(o));
    }));
    return{Dispose(){
      innerDisp[0]!=null?innerDisp[0].$0.Dispose():void 0;
      return outerDisp.Dispose();
    }};
  }};
}
export function Merge(io1, io2){
  return{Subscribe(o){
    const completed1=[false];
    const completed2=[false];
    const disp1=io1.Subscribe(New((v) => {
      o.OnNext(v);
    }, () => { }, () => {
      completed1[0]=true;
      completed1[0]&&completed2[0]?o.OnCompleted():void 0;
    }));
    const disp2=io2.Subscribe(New((v) => {
      o.OnNext(v);
    }, () => { }, () => {
      completed2[0]=true;
      completed1[0]&&completed2[0]?o.OnCompleted():void 0;
    }));
    return{Dispose(){
      disp1.Dispose();
      return disp2.Dispose();
    }};
  }};
}
export function Drop(count, io){
  return{Subscribe(o){
    const index=[0];
    return io.Subscribe(New((v) => {
      index[0]++;
      index[0]>count?o.OnNext(v):void 0;
    }, (e) => {
      o.OnError(e);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function Choose(f, io){
  return{Subscribe(o){
    return io.Subscribe(New((v) => {
      Protect(() => f(v), (o_1) => {
        if(o_1==null){ }
        else o.OnNext(o_1.$0);
      }, (e) => {
        o.OnError(e);
      });
    }, (e) => {
      o.OnError(e);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function Filter(f, io){
  return{Subscribe(o){
    return io.Subscribe(New((v) => {
      Protect(() => f(v)?Some(v):null, (o_1) => {
        if(o_1==null){ }
        else o.OnNext(o_1.$0);
      }, (e) => {
        o.OnError(e);
      });
    }, (e) => {
      o.OnError(e);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function Map(f, io){
  return{Subscribe(o){
    return io.Subscribe(New((v) => {
      Protect(() => f(v), (v_1) => {
        o.OnNext(v_1);
      }, (e) => {
        o.OnError(e);
      });
    }, (e) => {
      o.OnError(e);
    }, () => {
      o.OnCompleted();
    }));
  }};
}
export function Protect(f, succeed, fail){
  let m;
  try {
    m=Choice1Of2(f());
  }
  catch(e){
    m=Choice2Of2(e);
  }
  return m.$==1?fail(m.$0):succeed(m.$0);
}
export function Never(){
  return{Subscribe(){
    return{Dispose(){ }};
  }};
}
export function Return(x){
  return{Subscribe(o){
    o.OnNext(x);
    o.OnCompleted();
    return{Dispose(){ }};
  }};
}
export function Of(f){
  return{Subscribe(o){
    const dispose=f((x) => {
      o.OnNext(x);
    });
    return{Dispose(){
      return dispose();
    }};
  }};
}
