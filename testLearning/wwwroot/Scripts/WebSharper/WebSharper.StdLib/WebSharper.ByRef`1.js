export function isByRef(x){
  return"get"in x&&"set"in x;
}
