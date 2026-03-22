import { TryParseBigInt, ParseBigInt } from "./WebSharper.N.js"
export function TryParse(s, r){
  return TryParseBigInt(s, 0n, 18446744073709551615n, r);
}
export function Parse(s){
  return ParseBigInt(s, 0n, 18446744073709551615n, "Value was either too large or too small for an UInt64.");
}
