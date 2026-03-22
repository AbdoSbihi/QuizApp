import { Copy, WhenObsoleteRun } from "./WebSharper.UI.Snap.js"
import { Obsolete } from "./WebSharper.UI.Snap`1.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class Updates {
  c;
  s;
  v;
  static Create(v){
    let var_1;
    var_1=null;
    var_1=Updates.New(v, null, () => {
      let c;
      c=var_1.s;
      return c===null?(c=Copy(var_1.c()),var_1.s=c,WhenObsoleteRun(c, () => {
        var_1.s=null;
      }),c):c;
    });
    return var_1;
  }
  set Value(v){
    const sn=this.s;
    if(!(sn===null))Obsolete(sn);
    this.c=v;
  }
  static New(Current, Snap, VarView){
    return Create(Updates, {
      c:Current, 
      s:Snap, 
      v:VarView
    });
  }
}
