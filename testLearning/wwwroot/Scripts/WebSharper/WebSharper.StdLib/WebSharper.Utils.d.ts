import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
import { FSharpList_T } from "./Microsoft.FSharp.Collections.FSharpList`1"
export function spaceForPosSignAdjusted(s:string):string
export function plusForPosSignAdjusted(s:string):string
export function adjustSigned(number, length:number)
export function nullableConv<T0>(a, f:((a:any) => T0)):T0
export function nullableCmpR(a, b, f:((a:any, b:any) => boolean)):boolean
export function nullableCmpL(a, b, f:((a:any, b:any) => boolean)):boolean
export function nullableCmpE(a, b, f:((a:any, b:any) => boolean)):boolean
export function nullableCmp(a, b, f:((a:any, b:any) => boolean)):boolean
export function nullableOpR<T0>(a, b, f:((a:any, b:any) => T0)):T0
export function nullableOpL<T0>(a, b, f:((a:any, b:any) => T0)):T0
export function nullableOp<T0>(a, b, f:((a:any, b:any) => T0)):T0
export function bigintStep(min:bigint, step:bigint, max:bigint):IEnumerable<bigint>
export function charStep(min:string, step:string, max:string):IEnumerable<string>
export function bigintRange(min:bigint, max:bigint):IEnumerable<bigint>
export function charRange(min:string, max:string):IEnumerable<string>
export function prettyPrint(o):string
export function printArray2D(p:((a:any) => string), o:((any)[])[]):string
export function printArray(p:((a:any) => string), o:(any)[]):string
export function printList(p:((a:any) => string), o:FSharpList_T<any>):string
export function padNumLeft(s:string, l:number):string
export function spaceForPos(n, s:string):string
export function plusForPos(n, s:string):string
export function toSafe(s:string):string
