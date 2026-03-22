import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function allPairs<T0, T1>(source1:IEnumerable<T0>, source2:IEnumerable<T1>):IEnumerable<[T0, T1]>
export function append<T0>(s1:IEnumerable<T0>, s2:IEnumerable<T0>):IEnumerable<T0>
export function cache<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function choose<T0, T1>(f:((a?:T0) => FSharpOption<T1>), s:IEnumerable<T0>):IEnumerable<T1>
export function collect<T0, T1, T2>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<T2>
export function compareWith<T0>(f:((a:T0, b:T0) => number), s1:IEnumerable<T0>, s2:IEnumerable<T0>):number
export function concat<T0, T1>(ss:IEnumerable<T0>):IEnumerable<T1>
export function countBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<[T1, number]>
export function delay<T0>(f:(() => IEnumerable<T0>)):IEnumerable<T0>
export function distinct<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function distinctBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<T0>
export function splitInto<T0>(count:number, s:IEnumerable<T0>):IEnumerable<(T0)[]>
export function exactlyOne<T0>(s:IEnumerable<T0>):T0
export function tryExactlyOne<T0>(s:IEnumerable<T0>):FSharpOption<T0>
export function exists<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):boolean
export function exists2<T0, T1>(p:((a:T0, b:T1) => boolean), s1:IEnumerable<T0>, s2:IEnumerable<T1>):boolean
export function filter<T0>(f:((a?:T0) => boolean), s:IEnumerable<T0>):IEnumerable<T0>
export function find<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):T0
export function findIndex<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):number
export function fold<T0, T1>(f:((a:T1, b:T0) => T1), x:T1, s:IEnumerable<T0>):T1
export function forall<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):boolean
export function forall2<T0, T1>(p:((a:T0, b:T1) => boolean), s1:IEnumerable<T0>, s2:IEnumerable<T1>):boolean
export function groupBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<[T1, IEnumerable<T0>]>
export function head<T0>(s:IEnumerable<T0>):T0
export function init<T0>(n:number, f:((a:number) => T0)):IEnumerable<T0>
export function initInfinite<T0>(f:((a:number) => T0)):IEnumerable<T0>
export function isEmpty<T0>(s:IEnumerable<T0>):boolean
export function iter<T0>(p:((a?:T0) => void), s:IEnumerable<T0>):void
export function iter2<T0, T1>(p:((a:T0, b:T1) => void), s1:IEnumerable<T0>, s2:IEnumerable<T1>):void
export function iteri<T0>(p:((a:number, b:T0) => void), s:IEnumerable<T0>):void
export function length<T0>(s:IEnumerable<T0>):number
export function map<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<T1>
export function mapi<T0, T1>(f:((a:number, b:T0) => T1), s:IEnumerable<T0>):IEnumerable<T1>
export function map2<T0, T1, T2>(f:((a:T0, b:T1) => T2), s1:IEnumerable<T0>, s2:IEnumerable<T1>):IEnumerable<T2>
export function maxBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):T0
export function minBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):T0
export function max<T0>(s:IEnumerable<T0>):T0
export function min<T0>(s:IEnumerable<T0>):T0
export function nth<T0>(index:number, s:IEnumerable<T0>):T0
export function pairwise<T0>(s:IEnumerable<T0>):IEnumerable<[T0, T0]>
export function pick<T0, T1>(p:((a?:T0) => FSharpOption<T1>), s:IEnumerable<T0>):T1
export function readOnly<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function reduce<T0>(f:((a:T0, b:T0) => T0), source:IEnumerable<T0>):T0
export function scan<T0, T1>(f:((a:T1, b:T0) => T1), x:T1, s:IEnumerable<T0>):IEnumerable<T1>
export function skip<T0>(n:number, s:IEnumerable<T0>):IEnumerable<T0>
export function skipWhile<T0>(f:((a?:T0) => boolean), s:IEnumerable<T0>):IEnumerable<T0>
export function sort<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function sortBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<T0>
export function sortByDescending<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):IEnumerable<T0>
export function sortDescending<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function sum<T0>(s:IEnumerable<T0>):T0
export function sumBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):T1
export function average<T0>(s:IEnumerable<T0>):T0
export function averageBy<T0, T1>(f:((a?:T0) => T1), s:IEnumerable<T0>):T1
export function take<T0>(n:number, s:IEnumerable<T0>):IEnumerable<T0>
export function takeWhile<T0>(f:((a?:T0) => boolean), s:IEnumerable<T0>):IEnumerable<T0>
export function transpose<T0, T1>(x:IEnumerable<T0>):IEnumerable<IEnumerable<T1>>
export function truncate<T0>(n:number, s:IEnumerable<T0>):IEnumerable<T0>
export function tryFind<T0>(ok:((a?:T0) => boolean), s:IEnumerable<T0>):FSharpOption<T0>
export function findBack<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):T0
export function tryFindIndex<T0>(ok:((a?:T0) => boolean), s:IEnumerable<T0>):FSharpOption<number>
export function findIndexBack<T0>(p:((a?:T0) => boolean), s:IEnumerable<T0>):number
export function tryPick<T0, T1>(f:((a?:T0) => FSharpOption<T1>), s:IEnumerable<T0>):FSharpOption<T1>
export function unfold<T0, T1>(f:((a?:T0) => FSharpOption<[T1, T0]>), s:T0):IEnumerable<T1>
export function windowed<T0>(windowSize:number, s:IEnumerable<T0>):IEnumerable<(T0)[]>
export function zip<T0, T1>(s1:IEnumerable<T0>, s2:IEnumerable<T1>):IEnumerable<[T0, T1]>
export function map3<T0, T1, T2, T3>(f:((a:T0, b:T1, c:T2) => T3), s1:IEnumerable<T0>, s2:IEnumerable<T1>, s3:IEnumerable<T2>):IEnumerable<T3>
export function zip3<T0, T1, T2>(s1:IEnumerable<T0>, s2:IEnumerable<T1>, s3:IEnumerable<T2>):IEnumerable<[T0, T1, T2]>
export function fold2<T0, T1, T2>(f:((a:T2, b:T0, c:T1) => T2), s:T2, s1:IEnumerable<T0>, s2:IEnumerable<T1>):T2
export function foldBack<T0, T1>(f:((a:T0, b:T1) => T1), s:IEnumerable<T0>, state:T1):T1
export function foldBack2<T0, T1, T2>(f:((a:T0, b:T1, c:T2) => T2), s1:IEnumerable<T0>, s2:IEnumerable<T1>, s:T2):T2
export function iteri2<T0, T1>(f:((a:number, b:T0, c:T1) => void), s1:IEnumerable<T0>, s2:IEnumerable<T1>):void
export function mapi2<T0, T1, T2>(f:((a:number, b:T0, c:T1) => T2), s1:IEnumerable<T0>, s2:IEnumerable<T1>):IEnumerable<T2>
export function mapFold<T0, T1, T2>(f:((a:T1, b:T0) => [T2, T1]), zero:T1, s:IEnumerable<T0>):[IEnumerable<T2>, T1]
export function mapFoldBack<T0, T1, T2>(f:((a:T0, b:T1) => [T2, T1]), s:IEnumerable<T0>, zero:T1):[IEnumerable<T2>, T1]
export function permute<T0>(f:((a:number) => number), s:IEnumerable<T0>):IEnumerable<T0>
export function reduceBack<T0>(f:((a:T0, b:T0) => T0), s:IEnumerable<T0>):T0
export function replicate<T0>(size:number, value:T0):IEnumerable<T0>
export function rev<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function scanBack<T0, T1>(f:((a:T0, b:T1) => T1), l:IEnumerable<T0>, s:T1):IEnumerable<T1>
export function indexed<T0>(s:IEnumerable<T0>):IEnumerable<[number, T0]>
export function sortWith<T0>(f:((a:T0, b:T0) => number), s:IEnumerable<T0>):IEnumerable<T0>
export function tail<T0>(s:IEnumerable<T0>):IEnumerable<T0>
export function insertAt<T0>(index:number, item:T0, arr:IEnumerable<T0>):IEnumerable<T0>
export function insertManyAt<T0>(index:number, items:IEnumerable<T0>, arr:IEnumerable<T0>):IEnumerable<T0>
export function removeAt<T0>(index:number, arr:IEnumerable<T0>):IEnumerable<T0>
export function removeManyAt<T0>(index:number, number:number, arr:IEnumerable<T0>):IEnumerable<T0>
export function updateAt<T0>(index:number, item:T0, arr:IEnumerable<T0>):IEnumerable<T0>
export function avgByGen<T0, T1, T2, T3>(add:((a:T0, b:T1) => T0), divByInt:((a:T0, b:number) => T2), zero:T0, f:((a?:T3) => T1), s:IEnumerable<T3>):T2
export function avgGen<T0, T1, T2>(add:((a:T0, b:T1) => T0), divByInt:((a:T0, b:number) => T2), zero:T0, s:IEnumerable<T1>):T2
export function seqEmpty<T0>():T0
