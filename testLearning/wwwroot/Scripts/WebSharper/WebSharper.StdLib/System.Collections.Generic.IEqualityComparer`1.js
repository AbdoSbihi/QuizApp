export function isIEqualityComparer(x){
  return"CEquals"in x&&"CGetHashCode"in x;
}
