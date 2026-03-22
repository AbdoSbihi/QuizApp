export default class InvalidCastException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="Invalid cast";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
