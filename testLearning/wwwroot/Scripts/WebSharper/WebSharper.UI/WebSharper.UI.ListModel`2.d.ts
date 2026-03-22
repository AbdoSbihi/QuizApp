import Var from "./WebSharper.UI.Var`1"
import Storage from "./WebSharper.UI.Storage`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import { View_T } from "./WebSharper.UI.View`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Snap from "./WebSharper.UI.Snap`1"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
import IEnumerator from "../WebSharper.StdLib/System.Collections.IEnumerator"
import IEnumerator_1 from "../WebSharper.StdLib/System.Collections.Generic.IEnumerator`1"
import Object from "../WebSharper.StdLib/System.Object"
import IEnumerable_1 from "../WebSharper.StdLib/System.Collections.IEnumerable"
export default class ListModel<T0, T1>extends Object implements IEnumerable<T1>, IEnumerable_1 {
  key:((a:T1) => T0);
  u0076ar:Var<(T1)[]>;
  storage:Storage<T1>;
  v:View_T<IEnumerable<T1>>;
  it:Dictionary<T0, Snap<FSharpOption<T1>>>;
  Wrap<T2>(extract:((a?:T2) => T1), wrap:((a?:T1) => T2), update:((a:T2, b:T1) => T2)):ListModel<T0, T2>
  MapLens<T2>(f:((a:T0, b:Var<T1>) => T2)):View_T<IEnumerable<T2>>
  Lens():Var<T1>
  Lens(key?:T0):Var<T1>
  LensInto<T2>(get:((a?:T1) => T2), update:((a:T1, b:T2) => T1), key:T0):Var<T2>
  LensIntou0027<T2>(get:((a?:T1) => T2), update:((a:T1, b:T2) => T1), key:T0, view:View_T<T2>):Var<T2>
  get LengthAsView():View_T<number>
  get Length():number
  Clear():void
  UpdateBy(fn:((a?:T1) => FSharpOption<T1>), key:T0):void
  UpdateAll(fn:((a?:T1) => FSharpOption<T1>)):void
  FindByKeyAsView():View_T<T1>
  FindByKeyAsView(key?:T0):View_T<T1>
  TryFindByKeyAsView():View_T<FSharpOption<T1>>
  TryFindByKeyAsView(key?:T0):View_T<FSharpOption<T1>>
  TryFindByKey():FSharpOption<T1>
  TryFindByKey(key?:T0):FSharpOption<T1>
  FindByKey():T1
  FindByKey(key?:T0):T1
  TryFindAsView(pred:((a?:T1) => boolean)):View_T<FSharpOption<T1>>
  FindAsView(pred:((a?:T1) => boolean)):View_T<T1>
  TryFind(pred:((a?:T1) => boolean)):FSharpOption<T1>
  Find(pred:((a?:T1) => boolean)):T1
  ContainsKeyAsView():View_T<boolean>
  ContainsKeyAsView(key?:T0):View_T<boolean>
  ContainsKey():boolean
  ContainsKey(key?:T0):boolean
  Set(lst:IEnumerable<T1>):void
  Iter(fn:((a?:T1) => void)):void
  RemoveByKey():void
  RemoveByKey(key?:T0):void
  RemoveBy(f:((a?:T1) => boolean)):void
  Remove():void
  Remove(item?:T1):void
  PrependMany(items:IEnumerable<T1>):void
  Prepend():void
  Prepend(item?:T1):void
  AppendMany(items:IEnumerable<T1>):void
  Append():void
  Append(item?:T1):void
  ObsoleteAll():void
  ObsoleteKey():void
  ObsoleteKey(key?:T0):void
  GetEnumerator0():IEnumerator
  GetEnumerator():IEnumerator_1<T1>
  constructor(i:"New_1", key:((a:T1) => T0))
  constructor(i:"New_2", key:((a:T1) => T0), init:IEnumerable<T1>)
  constructor(i:"New", key:((a:T1) => T0), storage:Storage<T1>)
  constructor(i:"New_3", key:((a:T1) => T0), var_1:Var<(T1)[]>, storage:Storage<T1>)
}
