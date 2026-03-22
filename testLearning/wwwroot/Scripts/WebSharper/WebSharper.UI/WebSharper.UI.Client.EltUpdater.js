import Elt from "./WebSharper.UI.Elt.js"
import { filter, map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
import { TreeDoc } from "./WebSharper.UI.Client.DocNode.js"
import { Const, Map2Unit, BindInner } from "./WebSharper.UI.View.js"
import { TreeReduce } from "./WebSharper.UI.Array.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Elt);
  return class EltUpdater extends Elt {
    static {
      _c=_i(this);
    }
    treeNode;
    holeUpdates;
    origHoles;
    RemoveAllUpdated(){
      this.treeNode.Holes=this.origHoles;
      this.holeUpdates.Set([]);
    }
    RemoveUpdated(doc){
      const m=doc.docNode;
      if(m!=null&&m.$==1){
        const k=m.$0.ElKey;
        this.treeNode.Holes=filter((h) => h.ElKey!==k, this.treeNode.Holes);
        this.holeUpdates.Set(filter((_1) => _1[0]!==k, this.holeUpdates.Get()));
      }
      else FailWith("DocUpdater.RemoveUpdated expects a single element node");
    }
    AddUpdated(doc){
      const m=doc.docNode;
      if(m!=null&&m.$==1){
        const e=m.$0;
        this.treeNode.Holes=this.treeNode.Holes.concat([e]);
        const hu=this.holeUpdates.Get();
        hu.push([e.ElKey, doc.updates]);
        this.holeUpdates.Set(hu);
      }
      else FailWith("DocUpdater.AddUpdated expects a single element node");
    }
    ClearHoles(){
      this.origHoles=[];
      this.treeNode.Holes=[];
      this.holeUpdates.Set([]);
    }
    AddHole(h){
      this.origHoles.push(h);
      this.treeNode.Holes=this.treeNode.Holes.concat([h]);
    }
    constructor(treeNode, updates, elt, rvUpdates, holeUpdates){
      let _1=TreeDoc(treeNode);
      const x=holeUpdates.View;
      const m=(t) => t[1];
      const f=(a) => map(m, a);
      const d=Const();
      const g=(a) => TreeReduce(d, Map2Unit, a);
      let _2=BindInner((x_1) => g(f(x_1)), x);
      let _3=Map2Unit(updates, _2);
      super(_1, _3, elt, rvUpdates);
      this.treeNode=treeNode;
      this.holeUpdates=holeUpdates;
      this.origHoles=this.treeNode.Holes;
    }
  };
});
export default _c;
