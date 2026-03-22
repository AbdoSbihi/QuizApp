import Object from "../WebSharper.StdLib/System.Object.js"
import Var from "./WebSharper.UI.Var.js"
import { Map } from "./WebSharper.UI.View.js"
export default class Model extends Object {
  u0076ar;
  view;
  constructor(i, _1, _2){
    let proj;
    let init;
    if(i=="New"){
      proj=_1;
      init=_2;
      const var_1=Var.Create_1(init);
      i="New_1";
      _1=var_1;
      _2=Map(proj, var_1.View);
    }
    if(i=="New_1"){
      const var_2=_1;
      const view=_2;
      super();
      this.u0076ar=var_2;
      this.view=view;
    }
  }
}
