import { get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofSeqNonCopying, TreeReduce } from "./WebSharper.UI.Array.js"
import $StartupCode_AppendList from "./$StartupCode_AppendList.js"
export function FromArray(xs){
  const m=xs.length;
  return m===0?{$:0}:m===1?{$:1, $0:get(xs, 0)}:{$:3, $0:xs.slice()};
}
export function ToArray(xs){
  const out=[];
  function loop(xs_1){
    while(true)
      {
        if(xs_1.$==1)return out.push(xs_1.$0);
        else if(xs_1.$==2){
          const y=xs_1.$1;
          const x=xs_1.$0;
          loop(x);
          xs_1=y;
        }
        else return xs_1.$==3?iter((v) => {
          out.push(v);
        }, xs_1.$0):null;
      }
  }
  loop(xs);
  return out.slice(0);
}
export function Single(x){
  return{$:1, $0:x};
}
export function Concat(xs){
  const x=ofSeqNonCopying(xs);
  return TreeReduce(Empty(), Append, x);
}
export function Append(x, y){
  return x.$==0?y:y.$==0?x:{
    $:2, 
    $0:x, 
    $1:y
  };
}
export function Empty(){
  return $StartupCode_AppendList.Empty;
}
