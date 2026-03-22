import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
export function read(s:string):FSharpOption<string>
export function readEscapedFromChars(chars:FSharpList_T<number>):[number, FSharpList_T<number>]
export function op_PlusPlus(a:number, b:number):number
export function write(s:string):string
export function writeEscapedAsString(isLast:boolean, c:string):string
export function isUnreserved(isLast:boolean, c:string):boolean
