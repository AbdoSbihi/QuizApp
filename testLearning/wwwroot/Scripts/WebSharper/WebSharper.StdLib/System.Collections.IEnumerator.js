export function isIEnumerator(x){
  return"MoveNext"in x&&"Reset"in x&&"Current0"in x;
}
