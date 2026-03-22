import Object from "../WebSharper.StdLib/System.Object.js"
import Attr from "./WebSharper.UI.Attr.js"
import Elt from "./WebSharper.UI.Elt.js"
import { map, append, mapi, delay, collect, findIndex } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { MarkResizable, Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.StdLib/System.IDisposable.js"
import { Map, MapSeqCachedViewBy, MapSeqCachedView, MapSeqCachedBy, MapSeqCached, Sink, MapAsync, Const, Bind, Map2Unit } from "./WebSharper.UI.View.js"
import Var from "./WebSharper.UI.Var`1.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { DynamicProp, HandlerView, Checked, DynamicCustom, OnAfterRender, Value, IntValueUnchecked, FileValue, DateTimeValue, FloatValue, FloatValueUnchecked, IntValue } from "./WebSharper.UI.Client.Attr.js"
import { append as append_1, ofArray, ofSeq, exists, filter, map as map_1, mapi as mapi_1, contains } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { AppendTree, EmptyAttr } from "./WebSharper.UI.Client.Attrs.js"
import Var_1 from "./WebSharper.UI.Var.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { range, FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { CreateTextNode, UpdateTextNode, LinkElement, CreateRunState, PerformAnimatedUpdate, PerformSyncUpdate, LinkPrevElement, CreateDelimitedRunState, CreateEmbedNode, UpdateEmbedNode, CreateElemNode } from "./WebSharper.UI.Client.Docs.js"
import { TextDoc, EmbedDoc, TextNodeDoc, ElemDoc, AppendDoc } from "./WebSharper.UI.Client.DocNode.js"
import { get_UseAnimations } from "./WebSharper.UI.Anim.js"
import { BatchUpdatesEnabled } from "./WebSharper.UI.Client.Settings.js"
import { StartProcessor } from "./WebSharper.UI.Abbrev.Mailbox.js"
import { MapTreeReduce, TreeReduce, ofSeqNonCopying } from "./WebSharper.UI.Array.js"
import { ChildrenArray, ParseHTMLIntoFakeRoot } from "./WebSharper.UI.DomUtility.js"
let _c=Lazy((_i) => class Doc extends Object {
  static {
    _c=_i(this);
  }
  docNode;
  updates;
  static SvgElementMixed(tagname, nodes){
    const p=_c.MixedNodes(nodes);
    return _c.SvgElement(tagname, p[0], p[1]);
  }
  static SvgElement(name, attr, children){
    const a=Attr.Concat(attr);
    const c=_c.Concat(children);
    return Elt.New(globalThis.document.createElementNS("http://www.w3.org/2000/svg", name), a, c);
  }
  static ElementMixed(tagname, nodes){
    const p=_c.MixedNodes(nodes);
    return _c.Element(tagname, p[0], p[1]);
  }
  static ConcatMixed(elts){
    return _c.Concat(map(_c.ToMixedDoc, elts));
  }
  static MixedNodes(nodes){
    const attrs=MarkResizable([]);
    const children=MarkResizable([]);
    const e=Get(nodes);
    try {
      while(e.MoveNext())
        {
          const n=e.Current;
          if(n instanceof Attr)attrs.push(n);
          else children.push(_c.ToMixedDoc(n));
        }
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
    return[attrs, children];
  }
  static ToMixedDoc(o){
    return o instanceof Doc?o:typeof o=="string"?_c.TextNode(o):o instanceof Element?_c.StaticProxy(o):typeof o=="function"?_c.EmbedView(Map(_c.ToMixedDoc, o)):o instanceof Var?_c.EmbedView(Map(_c.ToMixedDoc, o.View)):Equals(o, null)?_c.Empty:_c.TextNode(String(o));
  }
  static Element(name, attr, children){
    const a=Attr.Concat(attr);
    const c=_c.Concat(children);
    return Elt.New(globalThis.document.createElement(name), a, c);
  }
  static Radio(attrs, value, var_1){
    const el=globalThis.document.createElement("input");
    el.addEventListener("click", () => var_1.Set(value), false);
    const valAttr=DynamicProp("checked", Map((x) => Equals(x, value), var_1.View));
    const _____=Attr.Create;
    return Elt.New(el, Attr.Concat(append_1(ofArray([_____("type", "radio"), _____("name", var_1.Id), valAttr]), ofSeq(attrs))), _c.Empty);
  }
  static LinkView(caption, attrs, view, action){
    const attrs_1=Attr.Concat(append([HandlerView("click", view, () =>() => action), Attr.Create("href", "#")], attrs));
    return Elt.New(globalThis.document.createElement("a"), attrs_1, _c.TextNode(caption));
  }
  static Link(caption, attrs, action){
    const x=Attr.Concat(attrs);
    const attrs_1=AppendTree(Attr.Create("href", "#"), x);
    return Elt.New(_c.Clickable("a", action), attrs_1, _c.TextNode(caption));
  }
  static ButtonView(caption, attrs, view, action){
    const attrs_1=Attr.Concat(append([HandlerView("click", view, () =>() => action)], attrs));
    return Elt.New(globalThis.document.createElement("button"), attrs_1, _c.TextNode(caption));
  }
  static Button(caption, attrs, action){
    const attrs_1=Attr.Concat(attrs);
    return Elt.New(_c.Clickable("button", action), attrs_1, _c.TextNode(caption));
  }
  static Clickable(elem, action){
    const el=globalThis.document.createElement(elem);
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      return action();
    }, false);
    return el;
  }
  static CheckBoxGroup(attrs, item, chk){
    const p=(y) => Equals(item, y);
    let _1=Var_1.Lens(chk, (l) => exists(p, l), (_2, _3) => _3?exists((y) => Equals(item, y), _2)?_2:FSharpList.Cons(item, _2):filter((y) =>!Equals(item, y), _2));
    return _c.CheckBox(attrs, _1);
  }
  static CheckBox(attrs, chk){
    return _c.InputInternal("input", () => append(attrs, [Attr.Create("type", "checkbox"), Checked(chk)]));
  }
  static SelectDynOptional(attrs, noneText, show, vOptions, current){
    return _c.SelectDyn(attrs, (a) => a!=null&&a.$==1?show(a.$0):noneText, Map((options) => FSharpList.Cons(null, map_1((V) => Some(V), options)), vOptions), current);
  }
  static SelectOptional(attrs, noneText, show, options, current){
    return _c.Select(attrs, (a) => a!=null&&a.$==1?show(a.$0):noneText, FSharpList.Cons(null, map_1((V) => Some(V), options)), current);
  }
  static SelectMultiple(attrs, show, options, current){
    return _c.SelectMultipleImpl(attrs, (rOptions) => {
      rOptions[0]=options;
      return _c.Concat(mapi_1((_1, _2) => _c.Element("option", ofArray([Attr.Create("value", String(_1))]), ofArray([_c.TextNode(show(_2))])), options));
    }, current);
  }
  static SelectMultipleDyn(attrs, show, vOptions, current){
    return _c.SelectMultipleImpl(attrs, (options) => _c.Convert((_1) => _c.Element("option", ofArray([Attr.Create("value", String(_1[0]))]), ofArray([_c.TextNode(show(_1[1]))])), Map((l) => {
      options[0]=l;
      return mapi((_1, _2) =>[_1, _2], l);
    }, vOptions)), current);
  }
  static Select(attrs, show, options, current){
    return _c.SelectImpl(attrs, show, (rOptions) => {
      rOptions[0]=options;
      return _c.Concat(mapi_1((_1, _2) => _c.Element("option", ofArray([Attr.Create("value", String(_1))]), ofArray([_c.TextNode(show(_2))])), options));
    }, current);
  }
  static SelectDyn(attrs, show, vOptions, current){
    return _c.SelectImpl(attrs, show, (options) => _c.Convert((_1) => _c.Element("option", ofArray([Attr.Create("value", String(_1[0]))]), ofArray([_c.TextNode(show(_1[1]))])), Map((l) => {
      options[0]=l;
      return mapi((_1, _2) =>[_1, _2], l);
    }, vOptions)), current);
  }
  static SelectMultipleImpl(attrs, optionElements, current){
    const options=[FSharpList.Empty];
    const setSelectedItem=(el_1, item) => {
      const options_=el_1.options;
      for(let i=0, _2=options_.length-1;i<=_2;i++)((() => {
        const option=options_.item(i);
        option.selected=contains(options[0].get_Item(option.index), item);
      })());
    };
    const el=globalThis.document.createElement("select");
    const selectedItemAttr=DynamicCustom((_2) =>(_3) => setSelectedItem(_2, _3), current.View);
    el.addEventListener("change", () => current.UpdateMaybe((x_2) => {
      const selectedOptions=el.selectedOptions;
      const y=ofSeq(delay(() => collect((i) => {
        const option=selectedOptions.item(i);
        return[options[0].get_Item(option.index)];
      }, range(0, selectedOptions.length-1))));
      return Equals(x_2, y)?null:Some(y);
    }), false);
    const x=AppendTree(selectedItemAttr, Attr.Concat(attrs));
    const x_1=AppendTree(OnAfterRender((el_1) => {
      setSelectedItem(el_1, current.Get());
    }), x);
    let _1=AppendTree(Attr.Create("multiple", ""), x_1);
    return Elt.New(el, _1, optionElements(options));
  }
  static SelectImpl(attrs, show, optionElements, current){
    const options=[FSharpList.Empty];
    const setSelectedItem=(el_1, item) => {
      el_1.selectedIndex=findIndex((y) => Equals(item, y), options[0]);
    };
    const el=globalThis.document.createElement("select");
    const selectedItemAttr=DynamicCustom((_2) =>(_3) => setSelectedItem(_2, _3), current.View);
    el.addEventListener("change", () => current.UpdateMaybe((x_1) => {
      const i=el.selectedIndex;
      const y=options[0].get_Item(i);
      return Equals(x_1, y)?null:Some(y);
    }), false);
    const x=AppendTree(selectedItemAttr, Attr.Concat(attrs));
    let _1=AppendTree(OnAfterRender((el_1) => {
      setSelectedItem(el_1, current.Get());
    }), x);
    return Elt.New(el, _1, optionElements(options));
  }
  static InputArea(attr, var_1){
    return _c.InputInternal("textarea", () => append(attr, [Value(var_1)]));
  }
  static RangeInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [IntValueUnchecked(var_1), Attr.Create("type", "range")]));
  }
  static WeekInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "week")]));
  }
  static UrlInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "url")]));
  }
  static TimeInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "time")]));
  }
  static TelInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "tel")]));
  }
  static SearchInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "search")]));
  }
  static MonthInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "month")]));
  }
  static FileInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [FileValue(var_1), Attr.Create("type", "file")]));
  }
  static EmailInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "email")]));
  }
  static DateTimeLocalInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [DateTimeValue(var_1), Attr.Create("type", "datetime-local")]));
  }
  static DateInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "date")]));
  }
  static ColorInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "color")]));
  }
  static FloatInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [FloatValue(var_1), Attr.Create("type", "number")]));
  }
  static FloatInputUnchecked(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [var_1.Get()===0?Attr.Create("value", "0"):EmptyAttr(), FloatValueUnchecked(var_1), Attr.Create("type", "number")]));
  }
  static IntInput(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [IntValue(var_1), Attr.Create("type", "number")]));
  }
  static IntInputUnchecked(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [var_1.Get()===0?Attr.Create("value", "0"):EmptyAttr(), IntValueUnchecked(var_1), Attr.Create("type", "number")]));
  }
  static PasswordBox(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1), Attr.Create("type", "password")]));
  }
  static Input(attr, var_1){
    return _c.InputInternal("input", () => append(attr, [Value(var_1)]));
  }
  static InputInternal(elemTy, attr){
    const el=globalThis.document.createElement(elemTy);
    return Elt.New(el, Attr.Concat(attr(el)), _c.Empty);
  }
  static ConvertSeqVarBy(key, render, var_1){
    return _c.Flatten(Var_1.MapLens(key, render, var_1));
  }
  static ConvertSeqBy(key, render, view){
    const a=render;
    let _1=MapSeqCachedViewBy(key, (_2, _3) =>(a(_2))(_3), view);
    return _c.Flatten(_1);
  }
  static ConvertSeq(render, view){
    return _c.Flatten(MapSeqCachedView(render, view));
  }
  static ConvertBy(key, render, view){
    return _c.Flatten(MapSeqCachedBy(key, render, view));
  }
  static Convert(render, view){
    return _c.Flatten(MapSeqCached(render, view));
  }
  static Flatten(view){
    return _c.EmbedView(Map((x) => _c.Concat(x), view));
  }
  static TextView(txt){
    const node=CreateTextNode();
    return _c.Mk(TextDoc(node), Map((t) => {
      UpdateTextNode(node, t);
    }, txt));
  }
  static RunReplaceById(id, tr){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else tr.ReplaceInDom(m);
  }
  static RunById(id, tr){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c.Run(m, tr);
  }
  static Run(parent, doc){
    LinkElement(parent, doc.docNode);
    _c.RunInPlace(false, parent, doc);
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static RunPrependById(id, doc){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c.RunPrepend(m, doc);
  }
  static RunPrepend(parent, doc){
    const rdelim=globalThis.document.createTextNode("");
    parent.insertBefore(rdelim, parent.firstChild);
    _c.RunBefore(rdelim, doc);
  }
  static RunAppendById(id, doc){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c.RunAppend(m, doc);
  }
  static RunAppend(parent, doc){
    const rdelim=globalThis.document.createTextNode("");
    parent.appendChild(rdelim);
    _c.RunBefore(rdelim, doc);
  }
  static RunAfterById(id, doc){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c.RunAfter(m, doc);
  }
  static RunAfter(ldelim, doc){
    const rdelim=globalThis.document.createTextNode("");
    ldelim.parentNode.insertBefore(rdelim, ldelim.nextSibling);
    _c.RunBetween(ldelim, rdelim, doc);
  }
  static RunBeforeById(id, doc){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else _c.RunBefore(m, doc);
  }
  static RunBefore(rdelim, doc){
    const ldelim=globalThis.document.createTextNode("");
    rdelim.parentNode.insertBefore(ldelim, rdelim);
    _c.RunBetween(ldelim, rdelim, doc);
  }
  static RunBetween(ldelim, rdelim, doc){
    LinkPrevElement(rdelim, doc.docNode);
    const st=CreateDelimitedRunState(ldelim, rdelim, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(false, st, doc.docNode)):() => {
      PerformSyncUpdate(false, st, doc.docNode);
    }, doc.updates);
  }
  static Async(a){
    return _c.EmbedView(MapAsync((x) => x, Const(a)));
  }
  static BindView(f, view){
    return _c.EmbedView(Map(f, view));
  }
  static EmbedView(view){
    const node=CreateEmbedNode();
    return _c.Mk(EmbedDoc(node), Map(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static Verbatim(html){
    return _c.Mk(MapTreeReduce((n) => Equals(n.nodeType, Node.TEXT_NODE)?TextNodeDoc(n):ElemDoc(CreateElemNode(n, EmptyAttr(), null)), null, (_1, _2) => AppendDoc(_1, _2), ChildrenArray(ParseHTMLIntoFakeRoot(html))), Const());
  }
  static StaticProxy(el){
    return Elt.New(el, EmptyAttr(), _c.Empty);
  }
  static TextNode(v){
    return _c.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static get Empty(){
    return _c.Mk(null, Const());
  }
  static Concat(xs){
    return TreeReduce(_c.Empty, _c.Append, ofSeqNonCopying(xs));
  }
  static Append(a, b){
    return _c.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
  }
  static Mk(node, updates){
    return new Doc(node, updates);
  }
  ReplaceInDom(elt){
    const rdelim=globalThis.document.createTextNode("");
    elt.parentNode.replaceChild(rdelim, elt);
    _c.RunBefore(rdelim, this);
  }
  constructor(docNode, updates){
    super();
    this.docNode=docNode;
    this.updates=updates;
  }
});
export default _c;
