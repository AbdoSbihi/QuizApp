export function isIList(x){
  return"LIndexOf"in x&&"LInsert"in x&&"LRemoveAt"in x&&"LItem"in x&&"set_LItem"in x;
}
