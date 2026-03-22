import FlowBuilder from "./WebSharper.UI.FlowBuilder"
import WeakRef from "./WebSharper.UI.WeakRef`1"
export default class $StartupCode_Flow {
  static flow:FlowBuilder;
  static flowPrevStateName:string;
  static flowStateName:string;
  static flowVars:(WeakRef<{Get:(() => number),Set:((a:number) => void)}>)[];
}
