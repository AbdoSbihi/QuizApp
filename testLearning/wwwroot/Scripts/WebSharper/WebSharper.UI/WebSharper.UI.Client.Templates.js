import Doc from "./WebSharper.UI.Doc.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import $StartupCode_Templates from "./$StartupCode_Templates.js"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2.js"
import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1.js"
import { head, append } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { convertTextNode, failNotLoaded, fillTextHole, removeHolesExcept, fillInstanceAttrs, mapHoles, fill, convertAttrs } from "./WebSharper.UI.Client.Templates.Prepare.js"
import { string } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js"
import { ParseHTMLIntoFakeRoot, ChildrenArray, IterSelectorDoc, IterSelector } from "./WebSharper.UI.DomUtility.js"
import { SplitChars, StartsWith, concat } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { get, set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import Elt from "./WebSharper.UI.Elt.js"
import { TreeDoc } from "./WebSharper.UI.Client.DocNode.js"
import { Get } from "../WebSharper.StdLib/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.StdLib/System.IDisposable.js"
import { Insert, Updates, Empty } from "./WebSharper.UI.Client.Attrs.js"
import { GetOptional, CreateFuncWithArgs, DeleteEmptyFields } from "../WebSharper.Core.JavaScript/Runtime.js"
import Elt_1 from "./WebSharper.UI.TemplateHoleModule.Elt.js"
import Text from "./WebSharper.UI.TemplateHoleModule.Text.js"
import { LinkElement, InsertBeforeDelim } from "./WebSharper.UI.Client.Docs.js"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode.js"
import { Int } from "./WebSharper.UI.Abbrev.Fresh.js"
import { tryFindIndex, choose, iter, foldBack } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import Attribute from "./WebSharper.UI.TemplateHoleModule.Attribute.js"
import Attr from "./WebSharper.UI.Attr.js"
import Event from "./WebSharper.UI.TemplateHoleModule.Event.js"
import { Handler, OnAfterRender, Dynamic } from "./WebSharper.UI.Client.Attr.js"
import EventQ from "./WebSharper.UI.TemplateHoleModule.EventQ.js"
import AfterRender from "./WebSharper.UI.TemplateHoleModule.AfterRender.js"
import AfterRenderQ from "./WebSharper.UI.TemplateHoleModule.AfterRenderQ.js"
import VarDomElement from "./WebSharper.UI.TemplateHoleModule.VarDomElement.js"
import { Sink, Map, Map3, Sequence, Map2, Const, Map2Unit } from "./WebSharper.UI.View.js"
import { Choice1Of2 } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpChoice`2.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { TreeReduce } from "./WebSharper.UI.Array.js"
export function GetOrLoadTemplate(baseName, name, fakeroot, fillWith){
  LoadLocalTemplates("");
  PrepareTemplate(baseName, name, fakeroot);
  return NamedTemplate(baseName, name, fillWith);
}
export function NamedTemplate(baseName, name, fillWith){
  let o;
  const m=(o=null,[LoadedTemplateFile(baseName).TryGetValue(name==null?"":name.$0, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  return m[0]?ChildrenTemplate(m[1].cloneNode(true), fillWith):(console.warn("Local template doesn't exist", name),Doc.Empty);
}
export function RunFullDocTemplate(fillWith){
  if(RenderedFullDocTemplate()==null){
    LoadLocalTemplates("");
    PrepareTemplateStrict("", null, globalThis.document.body, null);
    const x=ChildrenTemplate(globalThis.document.body, fillWith);
    const p=globalThis.document.body;
    (((d_1) => {
      Doc.RunInPlace(true, p, d_1);
    })(x));
    const d=x;
    set_RenderedFullDocTemplate(Some(d));
    return d;
  }
  else return RenderedFullDocTemplate().$0;
}
export function RenderedFullDocTemplate(){
  return $StartupCode_Templates.RenderedFullDocTemplate;
}
export function set_RenderedFullDocTemplate(_1){
  $StartupCode_Templates.RenderedFullDocTemplate=_1;
}
export function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
}
export function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new Dictionary("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _1=wsTemplates.length-1;i<=_1;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _2=wsChildrenTemplates.length-1;i_1<=_2;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _3=html5TemplateBasedTemplates.length-1;i_2<=_3;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _4=html5TemplateBasedTemplates_1.length-1;i_3<=_4;i_3++){
    const node_3=html5TemplateBasedTemplates_1[i_3];
    rawTpls.set_Item(node_3.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(node_3));
  }
  const instantiated=new HashSet("New_3");
  function prepareTemplate(name_2){
    if(!loadedTpls.ContainsKey(name_2)){
      let o;
      const m=(o=null,[rawTpls.TryGetValue(name_2, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        instantiated.SAdd(name_2);
        rawTpls.RemoveKey(name_2);
        PrepareTemplateStrict(baseName, Some(name_2), m[1], Some(prepareTemplate));
      }
      else console.warn(instantiated.Contains(name_2)?"Encountered loop when instantiating "+name_2:"Local template does not exist: "+name_2);
    }
  }
  while(rawTpls.count>0)
    prepareTemplate(head(rawTpls.Keys));
}
export function PrepareTemplate(baseName, name, fakeroot){
  if(!LoadedTemplateFile(baseName).ContainsKey(name==null?"":name.$0))PrepareTemplateStrict(baseName, name, fakeroot(), null);
}
export function PrepareSingleTemplate(baseName, name, el){
  const root=FakeRootSingle(el);
  return(p) => {
    PrepareTemplateStrict(baseName, name, root, p);
  };
}
export function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new HashSet("New_3");
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!==null){
            const next=_1.nextSibling;
            if(Equals(_1.nodeType, Node.TEXT_NODE))convertTextNode(_1);
            else if(Equals(_1.nodeType, Node.ELEMENT_NODE))convertElement(_1);
            _1=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_1.nodeName, Some(3), null).toLowerCase();
          const m=name_2.indexOf(".");
          const p=m===-1?[baseName, name_2]:[string(name_2, null, Some(m-1)), string(name_2, Some(m+1), null)];
          const instName=p[1];
          const instBaseName=p[0];
          if(instBaseName!=""&&!LoadedTemplates().ContainsKey(instBaseName))return failNotLoaded(instName);
          else {
            if(instBaseName==""&&prepareLocalTemplate!=null)prepareLocalTemplate.$0(instName);
            const d=LoadedTemplates().Item(instBaseName);
            if(!d.ContainsKey(instName))return failNotLoaded(instName);
            else {
              const t=d.Item(instName);
              const instance=t.cloneNode(true);
              const usedHoles=new HashSet("New_3");
              const mappings=new Dictionary("New_5");
              const attrs=_1.attributes;
              for(let i=0, _4=attrs.length-1;i<=_4;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _2=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _2);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _5=_1.childNodes.length-1;i_1<=_5;i_1++){
                const n=_1.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_1.childNodes.length===1&&Equals(_1.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _1.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(i_2) => usedHoles_1.SAdd(i_2))(usedHoles);
                let _3=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _3(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _6=_1.childNodes.length-1;i_2<=_6;i_2++){
                  const n_1=_1.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _1.parentNode, _1);
              _1.parentNode.removeChild(_1);
              return;
            }
          }
          break;
      }
  }
  function fillDocHole(instance, fillWith){
    const name_2=fillWith.nodeName.toLowerCase();
    const fillHole=(p, n) => {
      if(name_2=="title"&&fillWith.hasChildNodes()){
        const parsed=ParseHTMLIntoFakeRoot(fillWith.textContent);
        fillWith.removeChild(fillWith.firstChild);
        while(parsed.hasChildNodes())
          fillWith.appendChild(parsed.firstChild);
      }
      convertElement(fillWith);
      return fill(fillWith, p, n);
    };
    foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
      const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
      for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _1=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _1);
      }
    });
    const m=instance.querySelector("[ws-hole="+name_2+"]");
    if(Equals(m, null)){
      const m_1=instance.querySelector("[ws-replace="+name_2+"]");
      if(Equals(m_1, null)){
        const m_2=instance.querySelector("slot[name="+name_2+"]");
        return instance.tagName.toLowerCase()=="template"?(fillHole(m_2.parentNode, m_2),void m_2.parentNode.removeChild(m_2)):null;
      }
      else {
        fillHole(m_1.parentNode, m_1);
        m_1.parentNode.removeChild(m_1);
        return;
      }
    }
    else {
      while(m.hasChildNodes())
        m.removeChild(m.lastChild);
      m.removeAttribute("ws-hole");
      return(((a) => {
        const _1=a;
        return(_2) => fillHole(_1, _2);
      })(m))(null);
    }
  }
  function convertElement(el){
    if(!el.hasAttribute("ws-preserve"))if(StartsWith(el.nodeName.toLowerCase(), "ws-"))convertInstantiation(el);
    else {
      convertAttrs(el);
      convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n){
    return recF(0, n);
  }
  function convertInstantiation(el){
    return recF(1, el);
  }
  function convertNestedTemplates(el){
    while(true)
      {
        const m=el.querySelector("[ws-template]");
        if(Equals(m, null)){
          const m_1=el.querySelector("[ws-children-template]");
          if(Equals(m_1, null)){
            const idTemplates=el.querySelectorAll("template[id]");
            for(let i=1, _1=idTemplates.length-1;i<=_1;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _2=nameTemplates.length-1;i_1<=_2;i_1++){
              const n_1=nameTemplates[i_1];
              if(processedHTML5Templates.Contains(n_1)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n_1.getAttribute("name")), n_1, null);
                processedHTML5Templates.SAdd(n_1);
              }
            }
            return null;
          }
          else {
            const name_2=m_1.getAttribute("ws-children-template");
            m_1.removeAttribute("ws-children-template");
            PrepareTemplateStrict(baseName, Some(name_2), m_1, null);
            el=el;
          }
        }
        else {
          const name_3=m.getAttribute("ws-template");
          (PrepareSingleTemplate(baseName, Some(name_3), m))(null);
          el=el;
        }
      }
  }
  const name_1=(name==null?"":name.$0).toLowerCase();
  LoadedTemplateFile(baseName).set_Item(name_1, fakeroot);
  if(fakeroot.hasChildNodes()){
    convertNestedTemplates(fakeroot);
    convertNodeAndSiblings(fakeroot.firstChild);
  }
}
export function FakeRootSingle(el){
  el.removeAttribute("ws-template");
  const m=el.getAttribute("ws-replace");
  if(m==null){ }
  else {
    el.removeAttribute("ws-replace");
    const m_1=el.parentNode;
    if(Equals(m_1, null)){ }
    else {
      const n=globalThis.document.createElement(el.tagName);
      n.setAttribute("ws-replace", m);
      m_1.replaceChild(n, el);
    }
  }
  const fakeroot=globalThis.document.createElement("div");
  fakeroot.appendChild(el);
  return fakeroot;
}
export function FakeRootFromHTMLTemplate(parent){
  const fakeroot=globalThis.document.createElement("div");
  const content=parent.content;
  for(let i=0, _1=content.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
export function FakeRoot(parent){
  const fakeroot=globalThis.document.createElement("div");
  while(parent.hasChildNodes())
    fakeroot.appendChild(parent.firstChild);
  return fakeroot;
}
export function ChildrenTemplate(el, fillWith){
  let _1;
  const p=InlineTemplate(el, append(fillWith, GlobalHoles().Values));
  const updates=p[1];
  const docTreeNode=p[0];
  const m=docTreeNode.Els;
  return!Equals(m, null)&&m.length===1&&(get(m, 0)instanceof Node&&(Equals(get(m, 0).nodeType, Node.ELEMENT_NODE)&&(_1=get(m, 0),true)))?Elt.TreeNode(docTreeNode, updates):Doc.Mk(TreeDoc(docTreeNode), updates);
}
export function InlineTemplate(el, fillWith){
  let _1;
  const holes=[];
  const updates=[];
  const attrs=[];
  const afterRender=[];
  const fw=new Dictionary("New_5");
  const e=Get(fillWith);
  try {
    while(e.MoveNext())
      {
        const x=e.Current;
        fw.set_Item(x.Name, x);
      }
  }
  finally {
    const _2=e;
    if(typeof _2=="object"&&isIDisposable(_2))e.Dispose();
  }
  let els=ChildrenArray(el);
  const addAttr=(el_1, attr) => {
    const attr_1=Insert(el_1, attr);
    updates.push(Updates(attr_1));
    attrs.push([el_1, attr_1]);
    const m=GetOptional(attr_1.OnAfterRender);
    if(m==null)return null;
    else {
      const f=m.$0;
      afterRender.push(() => {
        f(el_1);
      });
      return;
    }
  };
  const tryGetAsDoc=(name) => {
    let o;
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof Elt_1)return Some(th.Value);
      else if(th instanceof Text)return Some(Doc.TextNode(th.Value));
      else {
        const o_1=th.ForTextView();
        return o_1==null?null:Some(Doc.TextView(o_1.$0));
      }
    }
    else return null;
  };
  foreachNotPreserved(el, "[ws-hole]", (p) => {
    const name=p.getAttribute("ws-hole");
    p.removeAttribute("ws-hole");
    while(p.hasChildNodes())
      p.removeChild(p.lastChild);
    const m=tryGetAsDoc(name);
    if(m!=null&&m.$==1){
      const doc=m.$0;
      LinkElement(p, doc.docNode);
      holes.push(DocElemNode.New(Empty(p), doc.docNode, null, p, Int(), null));
      updates.push(doc.updates);
    }
  });
  foreachNotPreserved(el, "[ws-replace]", (e_1) => {
    const m=tryGetAsDoc(e_1.getAttribute("ws-replace"));
    if(m!=null&&m.$==1){
      const doc=m.$0;
      const p=e_1.parentNode;
      const after=globalThis.document.createTextNode("");
      p.replaceChild(after, e_1);
      const before=InsertBeforeDelim(after, doc.docNode);
      els=ChildrenArray(el);
      const o=tryFindIndex((y) => e_1===y, els);
      if(o==null){ }
      else set(els, o.$0, doc.docNode);
      holes.push(DocElemNode.New(Empty(p), doc.docNode, Some([before, after]), p, Int(), null));
      updates.push(doc.updates);
    }
  });
  let isDefaultSlotProcessed=false;
  foreachNotPreserved(el, "slot", (p) => {
    const name=p.getAttribute("name");
    const name_1=name==""||name==null?"default":name.toLowerCase();
    if(isDefaultSlotProcessed&&name_1=="default"||!Equals(el.parentElement, null)){ }
    else {
      while(p.hasChildNodes())
        p.removeChild(p.lastChild);
      if(name_1=="default")isDefaultSlotProcessed=true;
      const m=tryGetAsDoc(name_1);
      if(m!=null&&m.$==1){
        const doc=m.$0;
        LinkElement(p, doc.docNode);
        holes.push(DocElemNode.New(Empty(p), doc.docNode, null, p, Int(), null));
        updates.push(doc.updates);
      }
    }
  });
  foreachNotPreserved(el, "[ws-attr]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-attr");
    e_1.removeAttribute("ws-attr");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof Attribute)addAttr(e_1, th.Value);
      else console.warn("Attribute hole filled with non-attribute data", name);
    }
  });
  foreachNotPreserved(el, "[ws-on]", (e_1) => {
    addAttr(e_1, Attr.Concat(choose((x_1) => {
      let o;
      const a=SplitChars(x_1, [":"], 1);
      const m=(o=null,[fw.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        return th instanceof Event?Some(Handler(get(a, 0), th.Value)):th instanceof EventQ?Some(Attr.HandlerImpl(get(a, 0), th.Value)):(console.warn("Event hole on"+get(a, 0)+" filled with non-event data", get(a, 1)),null);
      }
      else return null;
    }, SplitChars(e_1.getAttribute("ws-on"), [" "], 1))));
    e_1.removeAttribute("ws-on");
  });
  foreachNotPreserved(el, "[ws-onafterrender]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-onafterrender");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0]){
      const th=m[1];
      if(th instanceof AfterRender){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender(th.Value));
      }
      else if(th instanceof AfterRenderQ){
        e_1.removeAttribute("ws-onafterrender");
        addAttr(e_1, OnAfterRender(th.Value));
      }
      else console.warn("onafterrender hole filled with non-onafterrender data", name);
    }
  });
  foreachNotPreserved(el, "[ws-var]", (e_1) => {
    let o;
    const name=e_1.getAttribute("ws-var");
    e_1.removeAttribute("ws-var");
    const m=(o=null,[fw.TryGetValue(name, {get:() => o, set:(v) => {
      o=v;
    }}), o]);
    if(m[0])m[1].AddAttribute((_8) =>(_9) => addAttr(_8, _9), e_1);
  });
  const wsdomHandling=() => {
    foreachNotPreservedwsDOM("[ws-dom]", (e_1) => {
      let o;
      let toWatch;
      let r;
      const m=(o=null,[fw.TryGetValue(e_1.getAttribute("ws-dom").toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        const th=m[1];
        if(th instanceof VarDomElement){
          const var_1=th.Value;
          e_1.removeAttribute("ws-dom");
          toWatch=e_1;
          const mo=new MutationObserver((_8, mo_1) => {
            iter((mr) => {
              mr.removedNodes.forEach(CreateFuncWithArgs((_9) => _9[0]===toWatch&&mr.addedNodes.length!==1?(var_1.SetFinal(null),mo_1.disconnect()):null), null);
            }, _8);
          });
          if(e_1.parentElement!==null)mo.observe(e_1.parentElement, (r={},r.childList=true,r));
          var_1.Set(Some(e_1));
          Sink((nel) => {
            if(nel!=null&&nel.$==1){
              const nel_1=nel.$0;
              if(toWatch===nel_1){ }
              else {
                let ps=[nel_1];
                toWatch.replaceWith.apply(toWatch, ps);
                toWatch=nel_1;
              }
            }
            else {
              toWatch.remove();
              mo.disconnect();
            }
          }, var_1.View);
        }
      }
    });
  };
  foreachNotPreserved(el, "[ws-attr-holes]", (e_1) => {
    const re=new RegExp(TextHoleRE(), "g");
    const holeAttrs=SplitChars(e_1.getAttribute("ws-attr-holes"), [" "], 1);
    e_1.removeAttribute("ws-attr-holes");
    for(let i=0, _8=holeAttrs.length-1;i<=_8;i++)((() => {
      let _9;
      const attrName=get(holeAttrs, i);
      const s=e_1.getAttribute(attrName);
      let m=null;
      let lastIndex=0;
      const res=[];
      while(m=re.exec(s),m!==null)
        {
          const textBefore=string(s, Some(lastIndex), Some(re.lastIndex-get(m, 0).length-1));
          lastIndex=re.lastIndex;
          res.push([textBefore, get(m, 1)]);
        }
      const finalText=string(s, Some(lastIndex), null);
      re.lastIndex=0;
      const value=foldBack((_10, _11) =>(((t) => {
        const textBefore_1=t[0];
        const holeName=t[1];
        return(t_1) => {
          let o;
          const textAfter=t_1[0];
          const views=t_1[1];
          const m_1=(o=null,[fw.TryGetValue(holeName, {get:() => o, set:(v) => {
            o=v;
          }}), o]);
          const holeContent=m_1[0]?m_1[1].AsChoiceView:Choice1Of2("");
          return holeContent.$==1?[textBefore_1, FSharpList.Cons(textAfter==""?holeContent.$0:Map((s_5) => s_5+textAfter, holeContent.$0), views)]:[textBefore_1+holeContent.$0+textAfter, views];
        };
      })(_10))(_11), res, [finalText, FSharpList.Empty]);
      if(value[1].$==1){
        if(value[1].$1.$==1){
          if(value[1].$1.$1.$==1){
            if(value[1].$1.$1.$1.$==0){
              const s_1=value[0];
              _9=Dynamic(attrName, Map3((_10, _11, _12) => s_1+_10+_11+_12, value[1].$0, value[1].$1.$0, value[1].$1.$1.$0));
            }
            else {
              const s_2=value[0];
              _9=Dynamic(attrName, Map((vs) => s_2+concat("", vs), Sequence(value[1])));
            }
          }
          else {
            const s_3=value[0];
            _9=Dynamic(attrName, Map2((_10, _11) => s_3+_10+_11, value[1].$0, value[1].$1.$0));
          }
        }
        else if(value[0]=="")_9=Dynamic(attrName, value[1].$0);
        else {
          const s_4=value[0];
          _9=Dynamic(attrName, Map((v) => s_4+v, value[1].$0));
        }
      }
      else _9=Attr.Create(attrName, value[0]);
      return addAttr(e_1, _9);
    })());
  });
  let _3=els;
  const _4=afterRender.length==0?Some(() => {
    wsdomHandling();
  }):Some((el_1) => {
    wsdomHandling();
    iter((f) => {
      f(el_1);
    }, afterRender);
  });
  const _5=!Equals(els, null)&&els.length===1&&(get(els, 0)instanceof Node&&(get(els, 0)instanceof Element&&(_1=get(els, 0),true)))?Some(_1):null;
  let _6={
    Els:_3, 
    Dirty:true, 
    Holes:holes, 
    Attrs:attrs, 
    Render:_4?_4.$0:void 0, 
    El:_5?_5.$0:void 0
  };
  let _7=DeleteEmptyFields(_6, ["Render", "El"]);
  return[_7, TreeReduce(Const(), Map2Unit, updates)];
}
export function foreachNotPreservedwsDOM(selector, f){
  IterSelectorDoc(selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
export function foreachNotPreserved(root, selector, f){
  IterSelector(root, selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
export function TextHoleRE(){
  return $StartupCode_Templates.TextHoleRE;
}
export function GlobalHoles(){
  return $StartupCode_Templates.GlobalHoles;
}
export function set_GlobalHoles(_1){
  $StartupCode_Templates.GlobalHoles=_1;
}
export function LocalTemplatesLoaded(){
  return $StartupCode_Templates.LocalTemplatesLoaded;
}
export function set_LocalTemplatesLoaded(_1){
  $StartupCode_Templates.LocalTemplatesLoaded=_1;
}
export function LoadedTemplateFile(name){
  let o;
  const m=(o=null,[LoadedTemplates().TryGetValue(name, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  if(m[0])return m[1];
  else {
    const d=new Dictionary("New_5");
    LoadedTemplates().set_Item(name, d);
    return d;
  }
}
export function LoadedTemplates(){
  return $StartupCode_Templates.LoadedTemplates;
}
