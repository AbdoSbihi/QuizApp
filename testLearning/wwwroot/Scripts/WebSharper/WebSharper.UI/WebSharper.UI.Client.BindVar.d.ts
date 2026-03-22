import { CheckedInput_T } from "./WebSharper.UI.Client.CheckedInput`1"
import Var from "./WebSharper.UI.Var`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
export function FloatApplyChecked():((a:Var<CheckedInput_T<number>>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<CheckedInput_T<number>>) => void)), View_T<FSharpOption<CheckedInput_T<number>>>])
export function FloatGetChecked():((a:Element) => FSharpOption<CheckedInput_T<number>>)
export function FloatSetChecked():((a:Element) => ((a:CheckedInput_T<number>) => void))
export function FloatApplyUnchecked():((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>])
export function FloatGetUnchecked():((a:Element) => FSharpOption<number>)
export function FloatSetUnchecked():((a:Element) => ((a:number) => void))
export function IntApplyChecked():((a:Var<CheckedInput_T<number>>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<CheckedInput_T<number>>) => void)), View_T<FSharpOption<CheckedInput_T<number>>>])
export function IntGetChecked():((a:Element) => FSharpOption<CheckedInput_T<number>>)
export function IntSetChecked():((a:Element) => ((a:CheckedInput_T<number>) => void))
export function IntApplyUnchecked():((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>])
export function IntGetUnchecked():((a:Element) => FSharpOption<number>)
export function IntSetUnchecked():((a:Element) => ((a:number) => void))
export function FileApplyUnchecked():((a:Var<File[]>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<File[]>) => void)), View_T<FSharpOption<File[]>>])
export function FileGetUnchecked():((a:Element) => FSharpOption<File[]>)
export function FileSetUnchecked():((a:Element) => ((a:File[]) => void))
export function DateTimeApplyUnchecked():((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>])
export function DateTimeGetUnchecked():((a:Element) => FSharpOption<number>)
export function DateTimeSetUnchecked():((a:Element) => ((a:number) => void))
export function StringListApply():((a:Var<string[]>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<string[]>) => void)), View_T<FSharpOption<string[]>>])
export function StringListGet():((a:Element) => FSharpOption<string[]>)
export function StringListSet():((a:Element) => ((a:string[]) => void))
export function StringApply():((a:Var<string>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<string>) => void)), View_T<FSharpOption<string>>])
export function StringGet():((a:Element) => FSharpOption<string>)
export function StringSet():((a:Element) => ((a:string) => void))
export function BoolCheckedApply():((a:Var<boolean>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<boolean>) => void)), View_T<FSharpOption<boolean>>])
export function FileApplyValue<T0>(get:((a:Element) => FSharpOption<T0>), set:((a:Element) => ((a?:T0) => void)), var_1:Var<T0>):[((a:Element) => void), ((a:Element) => ((a:FSharpOption<T0>) => void)), View_T<FSharpOption<T0>>]
export function ApplyValue<T0>(get:((a:Element) => FSharpOption<T0>), set:((a:Element) => ((a?:T0) => void)), var_1:Var<T0>):[((a:Element) => void), ((a:Element) => ((a:FSharpOption<T0>) => void)), View_T<FSharpOption<T0>>]
