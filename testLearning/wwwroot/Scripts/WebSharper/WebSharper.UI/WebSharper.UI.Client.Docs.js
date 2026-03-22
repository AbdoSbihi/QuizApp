import { FindAll, ToArray, Except, Filter, Intersect, get_Empty } from "./WebSharper.UI.Client.Docs.NodeSet.js"
import { get_UseAnimations, Play, Append, Concat } from "./WebSharper.UI.Anim.js"
import { Delay, Bind, Return, FromContinuations } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import { BatchUpdatesEnabled } from "./WebSharper.UI.Client.Settings.js"
import { map, iter, exists, foldBack } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { GetEnterAnim, HasEnterAnim, HasChangeAnim, GetChangeAnim, GetExitAnim, HasExitAnim, EmptyAttr, Insert, Sync as Sync_1 } from "./WebSharper.UI.Client.Attrs.js"
import { New } from "./WebSharper.UI.Client.Docs.RunState.js"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Int } from "./WebSharper.UI.Abbrev.Fresh.js"
import { GetOptional, SetOptional } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Iter, Except as Except_1, DocChildren, Children } from "./WebSharper.UI.Client.Docs.DomNodes.js"
import { RemoveNode, InsertAt } from "./WebSharper.UI.DomUtility.js"
export function UpdateTextNode(n, t){
  n.Value=t;
  n.Dirty=true;
}
export function CreateTextNode(){
  return{
    Text:globalThis.document.createTextNode(""), 
    Dirty:false, 
    Value:""
  };
}
export function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
export function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
export function PerformSyncUpdate(childrenOnly, st, doc){
  const cur=FindAll(doc);
  SyncElemNode(childrenOnly, st.Top);
  st.PreviousNodes=cur;
}
export function PerformAnimatedUpdate(childrenOnly, st, doc){
  return get_UseAnimations()?Delay(() => {
    const cur=FindAll(doc);
    const change=ComputeChangeAnim(st, cur);
    const enter=ComputeEnterAnim(st, cur);
    return Bind(Play(Append(change, ComputeExitAnim(st, cur))), () => Bind(SyncElemNodesNextFrame(childrenOnly, st), () => Bind(Play(enter), () => {
      st.PreviousNodes=cur;
      return Return(null);
    })));
  }):SyncElemNodesNextFrame(childrenOnly, st);
}
export function SyncElemNodesNextFrame(childrenOnly, st){
  if(BatchUpdatesEnabled()){
    const c=(ok) => {
      requestAnimationFrame(() => {
        SyncElemNode(childrenOnly, st.Top);
        ok();
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
  else {
    SyncElemNode(childrenOnly, st.Top);
    return Return(null);
  }
}
export function ComputeEnterAnim(st, cur){
  return Concat(map((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
export function ComputeChangeAnim(st, cur){
  const f=(n) => HasChangeAnim(n.Attr);
  const relevant=(a) => Filter(f, a);
  return Concat(map((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
}
export function ComputeExitAnim(st, cur){
  return Concat(map((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
export function CreateDelimitedRunState(ldelim, rdelim, doc){
  return New(get_Empty(), CreateDelimitedElemNode(ldelim, rdelim, EmptyAttr(), doc));
}
export function CreateRunState(parent, doc){
  return New(get_Empty(), CreateElemNode(parent, EmptyAttr(), doc));
}
export function CreateDelimitedElemNode(ldelim, rdelim, attr, children){
  const el=ldelim.parentNode;
  LinkPrevElement(rdelim, children);
  const attr_1=Insert(el, attr);
  return DocElemNode.New(attr_1, children, Some([ldelim, rdelim]), el, Int(), GetOptional(attr_1.OnAfterRender));
}
export function CreateElemNode(el, attr, children){
  LinkElement(el, children);
  const attr_1=Insert(el, attr);
  return DocElemNode.New(attr_1, children, null, el, Int(), GetOptional(attr_1.OnAfterRender));
}
export function SyncElemNode(childrenOnly, el){
  !childrenOnly?SyncElement(el):void 0;
  Sync(el.Children);
  AfterRender(el);
}
export function Sync(doc){
  while(true)
    {
      if(doc!=null&&doc.$==1)return SyncElemNode(false, doc.$0);
      else if(doc!=null&&doc.$==2){
        const n=doc.$0;
        doc=n.Current;
      }
      else if(doc==null)return null;
      else if(doc!=null&&doc.$==5)return null;
      else if(doc!=null&&doc.$==4){
        const d=doc.$0;
        return d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null;
      }
      else if(doc!=null&&doc.$==6){
        const t=doc.$0;
        iter((h) => {
          SyncElemNode(false, h);
        }, t.Holes);
        iter((t_1) => {
          Sync_1(t_1[0], t_1[1]);
        }, t.Attrs);
        return AfterRender(t);
      }
      else {
        const b=doc.$1;
        const a=doc.$0;
        Sync(a);
        doc=b;
      }
    }
}
export function AfterRender(el){
  const m=GetOptional(el.Render);
  if(m!=null&&m.$==1){
    m.$0(el.El);
    SetOptional(el, "Render", null);
  }
}
export function InsertBeforeDelim(afterDelim, doc){
  const p=afterDelim.parentNode;
  const before=globalThis.document.createTextNode("");
  p.insertBefore(before, afterDelim);
  LinkPrevElement(afterDelim, doc);
  return before;
}
export function LinkPrevElement(el, children){
  InsertDoc(el.parentNode, children, el);
}
export function LinkElement(el, children){
  InsertDoc(el, children, null);
}
export function SyncElement(el){
  function hasDirtyChildren(el_1){
    function dirty(doc){
      while(true)
        {
          if(doc!=null&&doc.$==0){
            const b=doc.$1;
            const a=doc.$0;
            if(dirty(a))return true;
            else doc=b;
          }
          else if(doc!=null&&doc.$==2){
            const d=doc.$0;
            if(d.Dirty)return true;
            else doc=d.Current;
          }
          else if(doc!=null&&doc.$==6){
            const t=doc.$0;
            return t.Dirty||exists(hasDirtyChildren, t.Holes);
          }
          else return false;
        }
    }
    return dirty(el_1.Children);
  }
  Sync_1(el.El, el.Attr);
  if(hasDirtyChildren(el))DoSyncElement(el);
}
export function DoSyncElement(el){
  const parent=el.El;
  function ins(doc, pos){
    while(true)
      {
        if(doc!=null&&doc.$==1)return doc.$0.El;
        else if(doc!=null&&doc.$==2){
          const d=doc.$0;
          if(d.Dirty){
            d.Dirty=false;
            return InsertDoc(parent, d.Current, pos);
          }
          else doc=d.Current;
        }
        else if(doc==null)return pos;
        else if(doc!=null&&doc.$==4)return doc.$0.Text;
        else if(doc!=null&&doc.$==5)return doc.$0;
        else if(doc!=null&&doc.$==6){
          const t=doc.$0;
          if(t.Dirty)t.Dirty=false;
          return foldBack((_3, _4) => _3==null||_3.constructor===Object?ins(_3, _4):_3, t.Els, pos);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          doc=a;
          pos=ins(b, pos);
        }
      }
  }
  const p=el.El;
  Iter((e) => {
    RemoveNode(p, e);
  }, Except_1(DocChildren(el), Children(el.El, GetOptional(el.Delimiters))));
  let _1=el.Children;
  const m=GetOptional(el.Delimiters);
  let _2=m!=null&&m.$==1?m.$0[1]:null;
  ins(_1, _2);
}
export function InsertDoc(parent, doc, pos){
  while(true)
    {
      if(doc!=null&&doc.$==1)return InsertNode(parent, doc.$0.El, pos);
      else if(doc!=null&&doc.$==2){
        const d=doc.$0;
        d.Dirty=false;
        doc=d.Current;
      }
      else if(doc==null)return pos;
      else if(doc!=null&&doc.$==4)return InsertNode(parent, doc.$0.Text, pos);
      else if(doc!=null&&doc.$==5)return InsertNode(parent, doc.$0, pos);
      else if(doc!=null&&doc.$==6)return foldBack((_1, _2) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_1))(_2), doc.$0.Els, pos);
      else {
        const b=doc.$1;
        const a=doc.$0;
        doc=a;
        pos=InsertDoc(parent, b, pos);
      }
    }
}
export function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
}
