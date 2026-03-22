import { CheckedInput_T } from "./WebSharper.UI.Client.CheckedInput`1"
import Var from "./WebSharper.UI.Var`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { View_T } from "./WebSharper.UI.View`1"
import { Attr_T } from "./WebSharper.UI.Attr"
export default class Client {
  static FloatApplyChecked:((a:Var<CheckedInput_T<number>>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<CheckedInput_T<number>>) => void)), View_T<FSharpOption<CheckedInput_T<number>>>]);
  static FloatGetChecked:((a:Element) => FSharpOption<CheckedInput_T<number>>);
  static FloatSetChecked:((a:Element) => ((a:CheckedInput_T<number>) => void));
  static FloatApplyUnchecked:((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>]);
  static FloatGetUnchecked:((a:Element) => FSharpOption<number>);
  static FloatSetUnchecked:((a:Element) => ((a:number) => void));
  static IntApplyChecked:((a:Var<CheckedInput_T<number>>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<CheckedInput_T<number>>) => void)), View_T<FSharpOption<CheckedInput_T<number>>>]);
  static IntGetChecked:((a:Element) => FSharpOption<CheckedInput_T<number>>);
  static IntSetChecked:((a:Element) => ((a:CheckedInput_T<number>) => void));
  static IntApplyUnchecked:((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>]);
  static IntGetUnchecked:((a:Element) => FSharpOption<number>);
  static IntSetUnchecked:((a:Element) => ((a:number) => void));
  static FileApplyUnchecked:((a:Var<File[]>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<File[]>) => void)), View_T<FSharpOption<File[]>>]);
  static FileGetUnchecked:((a:Element) => FSharpOption<File[]>);
  static FileSetUnchecked:((a:Element) => ((a:File[]) => void));
  static DateTimeApplyUnchecked:((a:Var<number>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<number>) => void)), View_T<FSharpOption<number>>]);
  static DateTimeGetUnchecked:((a:Element) => FSharpOption<number>);
  static DateTimeSetUnchecked:((a:Element) => ((a:number) => void));
  static StringListApply:((a:Var<string[]>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<string[]>) => void)), View_T<FSharpOption<string[]>>]);
  static StringListGet:((a:Element) => FSharpOption<string[]>);
  static StringListSet:((a:Element) => ((a:string[]) => void));
  static StringApply:((a:Var<string>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<string>) => void)), View_T<FSharpOption<string>>]);
  static StringGet:((a:Element) => FSharpOption<string>);
  static StringSet:((a:Element) => ((a:string) => void));
  static BoolCheckedApply:((a:Var<boolean>) => [((a:Element) => void), ((a:Element) => ((a:FSharpOption<boolean>) => void)), View_T<FSharpOption<boolean>>]);
  static EmptyAttr:Attr_T;
}
