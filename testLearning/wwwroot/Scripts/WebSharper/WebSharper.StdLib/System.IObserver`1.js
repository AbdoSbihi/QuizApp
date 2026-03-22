export function isIObserver(x){
  return"OnCompleted"in x&&"OnError"in x&&"OnNext"in x;
}
