export default class MatchFailureException extends Error {
  constructor(message, line, column){
    super(message+" at "+String(line)+":"+String(column));
  }
}
