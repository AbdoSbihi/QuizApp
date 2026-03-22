import Object from "./System.Object"
import IControlBody from "./WebSharper.IControlBody"
export default class SingleNode extends Object implements IControlBody {
  node:Node;
  ReplaceInDom(old:Node):void
  constructor(node:Node)
}
