import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
export default class AggregateException extends Error {
  innerExceptions;
  constructor(i, _1, _2){
    let innerExceptions;
    if(i=="New_3"){
      innerExceptions=_1;
      i="New_4";
      _1="One or more errors occurred.";
      _2=innerExceptions;
    }
    let innerExceptions_1;
    if(i=="New_2"){
      innerExceptions_1=_1;
      i="New_4";
      _1="One or more errors occurred.";
      _2=ofSeq(innerExceptions_1);
    }
    let message;
    let innerExceptions_2;
    if(i=="New_1"){
      message=_1;
      innerExceptions_2=_2;
      i="New_4";
      _1=message;
      _2=ofSeq(innerExceptions_2);
    }
    let message_1;
    let innerException;
    if(i=="New"){
      message_1=_1;
      innerException=_2;
      i="New_4";
      _1=message_1;
      _2=[innerException];
    }
    if(i=="New_4"){
      const message_2=_1;
      const innerExceptions_3=_2;
      super(message_2);
      this.innerExceptions=innerExceptions_3;
    }
  }
}
