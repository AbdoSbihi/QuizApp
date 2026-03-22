import Var from "./WebSharper.UI.Var`1.js"
import { Obsolete } from "./WebSharper.UI.Snap`1.js"
import { Forever, Ready } from "./WebSharper.UI.SnapState`1.js"
import { Int } from "./WebSharper.UI.Abbrev.Fresh.js"
export default class ConcreteVar extends Var {
  isConst;
  current;
  snap;
  view;
  id;
  get Id(){
    return"uinref"+String(this.id);
  }
  get View(){
    return this.view;
  }
  UpdateMaybe(f){
    const m=f(this.Get());
    if(m!=null&&m.$==1)this.Set(m.$0);
  }
  Update(f){
    this.Set(f(this.Get()));
  }
  SetFinal(v){
    if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
      console.log(s);
    }));
    else {
      Obsolete(this.snap);
      this.isConst=true;
      this.current=v;
      this.snap={s:Forever(v)};
    }
  }
  Set(v){
    if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
      console.log(s);
    }));
    else {
      Obsolete(this.snap);
      this.current=v;
      this.snap={s:Ready(v, [])};
    }
  }
  Get(){
    return this.current;
  }
  constructor(isConst, initSnap, initValue){
    super();
    this.isConst=isConst;
    this.current=initValue;
    this.snap=initSnap;
    this.view=() => this.snap;
    this.id=Int();
  }
}
