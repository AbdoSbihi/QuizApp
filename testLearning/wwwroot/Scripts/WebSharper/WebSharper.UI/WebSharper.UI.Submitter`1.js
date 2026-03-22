import Object from "../WebSharper.StdLib/System.Object.js"
import Var from "./WebSharper.UI.Var.js"
import { SnapshotOn } from "./WebSharper.UI.View.js"
export default class Submitter extends Object {
  input;
  u0076ar;
  view;
  Trigger(){
    this.u0076ar.Set(null);
  }
  constructor(input, init){
    super();
    this.input=input;
    this.u0076ar=Var.Create();
    this.view=SnapshotOn(init, this.u0076ar.View, this.input);
  }
}
