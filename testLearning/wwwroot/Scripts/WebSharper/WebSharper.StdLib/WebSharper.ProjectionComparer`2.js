import Object from "./System.Object.js"
export default class ProjectionComparer extends Object {
  primary;
  projection;
  Compare(x, y){
    return this.primary.Compare(this.projection(x), this.projection(y));
  }
  constructor(primary, projection){
    super();
    this.primary=primary;
    this.projection=projection;
  }
}
