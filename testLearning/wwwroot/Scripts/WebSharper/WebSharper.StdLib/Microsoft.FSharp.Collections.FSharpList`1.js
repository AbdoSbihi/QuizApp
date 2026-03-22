import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
import { ofSeq, length } from "./Microsoft.FSharp.Collections.ListModule.js"
import { take, nth } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { skip } from "./WebSharper.CollectionInternals.js"
import T from "./WebSharper.Enumerator.T`2.js"
export default class FSharpList {
  static Empty=Create(FSharpList, {$:0});
  static Cons(Head, Tail){
    return Create(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  GetSlice(start, finish){
    try {
      if(start!=null&&start.$==1){
        if(finish!=null&&finish.$==1){
          const i=start.$0;
          const j=finish.$0;
          return j<0?FSharpList.Empty:ofSeq(take(j-i+1, skip(i, this)));
        }
        else return skip(start.$0, this);
      }
      else if(finish!=null&&finish.$==1){
        const j_1=finish.$0;
        return j_1<0?FSharpList.Empty:ofSeq(take(j_1+1, this));
      }
      else return this;
    }
    catch(m){
      return FSharpList.Empty;
    }
  }
  get_Item(x){
    return nth(x, this);
  }
  get Length(){
    return length(this);
  }
  GetEnumerator(){
    return new T(this, null, (e) => {
      const m=e.s;
      if(m.$==0)return false;
      else {
        const xs=m.$1;
        e.c=m.$0;
        e.s=xs;
        return true;
      }
    }, void 0);
  }
  $;
  $0;
  $1;
}
