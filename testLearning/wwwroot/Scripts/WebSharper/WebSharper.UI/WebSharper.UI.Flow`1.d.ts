import FlowState from "./WebSharper.UI.FlowState"
import FlowActions from "./WebSharper.UI.FlowActions`1"
import Doc from "./WebSharper.UI.Doc"
import Object from "../WebSharper.StdLib/System.Object"
export default class Flow<T0>extends Object {
  render:((a:FlowState) => ((a:FlowActions<T0>) => void));
  constructor(i:"New", define:((a:FlowActions<T0>) => Doc))
  constructor(i:"New_1", render:((a:FlowState) => ((a:FlowActions<T0>) => void)))
}
