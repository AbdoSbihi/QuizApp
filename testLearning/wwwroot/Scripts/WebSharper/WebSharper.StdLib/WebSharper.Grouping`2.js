import Object from "./System.Object.js"
import Enumerator from "./System.Collections.Generic.List`1.Enumerator.js"
export default class Grouping extends Object {
  k;
  v;
  get System_Linq_IGrouping_2$Key(){
    return this.k;
  }
  GetEnumerator(){
    return new Enumerator(this.v);
  }
  constructor(k, v){
    super();
    this.k=k;
    this.v=v;
  }
}
