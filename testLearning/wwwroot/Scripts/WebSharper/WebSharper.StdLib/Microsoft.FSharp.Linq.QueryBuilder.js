import Object from "./System.Object.js"
import { ofSeq, average, sum } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { choose } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { ofNullable } from "./Microsoft.FSharp.Core.OptionModule.js"
import { length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { isIOrderedEnumerable } from "./System.Linq.IOrderedEnumerable`1.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export default class QueryBuilder extends Object {
  static averageByNullable(source, projection){
    const filtered=ofSeq(choose((x) => ofNullable(projection(x)), source));
    return length(filtered)===0?null:average(filtered);
  }
  static sumByNullable(source, projection){
    return sum(ofSeq(choose((x) => ofNullable(projection(x)), source)));
  }
  static CheckThenBySource(source){
    return typeof source=="object"&&isIOrderedEnumerable(source)?source:FailWith("'thenBy' and 'thenByDescending' may only be used with an ordered input");
  }
}
