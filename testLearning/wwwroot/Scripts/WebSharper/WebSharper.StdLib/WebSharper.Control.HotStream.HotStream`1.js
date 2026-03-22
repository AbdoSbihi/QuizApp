import FSharpEvent from "./Microsoft.FSharp.Control.FSharpEvent`1.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { observer } from "./Microsoft.FSharp.Control.CommonExtensions.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class HotStream {
  Latest;
  Event;
  static New_1(){
    return HotStream.New([null], new FSharpEvent());
  }
  Trigger(v){
    this.Latest[0]=Some(v);
    this.Event.event.Trigger(v);
  }
  Subscribe(o){
    this.Latest[0]!=null?o.OnNext(this.Latest[0].$0):void 0;
    return this.Event.event.Subscribe(observer((v) => {
      o.OnNext(v);
    }));
  }
  static New(Latest, Event){
    return Create(HotStream, {Latest:Latest, Event:Event});
  }
}
