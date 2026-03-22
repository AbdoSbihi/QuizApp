export function isIStructuralEquatable(x){
  return"SEquals"in x&&"SGetHashCode"in x;
}
