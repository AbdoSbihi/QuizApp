export function isISet(x){
  return"SAdd"in x&&"ExceptWith"in x&&"IntersectWith"in x&&"IsProperSubsetOf"in x&&"IsProperSupersetOf"in x&&"IsSubsetOf"in x&&"IsSupersetOf"in x&&"Overlaps"in x&&"SetEquals"in x&&"SymmetricExceptWith"in x&&"UnionWith"in x;
}
