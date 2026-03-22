import { DocNode } from "./WebSharper.UI.Client.DocNode"
import { View_T } from "./WebSharper.UI.View`1"
import IControlBody from "../WebSharper.StdLib/WebSharper.IControlBody"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Elt from "./WebSharper.UI.Elt"
import { Attr_T } from "./WebSharper.UI.Attr"
import Var from "./WebSharper.UI.Var`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import { CheckedInput_T } from "./WebSharper.UI.Client.CheckedInput`1"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import Object from "../WebSharper.StdLib/System.Object"
export default class Doc extends Object implements IControlBody {
  docNode:DocNode;
  updates:View_T<void>;
  static SvgElementMixed(tagname:string, nodes:IEnumerable<any>):Elt
  static SvgElement(name:string, attr:IEnumerable<Attr_T>, children:IEnumerable<Doc>):Elt
  static ElementMixed(tagname:string, nodes:IEnumerable<any>):Elt
  static ConcatMixed(elts:(any)[]):Doc
  static MixedNodes(nodes:IEnumerable<any>):[IEnumerable<Attr_T>, IEnumerable<Doc>]
  static ToMixedDoc(o):Doc
  static Element(name:string, attr:IEnumerable<Attr_T>, children:IEnumerable<Doc>):Elt
  static Radio<T0>(attrs:IEnumerable<Attr_T>, value:T0, var_1:Var<T0>):Elt
  static LinkView<T0>(caption:string, attrs:IEnumerable<Attr_T>, view:View_T<T0>, action:((a?:T0) => void)):Elt
  static Link(caption:string, attrs:IEnumerable<Attr_T>, action:(() => void)):Elt
  static ButtonView<T0>(caption:string, attrs:IEnumerable<Attr_T>, view:View_T<T0>, action:((a?:T0) => void)):Elt
  static Button(caption:string, attrs:IEnumerable<Attr_T>, action:(() => void)):Elt
  static Clickable(elem:string, action:(() => void)):Element
  static CheckBoxGroup<T0>(attrs:IEnumerable<Attr_T>, item:T0, chk:Var<FSharpList_T<T0>>):Elt
  static CheckBox(attrs:IEnumerable<Attr_T>, chk:Var<boolean>):Elt
  static SelectDynOptional<T0>(attrs:IEnumerable<Attr_T>, noneText:string, show:((a?:T0) => string), vOptions:View_T<FSharpList_T<T0>>, current:Var<FSharpOption<T0>>):Elt
  static SelectOptional<T0>(attrs:IEnumerable<Attr_T>, noneText:string, show:((a?:T0) => string), options:FSharpList_T<T0>, current:Var<FSharpOption<T0>>):Elt
  static SelectMultiple<T0>(attrs:IEnumerable<Attr_T>, show:((a?:T0) => string), options:FSharpList_T<T0>, current:Var<FSharpList_T<T0>>):Elt
  static SelectMultipleDyn<T0>(attrs:IEnumerable<Attr_T>, show:((a?:T0) => string), vOptions:View_T<FSharpList_T<T0>>, current:Var<FSharpList_T<T0>>):Elt
  static Select<T0>(attrs:IEnumerable<Attr_T>, show:((a?:T0) => string), options:FSharpList_T<T0>, current:Var<T0>):Elt
  static SelectDyn<T0>(attrs:IEnumerable<Attr_T>, show:((a?:T0) => string), vOptions:View_T<FSharpList_T<T0>>, current:Var<T0>):Elt
  static SelectMultipleImpl<T0, T1 extends Doc>(attrs:IEnumerable<Attr_T>, optionElements:((a:[FSharpList_T<T0>]) => T1), current:Var<FSharpList_T<T0>>):Elt
  static SelectImpl<T0, T1 extends Doc>(attrs:IEnumerable<Attr_T>, show:((a?:T0) => string), optionElements:((a:[FSharpList_T<T0>]) => T1), current:Var<T0>):Elt
  static InputArea(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static RangeInput(attr:IEnumerable<Attr_T>, var_1:Var<number>):Elt
  static WeekInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static UrlInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static TimeInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static TelInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static SearchInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static MonthInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static FileInput(attr:IEnumerable<Attr_T>, var_1:Var<File[]>):Elt
  static EmailInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static DateTimeLocalInput(attr:IEnumerable<Attr_T>, var_1:Var<number>):Elt
  static DateInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static ColorInput(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static FloatInput(attr:IEnumerable<Attr_T>, var_1:Var<CheckedInput_T<number>>):Elt
  static FloatInputUnchecked(attr:IEnumerable<Attr_T>, var_1:Var<number>):Elt
  static IntInput(attr:IEnumerable<Attr_T>, var_1:Var<CheckedInput_T<number>>):Elt
  static IntInputUnchecked(attr:IEnumerable<Attr_T>, var_1:Var<number>):Elt
  static PasswordBox(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static Input(attr:IEnumerable<Attr_T>, var_1:Var<string>):Elt
  static InputInternal<T0 extends IEnumerable<Attr_T>>(elemTy:string, attr:((a:Element) => T0)):Elt
  static ConvertSeqVarBy<T0, T1, T2>(key:((a?:T0) => T1), render:T2, var_1:Var<FSharpList_T<T0>>):Doc
  static ConvertSeqBy<T0, T1, T2, T3 extends IEnumerable<any>>(key:((a?:T0) => T1), render:T2, view:View_T<T3>):Doc
  static ConvertSeq<T0, T1 extends IEnumerable<any>>(render:((a:View_T<T0>) => Doc), view:View_T<T1>):Doc
  static ConvertBy<T0, T1, T2 extends IEnumerable<any>>(key:((a?:T0) => T1), render:((a?:T0) => Doc), view:View_T<T2>):Doc
  static Convert<T0, T1 extends IEnumerable<any>>(render:((a?:T0) => Doc), view:View_T<T1>):Doc
  static Flatten<T0 extends IEnumerable<Doc>>(view:View_T<T0>):Doc
  static TextView(txt:View_T<string>):Doc
  static RunReplaceById(id:string, tr:Doc):void
  static RunById(id:string, tr:Doc):void
  static Run(parent:Element, doc:Doc):void
  static RunInPlace(childrenOnly:boolean, parent:Element, doc:Doc):void
  static RunPrependById(id:string, doc:Doc):void
  static RunPrepend(parent:Element, doc:Doc):void
  static RunAppendById(id:string, doc:Doc):void
  static RunAppend(parent:Element, doc:Doc):void
  static RunAfterById(id:string, doc:Doc):void
  static RunAfter(ldelim:Node, doc:Doc):void
  static RunBeforeById(id:string, doc:Doc):void
  static RunBefore(rdelim:Node, doc:Doc):void
  static RunBetween(ldelim:Node, rdelim:Node, doc:Doc):void
  static Async(a:((a:AsyncBody<Doc>) => void)):Doc
  static BindView<T0>(f:((a?:T0) => Doc), view:View_T<T0>):Doc
  static EmbedView(view:View_T<Doc>):Doc
  static Verbatim(html:string):Doc
  static StaticProxy(el:Element):Elt
  static TextNode(v:string):Doc
  static get Empty():Doc
  static Concat(xs:IEnumerable<Doc>):Doc
  static Append(a:Doc, b:Doc):Doc
  static Mk(node:DocNode, updates:View_T<void>):Doc
  ReplaceInDom(elt:Node):void
  constructor(docNode:DocNode, updates:View_T<void>)
}
