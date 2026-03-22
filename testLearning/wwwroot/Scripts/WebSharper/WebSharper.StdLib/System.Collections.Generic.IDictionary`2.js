export function isIDictionary(x){
  return"DAdd"in x&&"ContainsKey"in x&&"RemoveKey"in x&&"TryGetValue"in x&&"Item"in x&&"Keys"in x&&"Values"in x&&"set_Item"in x;
}
