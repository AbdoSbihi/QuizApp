import { create } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { iteri } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export function ToValueArray(d){
  const arr=create(d.count, void 0);
  iteri((_1, _2) => set(arr, _1, _2.V), d);
  return arr;
}
export function ToKeyArray(d){
  const arr=create(d.count, void 0);
  iteri((_1, _2) => set(arr, _1, _2.K), d);
  return arr;
}
