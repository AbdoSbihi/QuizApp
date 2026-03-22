import Object from "../WebSharper.StdLib/System.Object.js"
import { map, ofSeq, filter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
export default class LocalStorageBackend extends Object {
  id;
  serializer;
  storage;
  clear(){
    this.storage.removeItem(this.id);
  }
  set(arr){
    this.storage.setItem(this.id, JSON.stringify(map(this.serializer.Encode, arr)));
    return arr;
  }
  SSet(coll){
    return this.set(ofSeq(coll));
  }
  SSetAt(idx, elem, arr){
    set(arr, idx, elem);
    return this.set(arr);
  }
  SRemoveIf(pred, arr){
    return this.set(filter((i) =>!pred(i), arr));
  }
  SInit(){
    const item=this.storage.getItem(this.id);
    if(item==null)return[];
    else try {
      return map(this.serializer.Decode, JSON.parse(item));
    }
    catch(m){
      return[];
    }
  }
  SPrependMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.unshift.apply(arr, ps);
    return this.set(arr);
  }
  SPrepend(i, arr){
    arr.unshift(i);
    return this.set(arr);
  }
  SAppendMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.push.apply(arr, ps);
    return this.set(arr);
  }
  SAppend(i, arr){
    arr.push(i);
    return this.set(arr);
  }
  constructor(id, serializer){
    super();
    this.id=id;
    this.serializer=serializer;
    this.storage=globalThis.localStorage;
  }
}
