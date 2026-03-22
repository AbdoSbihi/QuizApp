import Object from "./System.Object.js"
import { Start, Delay, Bind, Return, Zero, FromContinuations, TryWith, Register } from "./WebSharper.Concurrency.js"
import TimeoutException from "./System.TimeoutException.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import FSharpEvent from "./Microsoft.FSharp.Control.FSharpEvent`1.js"
import LinkedList from "./System.Collections.Generic.LinkedList`1.js"
export default class FSharpMailboxProcessor extends Object {
  initial;
  token;
  started;
  errorEvent;
  mailbox;
  savedCont;
  DefaultTimeout;
  static Start(initial, token){
    const mb=new FSharpMailboxProcessor(initial, token);
    mb.Start();
    return mb;
  }
  dequeue(){
    const f=this.mailbox.n.v;
    this.mailbox.RemoveFirst();
    return f;
  }
  resume(){
    const m=this.savedCont;
    if(m!=null&&m.$==1){
      const c=m.$0;
      this.savedCont=null;
      this.startAsync(c);
    }
    else void 0;
  }
  startAsync(a){
    Start(a, this.token);
  }
  Scan(scanner, timeout){
    return Delay(() => Bind(this.TryScan(scanner, timeout), (a) => {
      let _1;
      if(a!=null&&a.$==1)_1=a.$0;
      else throw new TimeoutException("New");
      return Return(_1);
    }));
  }
  TryScan(scanner, timeout){
    const this_1=this;
    const d=this.DefaultTimeout_1;
    const timeout_1=timeout==null?d:timeout.$0;
    return Delay(() => {
      let m=this.mailbox.n;
      let found=null;
      while(!Equals(m, null))
        {
          const m_1=scanner(m.v);
          if(m_1==null)m=m.n;
          else {
            this.mailbox.Remove_1(m);
            m=null;
            found=m_1;
          }
        }
      const m_2=found;
      if(m_2!=null&&m_2.$==1)return Bind(m_2.$0, (a) => Return(Some(a)));
      else {
        const c=(ok) => {
          if(timeout_1<0){
            function scanNext(){
              this_1.savedCont=Some(Delay(() => {
                const m_3=scanner(this_1.mailbox.n.v);
                if(m_3!=null&&m_3.$==1){
                  const c_1=m_3.$0;
                  this_1.mailbox.RemoveFirst();
                  return Bind(c_1, (a) => {
                    ok(Some(a));
                    return Zero();
                  });
                }
                else {
                  scanNext();
                  return Zero();
                }
              }));
            }
            scanNext();
          }
          else {
            const waiting=[true];
            const pending=setTimeout(() => {
              if(waiting[0]){
                waiting[0]=false;
                this.savedCont=null;
                ok(null);
              }
            }, timeout_1);
            function scanNext_1(){
              this_1.savedCont=Some(Delay(() => {
                const m_3=scanner(this_1.mailbox.n.v);
                if(m_3!=null&&m_3.$==1){
                  const c_1=m_3.$0;
                  this_1.mailbox.RemoveFirst();
                  return Bind(c_1, (a) => waiting[0]?(waiting[0]=false,clearTimeout(pending),ok(Some(a)),Zero()):Zero());
                }
                else {
                  scanNext_1();
                  return Zero();
                }
              }));
            }
            scanNext_1();
          }
        };
        return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
      }
    });
  }
  PostAndAsyncReply(msgf, timeout){
    return Delay(() => Bind(this.PostAndTryAsyncReply(msgf, timeout), (a) => {
      let _1;
      if(a!=null&&a.$==1)_1=a.$0;
      else throw new TimeoutException("New");
      return Return(_1);
    }));
  }
  PostAndTryAsyncReply(msgf, timeout){
    const d=this.DefaultTimeout_1;
    const timeout_1=timeout==null?d:timeout.$0;
    const c=(ok) => {
      if(timeout_1<0){
        this.mailbox.AddLast(msgf((x) => ok(Some(x))));
        this.resume();
      }
      else {
        const waiting=[true];
        this.mailbox.AddLast(msgf((res) => {
          if(waiting[0]){
            waiting[0]=false;
            ok(Some(res));
          }
        }));
        this.resume();
        setTimeout(() => {
          if(waiting[0]){
            waiting[0]=false;
            ok(null);
          }
        }, timeout_1);
      }
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
  get CurrentQueueLength(){
    return this.mailbox.c;
  }
  Receive(timeout){
    return Delay(() => Bind(this.TryReceive(timeout), (a) => {
      let _1;
      if(a!=null&&a.$==1)_1=a.$0;
      else throw new TimeoutException("New");
      return Return(_1);
    }));
  }
  TryReceive(timeout){
    const d=this.DefaultTimeout_1;
    const timeout_1=timeout==null?d:timeout.$0;
    const c=(ok) => {
      if(Equals(this.mailbox.n, null)){
        if(timeout_1<0)this.savedCont=Some(Delay(() => {
          ok(Some(this.dequeue()));
          return Zero();
        }));
        else {
          const waiting=[true];
          const pending=setTimeout(() => {
            if(waiting[0]){
              waiting[0]=false;
              this.savedCont=null;
              ok(null);
            }
          }, timeout_1);
          this.savedCont=Some(Delay(() => waiting[0]?(waiting[0]=false,clearTimeout(pending),ok(Some(this.dequeue())),Zero()):Zero()));
        }
      }
      else ok(Some(this.dequeue()));
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
  Start(){
    if(this.started)FailWith("The MailboxProcessor has already been started.");
    else {
      this.started=true;
      this.startAsync(Delay(() => TryWith(Delay(() => Bind(this.initial(this), () => Return(null))), (a) => {
        this.errorEvent.event.Trigger(a);
        return Zero();
      })));
    }
  }
  set DefaultTimeout_1(v){
    this.DefaultTimeout=v;
  }
  get DefaultTimeout_1(){
    return this.DefaultTimeout;
  }
  remove_Error(handler){
    this.errorEvent.event.RemoveHandler(handler);
  }
  add_Error(handler){
    this.errorEvent.event.AddHandler(handler);
  }
  get Error(){
    return this.errorEvent.event;
  }
  constructor(initial, token){
    super();
    this.initial=initial;
    this.token=token;
    this.started=false;
    this.errorEvent=new FSharpEvent();
    this.mailbox=new LinkedList("New");
    this.savedCont=null;
    const m=this.token;
    if(m==null){ }
    else Register(m.$0, () => {
      this.resume();
    });
    this.DefaultTimeout=-1;
  }
}
