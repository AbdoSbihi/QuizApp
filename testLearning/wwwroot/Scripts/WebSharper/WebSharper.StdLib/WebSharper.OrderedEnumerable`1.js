import Object from "./System.Object.js"
import { ofSeq, sortInPlaceWith } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Get } from "./WebSharper.Enumerator.js"
import CompoundComparer from "./WebSharper.CompoundComparer`1.js"
import ReverseComparer from "./WebSharper.ReverseComparer`2.js"
import ProjectionComparer from "./WebSharper.ProjectionComparer`2.js"
export default class OrderedEnumerable extends Object {
  source;
  primary;
  GetEnumerator(){
    const a=ofSeq(this.source);
    sortInPlaceWith((_1, _2) => this.primary.Compare(_1, _2), a);
    return Get(a);
  }
  System_Linq_IOrderedEnumerable_1$CreateOrderedEnumerable(keySelector, secondary, descending){
    return new OrderedEnumerable(this.source, new CompoundComparer(this.primary, descending?new ReverseComparer(secondary, keySelector):new ProjectionComparer(secondary, keySelector)));
  }
  constructor(source, primary){
    super();
    this.source=source;
    this.primary=primary;
  }
}
