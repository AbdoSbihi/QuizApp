import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
export function Found<T0, T1>(value:T1, remainder:FSharpList_T<T0>):LookupResult<T0, T1>
export interface Found<T0, T1>{
  $:0;
  $0:T1;
  $1:FSharpList_T<T0>;
}
export interface NotFound<T0, T1>{
  $:1;
}
export type LookupResult<T0, T1> = (Found<T0, T1> | NotFound<T0, T1>)
