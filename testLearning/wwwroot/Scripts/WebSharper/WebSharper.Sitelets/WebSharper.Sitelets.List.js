import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
export function startsWith(s, l){
  let _1;
  switch(s.$==1?l.$==1?(s.$1,l.$1,Equals(s.$0, l.$0)?(_1=[l.$0, l.$1, s.$0, s.$1],1):2):2:0){
    case 0:
      return Some(l);
    case 1:
      return startsWith(_1[3], _1[1]);
    case 2:
      return null;
  }
}
