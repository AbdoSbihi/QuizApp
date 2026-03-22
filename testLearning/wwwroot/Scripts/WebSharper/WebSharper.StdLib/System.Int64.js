import { TryParseBigInt, ParseBigInt } from "./WebSharper.N.js"
export function TryParse(s, r){
  return TryParseBigInt(s, -9223372036854775808n, 9223372036854775807n, r);
}
export function Parse(s){
  return ParseBigInt(s, -9223372036854775808n, 9223372036854775807n, "Value was either too large or too small for an Int64.");
}
