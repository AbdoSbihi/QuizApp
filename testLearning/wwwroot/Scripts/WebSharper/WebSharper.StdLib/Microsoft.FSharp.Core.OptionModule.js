import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { get } from "./WebSharper.Nullable.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { ofArray } from "./Microsoft.FSharp.Collections.ListModule.js"
export function filter(f, o){
  let _1;
  return o!=null&&o.$==1&&(f(o.$0)&&(_1=o.$0,true))?o:null;
}
export function fold(f, s, x){
  return x==null?s:f(s, x.$0);
}
export function foldBack(f, x, s){
  return x==null?s:f(x.$0, s);
}
export function ofNullable(o){
  return o==null?null:Some(get(o));
}
export function ofObj(o){
  return o==null?null:Some(o);
}
export function toArray(x){
  return x==null?[]:[x.$0];
}
export function toList(x){
  return x==null?FSharpList.Empty:ofArray([x.$0]);
}
export function toNullable(o){
  return o!=null&&o.$==1?o.$0:null;
}
export function toObj(o){
  return o==null?null:o.$0;
}
