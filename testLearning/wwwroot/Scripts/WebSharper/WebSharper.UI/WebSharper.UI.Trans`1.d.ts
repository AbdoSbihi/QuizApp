import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Object from "../WebSharper.StdLib/System.Object"
export default class Trans<T0>extends Object {
  change:((a:T0, b:T0) => {Compute:((a:number) => T0),Duration:number});
  enter:((a:T0) => {Compute:((a:number) => T0),Duration:number});
  exit:((a:T0) => {Compute:((a:number) => T0),Duration:number});
  flags:number;
  Copy(change:FSharpOption<((a?:T0) => ((a?:T0) => {Compute:((a:number) => T0),Duration:number}))>, enter:FSharpOption<((a?:T0) => {Compute:((a:number) => T0),Duration:number})>, exit:FSharpOption<((a?:T0) => {Compute:((a:number) => T0),Duration:number})>, flags:FSharpOption<number>):Trans<T0>
  get TFlags():number
  get TExit():((a?:T0) => {Compute:((a:number) => T0),Duration:number})
  get TEnter():((a?:T0) => {Compute:((a:number) => T0),Duration:number})
  TChange(x:T0, y:T0):{Compute:((a:number) => T0),Duration:number}
  constructor(i:"New_2")
  constructor(i:"New_1", ch:((a:T0, b:T0) => {Compute:((a:number) => T0),Duration:number}))
  constructor(i:"New", ch:((a:T0, b:T0) => {Compute:((a:number) => T0),Duration:number}), enter:((a:T0) => {Compute:((a:number) => T0),Duration:number}), exit:((a:T0) => {Compute:((a:number) => T0),Duration:number}))
  constructor(i:"New_3", change:((a:T0, b:T0) => {Compute:((a:number) => T0),Duration:number}), enter:((a:T0) => {Compute:((a:number) => T0),Duration:number}), exit:((a:T0) => {Compute:((a:number) => T0),Duration:number}), flags:number)
}
