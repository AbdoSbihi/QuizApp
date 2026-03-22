export function isIRemotingProvider(x){
  return"Async"in x&&"Send"in x&&"Sync"in x&&"Task"in x;
}
