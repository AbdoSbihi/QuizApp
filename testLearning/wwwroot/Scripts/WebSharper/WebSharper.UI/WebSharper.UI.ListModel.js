import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import { map, ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import ListModel from "./WebSharper.UI.ListModel`2.js"
import Var from "./WebSharper.UI.Var.js"
import { InMemory } from "./WebSharper.UI.Storage.js"
export function Wrap(underlying, extract, createItem, updateItem){
  const state=[new Dictionary("New_5")];
  const init=map((u) => {
    const t=createItem(u);
    state[0].set_Item(underlying.key(u), t);
    return t;
  }, underlying.u0076ar.Get());
  return new ListModel("New_3", (d) => underlying.key(extract(d)), Var.Lens(underlying.u0076ar, (us) => {
    const newState=new Dictionary("New_5");
    const ts=map((u) => {
      const k=underlying.key(u);
      const t=state[0].ContainsKey(k)?updateItem(state[0].Item(k), u):createItem(u);
      newState.set_Item(k, t);
      return t;
    }, us);
    state[0]=newState;
    return ts;
  }, (_1, _2) => {
    const newState=new Dictionary("New_5");
    const us=map((t) => {
      const u=extract(t);
      newState.set_Item(underlying.key(u), t);
      return u;
    }, _2);
    state[0]=newState;
    return us;
  }), InMemory(init));
}
export function FromSeq(init){
  return Create((x) => x, init);
}
export function Create(key, init){
  return CreateWithStorage(key, InMemory(ofSeq(init)));
}
export function CreateWithStorage(key, storage){
  return new ListModel("New", key, storage);
}
