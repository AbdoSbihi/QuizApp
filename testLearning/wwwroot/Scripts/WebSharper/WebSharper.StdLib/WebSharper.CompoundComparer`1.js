import Object from "./System.Object.js"
export default class CompoundComparer extends Object {
  primary;
  secondary;
  Compare(x, y){
    const m=this.primary.Compare(x, y);
    return m===0?this.secondary.Compare(x, y):m;
  }
  constructor(primary, secondary){
    super();
    this.primary=primary;
    this.secondary=secondary;
  }
}
