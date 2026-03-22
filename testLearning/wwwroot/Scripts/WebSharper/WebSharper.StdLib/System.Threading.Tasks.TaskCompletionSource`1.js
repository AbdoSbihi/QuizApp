import Object from "./System.Object.js"
import AggregateException from "./System.AggregateException.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import Task from "./System.Threading.Tasks.Task`1.js"
import { noneCT } from "./WebSharper.Concurrency.js"
export default class TaskCompletionSource extends Object {
  task;
  TrySetResult(res){
    return!this.task.IsCompleted&&(this.task.status=5,this.task.result=res,this.task.RunContinuations(),true);
  }
  TrySetException(exs){
    return this.TrySetException_1(new AggregateException("New_2", exs));
  }
  TrySetException_1(exc){
    return!this.task.IsCompleted&&(this.task.status=7,this.task.exc=new AggregateException("New_3", [exc]),this.task.RunContinuations(),true);
  }
  TrySetCanceled(ct){
    return!this.task.IsCompleted&&(this.task.status=6,this.task.token=ct,this.task.RunContinuations(),true);
  }
  TrySetCanceled_1(){
    return!this.task.IsCompleted&&(this.task.status=6,this.task.RunContinuations(),true);
  }
  SetResult(res){
    this.task.IsCompleted?FailWith("Task already completed."):void 0;
    this.task.status=5;
    this.task.result=res;
    this.task.RunContinuations();
  }
  SetException(exs){
    this.SetException_1(new AggregateException("New_2", exs));
  }
  SetException_1(exc){
    this.task.IsCompleted?FailWith("Task already completed."):void 0;
    this.task.status=7;
    this.task.exc=new AggregateException("New_3", [exc]);
    this.task.RunContinuations();
  }
  SetCanceled(){
    this.task.IsCompleted?FailWith("Task already completed."):void 0;
    this.task.status=6;
    this.task.RunContinuations();
  }
  get Task(){
    return this.task;
  }
  constructor(){
    super();
    this.task=new Task("New_4", null, noneCT(), 1, null, void 0);
  }
}
