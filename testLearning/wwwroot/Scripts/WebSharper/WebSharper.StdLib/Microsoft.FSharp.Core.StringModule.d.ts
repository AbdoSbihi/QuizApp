import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export function RegexEscape(s:string):string
export function SplitWith(str:string, pat):string[]
export function Join(sep:string, values:string[]):string
export function TrimEndWS(s:string):string
export function TrimStartWS(s:string):string
export function Trim(s:string):string
export function StartsWith(t:string, s:string):boolean
export function Substring(s:string, ix:number, ct:number):string
export function ReplaceOnce<T0, T1, T2>(string:T0, search:T1, replace:T2):string
export function Remove(x:string, ix:number, ct:number):string
export function PadRightWith(s:string, n:number, c:string):string
export function PadLeftWith(s:string, n:number, c:string):string
export function LastIndexOf(s:string, c:string, i:number):number
export function IsNullOrWhiteSpace(x:string):boolean
export function IsNullOrEmpty(x:string):boolean
export function Insert(x:string, index:number, s:string):string
export function IndexOf(s:string, c:string, i:number):number
export function EndsWith(x:string, s:string):boolean
export function collect(f:((a:string) => string), s:string):string
export function concat(separator:string, strings:IEnumerable<string>):string
export function exists(f:((a:string) => boolean), s:string):boolean
export function forall(f:((a:string) => boolean), s:string):boolean
export function init(count:number, f:((a:number) => string)):string
export function iter(f:((a:string) => void), s:string):void
export function iteri(f:((a:number, b:string) => void), s:string):void
export function length(s:string):number
export function map(f:((a:string) => string), s:string):string
export function mapi(f:((a:number, b:string) => string), s:string):string
export function replicate(count:number, s:string):string
export function protect(s:string):string
export function SFormat(format:string, args:(any)[]):string
export function Filter(f:((a:string) => boolean), s:string):string
export function SplitStrings(s:string, sep:string[], opts):string[]
export function SplitChars(s:string, sep:string[], opts):string[]
export function Split(s:string, pat, opts):string[]
export function TrimEnd(s:string, t:string[]):string
export function TrimStart(s:string, t:string[]):string
export function ToCharArrayRange(s:string, startIndex:number, length_1:number):string[]
export function ToCharArray(s:string):string[]
export function ReplaceChar(s:string, oldC:string, newC:string):string
export function Replace(subject:string, search:string, replace:string):string
export function PadRight(s:string, n:number):string
export function PadLeft(s:string, n:number):string
export function CopyTo(s:string, o:number, d:string[], off:number, ct:number):void
export function Compare(x:string, y:string):number
