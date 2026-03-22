import Doc from "./WebSharper.UI.Doc.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { Const, Map2Unit, Get } from "./WebSharper.UI.View.js"
import { AppendDoc, TreeDoc, ElemDoc } from "./WebSharper.UI.Client.DocNode.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { InsertDoc, InsertBeforeDelim, CreateElemNode } from "./WebSharper.UI.Client.Docs.js"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode.js"
import { Empty, Updates } from "./WebSharper.UI.Client.Attrs.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Int, Id } from "./WebSharper.UI.Abbrev.Fresh.js"
import Updates_1 from "./WebSharper.UI.Updates.js"
import { map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { TreeReduce } from "./WebSharper.UI.Array.js"
import { get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { DeleteEmptyFields, GetOptional, SetOptional, Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
import EltUpdater from "./WebSharper.UI.Client.EltUpdater.js"
import Var from "./WebSharper.UI.Var.js"
let _c=Lazy((_i) => {
  Force(Doc);
  return class Elt extends Doc {
    static {
      _c=_i(this);
    }
    docNode_1;
    updates_1;
    elt;
    rvUpdates;
    SetStyle(style, value){
      this.elt.style[style]=value;
    }
    HasClass(cls){
      return(new RegExp("(\\s|^)"+cls+"(\\s|$)")).test(this.elt.className);
    }
    GetProperty(name){
      return this.elt[name];
    }
    SetProperty(name, value){
      this.elt[name]=value;
    }
    RemoveAttribute(name){
      this.elt.removeAttribute(name);
    }
    HasAttribute(name){
      return this.elt.hasAttribute(name);
    }
    GetAttribute(name){
      return this.elt.getAttribute(name);
    }
    SetAttribute(name, value){
      this.elt.setAttribute(name, value);
    }
    SetText(v){
      const m=this.docNode_1;
      if(m!=null&&m.$==1)m.$0.Children=null;
      else m!=null&&m.$==6?(m.$0.Els=[],this.ClearHoles()):FailWith("Invalid docNode in Elt");
      this.rvUpdates.Value=Const();
      this.elt.textContent=v;
    }
    GetText(){
      return this.elt.textContent;
    }
    SetValue(v){
      this.elt.value=v;
    }
    GetValue(){
      return this.elt.value;
    }
    Id(){
      return this.elt.id;
    }
    Html(){
      return this.elt.outerHTML;
    }
    Clear(){
      const m=this.docNode_1;
      if(m!=null&&m.$==1)m.$0.Children=null;
      else m!=null&&m.$==6?(m.$0.Els=[],this.ClearHoles()):FailWith("Invalid docNode in Elt");
      this.rvUpdates.Value=Const();
      while(this.elt.hasChildNodes())
        this.elt.removeChild(this.elt.firstChild);
    }
    Prepend(doc){
      const m=this.docNode_1;
      if(m!=null&&m.$==1){
        const e=m.$0;
        e.Children=AppendDoc(doc.docNode, e.Children);
        const m_1=this.elt.firstChild;
        let _1=Equals(m_1, null)?null:m_1;
        InsertDoc(this.elt, doc.docNode, _1);
      }
      else if(m!=null&&m.$==6){
        m.$0;
        const after=this.elt.insertBefore(globalThis.document.createTextNode(""), this.elt.firstChild);
        const before=InsertBeforeDelim(after, doc.docNode);
        this.AddHole(DocElemNode.New(Empty(this.elt), doc.docNode, Some([before, after]), this.elt, Int(), null));
      }
      else FailWith("Invalid docNode in Elt");
      this.rvUpdates.Value=Map2Unit(this.rvUpdates.c, doc.updates);
    }
    Append(doc){
      const m=this.docNode_1;
      if(m!=null&&m.$==1){
        const e=m.$0;
        e.Children=AppendDoc(e.Children, doc.docNode);
        InsertDoc(this.elt, doc.docNode, null);
      }
      else if(m!=null&&m.$==6){
        m.$0;
        const after=this.elt.appendChild(globalThis.document.createTextNode(""));
        const before=InsertBeforeDelim(after, doc.docNode);
        this.AddHole(DocElemNode.New(Empty(this.elt), doc.docNode, Some([before, after]), this.elt, Int(), null));
      }
      else FailWith("Invalid docNode in Elt");
      this.rvUpdates.Value=Map2Unit(this.rvUpdates.c, doc.updates);
    }
    static TreeNode(tree, updates){
      const rvUpdates=Updates_1.Create(updates);
      let _1=TreeDoc(tree);
      const x=map((_4) => Updates(_4[1]), tree.Attrs);
      let _2=TreeReduce(Const(), Map2Unit, x);
      let _3=Map2Unit(_2, rvUpdates.v);
      return new Elt(_1, _3, get(tree.Els, 0), rvUpdates);
    }
    static New(el, attr, children){
      const node=CreateElemNode(el, attr, children.docNode);
      const rvUpdates=Updates_1.Create(children.updates);
      return new Elt(ElemDoc(node), Map2Unit(Updates(node.Attr), rvUpdates.v), el, rvUpdates);
    }
    ToUpdater(){
      let _1;
      const m=this.docNode_1;
      if(m!=null&&m.$==1){
        let _2=[this.elt];
        let _3=[[this.elt, m.$0.Attr]];
        const _4=Some(this.elt);
        let _5={
          Els:_2, 
          Dirty:true, 
          Holes:[], 
          Attrs:_3, 
          Render:null?null.$0:void 0, 
          El:_4?_4.$0:void 0
        };
        _1=DeleteEmptyFields(_5, ["Render", "El"]);
      }
      else _1=m!=null&&m.$==6?m.$0:FailWith("Invalid docNode in Elt");
      return new EltUpdater(_1, this.updates_1, this.elt, this.rvUpdates, Var.Create_1([]));
    }
    OnAfterRenderView(view, cb){
      const id=Id();
      this.Append(Doc.BindView((x) => {
        this.elt[id]=x;
        return Doc.Empty;
      }, view));
      return this.OnAfterRenderu0027((e) => {
        cb(e, e[id]);
      });
    }
    OnAfterRender(cb){
      return this.OnAfterRenderu0027(cb);
    }
    OnAfterRenderu0027(cb){
      let _1;
      let _2;
      const m=this.docNode_1;
      if(m!=null&&m.$==1){
        const e=m.$0;
        const m_1=GetOptional(e.Render);
        if(m_1!=null&&m_1.$==1){
          const f=m_1.$0;
          _1=Some((el) => {
            f(el);
            cb(el);
          });
        }
        else _1=Some(cb);
        SetOptional(e, "Render", _1);
      }
      else if(m!=null&&m.$==6){
        const e_1=m.$0;
        const m_2=GetOptional(e_1.Render);
        if(m_2!=null&&m_2.$==1){
          const f_1=m_2.$0;
          _2=Some((el) => {
            f_1(el);
            cb(el);
          });
        }
        else _2=Some(cb);
        SetOptional(e_1, "Render", _2);
      }
      else FailWith("Invalid docNode in Elt");
      return this;
    }
    onView(ev, view, cb){
      const cb_1=cb(this.elt);
      this.elt.addEventListener(ev, (ev_1) => Get(cb_1(ev_1), view), false);
      return this;
    }
    on(ev, cb){
      this.elt.addEventListener(ev, (ev_1) => cb(this.elt, ev_1), false);
      return this;
    }
    ClearHoles(){
      const m=this.docNode_1;
      if(m!=null&&m.$==6)m.$0.Holes=[];
    }
    AddHole(h){
      const m=this.docNode_1;
      if(m!=null&&m.$==6)m.$0.Holes.push(h);
    }
    constructor(docNode, updates, elt, rvUpdates){
      super(docNode, updates);
      this.docNode_1=docNode;
      this.updates_1=updates;
      this.elt=elt;
      this.rvUpdates=rvUpdates;
    }
  };
});
export default _c;
