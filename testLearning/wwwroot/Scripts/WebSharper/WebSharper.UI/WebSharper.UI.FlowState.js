import Doc from "./WebSharper.UI.Doc.js"
import { Map } from "./WebSharper.UI.View.js"
import { get, length, set } from "../WebSharper.StdLib/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Create } from "./WebSharper.UI.FlowPage.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { markState } from "./WebSharper.UI.FlowRouting.js"
import { Create as Create_1 } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class FlowState {
  Id;
  Index;
  Pages;
  EndedOn;
  FirstRender;
  RenderFirst;
  Embed(){
    return Doc.EmbedView(Map((i) => {
      const m=this.EndedOn;
      if(m!=null&&m.$==1)return get(this.Pages, m.$0).Doc;
      else if(length(this.Pages)>=i+1)return get(this.Pages, i).Doc;
      else if(length(this.Pages)>1){
        this.UpdatePage(() => length(this.Pages)-1);
        return Doc.Empty;
      }
      else {
        this.EndedOn=null;
        const this_1=this.Pages;
        let this_2=this_1;
        let delete_1=length(this_1);
        this_2.splice(0, delete_1);
        this.Pages.push(Create(Doc.Empty));
        this.UpdatePage(() => 0);
        this.RenderFirst();
        return Doc.Empty;
      }
    }, this.Index.View));
  }
  get Navigator(){
    const this_1=this;
    return{Get:() => this.Index.Get(), Set:(newI) => {
      let final_1;
      const curI=this.Index.Get();
      if(curI>newI)this.Index.Set(newI);
      else if(curI<newI){
        final_1=curI;
        function goNext(i){
          final_1=i;
          i<newI?get(this_1.Pages, i).GoNext(() => {
            goNext(i+1);
          }):void 0;
        }
        goNext(curI);
        this.Index.Set(final_1);
      }
      else void 0;
    }};
  }
  End(page){
    this.Add(Create(page));
    const endIndex=length(this.Pages)-1;
    for(let i=0, _1=endIndex-1;i<=_1;i++)set(this.Pages, i, Create(Doc.Empty));
    this.EndedOn=Some(endIndex);
  }
  Restart(){
    const this_1=this.Pages;
    let this_2=this_1;
    let delete_1=length(this_1);
    this_2.splice(0, delete_1);
    this.Pages.push(Create(Doc.Empty));
    this.EndedOn=null;
    this.RenderFirst();
  }
  Cancel(page){
    this.UpdatePage(() => {
      const this_1=this.Pages;
      let this_2=this_1;
      let delete_1=length(this_1);
      this_2.splice(0, delete_1);
      this.Pages.push(Create(page));
      this.EndedOn=Some(0);
      return 0;
    });
  }
  Add(page){
    this.UpdatePage((i) => {
      this.Pages.push(page);
      return i+1;
    });
  }
  UpdatePage(f){
    this.Index.Update(f);
    !this.FirstRender?(globalThis.history.pushState({}, ""),markState()):this.FirstRender=false;
  }
  static New(Id, Index, Pages, EndedOn, FirstRender, RenderFirst){
    return Create_1(FlowState, {
      Id:Id, 
      Index:Index, 
      Pages:Pages, 
      EndedOn:EndedOn, 
      FirstRender:FirstRender, 
      RenderFirst:RenderFirst
    });
  }
}
