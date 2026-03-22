import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import Trans from "./WebSharper.UI.Trans`1.js"
export function Exit(f, tr){
  return tr.Copy(null, null, Some(f), Some(tr.TFlags|4));
}
export function Enter(f, tr){
  return tr.Copy(null, Some(f), null, Some(tr.TFlags|2));
}
export function Change(ch, tr){
  return tr.Copy(Some(ch), null, null, Some(tr.TFlags|1));
}
export function Create(ch){
  return new Trans("New_1", ch);
}
export function Trivial(){
  return new Trans("New_2");
}
export function CanAnimateExit(tr){
  let c=tr.TFlags;
  const flag=4;
  return(c&flag)===flag;
}
export function CanAnimateEnter(tr){
  let c=tr.TFlags;
  const flag=2;
  return(c&flag)===flag;
}
export function CanAnimateChange(tr){
  let c=tr.TFlags;
  const flag=1;
  return(c&flag)===flag;
}
export function AnimateExit(tr, x){
  return tr.TExit(x);
}
export function AnimateEnter(tr, x){
  return tr.TEnter(x);
}
export function AnimateChange(tr, x, y){
  return tr.TChange(x, y);
}
