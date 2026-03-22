import Object from "../WebSharper.StdLib/System.Object.js"
import { MapSeqCachedViewBy, Map } from "./WebSharper.UI.View.js"
import { Id } from "./WebSharper.UI.Abbrev.Fresh.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import Var from "./WebSharper.UI.Var`1.js"
import { find } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { replaceFirst, maybeReplaceFirst } from "./WebSharper.UI.List.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import ConcreteVar from "./WebSharper.UI.ConcreteVar`1.js"
import { Waiting, Ready } from "./WebSharper.UI.SnapState`1.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class Var_1 extends Object {
  static {
    _c=_i(this);
  }
  static MapLens(getKey, f, var_1){
    return MapSeqCachedViewBy(getKey, (_1, _2) => {
      const id=Id();
      const isThis=(a) => Equals(getKey(a), _1);
      return f(new class extends Var {
        constructor(){
          super();
        }
        Get(){
          return find(isThis, var_1.Get());
        }
        Set(v){
          const f_1=() => v;
          return var_1.Update((l) => replaceFirst(isThis, f_1, l));
        }
        SetFinal(v){
          return this.Set(v);
        }
        Update(f_1){
          return var_1.Update((l) => replaceFirst(isThis, f_1, l));
        }
        UpdateMaybe(f_1){
          return var_1.Update((l) => maybeReplaceFirst(isThis, f_1, l));
        }
        get View(){
          return _2;
        }
        get Id(){
          return id;
        }
      }());
    }, var_1.View);
  }
  static Lens(var_1, get, update){
    const id=Id();
    const view=Map(get, var_1.View);
    return new class extends Var {
      constructor(){
        super();
      }
      Get(){
        return get(var_1.Get());
      }
      Set(v){
        return var_1.Update((t) => update(t, v));
      }
      SetFinal(v){
        return this.Set(v);
      }
      Update(f){
        return var_1.Update((t) => update(t, f(get(t))));
      }
      UpdateMaybe(f){
        return var_1.UpdateMaybe((t) => {
          const x=f(get(t));
          return x==null?null:Some(update(t, x.$0));
        });
      }
      get View(){
        return view;
      }
      get Id(){
        return id;
      }
    }();
  }
  static Update(var_1, fn){
    _c.Set(var_1, fn(var_1.Get()));
  }
  static SetFinal(var_1, value){
    var_1.SetFinal(value);
  }
  static Set(var_1, value){
    var_1.Set(value);
  }
  static CreateWaiting(){
    return new ConcreteVar(false, {s:Waiting([], [])}, null);
  }
  static Create(){
    return new ConcreteVar(false, {s:Ready(null, [])}, null);
  }
  static CreateLogged(name, v){
    if(!globalThis.UINVars)globalThis.UINVars=[];
    const res=_c.Create_1(v);
    globalThis.UINVars.push([name, res]);
    return res;
  }
  static Create_1(v){
    return new ConcreteVar(false, {s:Ready(v, [])}, v);
  }
  static { }
});
export default _c;
