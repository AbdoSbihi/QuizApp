import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1"
export function Filter<T0>(ok:((a?:T0) => boolean), set:HashSet<T0>):HashSet<T0>
export function Intersect<T0>(a:HashSet<T0>, b:HashSet<T0>):HashSet<T0>
export function Except<T0>(excluded:HashSet<T0>, included:HashSet<T0>):HashSet<T0>
export function ToArray<T0>(set:HashSet<T0>):(T0)[]
