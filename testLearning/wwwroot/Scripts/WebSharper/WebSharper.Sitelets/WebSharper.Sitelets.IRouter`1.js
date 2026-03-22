export function isIRouter(x){
  return"Link"in x&&"Route"in x;
}
