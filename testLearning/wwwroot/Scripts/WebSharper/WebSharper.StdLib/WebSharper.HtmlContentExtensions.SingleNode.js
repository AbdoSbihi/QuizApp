import Object from "./System.Object.js"
export default class SingleNode extends Object {
  node;
  ReplaceInDom(old){
    this.node.parentNode.replaceChild(this.node, old);
  }
  constructor(node){
    super();
    this.node=node;
  }
}
