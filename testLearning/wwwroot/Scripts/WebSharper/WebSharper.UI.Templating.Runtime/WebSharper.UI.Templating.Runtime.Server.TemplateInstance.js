import Object from "../WebSharper.StdLib/System.Object.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
export default class TemplateInstance extends Object {
  doc;
  allVars;
  anchorRoot;
  Anchor(name){
    function findUnder(el){
      while(true)
        {
          const e=el.querySelector("[ws-anchor=\""+name+"\"]");
          if(e==null&&!(el.parentElement==null))el=el.parentElement;
          else return e;
        }
    }
    return findUnder(this.anchorRoot);
  }
  SetAnchorRoot(el){
    this.anchorRoot=el;
  }
  Hole(name){
    return this.allVars.Item(name);
  }
  get Doc(){
    return this.doc;
  }
  constructor(c, doc){
    super();
    this.doc=doc;
    this.allVars=c.$==0?c.$0:FailWith("Should not happen");
    this.anchorRoot=null;
  }
}
