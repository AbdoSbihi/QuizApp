import KeyNotFoundException from "./System.Collections.Generic.KeyNotFoundException.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { ofSeq, sortInPlace } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { append, distinct, unfold } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { length, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import FSharpList from "./Microsoft.FSharp.Collections.FSharpList`1.js"
import { New } from "./WebSharper.Collections.BalancedTree.Tree`1.js"
export function Max(t){
  if(t==null)throw new KeyNotFoundException("New");
  else {
    function m(t_1){
      while(true)
        {
          if(t_1.Right==null)return t_1.Node;
          else t_1=t_1.Right;
        }
    }
    return m(t);
  }
}
export function Min(t){
  if(t==null)throw new KeyNotFoundException("New");
  else {
    function m(t_1){
      while(true)
        {
          if(t_1.Left==null)return t_1.Node;
          else t_1=t_1.Left;
        }
    }
    return m(t);
  }
}
export function TryFind(v, t){
  const x=(Lookup(v, t))[0];
  return x==null?null:Some(x.Node);
}
export function Contains(v, t){
  return!((Lookup(v, t))[0]==null);
}
export function Change(k, f, ot){
  const p=Lookup(k, ot);
  const t=p[0];
  const spine=p[1];
  if(t==null){
    const m=f(null);
    return m==null?ot:Rebuild(spine, Branch(m.$0, null, null));
  }
  else {
    const m_1=f(Some(t.Node));
    if(m_1==null){
      if(t.Right==null)return Rebuild(spine, t.Left);
      else if(t.Left==null)return Rebuild(spine, t.Right);
      else {
        const d=ofSeq(append(Enumerate(false, t.Left), Enumerate(false, t.Right)));
        let _1=Build(d, 0, d.length-1);
        return Rebuild(spine, _1);
      }
    }
    else return Rebuild(spine, Branch(m_1.$0, t.Left, t.Right));
  }
}
export function Add(x, t){
  return Put((_1, _2) => _2, x, t);
}
export function Remove(k, src){
  const p=Lookup(k, src);
  const t=p[0];
  const spine=p[1];
  if(t==null)return src;
  else if(t.Right==null)return Rebuild(spine, t.Left);
  else if(t.Left==null)return Rebuild(spine, t.Right);
  else {
    const d=ofSeq(append(Enumerate(false, t.Left), Enumerate(false, t.Right)));
    let _1=Build(d, 0, d.length-1);
    return Rebuild(spine, _1);
  }
}
export function Put(combine, k, t){
  const p=Lookup(k, t);
  const t_1=p[0];
  return t_1==null?Rebuild(p[1], Branch(k, null, null)):Rebuild(p[1], Branch(combine(t_1.Node, k), t_1.Left, t_1.Right));
}
export function Rebuild(spine, t){
  const h=(x_2) => x_2==null?0:x_2.Height;
  let t_1=t;
  for(let i=0, _1=length(spine)-1;i<=_1;i++){
    const m=get(spine, i);
    if(m[0]){
      const x=m[1];
      const l=m[2];
      if(h(t_1)>h(l)+1){
        if(h(t_1.Left)===h(t_1.Right)+1){
          const m_1=t_1.Left;
          t_1=Branch(m_1.Node, Branch(x, l, m_1.Left), Branch(t_1.Node, m_1.Right, t_1.Right));
        }
        else t_1=Branch(t_1.Node, Branch(x, l, t_1.Left), t_1.Right);
      }
      else t_1=Branch(x, l, t_1);
    }
    else {
      const x_1=m[1];
      const r=m[2];
      if(h(t_1)>h(r)+1){
        if(h(t_1.Right)===h(t_1.Left)+1){
          const m_2=t_1.Right;
          t_1=Branch(m_2.Node, Branch(t_1.Node, t_1.Left, m_2.Left), Branch(x_1, m_2.Right, r));
        }
        else t_1=Branch(t_1.Node, t_1.Left, Branch(x_1, t_1.Right, r));
      }
      else t_1=Branch(x_1, t_1, r);
    }
  }
  return t_1;
}
export function Lookup(k, t){
  let spine=[];
  let t_1=t;
  let loop=true;
  while(loop)
    if(t_1==null)loop=false;
    else {
      const m=Compare(k, t_1.Node);
      if(m===0)loop=false;
      else m===1?(spine.unshift([true, t_1.Node, t_1.Left]),t_1=t_1.Right):(spine.unshift([false, t_1.Node, t_1.Right]),t_1=t_1.Left);
    }
  return[t_1, spine];
}
export function OfSeq(data){
  const a=ofSeq(distinct(data));
  sortInPlace(a);
  return Build(a, 0, a.length-1);
}
export function Build(data, min, max){
  if(max-min+1<=0)return null;
  else {
    const center=(min+max)/2>>0;
    return Branch(get(data, center), Build(data, min, center-1), Build(data, center+1, max));
  }
}
export function Enumerate(flip, t){
  function gen(t_1, spine){
    let t_2;
    while(true)
      {
        if(t_1==null)return spine.$==1?Some([spine.$0[0], [spine.$0[1], spine.$1]]):null;
        else if(flip){
          t_2=t_1;
          t_1=t_2.Right;
          spine=FSharpList.Cons([t_2.Node, t_2.Left], spine);
        }
        else {
          t_2=t_1;
          t_1=t_2.Left;
          spine=FSharpList.Cons([t_2.Node, t_2.Right], spine);
        }
      }
  }
  return unfold((_1) => gen(_1[0], _1[1]), [t, FSharpList.Empty]);
}
export function Branch(node, left, right){
  const a=left==null?0:left.Height;
  const b=right==null?0:right.Height;
  let _1=Compare(a, b)===1?a:b;
  let _2=1+_1;
  return New(node, left, right, _2, 1+(left==null?0:left.Count)+(right==null?0:right.Count));
}
