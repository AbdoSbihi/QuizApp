export function isIEqualityComparer(x){
  return"CEquals0"in x&&"CGetHashCode0"in x;
}
