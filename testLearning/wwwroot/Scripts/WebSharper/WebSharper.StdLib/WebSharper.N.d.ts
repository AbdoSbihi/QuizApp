import OutRef from "./WebSharper.OutRef`1"
export function TryParseBool(s:string, r:OutRef<boolean>):boolean
export function ParseBool(s:string):boolean
export function TryParseBigInt<T0>(s:string, min:T0, max:T0, r:OutRef<T0>):boolean
export function ParseBigInt<T0>(s:string, min:T0, max:T0, overflowMsg:string):T0
export function TryParse<T0>(s:string, min:T0, max:T0, r:OutRef<T0>):boolean
export function Parse<T0>(s:string, min:T0, max:T0, overflowMsg:string):T0
