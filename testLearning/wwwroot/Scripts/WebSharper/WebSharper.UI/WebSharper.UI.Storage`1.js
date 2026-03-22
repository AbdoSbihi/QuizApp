export function isStorage(x){
  return"SAppend"in x&&"SAppendMany"in x&&"SInit"in x&&"SPrepend"in x&&"SPrependMany"in x&&"SRemoveIf"in x&&"SSet"in x&&"SSetAt"in x;
}
