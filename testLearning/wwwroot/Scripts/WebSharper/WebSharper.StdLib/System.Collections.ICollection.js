export function isICollection(x){
  return"CopyTo0"in x&&"Count0"in x;
}
