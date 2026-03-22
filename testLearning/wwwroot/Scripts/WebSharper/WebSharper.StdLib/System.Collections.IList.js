export function isIList(x){
  return"LAdd"in x&&"LClear"in x&&"LContains"in x&&"LIndexOf0"in x&&"LInsert0"in x&&"LRemove0"in x&&"LRemoveAt0"in x&&"IsFixedSize"in x&&"LIsReadOnly"in x&&"LItem0"in x&&"set_LItem0"in x;
}
