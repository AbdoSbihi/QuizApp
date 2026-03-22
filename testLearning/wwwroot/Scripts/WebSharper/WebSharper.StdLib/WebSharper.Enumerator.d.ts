import IList from "./System.Collections.Generic.IList`1"
import IList_1 from "./System.Collections.IList"
import ICollection from "./System.Collections.Generic.ICollection`1"
import ICollection_1 from "./System.Collections.ICollection"
import IEnumerator from "./System.Collections.IEnumerator"
import IEnumerable from "./System.Collections.IEnumerable"
import IEnumerable_1 from "./System.Collections.Generic.IEnumerable`1"
import IEnumerator_1 from "./System.Collections.Generic.IEnumerator`1"
export function LRemoveAt<T0>(x:IList<T0>, index:number):void
export function LInsert<T0>(x:IList<T0>, index:number, value:T0):void
export function LIndexOf<T0>(x:IList<T0>, item:T0):number
export function LItemSet<T0>(x:IList<T0>, index:number, value:T0):void
export function LItemGet<T0>(x:IList<T0>, index:number):T0
export function LRemoveAt0(x:IList_1, index:number):void
export function LRemove0(x:IList_1, item):void
export function LInsert0(x:IList_1, index:number, value):void
export function LIndexOf0(x:IList_1, item):number
export function LContains(x:IList_1, item):boolean
export function LClear(x:IList_1):void
export function LAdd(x:IList_1, item):number
export function LItem0Set(x:IList_1, index:number, value):void
export function LItem0Get(x:IList_1, index:number)
export function LIsReadOnly(x:IList_1):boolean
export function IsFixedSize(x:IList_1):boolean
export function Remove<T0>(x:ICollection<T0>, item:T0):boolean
export function Contains<T0>(x:ICollection<T0>, item:T0):boolean
export function Clear<T0>(x:ICollection<T0>):void
export function Add<T0>(x:ICollection<T0>, item:T0):void
export function FailReadOnly<T0>():T0
export function IsReadOnly<T0>(x:ICollection<T0>):boolean
export function CopyTo0(x:ICollection_1, array:any[], index:number):void
export function CopyTo<T0>(x:ICollection<T0>, array:(T0)[], index:number):void
export function ArrayCopyTo(x:any[], array:any[], index:number):void
export function Count0(x:ICollection_1):number
export function Count<T0>(x:ICollection<T0>):number
export function Reset(x:IEnumerator):void
export function Get0(x:IEnumerable):IEnumerator
export function Get<T0>(x:IEnumerable_1<T0>):IEnumerator_1<T0>
export function StringEnumerator<T0>(s:string):IEnumerator_1<T0>
export function ArrayEnumerator<T0>(s:(any)[]):IEnumerator_1<T0>
