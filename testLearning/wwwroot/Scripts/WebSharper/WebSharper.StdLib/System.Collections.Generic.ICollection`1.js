export function isICollection(x){
  return"Add"in x&&"Clear"in x&&"Contains"in x&&"CopyTo"in x&&"Remove"in x&&"Count"in x&&"IsReadOnly"in x;
}
