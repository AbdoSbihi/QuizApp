import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
export function maybeReplaceFirst<T0>(k:((a?:T0) => boolean), f:((a?:T0) => FSharpOption<T0>), l:FSharpList_T<T0>):FSharpList_T<T0>
export function replaceFirst<T0>(k:((a?:T0) => boolean), f:((a?:T0) => T0), l:FSharpList_T<T0>):FSharpList_T<T0>
