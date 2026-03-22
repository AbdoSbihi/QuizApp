import Var from "./WebSharper.UI.Var`1"
import { Attr_T } from "./WebSharper.UI.Attr"
import { CheckedInput_T } from "./WebSharper.UI.Client.CheckedInput`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
import Trans from "./WebSharper.UI.Trans`1"
export function Checked(var_1:Var<boolean>):Attr_T
export function FloatValue(var_1:Var<CheckedInput_T<number>>):Attr_T
export function FloatValueUnchecked(var_1:Var<number>):Attr_T
export function IntValue(var_1:Var<CheckedInput_T<number>>):Attr_T
export function IntValueUnchecked(var_1:Var<number>):Attr_T
export function FileValue(var_1:Var<File[]>):Attr_T
export function DateTimeValue(var_1:Var<number>):Attr_T
export function StringListValue(var_1:Var<string[]>):Attr_T
export function Value(var_1:Var<string>):Attr_T
export function ContentEditableHtml(var_1:Var<string>):Attr_T
export function ContentEditableText(var_1:Var<string>):Attr_T
export function CustomValue<T0>(var_1:Var<T0>, toString:((a?:T0) => string), fromString:((a:string) => FSharpOption<T0>)):Attr_T
export function CustomVar<T0>(var_1:Var<T0>, set:((a:Element) => ((a?:T0) => void)), get:((a:Element) => FSharpOption<T0>)):Attr_T
export function ValueWith<T0>(bind:((a:Var<T0>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<T0>) => void)), View_T<FSharpOption<T0>>]), var_1:Var<T0>):Attr_T
export function DynamicProp<T0>(name:string, view:View_T<T0>):Attr_T
export function Prop<T0>(name:string, value:T0):Attr_T
export function DynamicBool(name:string, boolview:View_T<boolean>):Attr_T
export function DynamicPred(name:string, predView:View_T<boolean>, valView:View_T<string>):Attr_T
export function DynamicClass<T0>(name:string, view:View_T<T0>, ok:((a?:T0) => boolean)):Attr_T
export function Class(name:string):Attr_T
export function ClassPred(name:string, isSet:boolean):Attr_T
export function DynamicClassPred(name:string, view:View_T<boolean>):Attr_T
export function OnAfterRenderView<T0>(v:View_T<T0>, callback:((a:Element, b:T0) => void)):Attr_T
export function OnAfterRender(callback:((a:Element) => void)):Attr_T
export function HandlerView<T0, T1>(name:string, view:View_T<T0>, callback:((a:Element) => ((a?:T1) => ((a?:T0) => void)))):Attr_T
export function Handler<T0>(name:string, callback:((a:Element) => ((a?:T0) => void))):Attr_T
export function DynamicStyle(name:string, view:View_T<string>):Attr_T
export function DynamicCustom<T0>(set:((a:Element) => ((a?:T0) => void)), view:View_T<T0>):Attr_T
export function Dynamic(name:string, view:View_T<string>):Attr_T
export function AnimatedStyle<T0>(name:string, tr:Trans<T0>, view:View_T<T0>, attr:((a?:T0) => string)):Attr_T
export function Animated<T0>(name:string, tr:Trans<T0>, view:View_T<T0>, attr:((a?:T0) => string)):Attr_T
export function Style(name:string, value:string):Attr_T
