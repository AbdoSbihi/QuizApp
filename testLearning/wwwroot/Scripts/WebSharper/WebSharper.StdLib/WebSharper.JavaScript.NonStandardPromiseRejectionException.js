export default class NonStandardPromiseRejectionException extends Error {
  reason;
  get Reason(){
    return this.reason;
  }
  constructor(reason){
    super("Promise rejected");
    this.reason=reason;
  }
}
