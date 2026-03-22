import Object from "./System.Object.js"
import DelegateEvent from "./WebSharper.Control.DelegateEvent.DelegateEvent`1.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class FSharpDelegateEvent extends Object {
  event;
  constructor(){
    super();
    this.event=DelegateEvent.New(MarkResizable([]));
  }
}
