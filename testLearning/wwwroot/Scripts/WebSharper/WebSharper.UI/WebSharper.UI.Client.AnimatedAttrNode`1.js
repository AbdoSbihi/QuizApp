import Object from "../WebSharper.StdLib/System.Object.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Pack, Map, get_Empty, WhenDone } from "./WebSharper.UI.Anim.js"
import { AnimateExit, AnimateChange, AnimateEnter } from "./WebSharper.UI.Trans.js"
import { Map as Map_1 } from "./WebSharper.UI.View.js"
export default class AnimatedAttrNode extends Object {
  tr;
  push;
  logical;
  visible;
  dirty;
  updates;
  sync(p){
    if(this.dirty){
      const x=this.logical;
      if(x==null)void 0;
      else {
        const v=x.$0;
        (this.push(p))(v);
      }
      this.visible=this.logical;
      this.dirty=false;
    }
  }
  pushVisible(el, v){
    this.visible=Some(v);
    this.dirty=true;
    (this.push(el))(v);
  }
  get NChanged(){
    return this.updates;
  }
  NSync(parent){ }
  NGetExitAnim(parent){
    const m=this.visible;
    let _1=m!=null&&m.$==1?Pack(Map((v) => {
      this.pushVisible(parent, v);
    }, AnimateExit(this.tr, m.$0))):get_Empty();
    return WhenDone(() => {
      this.dirty=true;
      this.visible=null;
    }, _1);
  }
  NGetEnterAnim(parent){
    let _1;
    let _2;
    const _3=this.visible;
    const _4=this.logical;
    switch(_3==null?_4!=null&&_4.$==1?(_1=_4.$0,1):2:_4!=null&&_4.$==1?(_3.$0,_4.$0,this.dirty?(_1=[_4.$0, _3.$0],0):2):2){
      case 0:
        _2=Pack(Map((v) => {
          this.pushVisible(parent, v);
        }, AnimateChange(this.tr, _1[1], _1[0])));
        break;
      case 1:
        _2=Pack(Map((v) => {
          this.pushVisible(parent, v);
        }, AnimateEnter(this.tr, _1)));
        break;
      case 2:
        _2=get_Empty();
        break;
    }
    return WhenDone(() => {
      this.sync(parent);
    }, _2);
  }
  NGetChangeAnim(parent){
    let _1;
    const _2=this.visible;
    const _3=this.logical;
    let _4=_2!=null&&_2.$==1&&(_3!=null&&_3.$==1&&(_2.$0,_3.$0,this.dirty&&(_1=[_3.$0, _2.$0],true)))?Pack(Map((v) => {
      this.pushVisible(parent, v);
    }, AnimateChange(this.tr, _1[1], _1[0]))):get_Empty();
    return WhenDone(() => {
      this.sync(parent);
    }, _4);
  }
  constructor(tr, view, push){
    super();
    this.tr=tr;
    this.push=push;
    this.logical=null;
    this.visible=null;
    this.dirty=true;
    this.updates=Map_1((x) => {
      this.logical=Some(x);
      this.dirty=true;
    }, view);
  }
}
