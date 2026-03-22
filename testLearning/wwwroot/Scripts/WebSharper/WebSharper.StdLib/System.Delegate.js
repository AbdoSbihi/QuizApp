import { length, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { CreateDelegate, DelegateEqual } from "../WebSharper.Core.JavaScript/Runtime.js"
import { filter } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
export function InvocationList(del){
  return del.$Invokes||[del];
}
export function RemoveAll(source, value){
  const sourceInv=InvocationList(source);
  if(length(InvocationList(value))>1)FailWith("TODO: Remove multicast delegates");
  return CreateDelegate(filter((i) =>!Equals(i, value), sourceInv));
}
export function Remove(source, value){
  const sourceInv=InvocationList(source);
  if(length(InvocationList(value))>1)FailWith("TODO: Remove multicast delegates");
  const resInv=[];
  let found=false;
  for(let i=length(sourceInv)-1, _1=0;i>=_1;i--){
    const it=get(sourceInv, i);
    if(!found&&DelegateEqual(it, value))found=true;
    else resInv.unshift(it);
  }
  return CreateDelegate(resInv);
}
export function DelegateTarget(del){
  if(!del)return null;
  else if("$Target"in del)return del.$Target;
  else if("$Invokes"in del){
    const inv=del.$Invokes;
    return(get(inv, length(inv)-1))[1];
  }
  else return null;
}
