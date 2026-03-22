export function isIAttrNode(x){
  return"NGetChangeAnim"in x&&"NGetEnterAnim"in x&&"NGetExitAnim"in x&&"NSync"in x&&"NChanged"in x;
}
