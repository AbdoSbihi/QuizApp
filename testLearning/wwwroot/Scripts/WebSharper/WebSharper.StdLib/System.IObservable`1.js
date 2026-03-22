export function isIObservable(x){
  return"Subscribe"in x;
}
