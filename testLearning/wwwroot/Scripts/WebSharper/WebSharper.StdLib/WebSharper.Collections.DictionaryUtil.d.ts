import IEqualityComparer from "./System.Collections.Generic.IEqualityComparer`1"
export function getHashCode<T0>(c:IEqualityComparer<T0>, x:T0):number
export function equals<T0>(c:IEqualityComparer<T0>):((a:T0, b:T0) => boolean)
export function alreadyAdded<T0>():T0
export function notPresent<T0>():T0
