import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
export function DateFormatter(date:number, format:string):string
export function dateToStringWithCustomFormat(d:Date, format:string):string
export function parseQuotedString(format:string, pos:number):[string, number]
export function parseNextChar(format:string, pos:number):FSharpOption<string>
export function parseRepeatToken(format:string, pos:number, patternChar:string):number
export function dateOffsetString(d:Date):string
export function padRight(minLength:number, x:string):string
export function padLeft(minLength:number, x:string):string
export function longMonths():FSharpList_T<string>
export function shortMonths():FSharpList_T<string>
export function longDays():FSharpList_T<string>
export function shortDays():FSharpList_T<string>
