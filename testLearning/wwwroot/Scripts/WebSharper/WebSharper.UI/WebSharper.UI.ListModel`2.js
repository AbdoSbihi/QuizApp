import Object from "../WebSharper.StdLib/System.Object.js"
import { Wrap } from "./WebSharper.UI.ListModel.js"
import { MapSeqCachedViewBy, Map } from "./WebSharper.UI.View.js"
import { Id } from "./WebSharper.UI.Abbrev.Fresh.js"
import Var from "./WebSharper.UI.Var`1.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { length, get, set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { tryFindIndex, iteri, tryFind, find, exists, iter, ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Ready } from "./WebSharper.UI.SnapState`1.js"
import { Contains } from "./WebSharper.UI.ListModels.js"
import { MarkResizable, Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { fold, iter as iter_1, distinctBy } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Obsolete } from "./WebSharper.UI.Snap`1.js"
import { Get0, Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import Var_1 from "./WebSharper.UI.Var.js"
import { InMemory } from "./WebSharper.UI.Storage.js"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
let _c=Lazy((_i) => class ListModel extends Object {
  static {
    _c=_i(this);
  }
  key;
  u0076ar;
  storage;
  v;
  it;
  Wrap(extract, wrap, update){
    return Wrap(this, extract, wrap, update);
  }
  MapLens(f){
    return MapSeqCachedViewBy(this.key, (_1, _2) => f(_1, this.LensIntou0027((x) => x, (_3, _4) => _4, _1, _2)), this.u0076ar.View);
  }
  Lens(key){
    return this.LensInto((x) => x, (_1, _2) => _2, key);
  }
  LensInto(get_1, update, key){
    return this.LensIntou0027(get_1, update, key, Map(get_1, this.FindByKeyAsView(key)));
  }
  LensIntou0027(get_1, update, key, view){
    const m=this;
    const id=Id();
    return new class extends Var {
      constructor(){
        super();
      }
      Get(){
        return get_1(m.FindByKey(key));
      }
      Set(v){
        return m.UpdateBy((i) => Some(update(i, v)), key);
      }
      SetFinal(v){
        return this.Set(v);
      }
      Update(f){
        return m.UpdateBy((i) => Some(update(i, f(get_1(i)))), key);
      }
      UpdateMaybe(f){
        return m.UpdateBy((i) => {
          const x=f(get_1(i));
          return x==null?null:Some(update(i, x.$0));
        }, key);
      }
      get View(){
        return view;
      }
      get Id(){
        return id;
      }
    }();
  }
  get LengthAsView(){
    return Map((arr) => length(arr), this.u0076ar.View);
  }
  get Length(){
    return length(this.u0076ar.Get());
  }
  Clear(){
    this.u0076ar.Set(this.storage.SSet([]));
    this.ObsoleteAll();
  }
  UpdateBy(fn, key){
    const v=this.u0076ar.Get();
    const m=tryFindIndex((it) => Equals(this.key(it), key), v);
    if(m!=null&&m.$==1){
      const index=m.$0;
      const m_1=fn(get(v, index));
      if(m_1!=null&&m_1.$==1){
        this.u0076ar.Set(this.storage.SSetAt(index, m_1.$0, v));
        this.ObsoleteKey(key);
      }
    }
    else void 0;
  }
  UpdateAll(fn){
    this.u0076ar.Update((a) => {
      iteri((_1, _2) => {
        const o=fn(_2);
        return o==null?null:set(a, _1, o.$0);
      }, a);
      return this.storage.SSet(a);
    });
    this.ObsoleteAll();
  }
  FindByKeyAsView(key){
    return Map((o) => o.$0, this.TryFindByKeyAsView(key));
  }
  TryFindByKeyAsView(key){
    return() => {
      let o;
      const m=(o=null,[this.it.TryGetValue(key, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0])return m[1];
      else {
        const sn={s:Ready(this.TryFindByKey(key), [])};
        this.it.DAdd(key, sn);
        return sn;
      }
    };
  }
  TryFindByKey(key){
    return tryFind((it) => Equals(this.key(it), key), this.u0076ar.Get());
  }
  FindByKey(key){
    return find((it) => Equals(this.key(it), key), this.u0076ar.Get());
  }
  TryFindAsView(pred){
    return Map((a) => tryFind(pred, a), this.u0076ar.View);
  }
  FindAsView(pred){
    return Map((a) => find(pred, a), this.u0076ar.View);
  }
  TryFind(pred){
    return tryFind(pred, this.u0076ar.Get());
  }
  Find(pred){
    return find(pred, this.u0076ar.Get());
  }
  ContainsKeyAsView(key){
    const p=(it) => Equals(this.key(it), key);
    return Map((a) => exists(p, a), this.u0076ar.View);
  }
  ContainsKey(key){
    return exists((it) => Equals(this.key(it), key), this.u0076ar.Get());
  }
  Set(lst){
    this.u0076ar.Set(this.storage.SSet(lst));
    this.ObsoleteAll();
  }
  Iter(fn){
    iter(fn, this.u0076ar.Get());
  }
  RemoveByKey(key){
    this.u0076ar.Set(this.storage.SRemoveIf((i) => Equals(this.key(i), key), this.u0076ar.Get()));
    this.ObsoleteKey(key);
  }
  RemoveBy(f){
    const a=this.u0076ar.Get();
    for(let i=0, _1=a.length-1;i<=_1;i++){
      const v=get(a, i);
      if(f(v))this.ObsoleteKey(this.key(v));
    }
    this.u0076ar.Set(this.storage.SRemoveIf(f, this.u0076ar.Get()));
  }
  Remove(item){
    const v=this.u0076ar.Get();
    if(Contains(this.key, item, v)){
      const keyFn=this.key;
      const k=keyFn(item);
      this.u0076ar.Set(this.storage.SRemoveIf((i) => Equals(keyFn(i), k), v));
      this.ObsoleteKey(k);
    }
    else void 0;
  }
  PrependMany(items){
    const toPrepend=MarkResizable([]);
    this.u0076ar.Set(this.storage.SPrependMany(toPrepend, fold((_1, _2) => {
      const t=this.key(_2);
      this.ObsoleteKey(t);
      const m=tryFindIndex((it) => Equals(this.key(it), t), _1);
      return m==null?(toPrepend.push(_2),_1):this.storage.SSetAt(m.$0, _2, _1);
    }, this.u0076ar.Get(), items)));
  }
  Prepend(item){
    const v=this.u0076ar.Get();
    const t=this.key(item);
    const m=tryFindIndex((it) => Equals(this.key(it), t), v);
    if(m!=null&&m.$==1)this.u0076ar.Set(this.storage.SSetAt(m.$0, item, v));
    else this.u0076ar.Set(this.storage.SPrepend(item, v));
    this.ObsoleteKey(t);
  }
  AppendMany(items){
    const toAppend=MarkResizable([]);
    this.u0076ar.Set(this.storage.SAppendMany(toAppend, fold((_1, _2) => {
      const t=this.key(_2);
      this.ObsoleteKey(t);
      const m=tryFindIndex((it) => Equals(this.key(it), t), _1);
      return m==null?(toAppend.push(_2),_1):this.storage.SSetAt(m.$0, _2, _1);
    }, this.u0076ar.Get(), items)));
  }
  Append(item){
    const v=this.u0076ar.Get();
    const t=this.key(item);
    const m=tryFindIndex((it) => Equals(this.key(it), t), v);
    if(m!=null&&m.$==1)this.u0076ar.Set(this.storage.SSetAt(m.$0, item, v));
    else this.u0076ar.Set(this.storage.SAppend(item, v));
    this.ObsoleteKey(t);
  }
  ObsoleteAll(){
    iter_1((ksn) => {
      Obsolete(ksn.V);
    }, this.it);
    this.it.Clear();
  }
  ObsoleteKey(key){
    let o;
    const m=(o=null,[this.it.TryGetValue(key, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      Obsolete(m[1]);
      this.it.RemoveKey(key);
    }
  }
  GetEnumerator0(){
    return Get0(this.u0076ar.Get());
  }
  GetEnumerator(){
    return Get(this.u0076ar.Get());
  }
  constructor(i, _1, _2, _3){
    let key;
    if(i=="New_1"){
      key=_1;
      i="New_2";
      _1=key;
      _2=[];
    }
    let key_1;
    let init;
    if(i=="New_2"){
      key_1=_1;
      init=_2;
      const init_1=ofSeq(init);
      i="New_3";
      _1=key_1;
      _2=Var_1.Create_1(init_1);
      _3=InMemory(init_1);
    }
    let key_2;
    let storage;
    if(i=="New"){
      key_2=_1;
      storage=_2;
      i="New_3";
      _1=key_2;
      _2=Var_1.Create_1(ofSeq(distinctBy(key_2, storage.SInit())));
      _3=storage;
    }
    if(i=="New_3"){
      const key_3=_1;
      const var_1=_2;
      const storage_1=_3;
      super();
      this.key=key_3;
      this.u0076ar=var_1;
      this.storage=storage_1;
      this.v=Map((x) => x.slice(), this.u0076ar.View);
      this.it=new Dictionary("New_5");
    }
  }
});
export default _c;
