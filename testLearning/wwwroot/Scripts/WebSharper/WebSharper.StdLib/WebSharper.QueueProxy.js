import { blit } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { exists } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export function CopyTo(a, array, index){
  blit(a, 0, array, index, length(a));
}
export function Contains(a, el){
  return exists((y) => Equals(el, y), a);
}
export function Clear(a){
  a.splice(0, length(a));
}
