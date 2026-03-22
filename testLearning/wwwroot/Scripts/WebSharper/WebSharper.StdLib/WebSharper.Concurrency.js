import { Get } from "./WebSharper.Enumerator.js"
import { New } from "./WebSharper.Concurrency.AsyncBody`1.js"
import { Ok, No, Cc } from "./WebSharper.Concurrency.Result`1.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import TimeoutException from "./System.TimeoutException.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { length, get, set } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { InvalidArg, FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import TaskCompletionSource from "./System.Threading.Tasks.TaskCompletionSource`1.js"
import OperationCanceledException from "./System.OperationCanceledException.js"
import { observer } from "./Microsoft.FSharp.Control.CommonExtensions.js"
import $StartupCode_Concurrency from "./$StartupCode_Concurrency.js"
import { Choice1Of2, Choice2Of2 } from "./Microsoft.FSharp.Core.FSharpChoice`2.js"
export function For(s, b){
  return Using(Get(s), (ie) => While(() => ie.MoveNext(), Delay(() => b(ie.Current))));
}
export function While(g, c){
  return g()?Bind(c, () => While(g, c)):Return();
}
export function Using(x, f){
  return TryFinally(f(x), () => {
    x.Dispose();
  });
}
export function TryCancelled(run, comp){
  return(c) => {
    run(New((a) => {
      if(a.$==2){
        comp(a.$0);
        c.k(a);
      }
      else c.k(a);
    }, c.ct));
  };
}
export function OnCancel(action){
  return(c) => {
    c.k(Ok(Register(c.ct, action)));
  };
}
export function StartChildAsTask(r){
  return(c) => {
    (StartChild(r, null))(New((a) => {
      if(a.$==0)c.k(Ok(StartImmediateAsTask(a.$0, Some(c.ct))));
    }, c.ct));
  };
}
export function StartChild(r, t){
  return(c) => {
    const inTime=[true];
    const cached=[null];
    const queue=[];
    const tReg=t!=null&&t.$==1?Some(setTimeout(() => {
      inTime[0]=false;
      const err=No(new TimeoutException("New"));
      while(queue.length>0)
        (queue.shift())(err);
    }, t.$0)):null;
    scheduler().Fork(() => {
      if(!c.ct.c)r(New((res) => {
        if(inTime[0]){
          cached[0]=Some(res);
          if(tReg!=null&&tReg.$==1)clearTimeout(tReg.$0);
          while(queue.length>0)
            (queue.shift())(res);
        }
      }, c.ct));
    });
    c.k(Ok((c2) => {
      if(inTime[0]){
        const m=cached[0];
        if(m==null)queue.push(c2.k);
        else c2.k(m.$0);
      }
      else c2.k(No(new TimeoutException("New")));
    }));
  };
}
export function Sequential(cs){
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const a=new Array(n);
    function start(i){
      while(true)
        {
          const action=((i_1) =>() => {
            (get(cs_1, i_1))(New((_1) => accept(i_1, _1), c.ct));
          })(i);
          return scheduler().Fork(action);
        }
    }
    function accept(i, x){
      return x.$==0?(set(a, i, x.$0),i===n-1?c.k(Ok(a)):c.ct.c?cancel(c):start(i+1)):c.k(x);
    }
    start(0);
  };
}
export function ParallelWithMaxDegree(cs, d){
  if(d<=0)InvalidArg("maxDegreeOfParallelism", "maxDegreeOfParallelism must be positive, was "+String(d));
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const o=[n];
    const a=new Array(n);
    function start(i){
      scheduler().Fork(() => {
        (get(cs_1, i))(New(accept(i), c.ct));
      });
    }
    function accept(i){
      return(x) => {
        let _1;
        const _2=o[0];
        switch(_2===0?0:_2===1?x.$==0?1:(_1=[_2, x],3):x.$==0?2:(_1=[_2, x],3)){
          case 0:
            return null;
          case 1:
            set(a, i, x.$0);
            o[0]=0;
            return c.k(Ok(a));
          case 2:
            const x_1=x.$0;
            if(c.ct.c){
              o[0]=0;
              return cancel(c);
            }
            else {
              set(a, i, x_1);
              o[0]=_2-1;
              const j=n-_2+d;
              return j<n?start(j):null;
            }
            break;
          case 3:
            o[0]=0;
            return c.k(_1[1]);
        }
      };
    }
    for(let i=0, _1=(Compare(d, n)===-1?d:n)-1;i<=_1;i++)start(i);
  };
}
export function Parallel(cs){
  const cs_1=ofSeq(cs);
  return length(cs_1)===0?Return([]):(c) => {
    const n=cs_1.length;
    const o=[n];
    const a=new Array(n);
    for(let i=0, _1=n-1;i<=_1;i++)(((i_1) => scheduler().Fork(() => {
      (get(cs_1, i_1))(New((_2) => {
        let _3;
        const _4=o[0];
        switch(_4===0?0:_4===1?_2.$==0?1:(_3=_2,3):_2.$==0?2:(_3=_2,3)){
          case 0:
            return null;
          case 1:
            set(a, i_1, _2.$0);
            o[0]=0;
            return c.k(Ok(a));
          case 2:
            set(a, i_1, _2.$0);
            {
              o[0]=_4-1;
              return;
            }
            break;
          case 3:
            o[0]=0;
            return c.k(_3);
        }
      }, c.ct));
    }))(i));
  };
}
export function Sleep(ms){
  return(c) => {
    let pending;
    let creg;
    pending=void 0;
    creg=void 0;
    pending=setTimeout(() => {
      creg.Dispose();
      scheduler().Fork(() => {
        c.k(Ok(null));
      });
    }, ms);
    creg=Register(c.ct, () => {
      clearTimeout(pending);
      scheduler().Fork(() => {
        cancel(c);
      });
    });
  };
}
export function StartImmediateAsTask(c, ctOpt){
  const tcs=new TaskCompletionSource();
  StartWithContinuations(c, (r) => {
    tcs.SetResult(r);
  }, (e) => {
    tcs.SetException_1(e);
  }, () => {
    tcs.SetCanceled();
  }, ctOpt);
  return tcs.Task;
}
export function StartAsTask(c, ctOpt){
  const tcs=new TaskCompletionSource();
  scheduler().Fork(() => {
    StartWithContinuations(c, (r) => {
      tcs.SetResult(r);
    }, (e) => {
      tcs.SetException_1(e);
    }, () => {
      tcs.SetCanceled();
    }, ctOpt);
  });
  return tcs.Task;
}
export function AwaitTask1(t){
  return FromContinuations((ok, err, cc) => {
    t.Status===0?t.Start():void 0;
    t.ContinueWith_1((t_1) => t_1.IsCanceled?cc(new OperationCanceledException("New", noneCT())):t_1.IsFaulted?err(t_1.Exception):ok(t_1.Result), noneCT());
  });
}
export function AwaitTask(t){
  return FromContinuations((ok, err, cc) => {
    t.Status===0?t.Start():void 0;
    t.ContinueWith_1((t_1) => t_1.IsCanceled?cc(new OperationCanceledException("New", noneCT())):t_1.IsFaulted?err(t_1.Exception):ok(), noneCT());
  });
}
export function AwaitEvent(e, ca){
  return(c) => {
    let sub;
    let creg;
    sub=void 0;
    creg=void 0;
    sub=e.Subscribe(observer((x) => {
      sub.Dispose();
      creg.Dispose();
      scheduler().Fork(() => {
        c.k(Ok(x));
      });
    }));
    creg=Register(c.ct, () => {
      if(ca!=null&&ca.$==1)ca.$0();
      else {
        sub.Dispose();
        scheduler().Fork(() => {
          cancel(c);
        });
      }
    });
  };
}
export function StartImmediate(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New((a) => {
    if(a.$==1)UncaughtAsyncError(a.$0);
  }, ct));
}
export function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
export function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
export function StartWithContinuations(c, s, f, cc, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New((a) => {
    if(a.$==1)f(a.$0);
    else if(a.$==2)cc(a.$0);
    else s(a.$0);
  }, ct));
}
export function FromContinuations(subscribe){
  return(c) => {
    const continued=[false];
    const once=(cont) => {
      if(continued[0])FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
      else {
        continued[0]=true;
        scheduler().Fork(cont);
      }
    };
    subscribe((a) => {
      once(() => {
        c.k(Ok(a));
      });
    }, (e) => {
      once(() => {
        c.k(No(e));
      });
    }, (e) => {
      once(() => {
        c.k(Cc(e));
      });
    });
  };
}
export function GetCT(){
  return $StartupCode_Concurrency.GetCT;
}
export function Catch(r){
  return(c) => {
    try {
      r(New((a) => {
        if(a.$==0)c.k(Ok(Choice1Of2(a.$0)));
        else if(a.$==1)c.k(Ok(Choice2Of2(a.$0)));
        else c.k(a);
      }, c.ct));
    }
    catch(e){
      c.k(Ok(Choice2Of2(e)));
    }
  };
}
export function TryWith(r, f){
  return(c) => {
    r(New((a) => {
      if(a.$==0)c.k(Ok(a.$0));
      else if(a.$==1){
        const e=a.$0;
        try {
          (f(e))(c);
        }
        catch(e_1){
          c.k(a);
        }
      }
      else c.k(a);
    }, c.ct));
  };
}
export function TryFinally(run, f){
  return(c) => {
    run(New((r) => {
      try {
        f();
        c.k(r);
      }
      catch(e){
        c.k(No(e));
      }
    }, c.ct));
  };
}
export function Delay(mk){
  return(c) => {
    try {
      (mk())(c);
    }
    catch(e){
      c.k(No(e));
    }
  };
}
export function Combine(a, b){
  return Bind(a, () => b);
}
export function Bind(r, f){
  return checkCancel((c) => {
    r(New((a) => {
      if(a.$==0){
        const x=a.$0;
        scheduler().Fork(() => {
          try {
            (f(x))(c);
          }
          catch(e){
            c.k(No(e));
          }
        });
      }
      else scheduler().Fork(() => {
        c.k(a);
      });
    }, c.ct));
  });
}
export function Zero(){
  return $StartupCode_Concurrency.Zero;
}
export function Return(x){
  return(c) => {
    c.k(Ok(x));
  };
}
export function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
export function cancel(c){
  c.k(Cc(new OperationCanceledException("New", c.ct)));
}
export function defCTS(){
  return $StartupCode_Concurrency.defCTS;
}
export function scheduler(){
  return $StartupCode_Concurrency.scheduler;
}
export function Register(ct, callback){
  if(ct===noneCT())return{Dispose(){
    return null;
  }};
  else {
    const i=ct.r.push(callback)-1;
    return{Dispose(){
      return set(ct.r, i, () => { });
    }};
  }
}
export function noneCT(){
  return $StartupCode_Concurrency.noneCT;
}
