import { FSharpOption } from "./Microsoft.FSharp.Core.FSharpOption`1"
export function string(source:string, start:FSharpOption<number>, finish:FSharpOption<number>):string
export function array<T0>(source:(T0)[], start:FSharpOption<number>, finish:FSharpOption<number>):(T0)[]
export function setArray<T0>(dst:(T0)[], start:FSharpOption<number>, finish:FSharpOption<number>, src:(T0)[]):void
export function array2D<T0>(arr:((T0)[])[], start1:FSharpOption<number>, finish1:FSharpOption<number>, start2:FSharpOption<number>, finish2:FSharpOption<number>):((T0)[])[]
export function array2Dfix1<T0>(arr:((T0)[])[], fixed1:number, start2:FSharpOption<number>, finish2:FSharpOption<number>):(T0)[]
export function array2Dfix2<T0>(arr:((T0)[])[], start1:FSharpOption<number>, finish1:FSharpOption<number>, fixed2:number):(T0)[]
export function setArray2Dfix1<T0>(dst:((T0)[])[], fixed1:number, start2:FSharpOption<number>, finish2:FSharpOption<number>, src:(T0)[]):void
export function setArray2Dfix2<T0>(dst:((T0)[])[], start1:FSharpOption<number>, finish1:FSharpOption<number>, fixed2:number, src:(T0)[]):void
export function setArray2D<T0>(dst:((T0)[])[], start1:FSharpOption<number>, finish1:FSharpOption<number>, start2:FSharpOption<number>, finish2:FSharpOption<number>, src:((T0)[])[]):void
