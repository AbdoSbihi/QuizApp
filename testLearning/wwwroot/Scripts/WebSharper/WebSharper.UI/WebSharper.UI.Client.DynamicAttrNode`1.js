import Object from "../WebSharper.StdLib/System.Object.js"
import { get_Empty } from "./WebSharper.UI.Anim.js"
import { Map } from "./WebSharper.UI.View.js"
export default class DynamicAttrNode extends Object {
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
}
