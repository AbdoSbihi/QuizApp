export function init<T0>(n:number, m:number, f:((a:number, b:number) => T0)):((T0)[])[]
export function iter<T0>(f:((a?:T0) => void), array:((T0)[])[]):void
export function iteri<T0>(f:((a:number, b:number, c:T0) => void), array:((T0)[])[]):void
export function map<T0, T1>(f:((a?:T0) => T1), array:((T0)[])[]):((T1)[])[]
export function mapi<T0, T1>(f:((a:number, b:number, c:T0) => T1), array:((T0)[])[]):((T1)[])[]
export function copy<T0>(array:((T0)[])[]):((T0)[])[]
