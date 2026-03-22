export default class ArgumentNullException extends Error {
  constructor(i, _1, _2){
    let argumentName;
    if(i=="New_1"){
      argumentName=_1;
      i="New";
      _1=argumentName;
      _2="Value cannot be null.";
    }
    if(i=="New_2"){
      super("Value cannot be null.");
    }
    if(i=="New"){
      const argumentName_1=_1;
      const message=_2;
      super(message+"\nParameter name: "+argumentName_1);
    }
  }
}
