import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
export function maybeReplaceFirst(k, f, l){
  const didIt=[false];
  return map((x) => {
    if(!didIt[0]&&k(x)){
      const x_1=f(x);
      return x_1==null?x:x_1.$0;
    }
    else return x;
  }, l);
}
export function replaceFirst(k, f, l){
  const didIt=[false];
  return map((x) =>!didIt[0]&&k(x)?f(x):x, l);
}
