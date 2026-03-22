import Object from "../WebSharper.StdLib/System.Object.js"
import { Create } from "./WebSharper.UI.FlowPage.js"
export default class Flow extends Object {
  render;
  constructor(i, _1){
    let define;
    if(i=="New"){
      define=_1;
      i="New_1";
      _1=(st) =>(actions) => st.Add(Create(define(actions)));
    }
    if(i=="New_1"){
      const render=_1;
      super();
      this.render=render;
    }
  }
}
