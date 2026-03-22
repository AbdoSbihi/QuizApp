import Object from "./System.Object.js"
import { Get, ArrayCopyTo } from "./WebSharper.Enumerator.js"
import { map } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
export default class KeyCollection extends Object {
  d;
  GetEnumerator(){
    return Get(map((kvp) => kvp.K, this.d));
  }
  get IsReadOnly(){
    return true;
  }
  get Count(){
    return this.d.count;
  }
  Contains(item){
    return this.d.ContainsKey(item);
  }
  CopyTo(arr, index){
    ArrayCopyTo(ofSeq(this), arr, index);
  }
  constructor(d){
    super();
    this.d=d;
  }
}
