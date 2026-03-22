import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import $StartupCode_DomUtility from "./$StartupCode_DomUtility.js"
export function ParseHTMLIntoFakeRoot(elem){
  const root=globalThis.document.createElement("div");
  if(!rhtml().test(elem)){
    root.appendChild(globalThis.document.createTextNode(elem));
    return root;
  }
  else {
    const m=rtagName().exec(elem);
    const tag=Equals(m, null)?"":get(m, 1).toLowerCase();
    const w=(wrapMap())[tag];
    const p=w?w:defaultWrap();
    root.innerHTML=p[1]+elem.replace(rxhtmlTag(), "<$1></$2>")+p[2];
    function unwrap(elt, a){
      while(true)
        {
          if(a===0)return elt;
          else {
            const i=a;
            elt=elt.lastChild;
            a=i-1;
          }
        }
    }
    return(((a) => {
      const _1=a;
      return(_2) => unwrap(_1, _2);
    })(root))(p[0]);
  }
}
export function defaultWrap(){
  return $StartupCode_DomUtility.defaultWrap;
}
export function wrapMap(){
  return $StartupCode_DomUtility.wrapMap;
}
export function rhtml(){
  return $StartupCode_DomUtility.rhtml;
}
export function rtagName(){
  return $StartupCode_DomUtility.rtagName;
}
export function rxhtmlTag(){
  return $StartupCode_DomUtility.rxhtmlTag;
}
export function IterSelectorDoc(selector, f){
  const l=globalThis.document.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
export function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
export function ChildrenArray(element){
  const a=[];
  for(let i=0, _1=element.childNodes.length-1;i<=_1;i++)a.push(element.childNodes[i]);
  return a;
}
export function RemoveClass(element, cl){
  let this_1=clsRE(cl);
  let _1=getClass(element).replace(this_1, (_2, _3, _4) => _3==""||_4==""?"":" ");
  setClass(element, _1);
}
export function AddClass(element, cl){
  const c=getClass(element);
  if(c=="")setClass(element, cl);
  else!clsRE(cl).test(c)?setClass(element, c+" "+cl):void 0;
}
export function setClass(element, value){
  if(element instanceof SVGElement)element.setAttribute("class", value);
  else element.className=value;
}
export function getClass(element){
  return element instanceof SVGElement?element.getAttribute("class"):element.className;
}
export function clsRE(cls){
  return new RegExp("(\\s+|^)"+cls+"(?:\\s+"+cls+")*(\\s+|$)", "g");
}
export function InsertAt(parent, pos, node){
  let _1;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _2=Equals(m, null)?null:m;
    _1=pos===_2;
  }
  else _1=false;
  if(!_1)parent.insertBefore(node, pos);
}
export function RemoveNode(parent, el){
  if(el.parentNode===parent)parent.removeChild(el);
}
