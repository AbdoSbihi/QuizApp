import { blit } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { exists } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export function CopyTo(stack, array, index){
  blit(array, 0, array, index, length(stack));
}
export function Contains(stack, el){
  return exists((y) => Equals(el, y), stack);
}
export function Clear(stack){
  stack.splice(0, length(stack));
}
