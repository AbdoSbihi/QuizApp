import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export function mapInPlace<T0, T1>(f:((a?:T0) => T1), arr:(T0)[]):(T1)[]
export function ofSeqNonCopying<T0>(xs:IEnumerable<T0>):(T0)[]
export function MapTreeReduce<T0, T1>(mapping:((a?:T0) => T1), defaultValue:T1, reduction:((a:T1, b:T1) => T1), array:(T0)[]):T1
export function TreeReduce<T0>(defaultValue:T0, reduction:((a:T0, b:T0) => T0), array:(T0)[]):T0
