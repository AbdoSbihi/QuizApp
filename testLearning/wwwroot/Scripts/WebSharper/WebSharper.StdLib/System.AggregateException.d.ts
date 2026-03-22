import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export default class AggregateException extends Error {
  innerExceptions:Error[];
  constructor(i:"New_3", innerExceptions:Error[])
  constructor(i:"New_2", innerExceptions:IEnumerable<Error>)
  constructor(i:"New_1", message:string, innerExceptions:IEnumerable<Error>)
  constructor(i:"New", message:string, innerException:Error)
  constructor(i:"New_4", message:string, innerExceptions:Error[])
}
