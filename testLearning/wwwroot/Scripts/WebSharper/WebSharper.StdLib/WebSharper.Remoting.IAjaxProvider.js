export function isIAjaxProvider(x){
  return"Async"in x&&"Sync"in x;
}
