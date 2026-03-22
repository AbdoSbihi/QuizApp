import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function Create(y:number, mo:number, d:number, h:number, m:number, s:number, ms:number):number
export function LongTime(d):string
export function ShortTime(d):string
export function LongDate(d):string
export function Parse(s:string):number
export function TryParse(s:string):FSharpOption<number>
export function AddMonths(d:number, months:number):number
export function AddYears(d:number, years:number):number
export function TimePortion(d:number):number
export function DatePortion(d:number):number
