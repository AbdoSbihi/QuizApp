import { Get } from "./WebSharper.Enumerator.js"
import TaskCompletionSource from "./System.Threading.Tasks.TaskCompletionSource`1.js"
import { FromContinuations, noneCT, StartWithContinuations } from "./WebSharper.Concurrency.js"
import TaskCanceledException from "./System.Threading.Tasks.TaskCanceledException.js"
import NonStandardPromiseRejectionException from "./WebSharper.JavaScript.NonStandardPromiseRejectionException.js"
export function For(xs, f){
  const e=Get(xs);
  function run(){
    return e.MoveNext()?f(e.Current).then(run):Promise.resolve(null);
  }
  return new Promise((_1) => {
    run();
    _1();
  })["finally"](() => e.Dispose());
}
export function AsTask(p){
  const tcs=new TaskCompletionSource();
  p.then((d) => tcs.SetResult(d), (err) => tcs.SetException_1(unwrapExn(err)));
  return tcs.Task;
}
export function AsAsync(p){
  return FromContinuations((ok, ko) => {
    p.then(ok, (err) => ko(unwrapExn(err)));
  });
}
export function OfTask(t){
  return new Promise((resolve, reject) => {
    t.ContinueWith_1((t_1) => t_1.IsCanceled?reject(new TaskCanceledException("New")):t_1.IsFaulted?reject(t_1.Exception):resolve(t_1.Result), noneCT());
  });
}
export function OfAsync(a){
  return new Promise((_1, reject) => {
    StartWithContinuations(a, _1, (a_1) => {
      reject(a_1);
    }, (a_1) => {
      reject(a_1);
    }, null);
  });
}
export function unwrapExn(x){
  return x instanceof Error?x:new NonStandardPromiseRejectionException(x);
}
