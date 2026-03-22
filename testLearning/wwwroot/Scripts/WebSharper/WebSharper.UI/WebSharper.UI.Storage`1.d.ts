import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export function isStorage<T0>(x):x is Storage<T0>
export default interface Storage<T0>{
  SAppend(a:T0, b:(T0)[]):(T0)[]
  SAppendMany(a:IEnumerable<T0>, b:(T0)[]):(T0)[]
  SInit():(T0)[]
  SPrepend(a:T0, b:(T0)[]):(T0)[]
  SPrependMany(a:IEnumerable<T0>, b:(T0)[]):(T0)[]
  SRemoveIf(a:((a?:T0) => boolean), b:(T0)[]):(T0)[]
  SSet(a:IEnumerable<T0>):(T0)[]
  SSetAt(a:number, b:T0, c:(T0)[]):(T0)[]
}
