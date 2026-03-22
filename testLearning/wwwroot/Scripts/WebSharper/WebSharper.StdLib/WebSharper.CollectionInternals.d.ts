import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function randomShuffleInPlace<T0>(source:(T0)[]):void
export function randomShuffleInPlaceBy<T0>(randomizer:(() => number), source:(T0)[]):void
export function randomSample<T0>(count:number, source:(T0)[]):(T0)[]
export function randomSampleBy<T0>(randomizer:(() => number), count:number, source:(T0)[]):(T0)[]
export function randomChoice<T0>(source:(T0)[]):T0
export function randomChoiceBy<T0>(randomizer:(() => number), source:(T0)[]):T0
export function next(randomizer:(() => number), maxValue:number):number
export function transposeArray<T0>(array:((T0)[])[]):((T0)[])[]
export function nonNegative<T0>():T0
export function skipWhile<T0>(predicate:((a?:T0) => boolean), list:FSharpList_T<T0>):FSharpList_T<T0>
export function seqContains<T0>(el:T0, s:IEnumerable<T0>):boolean
export function last<T0>(s:IEnumerable<T0>):T0
export function outOfBounds<T0>():T0
export function insufficient<T0>():T0
export function groupBy<T0, T1>(f:((a?:T0) => T1), a:(T0)[]):([T1, (T0)[]])[]
export function skip<T0>(i:number, l:FSharpList_T<T0>):FSharpList_T<T0>
export function except<T0>(itemsToExclude:IEnumerable<T0>, s:IEnumerable<T0>):IEnumerable<T0>
export function countBy<T0, T1>(f:((a?:T0) => T1), a:(T0)[]):([T1, number])[]
export function chunkBySize<T0>(size:number, s:IEnumerable<T0>):IEnumerable<(T0)[]>
export function tryLast<T0>(s:IEnumerable<T0>):FSharpOption<T0>
export function tryItem<T0>(i:number, s:IEnumerable<T0>):FSharpOption<T0>
export function tryHead<T0>(s:IEnumerable<T0>):FSharpOption<T0>
export function sortInPlaceByDescending<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):void
export function mapiInPlace<T0, T1>(f:((a:number, b:T0) => T1), arr:(T0)[]):(T1)[]
export function mapInPlace<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):void
export function mapFoldBack<T0, T1, T2>(f:((a:T0, b:T1) => [T2, T1]), arr:(T0)[], zero:T1):[(T2)[], T1]
export function mapFold<T0, T1, T2>(f:((a:T1, b:T0) => [T2, T1]), zero:T1, arr:(T0)[]):[(T2)[], T1]
export function tryFindIndexBack<T0>(f:((a?:T0) => boolean), arr:(T0)[]):FSharpOption<number>
export function tryFindBack<T0>(f:((a?:T0) => boolean), arr:(T0)[]):FSharpOption<T0>
export function arrContains<T0>(item:T0, arr:(T0)[]):boolean
export function splitInto<T0>(count:number, arr:(T0)[]):((T0)[])[]
