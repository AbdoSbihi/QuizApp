export default class MatchFailureException extends Error {
  constructor(message:string, line:number, column:number)
}
