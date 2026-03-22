import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export interface Empty<T0>{
  $:0;
}
export interface Cons<T0>{
  $:1;
  $0:T0;
  $1:FSharpList_T<T0>;
}
export type FSharpList_T<T0> = (FSharpList<T0> & (Empty<T0> | Cons<T0>))
export default class FSharpList<T0>implements IEnumerable<T0> {
  static Empty:FSharpList_T<any>;
  static Cons<T0>(Head:T0, Tail:FSharpList_T<T0>):FSharpList_T<T0>
  GetSlice(start:FSharpOption<number>, finish:FSharpOption<number>):FSharpList_T<T0>
  get_Item(x:number):T0
  get Length():number
  GetEnumerator():IEnumerator<T0>
  $;
  $0;
  $1;
}
