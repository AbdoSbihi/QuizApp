import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Object from "../WebSharper.StdLib/System.Object"
import Storage_1 from "./WebSharper.UI.Storage`1"
export default class LocalStorageBackend<T0>extends Object implements Storage_1<T0> {
  id:string;
  serializer:{Encode:((a?:T0) => any),Decode:((a:any) => T0)};
  storage:Storage;
  clear():void
  set(arr:(T0)[]):(T0)[]
  SSet(coll:IEnumerable<T0>):(T0)[]
  SSetAt(idx:number, elem:T0, arr:(T0)[]):(T0)[]
  SRemoveIf(pred:((a?:T0) => boolean), arr:(T0)[]):(T0)[]
  SInit():(T0)[]
  SPrependMany(is:IEnumerable<T0>, arr:(T0)[]):(T0)[]
  SPrepend(i:T0, arr:(T0)[]):(T0)[]
  SAppendMany(is:IEnumerable<T0>, arr:(T0)[]):(T0)[]
  SAppend(i:T0, arr:(T0)[]):(T0)[]
  constructor(id:string, serializer:{Encode:((a?:T0) => any),Decode:((a:any) => T0)})
}
