export default class OverflowException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="Arithmetic operation resulted in an overflow.";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
