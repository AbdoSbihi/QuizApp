export default class TimeoutException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="The operation has timed out.";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
