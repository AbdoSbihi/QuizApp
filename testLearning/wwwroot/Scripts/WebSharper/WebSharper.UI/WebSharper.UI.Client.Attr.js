import { BoolCheckedApply, FloatApplyChecked, FloatApplyUnchecked, IntApplyChecked, IntApplyUnchecked, FileApplyUnchecked, DateTimeApplyUnchecked, StringListApply, StringApply, ApplyValue } from "./WebSharper.UI.Client.BindVar.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { AppendTree, Dynamic as Dynamic_1, Animated as Animated_1 } from "./WebSharper.UI.Client.Attrs.js"
import Attr from "./WebSharper.UI.Attr.js"
import { Map2, Map, Get } from "./WebSharper.UI.View.js"
import { AddClass, RemoveClass } from "./WebSharper.UI.DomUtility.js"
import { Id } from "./WebSharper.UI.Abbrev.Fresh.js"
export function Checked(var_1){
  return ValueWith(BoolCheckedApply(), var_1);
}
export function FloatValue(var_1){
  return ValueWith(FloatApplyChecked(), var_1);
}
export function FloatValueUnchecked(var_1){
  return ValueWith(FloatApplyUnchecked(), var_1);
}
export function IntValue(var_1){
  return ValueWith(IntApplyChecked(), var_1);
}
export function IntValueUnchecked(var_1){
  return ValueWith(IntApplyUnchecked(), var_1);
}
export function FileValue(var_1){
  return ValueWith(FileApplyUnchecked(), var_1);
}
export function DateTimeValue(var_1){
  return ValueWith(DateTimeApplyUnchecked(), var_1);
}
export function StringListValue(var_1){
  return ValueWith(StringListApply(), var_1);
}
export function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
export function ContentEditableHtml(var_1){
  const x=CustomVar(var_1, (e) =>(v) => {
    e.innerHTML=v;
  }, (e) => Some(e.innerHTML));
  return AppendTree(Attr.Create("contenteditable", "true"), x);
}
export function ContentEditableText(var_1){
  const x=CustomVar(var_1, (e) =>(v) => {
    e.textContent=v;
  }, (e) => Some(e.textContent));
  return AppendTree(Attr.Create("contenteditable", "true"), x);
}
export function CustomValue(var_1, toString, fromString){
  return CustomVar(var_1, (e) =>(v) => {
    e.value=toString(v);
  }, (e) => fromString(e.value));
}
export function CustomVar(var_1, set, get){
  return ValueWith((v) => ApplyValue(get, set, v), var_1);
}
export function ValueWith(bind, var_1){
  const p=bind(var_1);
  return AppendTree(Attr.A3(p[0]), DynamicCustom(p[1], p[2]));
}
export function DynamicProp(name, view){
  return Dynamic_1(view, (el) =>(v) => {
    el[name]=v;
  });
}
export function Prop(name, value){
  return Attr.A3((el) => {
    el[name]=value;
  });
}
export function DynamicBool(name, boolview){
  return Dynamic_1(boolview, (_1) =>(_2) => _2?_1.setAttribute(name, ""):_1.removeAttribute(name));
}
export function DynamicPred(name, predView, valView){
  return Dynamic_1(Map2((_1, _2) =>[_1, _2], predView, valView), (_1) =>(_2) => _2[0]?_1.setAttribute(name, _2[1]):_1.removeAttribute(name));
}
export function DynamicClass(name, view, ok){
  return DynamicClassPred(name, Map(ok, view));
}
export function Class(name){
  return ClassPred(name, true);
}
export function ClassPred(name, isSet){
  return Attr.A3((el) => {
    if(isSet)AddClass(el, name);
    else RemoveClass(el, name);
  });
}
export function DynamicClassPred(name, view){
  return Dynamic_1(view, (el) =>(v) => v?AddClass(el, name):RemoveClass(el, name));
}
export function OnAfterRenderView(v, callback){
  const id=Id();
  return AppendTree(OnAfterRender((el) => {
    callback(el, el[id]);
  }), DynamicCustom((el) =>(x) => {
    el[id]=x;
  }, v));
}
export function OnAfterRender(callback){
  return Attr.A4(callback);
}
export function HandlerView(name, view, callback){
  return Attr.A3((el) => {
    const callback_1=callback(el);
    el.addEventListener(name, (ev) => Get(callback_1(ev), view), false);
  });
}
export function Handler(name, callback){
  return Attr.A3((el) => {
    el.addEventListener(name, (d) =>(callback(el))(d), false);
  });
}
export function DynamicStyle(name, view){
  return Dynamic_1(view, (el) =>(v) => el.style.setProperty(name, v));
}
export function DynamicCustom(set, view){
  return Dynamic_1(view, set);
}
export function Dynamic(name, view){
  return Dynamic_1(view, (el) =>(v) => el.setAttribute(name, v));
}
export function AnimatedStyle(name, tr, view, attr){
  return Animated_1(tr, view, (el) =>(v) => {
    const value=attr(v);
    return el.style.setProperty(name, value);
  });
}
export function Animated(name, tr, view, attr){
  return Animated_1(tr, view, (el) =>(v) => el.setAttribute(name, attr(v)));
}
export function Style(name, value){
  return Attr.A3((el) => {
    el.style.setProperty(name, value);
  });
}
