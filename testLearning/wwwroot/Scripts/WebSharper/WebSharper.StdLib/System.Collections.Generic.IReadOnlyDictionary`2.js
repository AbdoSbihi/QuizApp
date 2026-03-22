export function isIReadOnlyDictionary(x){
  return"ContainsKey"in x&&"TryGetValue"in x&&"Item"in x&&"Keys"in x&&"Values"in x;
}
