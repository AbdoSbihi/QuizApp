import Object from "../WebSharper.StdLib/System.Object"
export default class Slot<T0, T1>extends Object {
  key:((a?:T0) => T1);
  value:T0;
  GetHashCode():number
  Equals(o):boolean
  get Value():T0
  constructor(key:((a?:T0) => T1), value:T0)
}
