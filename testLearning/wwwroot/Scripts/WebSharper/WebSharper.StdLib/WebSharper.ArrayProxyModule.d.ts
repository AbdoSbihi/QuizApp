export function sortByKeys<T0, T1>(keys:(T0)[], items:(T1)[], index:number, length:number, comp:((a:T0, b:T0) => number)):void
export function sortSub<T0>(keys:(T0)[], index:number, length:number, comp:((a:T0, b:T0) => number)):void
export function sortInternal<T0>(keys:(T0)[], index:number, length:number, comp:((a:T0, b:T0) => number), swap:((a:number, b:number) => void)):void
export function binarySearchComparer<T0>(needle):((a?:T0) => number)
export function binarySearch<T0>(haystack:(T0)[], comparer:((a?:T0) => number), start:number, finish:number):number
