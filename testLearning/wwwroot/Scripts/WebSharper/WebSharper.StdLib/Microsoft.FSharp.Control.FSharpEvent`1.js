import Object from "./System.Object.js"
import Event from "./WebSharper.Control.Event.Event`1.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class FSharpEvent extends Object {
  event;
  constructor(){
    super();
    this.event=Event.New(MarkResizable([]));
  }
}
