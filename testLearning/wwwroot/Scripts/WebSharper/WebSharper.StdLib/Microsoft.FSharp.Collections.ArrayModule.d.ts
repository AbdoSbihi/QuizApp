import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
export function sumBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):T1
export function sum<T0>(arr:(T0)[]):T0
export function updateAt<T0>(index:number, item:T0, arr:(T0)[]):(T0)[]
export function removeManyAt<T0>(index:number, number:number, arr:(T0)[]):(T0)[]
export function removeAt<T0>(index:number, arr:(T0)[]):(T0)[]
export function insertManyAt<T0>(index:number, items:IEnumerable<T0>, arr:(T0)[]):(T0)[]
export function insertAt<T0>(index:number, item:T0, arr:(T0)[]):(T0)[]
export function splitAt<T0>(n:number, ar:(T0)[]):[(T0)[], (T0)[]]
export function windowed<T0>(windowSize:number, s:(T0)[]):((T0)[])[]
export function unfold<T0, T1>(f:((a?:T1) => FSharpOption<[T0, T1]>), s:T1):(T0)[]
export function tryExactlyOne<T0>(ar:(T0)[]):FSharpOption<T0>
export function exactlyOne<T0>(ar:(T0)[]):T0
export function takeWhile<T0>(predicate:((a?:T0) => boolean), ar:(T0)[]):(T0)[]
export function take<T0>(n:number, ar:(T0)[]):(T0)[]
export function tail<T0>(ar:(T0)[]):(T0)[]
export function skipWhile<T0>(predicate:((a?:T0) => boolean), ar:(T0)[]):(T0)[]
export function skip<T0>(i:number, ar:(T0)[]):(T0)[]
export function indexed<T0>(ar:(T0)[]):([number, T0])[]
export function replicate<T0>(size:number, value:T0):(T0)[]
export function pairwise<T0>(a:(T0)[]):([T0, T0])[]
export function map3<T0, T1, T2, T3>(f:((a:T0, b:T1, c:T2) => T3), arr1:(T0)[], arr2:(T1)[], arr3:(T2)[]):(T3)[]
export function last<T0>(arr:(T0)[]):T0
export function head<T0>(arr:(T0)[]):T0
export function findIndexBack<T0>(p:((a?:T0) => boolean), s:(T0)[]):number
export function findBack<T0>(p:((a?:T0) => boolean), s:(T0)[]):T0
export function except<T0>(itemsToExclude:IEnumerable<T0>, a:(T0)[]):(T0)[]
export function distinctBy<T0, T1>(f:((a?:T0) => T1), a:(T0)[]):(T0)[]
export function distinct<T0>(l:(T0)[]):(T0)[]
export function compareWith<T0>(f:((a:T0, b:T0) => number), a1:(T0)[], a2:(T0)[]):number
export function chunkBySize<T0>(size:number, array:(T0)[]):((T0)[])[]
export function zip3<T0, T1, T2>(arr1:(T0)[], arr2:(T1)[], arr3:(T2)[]):([T0, T1, T2])[]
export function zip<T0, T1>(arr1:(T0)[], arr2:(T1)[]):([T0, T1])[]
export function unzip3<T0, T1, T2>(arr:([T0, T1, T2])[]):[(T0)[], (T1)[], (T2)[]]
export function unzip<T0, T1>(arr:([T0, T1])[]):[(T0)[], (T1)[]]
export function tryPick<T0, T1>(f:((a?:T0) => FSharpOption<T1>), arr:(T0)[]):FSharpOption<T1>
export function tryLast<T0>(arr:(T0)[]):FSharpOption<T0>
export function tryItem<T0>(i:number, arr:(T0)[]):FSharpOption<T0>
export function tryHead<T0>(arr:(T0)[]):FSharpOption<T0>
export function tryFindIndex<T0>(f:((a?:T0) => boolean), arr:(T0)[]):FSharpOption<number>
export function tryFind<T0>(f:((a?:T0) => boolean), arr:(T0)[]):FSharpOption<T0>
export function transpose<T0>(x:IEnumerable<(T0)[]>):((T0)[])[]
export function averageBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):T1
export function average<T0>(arr:(T0)[]):T0
export function sortDescending<T0>(arr:(T0)[]):(T0)[]
export function sortByDescending<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):(T0)[]
export function sortWith<T0>(comparer:((a:T0, b:T0) => number), arr:(T0)[]):(T0)[]
export function sortInPlaceWith<T0>(comparer:((a:T0, b:T0) => number), arr:(T0)[]):void
export function sortInPlaceBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):void
export function sortInPlace<T0>(arr:(T0)[]):void
export function sortBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):(T0)[]
export function sort<T0>(arr:(T0)[]):(T0)[]
export function scanBack<T0, T1>(f:((a:T0, b:T1) => T1), arr:(T0)[], zero:T1):(T1)[]
export function scan<T0, T1>(f:((a:T1, b:T0) => T1), zero:T1, arr:(T0)[]):(T1)[]
export function reduceBack<T0>(f:((a:T0, b:T0) => T0), arr:(T0)[]):T0
export function reduce<T0>(f:((a:T0, b:T0) => T0), arr:(T0)[]):T0
export function pick<T0, T1>(f:((a?:T0) => FSharpOption<T1>), arr:(T0)[]):T1
export function permute<T0>(f:((a:number) => number), arr:(T0)[]):(T0)[]
export function partition<T0>(f:((a?:T0) => boolean), arr:(T0)[]):[(T0)[], (T0)[]]
export function ofSeq<T0>(xs:IEnumerable<T0>):(T0)[]
export function ofList<T0>(xs:FSharpList_T<T0>):(T0)[]
export function minBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):T0
export function min<T0>(arr:(T0)[]):T0
export function maxBy<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):T0
export function max<T0>(arr:(T0)[]):T0
export function mapi2<T0, T1, T2>(f:((a:number, b:T0, c:T1) => T2), arr1:(T0)[], arr2:(T1)[]):(T2)[]
export function mapi<T0, T1>(f:((a:number, b:T0) => T1), arr:(T0)[]):(T1)[]
export function map2<T0, T1, T2>(f:((a:T0, b:T1) => T2), arr1:(T0)[], arr2:(T1)[]):(T2)[]
export function map<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):(T1)[]
export function iteri2<T0, T1>(f:((a:number, b:T0, c:T1) => void), arr1:(T0)[], arr2:(T1)[]):void
export function iteri<T0>(f:((a:number, b:T0) => void), arr:(T0)[]):void
export function iter2<T0, T1>(f:((a:T0, b:T1) => void), arr1:(T0)[], arr2:(T1)[]):void
export function iter<T0>(f:((a?:T0) => void), arr:(T0)[]):void
export function init<T0>(size:number, f:((a:number) => T0)):(T0)[]
export function forall2<T0, T1>(f:((a:T0, b:T1) => boolean), x1:(T0)[], x2:(T1)[]):boolean
export function forall<T0>(f:((a?:T0) => boolean), x:(T0)[]):boolean
export function foldBack2<T0, T1, T2>(f:((a:T0, b:T1, c:T2) => T2), arr1:(T0)[], arr2:(T1)[], zero:T2):T2
export function foldBack<T0, T1>(f:((a:T0, b:T1) => T1), arr:(T0)[], zero:T1):T1
export function fold2<T0, T1, T2>(f:((a:T2, b:T0, c:T1) => T2), zero:T2, arr1:(T0)[], arr2:(T1)[]):T2
export function fold<T0, T1>(f:((a:T1, b:T0) => T1), zero:T1, arr:(T0)[]):T1
export function findIndex<T0>(f:((a?:T0) => boolean), arr:(T0)[]):number
export function find<T0>(f:((a?:T0) => boolean), arr:(T0)[]):T0
export function filter<T0>(f:((a?:T0) => boolean), arr:(T0)[]):(T0)[]
export function fill<T0>(arr:(T0)[], start:number, length:number, value:T0):void
export function exists2<T0, T1>(f:((a:T0, b:T1) => boolean), x1:(T0)[], x2:(T1)[]):boolean
export function exists<T0>(f:((a?:T0) => boolean), x:(T0)[]):boolean
export function create<T0>(size:number, value:T0):(T0)[]
export function concat<T0>(xs:IEnumerable<(T0)[]>):(T0)[]
export function collect<T0, T1>(f:((a?:T0) => (T1)[]), x:(T0)[]):(T1)[]
export function choose<T0, T1>(f:((a?:T0) => FSharpOption<T1>), arr:(T0)[]):(T1)[]
export function blit<T0>(arr1:(T0)[], start1:number, arr2:(T0)[], start2:number, length:number):void
export function allPairs<T0, T1>(array1:(T0)[], array2:(T1)[]):([T0, T1])[]
export function avgByGen<T0, T1, T2, T3>(add:((a:T0, b:T1) => T0), divByInt:((a:T0, b:number) => T2), zero:T0, f:((a?:T3) => T1), arr:(T3)[]):T2
export function avgGen<T0, T1, T2>(add:((a:T0, b:T1) => T0), divByInt:((a:T0, b:number) => T2), zero:T0, arr:(T1)[]):T2
export function nonEmpty<T0>(arr:(T0)[]):void
export function checkLength<T0, T1>(arr1:(T0)[], arr2:(T1)[]):void
