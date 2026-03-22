import { init, takeWhile, initInfinite } from "./Microsoft.FSharp.Collections.SeqModule.js"
import ArgumentException from "./System.ArgumentException.js"
import InvalidOperationException from "./System.InvalidOperationException.js"
export function range(min, max){
  const count=1+max-min;
  return count<=0?[]:init(count, (x) => x+min);
}
export function step(min, step_1, max){
  const s=Sign(step_1);
  return takeWhile((k) => s*(max-k)>=0, initInfinite((k) => min+k*step_1));
}
export function bigIntAbs(x){
  return x<0n?-x:x;
}
export function bigIntSign(x){
  return x===0n?0:x<0n?-1:1;
}
export function KeyValue(kvp){
  return[kvp.K, kvp.V];
}
export function Sign(x){
  const m=x;
  return m===0?0:m<0?-1:1;
}
export function toInt(x){
  const u=toUInt(x);
  return u>2147483647?u-4294967296:u;
}
export function toUInt(x){
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
}
export function InvalidArg(arg, msg){
  throw new ArgumentException("New", arg, msg);
}
export function InvalidOp(msg){
  throw new InvalidOperationException("New", msg);
}
export function FailWith(msg){
  throw new Error(msg);
}
