import { ToArray as ToArray_1, Intersect as Intersect_1, Except as Except_1, Filter as Filter_1 } from "./WebSharper.UI.Abbrev.HashSet.js"
import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1.js"
import { iter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
export function NodeSet(Item){
  return{$:0, $0:Item};
}
export function ToArray(a){
  return ToArray_1(a.$0);
}
export function get_Empty(){
  return NodeSet(new HashSet("New_3"));
}
export function IsEmpty(a){
  return a.$0.Count===0;
}
export function Intersect(a, a_1){
  return NodeSet(Intersect_1(a.$0, a_1.$0));
}
export function Except(a, a_1){
  return NodeSet(Except_1(a.$0, a_1.$0));
}
export function FindAll(doc){
  const q=[];
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!=null&&_1.$==0){
            const b=_1.$1;
            const a=_1.$0;
            recF(0, a);
            _1=b;
          }
          else if(_1!=null&&_1.$==1){
            const el=_1.$0;
            _1=el;
            recI=1;
          }
          else if(_1!=null&&_1.$==2){
            const em=_1.$0;
            _1=em.Current;
          }
          else if(_1!=null&&_1.$==6){
            const x=_1.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_1);
          _1=_1.Children;
          recI=0;
          break;
      }
  }
  function loop(node){
    return recF(0, node);
  }
  function loopEN(el){
    return recF(1, el);
  }
  loop(doc);
  return NodeSet(new HashSet("New_2", q));
}
export function Filter(f, a){
  return NodeSet(Filter_1(f, a.$0));
}
