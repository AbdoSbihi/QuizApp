import Attr from "./WebSharper.UI.Attr.js"
import DynamicAttrNode from "./WebSharper.UI.Client.DynamicAttrNode`1.js"
import AnimatedAttrNode from "./WebSharper.UI.Client.AnimatedAttrNode`1.js"
import { CanAnimateEnter, CanAnimateExit } from "./WebSharper.UI.Trans.js"
import Client from "./$StartupCode_Attr.Client.js"
import { Concat } from "./WebSharper.UI.Anim.js"
import { map, iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { MapTreeReduce } from "./WebSharper.UI.Array.js"
import { Const, Map2Unit } from "./WebSharper.UI.View.js"
import { New } from "./WebSharper.UI.Client.Attrs.Dyn.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { iter as iter_1 } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
export function Dynamic(view, set){
  return Attr.A1(new DynamicAttrNode(view, set));
}
export function Animated(tr, view, set){
  const node=new AnimatedAttrNode(tr, view, set);
  let flags=4;
  if(CanAnimateEnter(tr))flags=flags|1;
  if(CanAnimateExit(tr))flags=flags|2;
  const n=Attr.A1(node);
  SetFlags(n, flags);
  return n;
}
export function EmptyAttr(){
  return Client.EmptyAttr;
}
export function AppendTree(a, b){
  if(a===null)return b;
  else if(b===null)return a;
  else {
    const x=Attr.A2(a, b);
    SetFlags(x, Flags(a)|Flags(b));
    return x;
  }
}
export function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
export function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
export function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
export function GetAnim(dyn, f){
  return Concat(map((n) => f(n, dyn.DynElem), dyn.DynNodes));
}
export function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
export function Empty(e){
  return New(e, 0, [], null);
}
export function Insert(elem, tree){
  const nodes=[];
  const oar=[];
  function loop(node){
    while(true)
      {
        if(!(node===null)){
          if(node!=null&&node.$==1)return nodes.push(node.$0);
          else if(node!=null&&node.$==2){
            const b=node.$1;
            const a=node.$0;
            loop(a);
            node=b;
          }
          else return node!=null&&node.$==3?node.$0(elem):node!=null&&node.$==4?oar.push(node.$0):null;
        }
        else return null;
      }
  }
  loop(tree);
  const arr=nodes.slice(0);
  let _1=New(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter_1((f) => {
      f(el);
    }, oar);
  }));
  return _1;
}
export function Sync(elem, dyn){
  iter((d) => {
    d.NSync(elem);
  }, dyn.DynNodes);
}
export function SetFlags(a, f){
  a.flags=f;
}
export function Flags(a){
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
}
export function HasExitAnim(attr){
  const flag=2;
  return(attr.DynFlags&flag)===flag;
}
export function HasEnterAnim(attr){
  const flag=1;
  return(attr.DynFlags&flag)===flag;
}
export function HasChangeAnim(attr){
  const flag=4;
  return(attr.DynFlags&flag)===flag;
}
