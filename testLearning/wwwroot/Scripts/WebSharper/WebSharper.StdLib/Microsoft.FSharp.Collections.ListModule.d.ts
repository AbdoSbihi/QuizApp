import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function allPairs<T0, T1>(l1:FSharpList_T<T0>, l2:FSharpList_T<T1>):FSharpList_T<[T0, T1]>
export function append<T0>(x:FSharpList_T<T0>, y:FSharpList_T<T0>):FSharpList_T<T0>
export function choose<T0, T1>(f:((a?:T0) => FSharpOption<T1>), l:FSharpList_T<T0>):FSharpList_T<T1>
export function collect<T0, T1>(f:((a?:T0) => FSharpList_T<T1>), l:FSharpList_T<T0>):FSharpList_T<T1>
export function concat<T0>(s:IEnumerable<FSharpList_T<T0>>):FSharpList_T<T0>
export function exists<T0>(p:((a?:T0) => boolean), x:FSharpList_T<T0>):boolean
export function exists2<T0, T1>(p:((a:T0, b:T1) => boolean), x1:FSharpList_T<T0>, x2:FSharpList_T<T1>):boolean
export function filter<T0>(p:((a?:T0) => boolean), x:FSharpList_T<T0>):FSharpList_T<T0>
export function fold2<T0, T1, T2>(f:((a:T2, b:T0, c:T1) => T2), s:T2, l1:FSharpList_T<T0>, l2:FSharpList_T<T1>):T2
export function foldBack<T0, T1>(f:((a:T0, b:T1) => T1), l:FSharpList_T<T0>, s:T1):T1
export function foldBack2<T0, T1, T2>(f:((a:T0, b:T1, c:T2) => T2), l1:FSharpList_T<T0>, l2:FSharpList_T<T1>, s:T2):T2
export function forAll<T0>(p:((a?:T0) => boolean), x:FSharpList_T<T0>):boolean
export function forall2<T0, T1>(p:((a:T0, b:T1) => boolean), x1:FSharpList_T<T0>, x2:FSharpList_T<T1>):boolean
export function head<T0>(l:FSharpList_T<T0>):T0
export function init<T0>(s:number, f:((a:number) => T0)):FSharpList_T<T0>
export function iter<T0>(f:((a?:T0) => void), l:FSharpList_T<T0>):void
export function iter2<T0, T1>(f:((a:T0, b:T1) => void), l1:FSharpList_T<T0>, l2:FSharpList_T<T1>):void
export function iteri<T0>(f:((a:number, b:T0) => void), l:FSharpList_T<T0>):void
export function iteri2<T0, T1>(f:((a:number, b:T0, c:T1) => void), l1:FSharpList_T<T0>, l2:FSharpList_T<T1>):void
export function length<T0>(l:FSharpList_T<T0>):number
export function map<T0, T1>(f:((a?:T0) => T1), x:FSharpList_T<T0>):FSharpList_T<T1>
export function map2<T0, T1, T2>(f:((a:T0, b:T1) => T2), x1:FSharpList_T<T0>, x2:FSharpList_T<T1>):FSharpList_T<T2>
export function map3<T0, T1, T2, T3>(f:((a:T0, b:T1, c:T2) => T3), x1:FSharpList_T<T0>, x2:FSharpList_T<T1>, x3:FSharpList_T<T2>):FSharpList_T<T3>
export function mapi<T0, T1>(f:((a:number, b:T0) => T1), x:FSharpList_T<T0>):FSharpList_T<T1>
export function mapi2<T0, T1, T2>(f:((a:number, b:T0, c:T1) => T2), x1:FSharpList_T<T0>, x2:FSharpList_T<T1>):FSharpList_T<T2>
export function max<T0>(list:FSharpList_T<T0>):T0
export function maxBy<T0, T1>(f:((a?:T0) => T1), list:FSharpList_T<T0>):T0
export function min<T0>(list:FSharpList_T<T0>):T0
export function minBy<T0, T1>(f:((a?:T0) => T1), list:FSharpList_T<T0>):T0
export function ofArray<T0>(arr:(T0)[]):FSharpList_T<T0>
export function ofSeq<T0>(s:IEnumerable<T0>):FSharpList_T<T0>
export function partition<T0>(p:((a?:T0) => boolean), l:FSharpList_T<T0>):[FSharpList_T<T0>, FSharpList_T<T0>]
export function permute<T0>(f:((a:number) => number), l:FSharpList_T<T0>):FSharpList_T<T0>
export function reduce<T0>(f:((a:T0, b:T0) => T0), list:FSharpList_T<T0>):T0
export function reduceBack<T0>(f:((a:T0, b:T0) => T0), l:FSharpList_T<T0>):T0
export function replicate<T0>(size:number, value:T0):FSharpList_T<T0>
export function rev<T0>(l:FSharpList_T<T0>):FSharpList_T<T0>
export function scan<T0, T1>(f:((a:T1, b:T0) => T1), s:T1, l:FSharpList_T<T0>):FSharpList_T<T1>
export function scanBack<T0, T1>(f:((a:T0, b:T1) => T1), l:FSharpList_T<T0>, s:T1):FSharpList_T<T1>
export function sort<T0>(l:FSharpList_T<T0>):FSharpList_T<T0>
export function sortBy<T0, T1>(f:((a?:T0) => T1), l:FSharpList_T<T0>):FSharpList_T<T0>
export function sortByDescending<T0, T1>(f:((a?:T0) => T1), l:FSharpList_T<T0>):FSharpList_T<T0>
export function sortDescending<T0>(l:FSharpList_T<T0>):FSharpList_T<T0>
export function sortWith<T0>(f:((a:T0, b:T0) => number), l:FSharpList_T<T0>):FSharpList_T<T0>
export function tail<T0>(l:FSharpList_T<T0>):FSharpList_T<T0>
export function transpose<T0>(x:IEnumerable<FSharpList_T<T0>>):FSharpList_T<FSharpList_T<T0>>
export function unzip<T0, T1>(l:FSharpList_T<[T0, T1]>):[FSharpList_T<T0>, FSharpList_T<T1>]
export function unzip3<T0, T1, T2>(l:FSharpList_T<[T0, T1, T2]>):[FSharpList_T<T0>, FSharpList_T<T1>, FSharpList_T<T2>]
export function zip<T0, T1>(l1:FSharpList_T<T0>, l2:FSharpList_T<T1>):FSharpList_T<[T0, T1]>
export function zip3<T0, T1, T2>(l1:FSharpList_T<T0>, l2:FSharpList_T<T1>, l3:FSharpList_T<T2>):FSharpList_T<[T0, T1, T2]>
export function chunkBySize<T0>(size:number, list:FSharpList_T<T0>):FSharpList_T<FSharpList_T<T0>>
export function compareWith<T0>(f:((a:T0, b:T0) => number), l1:FSharpList_T<T0>, l2:FSharpList_T<T0>):number
export function countBy<T0, T1>(f:((a?:T0) => T1), l:FSharpList_T<T0>):FSharpList_T<[T1, number]>
export function distinct<T0>(l:FSharpList_T<T0>):FSharpList_T<T0>
export function distinctBy<T0, T1>(f:((a?:T0) => T1), l:FSharpList_T<T0>):FSharpList_T<T0>
export function splitInto<T0>(count:number, list:FSharpList_T<T0>):FSharpList_T<FSharpList_T<T0>>
export function except<T0>(itemsToExclude:IEnumerable<T0>, l:FSharpList_T<T0>):FSharpList_T<T0>
export function tryFindBack<T0>(ok:((a?:T0) => boolean), l:FSharpList_T<T0>):FSharpOption<T0>
export function findBack<T0>(p:((a?:T0) => boolean), s:FSharpList_T<T0>):T0
export function findIndexBack<T0>(p:((a?:T0) => boolean), s:FSharpList_T<T0>):number
export function groupBy<T0, T1>(f:((a?:T0) => T1), l:FSharpList_T<T0>):FSharpList_T<[T1, FSharpList_T<T0>]>
export function last<T0>(list:FSharpList_T<T0>):T0
export function contains<T0>(el:T0, x:FSharpList_T<T0>):boolean
export function mapFold<T0, T1, T2>(f:((a:T1, b:T0) => [T2, T1]), zero:T1, list:FSharpList_T<T0>):[FSharpList_T<T2>, T1]
export function mapFoldBack<T0, T1, T2>(f:((a:T0, b:T1) => [T2, T1]), list:FSharpList_T<T0>, zero:T1):[FSharpList_T<T2>, T1]
export function pairwise<T0>(l:FSharpList_T<T0>):FSharpList_T<[T0, T0]>
export function indexed<T0>(list:FSharpList_T<T0>):FSharpList_T<[number, T0]>
export function tryHead<T0>(list:FSharpList_T<T0>):FSharpOption<T0>
export function exactlyOne<T0>(list:FSharpList_T<T0>):T0
export function tryExactlyOne<T0>(list:FSharpList_T<T0>):FSharpOption<T0>
export function unfold<T0, T1>(f:((a?:T1) => FSharpOption<[T0, T1]>), s:T1):FSharpList_T<T0>
export function windowed<T0>(windowSize:number, s:FSharpList_T<T0>):FSharpList_T<FSharpList_T<T0>>
export function splitAt<T0>(n:number, list:FSharpList_T<T0>):[FSharpList_T<T0>, FSharpList_T<T0>]
export function insertAt<T0>(index:number, item:T0, l:FSharpList_T<T0>):FSharpList_T<T0>
export function insertManyAt<T0>(index:number, items:IEnumerable<T0>, l:FSharpList_T<T0>):FSharpList_T<T0>
export function removeAt<T0>(index:number, l:FSharpList_T<T0>):FSharpList_T<T0>
export function removeManyAt<T0>(index:number, number:number, l:FSharpList_T<T0>):FSharpList_T<T0>
export function updateAt<T0>(index:number, item:T0, l:FSharpList_T<T0>):FSharpList_T<T0>
export function nonEmpty<T0>(l:FSharpList_T<T0>):void
export function listEmpty<T0>():T0
export function badLengths<T0>():T0
