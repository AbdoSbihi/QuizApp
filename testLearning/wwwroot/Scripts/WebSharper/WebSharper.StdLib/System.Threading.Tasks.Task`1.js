import Task_1 from "./System.Threading.Tasks.Task.js"
import { InvalidOp } from "./Microsoft.FSharp.Core.Operators.js"
import { noneCT } from "./WebSharper.Concurrency.js"
export default class Task extends Task_1 {
  func;
  result;
  get Result(){
    const m=this.Status;
    switch(m){
      case 5:
        return this.result;
      case 7:
      case 6:
        throw this.Exception;
      default:
        return InvalidOp("Task has not been completed, has no Result");
    }
  }
  Execute(){
    this.result=this.func();
  }
  constructor(i, _1, _2, _3, _4, _5){
    let func;
    if(i=="New_3"){
      func=_1;
      i="New_4";
      _1=func;
      _2=noneCT();
      _3=0;
      _4=null;
      _5=void 0;
    }
    let func_1;
    let ct;
    if(i=="New_2"){
      func_1=_1;
      ct=_2;
      i="New_4";
      _1=func_1;
      _2=ct;
      _3=0;
      _4=null;
      _5=void 0;
    }
    let func_2;
    let obj;
    if(i=="New_1"){
      func_2=_1;
      obj=_2;
      i="New_4";
      _1=() => func_2(obj);
      _2=noneCT();
      _3=0;
      _4=null;
      _5=void 0;
    }
    let func_3;
    let obj_1;
    let ct_1;
    if(i=="New"){
      func_3=_1;
      obj_1=_2;
      ct_1=_3;
      i="New_4";
      _1=() => func_3(obj_1);
      _2=ct_1;
      _3=0;
      _4=null;
      _5=void 0;
    }
    if(i=="New_4"){
      const func_4=_1;
      const token=_2;
      const status=_3;
      const exc=_4;
      const result=_5;
      super("New_4", null, token, status, exc);
      this.func=func_4;
      this.result=result;
    }
  }
}
