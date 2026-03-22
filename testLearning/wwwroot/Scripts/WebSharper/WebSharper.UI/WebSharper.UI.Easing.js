import Object from "../WebSharper.StdLib/System.Object.js"
import { CubicInOut } from "./WebSharper.UI.Easings.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class Easing extends Object {
  static {
    _c=_i(this);
  }
  transformTime;
  static get CubicInOut(){
    return CubicInOut();
  }
  static Custom(f){
    return new Easing(f);
  }
  TransformTime(t){
    return this.transformTime(t);
  }
  constructor(transformTime){
    super();
    this.transformTime=transformTime;
  }
});
export default _c;
