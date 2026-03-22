import Object from "./System.Object.js"
import { length, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import TaskCompletionSource from "./System.Threading.Tasks.TaskCompletionSource`1.js"
import { noneCT, StartAsTask, Sleep, scheduler } from "./WebSharper.Concurrency.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import Task_1 from "./System.Threading.Tasks.Task`1.js"
import AggregateException from "./System.AggregateException.js"
import TaskCanceledException from "./System.Threading.Tasks.TaskCanceledException.js"
import OperationCanceledException from "./System.OperationCanceledException.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { InvalidOp } from "./Microsoft.FSharp.Core.Operators.js"
export default class Task extends Object {
  action;
  token;
  status;
  continuations;
  exc;
  static Yield(){
    return new Task("New_3", () => null);
  }
  static WhenAll(tasks){
    const target=length(tasks);
    const completed=[0];
    const results=new Array(target);
    const tcs=new TaskCompletionSource();
    for(let i=0, _1=target-1;i<=_1;i++)(((i_1) => {
      get(tasks, i).ContinueWith_1((t) => t.IsFaulted?void tcs.TrySetException_1(t.Exception):t.IsCanceled?void tcs.TrySetCanceled_1():(completed[0]++,results[i_1]=t.Result,completed[0]===target?tcs.SetResult(results):null), noneCT());
    })(i));
    return tcs.Task;
  }
  static WhenAll_1(tasks){
    const target=length(tasks);
    const completed=[0];
    const tcs=new TaskCompletionSource();
    for(let i=0, _1=target-1;i<=_1;i++)get(tasks, i).ContinueWith_1((t) => t.IsFaulted?void tcs.TrySetException_1(t.Exception):t.IsCanceled?void tcs.TrySetCanceled_1():(completed[0]++,completed[0]===target?void tcs.TrySetResult():null), noneCT());
    return tcs.Task;
  }
  static WhenAny(tasks){
    const tcs=new TaskCompletionSource();
    for(let i=0, _1=tasks.length-1;i<=_1;i++)get(tasks, i).ContinueWith((t) => {
      tcs.TrySetResult(t);
    }, noneCT());
    return tcs.Task;
  }
  static WhenAny_1(tasks){
    const tcs=new TaskCompletionSource();
    for(let i=0, _1=tasks.length-1;i<=_1;i++)get(tasks, i).ContinueWith_1((t) => {
      tcs.TrySetResult(t);
    }, noneCT());
    return tcs.Task;
  }
  static Delay(time, ct){
    return StartAsTask(Sleep(time), Some(ct));
  }
  static Delay_1(time){
    return StartAsTask(Sleep(time), null);
  }
  static Run(func, ct){
    const task=func();
    return ct.c?Task.FromCanceled(ct):(task.Status===0?task.Start():void 0,task);
  }
  static Run_1(func, ct){
    const res=new Task_1("New_4", func, ct, 0, null, void 0);
    res.Start();
    return res;
  }
  static Run_2(func, ct){
    const task=func();
    return ct.c?Task.FromCanceled_1(ct):(task.Status===0?task.Start():void 0,task);
  }
  static Run_3(action, ct){
    const res=new Task("New_4", action, ct, 0, null);
    res.Start();
    return res;
  }
  static FromResult(res){
    return new Task_1("New_4", null, noneCT(), 5, null, res);
  }
  static FromException(exc){
    return new Task_1("New_4", null, noneCT(), 7, new AggregateException("New_3", [exc]), null);
  }
  static FromException_1(exc){
    return new Task("New_4", null, noneCT(), 7, new AggregateException("New_3", [exc]));
  }
  static FromCanceled(ct){
    return new Task_1("New_4", null, ct, 6, new AggregateException("New_3", [new TaskCanceledException("New")]), null);
  }
  static FromCanceled_1(ct){
    return new Task("New_4", null, ct, 6, new AggregateException("New_3", [new TaskCanceledException("New")]));
  }
  Start(){
    if(this.status===0){
      this.status=2;
      scheduler().Fork(() => {
        this.status=3;
        try {
          this.Execute();
          this.status=5;
        }
        catch(m){
          let _1;
          if(m instanceof OperationCanceledException?Equals(m.ct, this.token)?(_1=m,true):(_1=m,false):(_1=m,false)){
            console.log("Task cancellation caught:", _1);
            this.exc=new AggregateException("New_3", [_1]);
            this.status=6;
          }
          else {
            console.log("Task error caught:", _1);
            this.exc=new AggregateException("New_3", [_1]);
            this.status=7;
          }
        }
        this.RunContinuations();
      });
    }
    else InvalidOp("Task not in initial state");
  }
  StartContinuation(){
    if(this.status===1){
      this.status=2;
      scheduler().Fork(() => {
        if(this.status===2){
          this.status=3;
          try {
            this.Execute();
            this.status=5;
          }
          catch(e){
            this.exc=new AggregateException("New_3", [e]);
            this.status=7;
          }
          this.RunContinuations();
        }
      });
    }
  }
  ContinueWith(func, ct){
    const res=new Task_1("New_4", () => func(this), ct, 1, null, void 0);
    if(this.IsCompleted)res.StartContinuation();
    else this.continuations.push(res);
    return res;
  }
  ContinueWith_1(action, ct){
    const res=new Task("New_4", () => action(this), ct, 1, null);
    if(this.IsCompleted)res.StartContinuation();
    else this.continuations.push(res);
    return res;
  }
  RunContinuations(){
    const a=this.continuations;
    for(let i=0, _1=a.length-1;i<=_1;i++)get(a, i).StartContinuation();
  }
  OnCompleted(cont){
    if(this.IsCompleted)cont();
    else {
      this.Status===0?this.Start():void 0;
      this.ContinueWith_1(() => cont(), noneCT());
    }
  }
  get Status(){
    return this.status;
  }
  get IsFaulted(){
    return this.status===7;
  }
  get IsCompleted(){
    return this.status===5||this.status===7||this.status===6;
  }
  get IsCanceled(){
    return this.status===6;
  }
  get Exception(){
    return this.exc;
  }
  Execute(){
    this.action();
  }
  constructor(i, _1, _2, _3, _4){
    let action;
    if(i=="New_3"){
      action=_1;
      i="New_4";
      _1=action;
      _2=noneCT();
      _3=0;
      _4=null;
    }
    let action_1;
    let ct;
    if(i=="New_2"){
      action_1=_1;
      ct=_2;
      i="New_4";
      _1=action_1;
      _2=ct;
      _3=0;
      _4=null;
    }
    let action_2;
    let obj;
    if(i=="New_1"){
      action_2=_1;
      obj=_2;
      i="New_4";
      _1=() => action_2(obj);
      _2=noneCT();
      _3=0;
      _4=null;
    }
    let action_3;
    let obj_1;
    let ct_1;
    if(i=="New"){
      action_3=_1;
      obj_1=_2;
      ct_1=_3;
      i="New_4";
      _1=() => action_3(obj_1);
      _2=ct_1;
      _3=0;
      _4=null;
    }
    if(i=="New_4"){
      const action_4=_1;
      const token=_2;
      const status=_3;
      const exc=_4;
      super();
      this.action=action_4;
      this.token=token;
      this.status=status;
      this.continuations=[];
      this.exc=exc;
    }
  }
}
