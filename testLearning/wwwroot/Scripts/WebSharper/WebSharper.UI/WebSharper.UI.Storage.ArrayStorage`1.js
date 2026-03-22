import Object from "../WebSharper.StdLib/System.Object.js"
import { ofSeq, filter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
export default class ArrayStorage extends Object {
  init;
  SSet(coll){
    return ofSeq(coll);
  }
  SSetAt(idx, elem, arr){
    set(arr, idx, elem);
    return arr;
  }
  SRemoveIf(pred, arr){
    return filter((i) =>!pred(i), arr);
  }
  SInit(){
    return this.init;
  }
  SPrependMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.unshift.apply(arr, ps);
    return arr;
  }
  SPrepend(i, arr){
    arr.unshift(i);
    return arr;
  }
  SAppendMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.push.apply(arr, ps);
    return arr;
  }
  SAppend(i, arr){
    arr.push(i);
    return arr;
  }
  constructor(init){
    super();
    this.init=init;
  }
}
