import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { iteri, ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import $StartupCode_Flow from "./$StartupCode_Flow.js"
export function tryBack(index){
  let _1;
  let st=globalThis.history.state;
  if(!Equals(st, null)&&Equals(typeof st, "object")){
    const prevSt=st[flowPrevStateName()];
    _1=prevSt!=void 0?prevSt:-1;
  }
  else _1=-1;
  return index===_1&&(globalThis.history.back(),true);
}
export function markPrev(index){
  let st;
  st=globalThis.history.state;
  if(Equals(st, null)||!Equals(typeof st, "object"))st={};
  st[flowPrevStateName()]=index;
  globalThis.history.replaceState(st, "");
}
export function install(nav){
  length(flowVars())===0?globalThis.addEventListener("popstate", (d) => {
    const st=d.state;
    const flowSt=!Equals(st, null)&&Equals(typeof st, "object")?st[flowStateName()]:[];
    return flowSt!=void 0?iteri((_1, _2) => _1!=void 0&&_1<length(flowVars())?get(flowVars(), _1).deref().Set(_2):null, flowSt):null;
  }, false):void 0;
  flowVars().push(new WeakRef(nav));
  return length(flowVars())-1;
}
export function markState(){
  let st;
  st=globalThis.history.state;
  if(Equals(st, null)||!Equals(typeof st, "object"))st={};
  st[flowStateName()]=ofSeq(map((var_1) => {
    const v=var_1.deref();
    return v==void 0?void 0:v.Get();
  }, flowVars()));
  globalThis.history.replaceState(st, "");
}
export function flowPrevStateName(){
  return $StartupCode_Flow.flowPrevStateName;
}
export function flowStateName(){
  return $StartupCode_Flow.flowStateName;
}
export function flowVars(){
  return $StartupCode_Flow.flowVars;
}
