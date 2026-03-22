import Flow from "./WebSharper.UI.Flow`1.js"
import Var from "./WebSharper.UI.Var.js"
import FlowState from "./WebSharper.UI.FlowState.js"
import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
import { ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { Create } from "./WebSharper.UI.FlowPage.js"
import Doc from "./WebSharper.UI.Doc.js"
import { install, tryBack, markState, markPrev } from "./WebSharper.UI.FlowRouting.js"
import { length, get } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Get } from "./WebSharper.UI.View.js"
export function EndRestartable(f){
  return new Flow("New_1", (st) =>() => st.End(f({restart:() => {
    st.Restart();
  }})));
}
export function End(doc){
  return new Flow("New_1", (st) =>() => st.End(doc));
}
export function EmbedWithCancel(cancel, fl){
  let renderFirst=() => { };
  const var_1=Var.Create_1(0);
  const st=FlowState.New(0, var_1, MarkResizable(ofSeq(ofArray([Create(Doc.Empty)]))), null, true, () => {
    renderFirst();
  });
  st.Id=install(st.Navigator);
  let action=null;
  const cancelledAction={restart:() => {
    st.EndedOn=null;
    (fl.render(st))(action);
  }};
  action={
    back:() => {
      if(!tryBack(st.Id))st.UpdatePage((i) => i>1?i-1:i);
    }, 
    cancel:() => {
      st.Cancel(cancel(cancelledAction));
    }, 
    next:() => { }
  };
  renderFirst=() => {
    (fl.render(st))(action);
    markState();
  };
  var_1.Set(0);
  st.RenderFirst();
  return st.Embed();
}
export function Embed(fl){
  let renderFirst=() => { };
  const var_1=Var.Create_1(0);
  const st=FlowState.New(0, var_1, MarkResizable(ofSeq(ofArray([Create(Doc.Empty)]))), null, true, () => {
    renderFirst();
  });
  st.Id=install(st.Navigator);
  const action={
    back:() => {
      if(!tryBack(st.Id))st.UpdatePage((i) => i>1?i-1:i);
    }, 
    cancel:() => { }, 
    next:() => { }
  };
  renderFirst=() => {
    (fl.render(st))(action);
    markState();
  };
  var_1.Set(0);
  st.RenderFirst();
  return st.Embed();
}
export function Return(x){
  return new Flow("New_1", () =>(actions) => actions.next(x));
}
export function View(f){
  return new Flow("New_1", (st) =>(actions) => {
    const resv=Var.Create_1(void 0);
    const viewActions={
      back:() => {
        actions.back();
      }, 
      cancel:() => {
        actions.cancel();
      }, 
      next:(res) => {
        resv.Set(res);
        actions.next(resv.View);
      }
    };
    return(f.render(st))(viewActions);
  });
}
export function Bind(m, k){
  return new Flow("New_1", (st) =>(actions) => {
    const outerActions={
      back:() => {
        actions.back();
      }, 
      cancel:() => {
        actions.cancel();
      }, 
      next:(res) => {
        length(st.Pages)<=st.Index.Get()+1?(k(res).render(st))(actions):st.UpdatePage((i) => i+1);
        markPrev(st.Id);
      }
    };
    return(m.render(st))(outerActions);
  });
}
export function ValidateVar(pred, x){
  return new Flow("New_1", (st) =>(actions) => {
    const validatedActions={
      back:() => {
        actions.back();
      }, 
      cancel:() => {
        actions.cancel();
      }, 
      next:(resv) => {
        const p=get(st.Pages, st.Index.Get());
        p.GoNext=(cont) => {
          if(pred(resv.Get()))cont();
        };
        p.GoNext(() => {
          actions.next(resv);
        });
      }
    };
    return(x.render(st))(validatedActions);
  });
}
export function ValidateView(pred, x){
  return new Flow("New_1", (st) =>(actions) => {
    const validatedActions={
      back:() => {
        actions.back();
      }, 
      cancel:() => {
        actions.cancel();
      }, 
      next:(resv) => {
        const p=get(st.Pages, st.Index.Get());
        p.GoNext=(cont) => {
          Get((res) => {
            if(pred(res))cont();
          }, resv);
        };
        p.GoNext(() => {
          actions.next(resv);
        });
      }
    };
    return(x.render(st))(validatedActions);
  });
}
export function Map(f, x){
  return new Flow("New_1", (st) =>(actions) => {
    const mappedActions={
      back:() => {
        actions.back();
      }, 
      cancel:() => {
        actions.cancel();
      }, 
      next:(x_1) => {
        actions.next(f(x_1));
      }
    };
    return(x.render(st))(mappedActions);
  });
}
