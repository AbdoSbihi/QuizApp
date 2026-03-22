import Object from "./System.Object.js"
export default class ReverseComparer extends Object {
  primary;
  projection;
  Compare(x, y){
    return this.primary.Compare(this.projection(y), this.projection(x));
  }
  constructor(primary, projection){
    super();
    this.primary=primary;
    this.projection=projection;
  }
}
