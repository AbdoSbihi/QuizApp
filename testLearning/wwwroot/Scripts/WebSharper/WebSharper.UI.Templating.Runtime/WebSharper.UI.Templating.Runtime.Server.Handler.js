import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1.js"
import { Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.StdLib/System.IDisposable.js"
import { append } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { choose } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import TemplateInitializer from "./WebSharper.UI.Templating.Runtime.Server.TemplateInitializer.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import Var from "../WebSharper.UI/WebSharper.UI.Var.js"
import VarStr from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarStr.js"
import VarFloatUnchecked from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarFloatUnchecked.js"
import VarBool from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarBool.js"
import VarDateTime from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarDateTime.js"
import VarFile from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarFile.js"
import VarDomElement from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarDomElement.js"
import VarStrList from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.VarStrList.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import AfterRenderQ from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.AfterRenderQ.js"
import EventQ from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.EventQ.js"
export function CompleteHoles(key, filledHoles, vars){
  const allVars=new Dictionary("New_5");
  const filledVars=new HashSet("New_3");
  const e=Get(filledHoles);
  try {
    while(e.MoveNext())
      {
        const h=e.Current;
        const n=h.Name;
        filledVars.SAdd(n);
        allVars.set_Item(n, h);
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return[append(filledHoles, choose((_2) => {
    const name=_2[0];
    const ty=_2[1];
    const d=_2[2];
    if(filledVars.Contains(name))return null;
    else {
      const r=ty===0?TemplateInitializer.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?"":o.$0;
        let _4=Var.Create_1(_3);
        return new VarStr(name, _4);
      }):ty===1?TemplateInitializer.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?0:o.$0;
        let _4=Var.Create_1(_3);
        return new VarFloatUnchecked(name, _4);
      }):ty===2?TemplateInitializer.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?false:o.$0;
        let _4=Var.Create_1(_3);
        return new VarBool(name, _4);
      }):ty===3?TemplateInitializer.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?-8640000000000000:o.$0;
        let _4=Var.Create_1(_3);
        return new VarDateTime(name, _4);
      }):ty===4?TemplateInitializer.GetOrAddHoleFor(key, name, () => new VarFile(name, Var.Create_1([]))):ty===5?TemplateInitializer.GetOrAddHoleFor(key, name, () => new VarDomElement(name, Var.Create_1(Some(globalThis.document.querySelector("[ws-dom="+name+"]"))))):ty===6?TemplateInitializer.GetOrAddHoleFor(key, name, () => {
        const o=d==null?null:Some(d.$0);
        let _3=o==null?[]:o.$0;
        let _4=Var.Create_1(_3);
        return new VarStrList(name, _4);
      }):FailWith("Invalid kind for template Var type: "+String(ty));
      allVars.set_Item(name, r);
      return Some(r);
    }
  }, vars)), {$:0, $0:allVars}];
}
export function AfterRenderQ2(_1, holeName, ti, f){
  return new AfterRenderQ(holeName, "", (el) => {
    const i=ti();
    i.SetAnchorRoot(el);
    f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:null
    });
  });
}
export function EventQ2(_1, holeName, ti, f){
  return new EventQ(holeName, "", (el) =>(ev) => {
    const i=ti();
    i.SetAnchorRoot(el);
    return f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:ev
    });
  });
}
