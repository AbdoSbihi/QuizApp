import { ValueSome, ValueNone } from "./Microsoft.FSharp.Core.FSharpValueOption`1.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { ofArray } from "./Microsoft.FSharp.Collections.ListModule.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Error, Ok } from "./Microsoft.FSharp.Core.FSharpResult`2.js"
export function ToValueOption(result){
  return result.$==0?ValueSome(result.$0):ValueNone;
}
export function ToOption(result){
  return result.$==0?Some(result.$0):null;
}
export function ToSeq(result){
  return result.$==0?ofArray([result.$0]):FSharpList.Empty;
}
export function ToList(result){
  return result.$==0?ofArray([result.$0]):FSharpList.Empty;
}
export function ToArray(result){
  return result.$==0?[result.$0]:[];
}
export function Iterate(action, result){
  if(result.$==0)action(result.$0);
}
export function Contains(value, result){
  return result.$==0&&Equals(result.$0, value);
}
export function ForAll(predicate, result){
  return result.$==0?predicate(result.$0):true;
}
export function Exists(predicate, result){
  return result.$==0&&predicate(result.$0);
}
export function FoldBack(folder, result, state){
  return result.$==0?folder(result.$0, state):state;
}
export function Fold(folder, state, result){
  return result.$==0?folder(state, result.$0):state;
}
export function Count(result){
  return result.$==0?1:0;
}
export function DefaultWith(defThunk, result){
  return result.$==0?result.$0:defThunk(result.$0);
}
export function DefaultValue(value, result){
  return result.$==0?result.$0:value;
}
export function IsError(result){
  return result.$==1;
}
export function IsOk(result){
  return result.$!=1;
}
export function MapError(f, r){
  return r.$==1?Error(f(r.$0)):Ok(r.$0);
}
export function Map(f, r){
  return r.$==1?Error(r.$0):Ok(f(r.$0));
}
export function Bind(f, r){
  return r.$==1?Error(r.$0):f(r.$0);
}
