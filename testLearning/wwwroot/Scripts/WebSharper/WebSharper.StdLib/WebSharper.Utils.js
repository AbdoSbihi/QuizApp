import { unfold, init, delay, map } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { concat, PadLeftWith } from "./Microsoft.FSharp.Core.StringModule.js"
import { map as map_1 } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { GetFields } from "./WebSharper.JavaScript.JS.js"
import { get2D, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { range } from "./Microsoft.FSharp.Core.Operators.js"
export function spaceForPosSignAdjusted(s){
  return" "+s;
}
export function plusForPosSignAdjusted(s){
  return"+"+s;
}
export function adjustSigned(number, length){
  return number<0?length===32?number+(1<<16)*(1<<16):number+(1<<length):number;
}
export function nullableConv(a, f){
  return a==null?null:f(a);
}
export function nullableCmpR(a, b, f){
  return b==null?false:f(a, b);
}
export function nullableCmpL(a, b, f){
  return a==null?false:f(a, b);
}
export function nullableCmpE(a, b, f){
  return a==null?b==null:b==null?false:f(a, b);
}
export function nullableCmp(a, b, f){
  return a==null||b==null?false:f(a, b);
}
export function nullableOpR(a, b, f){
  return b==null?null:f(a, b);
}
export function nullableOpL(a, b, f){
  return a==null?null:f(a, b);
}
export function nullableOp(a, b, f){
  return a==null||b==null?null:f(a, b);
}
export function bigintStep(min, step, max){
  const pos=step>BigInt(0);
  return BigInt(1)+max-min<=BigInt(0)?[]:unfold((state) => pos&&state>max||!pos&&state<max?null:Some([state, state+step]), min);
}
export function charStep(min, step, max){
  const minv=min.charCodeAt();
  const count=1+((max.charCodeAt()-minv)/step.charCodeAt()>>0);
  return count<=0?[]:init(count, (x) => String.fromCharCode(x+minv));
}
export function bigintRange(min, max){
  return BigInt(1)+max-min<=BigInt(0)?[]:unfold((state) => state>max?null:Some([state, state+BigInt(1)]), min);
}
export function charRange(min, max){
  const minv=min.charCodeAt();
  const count=1+max.charCodeAt()-minv;
  return count<=0?[]:init(count, (x) => String.fromCharCode(x+minv));
}
export function prettyPrint(o){
  if(o===null)return"null";
  else {
    const t=typeof o;
    if(t=="string")return"\""+o+"\"";
    else if(t=="object"){
      if(o instanceof Array)return"[|"+concat("; ", map_1(prettyPrint, o))+"|]";
      else {
        const s=String(o);
        return s=="[object Object]"?"{"+concat("; ", map_1((_1) => _1[0]+" = "+prettyPrint(_1[1]), GetFields(o)))+"}":s;
      }
    }
    else return String(o);
  }
}
export function printArray2D(p, o){
  return o===null?"null":"[["+concat("][", delay(() => {
    const l2=o.length?o[0].length:0;
    return map((i) => concat("; ", delay(() => map((j) => p(get2D(o, i, j)), range(0, l2-1)))), range(0, o.length-1));
  }))+"]]";
}
export function printArray(p, o){
  return o===null?"null":"[|"+concat("; ", map_1(p, o))+"|]";
}
export function printList(p, o){
  return"["+concat("; ", map(p, o))+"]";
}
export function padNumLeft(s, l){
  const f=get(s, 0);
  return f==" "||f=="+"||f=="-"?f+PadLeftWith(s.substr(1), l-1, "0"):PadLeftWith(s, l, "0");
}
export function spaceForPos(n, s){
  return 0<=n?" "+s:s;
}
export function plusForPos(n, s){
  return 0<=n?"+"+s:s;
}
export function toSafe(s){
  return s==null?"":s;
}
