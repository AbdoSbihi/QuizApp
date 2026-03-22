export function isIEnumerable(x){
  return"GetEnumerator"in x;
}
