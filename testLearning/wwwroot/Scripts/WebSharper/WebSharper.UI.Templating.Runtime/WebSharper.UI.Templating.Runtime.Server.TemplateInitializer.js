import Object from "../WebSharper.StdLib/System.Object.js"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import { get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
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
import TemplateInstance from "./WebSharper.UI.Templating.Runtime.Server.TemplateInstance.js"
import Doc from "../WebSharper.UI/WebSharper.UI.Doc.js"
import { RunFullDocTemplate, GlobalHoles } from "../WebSharper.UI/WebSharper.UI.Client.Templates.js"
import { string } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class TemplateInitializer extends Object {
  static {
    _c=_i(this);
  }
  static init;
  id;
  vars;
  static initialized;
  static instances;
  static applyVarHole(el, tpl){
    tpl.ApplyVarHole(el);
  }
  static Create(vars){
    return new TemplateInitializer("", vars);
  }
  static GetInstance(key){
    return _c.instances.Item(key);
  }
  static GetOrAddHoleFor(id, holeName, initHole){
    let o;
    const d=_c.GetHolesFor(id);
    const m=(o=null,[d.TryGetValue(holeName, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const h=initHole();
      d.set_Item(holeName, h);
      return h;
    }
  }
  static GetHolesFor(id){
    let o;
    const m=(o=null,[_c.initialized.TryGetValue(id, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])return m[1];
    else {
      const d=new Dictionary("New_5");
      _c.initialized.set_Item(id, d);
      return d;
    }
  }
  static get Initialized(){
    return _c.initialized;
  }
  get Id(){
    return this.id;
  }
  InitInstance(key){
    const d=_c.GetHolesFor(key);
    const a=this.vars;
    for(let i_1=0, _1=a.length-1;i_1<=_1;i_1++)((() => {
      let _2;
      const f=get(a, i_1);
      const t=f[1];
      const ov=f[2];
      const n=f[0];
      if(!d.ContainsKey(n)){
        if(t===0){
          const o=ov==null?null:Some(ov.$0);
          let _3=o==null?"":o.$0;
          let _4=Var.Create_1(_3);
          _2=new VarStr(n, _4);
        }
        else if(t===1){
          const o_1=ov==null?null:Some(ov.$0);
          let _5=o_1==null?0:o_1.$0;
          let _6=Var.Create_1(_5);
          _2=new VarFloatUnchecked(n, _6);
        }
        else if(t===2){
          const o_2=ov==null?null:Some(ov.$0);
          let _7=o_2==null?false:o_2.$0;
          let _8=Var.Create_1(_7);
          _2=new VarBool(n, _8);
        }
        else if(t===3){
          const o_3=ov==null?null:Some(ov.$0);
          let _9=o_3==null?-8640000000000000:o_3.$0;
          let _10=Var.Create_1(_9);
          _2=new VarDateTime(n, _10);
        }
        else if(t===4){
          const o_4=ov==null?null:Some(ov.$0);
          let _11=o_4==null?[]:o_4.$0;
          let _12=Var.Create_1(_11);
          _2=new VarFile(n, _12);
        }
        else if(t===5){
          const x=ov==null?null:Some(ov.$0);
          const v=globalThis.document.querySelector("[ws-dom="+n+"]");
          let _13=x==null?v:x.$0;
          let _14=Some(_13);
          let _15=Var.Create_1(_14);
          _2=new VarDomElement(n, _15);
        }
        else if(t===6){
          const o_5=ov==null?null:Some(ov.$0);
          let _16=o_5==null?[]:o_5.$0;
          let _17=Var.Create_1(_16);
          _2=new VarStrList(n, _17);
        }
        else _2=FailWith("Invalid kind for template Var type: "+String(t));
        return d.set_Item(n, _2);
      }
      else return null;
    })());
    const i=new TemplateInstance({$:0, $0:d}, Doc.Empty);
    _c.instances.set_Item(key, i);
    return i;
  }
  $postinit(key){
    RunFullDocTemplate([]);
  }
  $init(a){ }
  $preinit(key){
    const inst=this.InitInstance(key);
    const q=globalThis.document.querySelectorAll("[ws-var^='"+key+"::']");
    for(let i=0, _1=q.length-1;i<=_1;i++){
      const el=q[i];
      const fullName=el.getAttribute("ws-var");
      const hole=inst.Hole(string(fullName, Some(key.length+2), null));
      const hole_1=hole.WithName(fullName);
      GlobalHoles().set_Item(hole_1.Name, hole_1);
      _c.applyVarHole(el, hole);
    }
  }
  constructor(id, vars){
    super();
    this.id=id;
    this.vars=vars;
  }
  static {
    _c.initialized=new Dictionary("New_5");
    _c.instances=new Dictionary("New_5");
  }
});
export default _c;
