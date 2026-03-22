import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import IEqualityComparer from "./System.Collections.Generic.IEqualityComparer`1"
import OutRef from "./WebSharper.OutRef`1"
import Dictionary from "./System.Collections.Generic.Dictionary`2"
import IComparer from "./System.Collections.Generic.IComparer`1"
import IOrderedEnumerable from "./System.Linq.IOrderedEnumerable`1"
import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import IGrouping from "./System.Linq.IGrouping`2"
export function AggregateBy<T0, T1, T2>(source:IEnumerable<T0>, keySelector:((a:T0) => T1), seedSelector:((a:T1) => T2), func:((a:T2, b:T0) => T2), keyComparer:IEqualityComparer<T1>):IEnumerable<{K:T1,V:T2}>
export function CountBy<T0, T1>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), keyComparer:IEqualityComparer<T1>):IEnumerable<{K:T1,V:number}>
export function ElementAtOrDefault<T0>(this_1:IEnumerable<T0>, index:number, defaultValue:T0):T0
export function FirstOrDefault<T0>(this_1:IEnumerable<T0>, defaultValue:T0):T0
export function FirstOrDefault$1<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean), defaultValue:T0):T0
export function LastOrDefault<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean), defaultValue:T0):T0
export function SequenceEqual<T0>(this_1:IEnumerable<T0>, second:IEnumerable<T0>, comparer:IEqualityComparer<T0>):boolean
export function SingleOrDefault<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean), defaultValue:T0):T0
export function Where<T0>(this_1:IEnumerable<T0>, predicate:((a:T0, b:number) => boolean)):IEnumerable<T0>
export function Union<T0>(this_1:IEnumerable<T0>, second:IEnumerable<T0>, comparer:IEqualityComparer<T0>):IEnumerable<T0>
export function TryGetNonEnumeratedCount<T0>(this_1:IEnumerable<T0>, count:OutRef<number>):boolean
export function ToDictionary<T0, T1, T2>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), elementSelector:((a:T0) => T2), comparer:IEqualityComparer<T1>):Dictionary<T1, T2>
export function ToDictionary_1<T0, T1>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), comparer:IEqualityComparer<T1>):Dictionary<T1, T0>
export function TakeWhile<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean)):IEnumerable<T0>
export function TakeWhile_1<T0>(this_1:IEnumerable<T0>, predicate:((a:T0, b:number) => boolean)):IEnumerable<T0>
export function Take<T0>(this_1:IEnumerable<T0>, count:number):IEnumerable<T0>
export function Sum(this_1:IEnumerable<number>):number
export function SkipWhile<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean)):IEnumerable<T0>
export function SkipWhile_1<T0>(this_1:IEnumerable<T0>, predicate:((a:T0, b:number) => boolean)):IEnumerable<T0>
export function Skip<T0>(this_1:IEnumerable<T0>, count:number):IEnumerable<T0>
export function Single<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean)):T0
export function SelectMany<T0, T1, T2>(this_1:IEnumerable<T0>, selector:((a:T0, b:number) => IEnumerable<T1>), collectionSelector:((a:T0, b:T1) => T2)):IEnumerable<T2>
export function SelectMany_1<T0, T1, T2>(this_1:IEnumerable<T0>, selector:((a:T0) => IEnumerable<T1>), collectionSelector:((a:T0, b:T1) => T2)):IEnumerable<T2>
export function SelectMany_2<T0, T1>(this_1:IEnumerable<T0>, selector:((a:T0, b:number) => IEnumerable<T1>)):IEnumerable<T1>
export function Select<T0, T1>(this_1:IEnumerable<T0>, selector:((a:T0, b:number) => T1)):IEnumerable<T1>
export function Reverse<T0>(this_1:IEnumerable<T0>):IEnumerable<T0>
export function Repeat<T0>(element:T0, count:number):IEnumerable<T0>
export function Range(start:number, count:number):IEnumerable<number>
export function OrderByDescending<T0, T1>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), comparer:IComparer<T1>):IOrderedEnumerable<T0>
export function OrderBy<T0, T1>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), comparer:IComparer<T1>):IOrderedEnumerable<T0>
export function Min(this_1:IEnumerable<number>):number
export function Max(this_1:IEnumerable<number>):number
export function Last<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean)):T0
export function LastPred<T0>(this_1:IEnumerable<T0>, predicate:((a:T0) => boolean)):FSharpOption<T0>
export function Join<T0, T1, T2, T3>(outer:IEnumerable<T0>, inner:IEnumerable<T1>, outerKeySelector:((a:T0) => T2), innerKeySelector:((a:T1) => T2), resultSelector:((a:T0, b:T1) => T3), comparer:IEqualityComparer<T2>):IEnumerable<T3>
export function Intersect<T0>(this_1:IEnumerable<T0>, second:IEnumerable<T0>, comparer:IEqualityComparer<T0>):IEnumerable<T0>
export function GroupJoin<T0, T1, T2, T3>(outer:IEnumerable<T0>, inner:IEnumerable<T1>, outerKeySelector:((a:T0) => T2), innerKeySelector:((a:T1) => T2), resultSelector:((a:T0, b:IEnumerable<T1>) => T3), comparer:IEqualityComparer<T2>):IEnumerable<T3>
export function GroupBy<T0, T1, T2, T3>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), elementSelector:((a:T0) => T2), resultSelector:((a:T1, b:IEnumerable<T2>) => T3), comparer:IEqualityComparer<T1>):IEnumerable<T3>
export function GroupBy_1<T0, T1, T2>(this_1:IEnumerable<T0>, keySelector:((a:T0) => T1), elementSelector:((a:T0) => T2), comparer:IEqualityComparer<T1>):IEnumerable<IGrouping<T1, T2>>
export function Except<T0>(this_1:IEnumerable<T0>, second:IEnumerable<T0>, comparer:IEqualityComparer<T0>):IEnumerable<T0>
export function Distinct<T0>(this_1:IEnumerable<T0>, comparer:IEqualityComparer<T0>):IEnumerable<T0>
export function DefaultIfEmpty<T0>(this_1:IEnumerable<T0>, defaultValue:T0):IEnumerable<T0>
export function Average(this_1:IEnumerable<number>):number
