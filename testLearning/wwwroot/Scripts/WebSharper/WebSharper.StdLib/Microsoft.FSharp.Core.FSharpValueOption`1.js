import { InvalidOp } from "./Microsoft.FSharp.Core.Operators.js"
export function ValueSome(Item){
  return{$:1, $0:Item};
}
export let ValueNone={$:0};
export function get_Value(this_1){
  return this_1.$==1?this_1.$0:InvalidOp("ValueOption.Value");
}
