export default class OperationCanceledException extends Error {
  ct:{c:boolean,r:(() => void)[]};
  constructor(i:"New", ct:{c:boolean,r:(() => void)[]})
  constructor(i:"New_1", message:string, inner:Error, ct:{c:boolean,r:(() => void)[]})
}
