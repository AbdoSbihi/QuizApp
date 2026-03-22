import IObserver from "./System.IObserver`1"
export function New<T0>(f:((a?:T0) => void), e:((a:Error) => void), c:(() => void)):IObserver<T0>
export function Of<T0>(f:((a?:T0) => void)):IObserver<T0>
