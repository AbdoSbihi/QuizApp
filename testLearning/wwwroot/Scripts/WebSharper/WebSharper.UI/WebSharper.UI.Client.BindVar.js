import Client from "./$StartupCode_Attr.Client.js"
import { Map } from "./WebSharper.UI.View.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
export function FloatApplyChecked(){
  return Client.FloatApplyChecked;
}
export function FloatGetChecked(){
  return Client.FloatGetChecked;
}
export function FloatSetChecked(){
  return Client.FloatSetChecked;
}
export function FloatApplyUnchecked(){
  return Client.FloatApplyUnchecked;
}
export function FloatGetUnchecked(){
  return Client.FloatGetUnchecked;
}
export function FloatSetUnchecked(){
  return Client.FloatSetUnchecked;
}
export function IntApplyChecked(){
  return Client.IntApplyChecked;
}
export function IntGetChecked(){
  return Client.IntGetChecked;
}
export function IntSetChecked(){
  return Client.IntSetChecked;
}
export function IntApplyUnchecked(){
  return Client.IntApplyUnchecked;
}
export function IntGetUnchecked(){
  return Client.IntGetUnchecked;
}
export function IntSetUnchecked(){
  return Client.IntSetUnchecked;
}
export function FileApplyUnchecked(){
  return Client.FileApplyUnchecked;
}
export function FileGetUnchecked(){
  return Client.FileGetUnchecked;
}
export function FileSetUnchecked(){
  return Client.FileSetUnchecked;
}
export function DateTimeApplyUnchecked(){
  return Client.DateTimeApplyUnchecked;
}
export function DateTimeGetUnchecked(){
  return Client.DateTimeGetUnchecked;
}
export function DateTimeSetUnchecked(){
  return Client.DateTimeSetUnchecked;
}
export function StringListApply(){
  return Client.StringListApply;
}
export function StringListGet(){
  return Client.StringListGet;
}
export function StringListSet(){
  return Client.StringListSet;
}
export function StringApply(){
  return Client.StringApply;
}
export function StringGet(){
  return Client.StringGet;
}
export function StringSet(){
  return Client.StringSet;
}
export function BoolCheckedApply(){
  return Client.BoolCheckedApply;
}
export function FileApplyValue(get, set, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    });
  }, (x) => {
    const _1=set(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
export function ApplyValue(get, set, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _1=set(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
