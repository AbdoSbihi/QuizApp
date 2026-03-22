import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export function getOrValue(x, v){
  return x===null?v:x;
}
export function get(x){
  return x===null?FailWith("Nullable object must have a value."):x;
}
