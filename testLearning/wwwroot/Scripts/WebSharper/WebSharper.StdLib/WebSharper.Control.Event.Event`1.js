import { tryFindIndex } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class Event {
  Handlers;
  Subscribe_1(observer){
    const this_1=this;
    const h=(_1, x) => observer.OnNext(x);
    this.AddHandler_1(h);
    return{Dispose(){
      return this_1.RemoveHandler_1(h);
    }};
  }
  RemoveHandler_1(h){
    const o=tryFindIndex((y) => Equals(h, y), this.Handlers);
    if(o==null)void 0;
    else {
      const i=o.$0;
      this.Handlers.splice(i, 1);
    }
  }
  AddHandler_1(h){
    this.Handlers.push(h);
  }
  Trigger(x){
    const a=this.Handlers.slice();
    for(let i=0, _1=a.length-1;i<=_1;i++)(get(a, i))(null, x);
  }
  RemoveHandler(x){
    this.RemoveHandler_1(x);
  }
  AddHandler(x){
    this.AddHandler_1(x);
  }
  Subscribe(observer){
    return this.Subscribe_1(observer);
  }
  Dispose(){ }
  static New(Handlers){
    return Create(Event, {Handlers:Handlers});
  }
}
