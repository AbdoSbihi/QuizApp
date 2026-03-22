import Var from "./WebSharper.UI.Var.js"
import { Parse, HashLink, Link } from "../WebSharper.Sitelets/WebSharper.Sitelets.RouterModule.js"
import Route from "../WebSharper.Sitelets/WebSharper.Sitelets.Route.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { StartsWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { Sink } from "./WebSharper.UI.View.js"
import { toSafe } from "../WebSharper.StdLib/WebSharper.Utils.js"
import { ofObj } from "../WebSharper.StdLib/Microsoft.FSharp.Core.OptionModule.js"
import { string } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js"
export function InstallHash(onParseError, router){
  const var_1=Var.Create_1(void 0);
  InstallHashInto(var_1, onParseError, router);
  return var_1;
}
export function InstallHashInto(var_1, onParseError, router){
  const parse=(h) => Parse(router, Route.FromHash(h, Some(true)));
  const cur=() => getCurrentHash(parse, onParseError);
  const set=(value) => {
    if(!Equals(var_1.Get(), value))var_1.Set(value);
  };
  set(cur());
  globalThis.addEventListener("popstate", () => set(cur()), false);
  globalThis.addEventListener("hashchange", () => set(cur()), false);
  globalThis.document.body.addEventListener("click", (ev) => {
    let o;
    const o_1=findLinkHref(ev.target);
    if(o_1==null)o=null;
    else {
      const href=o_1.$0;
      o=StartsWith(href, "#")?parse(href):null;
    }
    return o==null?null:(set(o.$0),ev.preventDefault());
  }, false);
  Sink((value) => {
    if(!Equals(value, cur())){
      const url=HashLink(router, value);
      globalThis.history.pushState(null, null, url);
    }
  }, var_1.View);
}
export function getCurrentHash(parse, onParseError){
  const h=globalThis.location.hash;
  const m=parse(h);
  return m==null?((((_1) =>(_2) => _1("Failed to parse route: "+toSafe(_2)))((s) => {
    console.log(s);
  }))(h),onParseError):m.$0;
}
export function Install(onParseError, router){
  const var_1=Var.Create_1(void 0);
  InstallInto(var_1, onParseError, router);
  return var_1;
}
export function InstallInto(var_1, onParseError, router){
  const parse=(p) => Parse(router, p);
  const cur=() => getCurrent(parse, onParseError);
  const set=(value) => {
    if(!Equals(var_1.Get(), value))var_1.Set(value);
  };
  set(cur());
  globalThis.addEventListener("popstate", () => set(cur()), false);
  globalThis.document.body.addEventListener("click", (ev) => {
    const o=findLinkHref(ev.target);
    const o_1=o==null?null:hrefToAbsolute(o.$0);
    const o_2=o_1==null?null:parse(Route.FromUrl(o_1.$0, null));
    return o_2==null?null:(set(o_2.$0),ev.preventDefault());
  }, false);
  Sink((value) => {
    if(!Equals(value, cur())){
      const url=Link(router, value);
      globalThis.history.pushState(null, null, url);
    }
  }, var_1.View);
}
export function findLinkHref(n){
  while(true)
    {
      if(n.tagName=="A")return ofObj(n.getAttribute("href"));
      else if(n===globalThis.document.body)return null;
      else n=n.parentNode;
    }
}
export function hrefToAbsolute(href){
  if(StartsWith(href, "?"))return Some(trimFragment(globalThis.location.pathname+href));
  else if(StartsWith(href, "#"))return null;
  else if(StartsWith(href, "/"))return Some(trimFragment(href));
  else if((new RegExp("^[a-zA-Z0-9]:")).test(href))return null;
  else {
    const s=globalThis.location.pathname;
    return Some(trimFragment(string(s, null, Some(s.lastIndexOf("/")))+href));
  }
}
export function trimFragment(url){
  const m=url.indexOf("#");
  return m===-1?url:string(url, null, Some(m-1));
}
export function getCurrent(parse, onParseError){
  const loc=globalThis.location;
  const p=Route.FromUrl(loc.pathname+loc.search, null);
  const m=parse(p);
  return m==null?((((_1) =>(_2) => _1("Failed to parse route: "+toSafe(_2)))((s) => {
    console.log(s);
  }))(p.ToLink()),onParseError):m.$0;
}
