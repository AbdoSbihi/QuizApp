import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
import { ofSeqNonCopying, TreeReduce } from "./WebSharper.UI.Array.js"
import { EmptyAttr, AppendTree } from "./WebSharper.UI.Client.Attrs.js"
export default class Attr {
  static A1(Item){
    return Create(Attr, {$:1, $0:Item});
  }
  static A2(Item1, Item2){
    return Create(Attr, {
      $:2, 
      $0:Item1, 
      $1:Item2
    });
  }
  static A3(init){
    return Create(Attr, {$:3, $0:init});
  }
  static A4(onAfterRender){
    return Create(Attr, {$:4, $0:onAfterRender});
  }
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), (_1, _2) => AppendTree(_1, _2), x);
  }
  static Create(name, value){
    return Attr.A3((el) => {
      el.setAttribute(name, value);
    });
  }
  $;
  $0;
  $1;
}
