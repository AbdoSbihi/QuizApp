export default class ArgumentException extends Error {
  constructor(i, _1, _2){
    if(i=="New_1"){
      i="New_2";
      _1="Value does not fall within the expected range.";
    }
    let argumentName;
    let message;
    if(i=="New"){
      argumentName=_1;
      message=_2;
      i="New_2";
      _1=message+"\nParameter name: "+argumentName;
    }
    if(i=="New_2"){
      const message_1=_1;
      super(message_1);
    }
  }
}
