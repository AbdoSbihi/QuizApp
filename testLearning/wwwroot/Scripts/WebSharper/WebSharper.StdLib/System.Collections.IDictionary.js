export function isIDictionary(x){
  return"DAdd"in x&&"Clear"in x&&"ContainsKey"in x&&"GetEnumerator"in x&&"RemoveKey"in x&&"IsFixedSize"in x&&"IsReadOnly"in x&&"Item"in x&&"Keys"in x&&"Values"in x&&"set_Item"in x;
}
