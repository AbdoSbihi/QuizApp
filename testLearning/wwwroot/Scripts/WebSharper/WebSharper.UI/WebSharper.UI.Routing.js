import { FromList, ToList, ParseHash, MakeHash, SameHash } from "./WebSharper.UI.Route.js"
import Var from "./WebSharper.UI.Var.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Sink } from "./WebSharper.UI.View.js"
export function DoLink(map, va){
  const t=map.Ser(va);
  return FromList(t[0], t[1]);
}
export function DoRoute(map, route){
  return map.Des(ToList(route));
}
export function InstallMap(rt){
  const cur=() => rt.Des(ToList(ParseHash(globalThis.location.hash)));
  const var_1=Var.Create_1(cur());
  const onUpdate=() => {
    const value=cur();
    return!Equals(rt.Ser(var_1.Get()), rt.Ser(value))?var_1.Set(value):null;
  };
  globalThis.onpopstate=onUpdate;
  globalThis.onhashchange=onUpdate;
  Sink((loc) => {
    const t=rt.Ser(loc);
    let _1=FromList(t[0], t[1]);
    const ha=MakeHash(_1);
    if(!SameHash(globalThis.location.hash, ha))globalThis.location.replace("#"+ha);
  }, var_1.View);
  return var_1;
}
