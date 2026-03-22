import { MarkResizable, Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { flowStateName } from "./WebSharper.UI.FlowRouting.js"
import FlowBuilder from "./WebSharper.UI.FlowBuilder.js"
let _c=Lazy((_i) => class $StartupCode_Flow {
  static {
    _c=_i(this);
  }
  static flow;
  static flowPrevStateName;
  static flowStateName;
  static flowVars;
  static {
    this.flowVars=MarkResizable([]);
    this.flowStateName="WSUIFlow"+Date.now();
    this.flowPrevStateName=flowStateName()+"Prev";
    this.flow=new FlowBuilder();
  }
});
export default _c;
