import { TryParse as TryParse_1, Parse as Parse_1 } from "./WebSharper.N.js"
export function TryParse(s, r){
  return TryParse_1(s, 0, 255, r);
}
export function Parse(s){
  return Parse_1(s, 0, 255, "Value was either too large or too small for an unsigned byte.");
}
