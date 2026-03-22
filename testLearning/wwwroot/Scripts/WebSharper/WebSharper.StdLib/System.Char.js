import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
export function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
export function Parse(s){
  return s.length===1?s:FailWith("String must be exactly one character long.");
}
export function IsUpper(c){
  return c>="A"&&c<="Z";
}
export function IsLower(c){
  return c>="a"&&c<="z";
}
export function IsLetterOrDigit(c){
  return IsLetter(c)||IsDigit(c);
}
export function IsLetter(c){
  return c>="A"&&c<="Z"||c>="a"&&c<="z";
}
export function IsDigit(c){
  return c>="0"&&c<="9";
}
export function IsControl(c){
  return c>="\u0000"&&c<="\u001f"||c>="\u0080"&&c<="\u009f";
}
export function GetNumericValue(c){
  return c>="0"&&c<="9"?c.charCodeAt()-"0".charCodeAt():-1;
}
