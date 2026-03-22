import { ValueNone, ValueSome } from "./Microsoft.FSharp.Core.FSharpValueOption`1.js"
import { get } from "./WebSharper.Nullable.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { ofArray } from "./Microsoft.FSharp.Collections.ListModule.js"
export function filter(f, o){
  return o.$==1&&f(o.$0)?(o.$0,o):ValueNone;
}
export function fold(f, s, x){
  return x.$==0?s:f(s, x.$0);
}
export function foldBack(f, x, s){
  return x.$==0?s:f(x.$0, s);
}
export function ofNullable(o){
  return o==null?ValueNone:ValueSome(get(o));
}
export function ofObj(o){
  return o==null?ValueNone:ValueSome(o);
}
export function toArray(x){
  return x.$==0?[]:[x.$0];
}
export function toList(x){
  return x.$==0?FSharpList.Empty:ofArray([x.$0]);
}
export function toNullable(o){
  return o.$==1?o.$0:null;
}
export function toObj(o){
  return o.$==0?null:o.$0;
}
