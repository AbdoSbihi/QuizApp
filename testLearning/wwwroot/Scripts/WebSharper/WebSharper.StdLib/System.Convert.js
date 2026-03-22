import FormatException from "./System.FormatException.js"
import { toInt, toUInt } from "./Microsoft.FSharp.Core.Operators.js"
import InvalidCastException from "./System.InvalidCastException.js"
import { Parse } from "./WebSharper.DateTimeHelpers.js"
import { Parse as Parse_1 } from "./System.UInt16.js"
import { Parse as Parse_2 } from "./System.UInt64.js"
import { Parse as Parse_3 } from "./System.UInt32.js"
import { Parse as Parse_4 } from "./System.Int16.js"
import { Parse as Parse_5 } from "./System.Int64.js"
import { Parse as Parse_6 } from "./System.Int32.js"
import { ParseBool } from "./WebSharper.N.js"
export function ToDouble(u){
  return Number(u);
}
export function ToDouble_1(u){
  return u;
}
export function ToDouble_2(u){
  return u;
}
export function ToDouble_3(s){
  const _1=Number(s);
  return isNaN(_1)?new FormatException("New_1", "Input string was not in a correct format."):_1;
}
export function ToDouble_4(s){
  return toInt(s);
}
export function ToDouble_5(s){
  return s;
}
export function ToDouble_6(i){
  return Number(i);
}
export function ToDouble_7(i){
  return i;
}
export function ToDouble_8(i){
  return i;
}
export function ToDouble_9(d){
  return toInt(d);
}
export function ToDouble_10(){
  throw new InvalidCastException("New");
}
export function ToDouble_11(){
  throw new InvalidCastException("New");
}
export function ToDouble_12(b){
  return b;
}
export function ToDouble_13(b){
  return b?1:0;
}
export function ToSingle(u){
  return Number(u);
}
export function ToSingle_1(u){
  return u;
}
export function ToSingle_2(u){
  return u;
}
export function ToSingle_3(s){
  const _1=Number(s);
  return isNaN(_1)?new FormatException("New_1", "Input string was not in a correct format."):_1;
}
export function ToSingle_4(s){
  return toInt(s);
}
export function ToSingle_5(s){
  return s;
}
export function ToSingle_6(i){
  return Number(i);
}
export function ToSingle_7(i){
  return i;
}
export function ToSingle_8(i){
  return i;
}
export function ToSingle_9(d){
  return toInt(d);
}
export function ToSingle_10(){
  throw new InvalidCastException("New");
}
export function ToSingle_11(){
  throw new InvalidCastException("New");
}
export function ToSingle_12(b){
  return b;
}
export function ToSingle_13(b){
  return b?1:0;
}
export function ToDateTime(){
  throw new InvalidCastException("New");
}
export function ToDateTime_1(){
  throw new InvalidCastException("New");
}
export function ToDateTime_2(){
  throw new InvalidCastException("New");
}
export function ToDateTime_3(s){
  return Parse(s);
}
export function ToDateTime_4(){
  throw new InvalidCastException("New");
}
export function ToDateTime_5(){
  throw new InvalidCastException("New");
}
export function ToDateTime_6(){
  throw new InvalidCastException("New");
}
export function ToDateTime_7(){
  throw new InvalidCastException("New");
}
export function ToDateTime_8(){
  throw new InvalidCastException("New");
}
export function ToDateTime_9(){
  throw new InvalidCastException("New");
}
export function ToDateTime_10(dt){
  return dt;
}
export function ToDateTime_11(){
  throw new InvalidCastException("New");
}
export function ToDateTime_12(){
  throw new InvalidCastException("New");
}
export function ToDateTime_13(){
  throw new InvalidCastException("New");
}
export function ToUInt16(u){
  return Number(u&65535n);
}
export function ToUInt16_1(u){
  return u&65535;
}
export function ToUInt16_2(u){
  return u&65535;
}
export function ToUInt16_3(s){
  return Parse_1(s);
}
export function ToUInt16_4(s){
  return toInt(s)&65535;
}
export function ToUInt16_5(s){
  return s&65535;
}
export function ToUInt16_6(i){
  return Number(i&65535n);
}
export function ToUInt16_7(i){
  return i&65535;
}
export function ToUInt16_8(i){
  return i&65535;
}
export function ToUInt16_9(d){
  return toInt(d)&65535;
}
export function ToUInt16_10(){
  throw new InvalidCastException("New");
}
export function ToUInt16_11(c){
  return c.charCodeAt()&65535;
}
export function ToUInt16_12(b){
  return b&65535;
}
export function ToUInt16_13(b){
  return b?1:0;
}
export function ToUInt64(u){
  return u;
}
export function ToUInt64_1(u){
  return BigInt(u);
}
export function ToUInt64_2(u){
  return BigInt(u);
}
export function ToUInt64_3(s){
  return Parse_2(s);
}
export function ToUInt64_4(s){
  return BigInt(toInt(s));
}
export function ToUInt64_5(s){
  return BigInt(s);
}
export function ToUInt64_6(i){
  return i;
}
export function ToUInt64_7(i){
  return BigInt(i);
}
export function ToUInt64_8(i){
  return BigInt(i);
}
export function ToUInt64_9(d){
  return BigInt(toInt(d));
}
export function ToUInt64_10(){
  throw new InvalidCastException("New");
}
export function ToUInt64_11(c){
  return BigInt(c.charCodeAt());
}
export function ToUInt64_12(b){
  return BigInt(b);
}
export function ToUInt64_13(b){
  return b?1n:0n;
}
export function ToUInt32(u){
  return Number(u&4294967295n);
}
export function ToUInt32_1(u){
  return toUInt(u);
}
export function ToUInt32_2(u){
  return toUInt(u);
}
export function ToUInt32_3(s){
  return Parse_3(s);
}
export function ToUInt32_4(s){
  return toUInt(toInt(s));
}
export function ToUInt32_5(s){
  return toUInt(s);
}
export function ToUInt32_6(i){
  return Number(i&4294967295n);
}
export function ToUInt32_7(i){
  return toUInt(i);
}
export function ToUInt32_8(i){
  return toUInt(i);
}
export function ToUInt32_9(d){
  return toUInt(toInt(d));
}
export function ToUInt32_10(){
  throw new InvalidCastException("New");
}
export function ToUInt32_11(c){
  return toUInt(c.charCodeAt());
}
export function ToUInt32_12(b){
  return toUInt(b);
}
export function ToUInt32_13(b){
  return b?1:0;
}
export function ToInt16(u){
  return Number((u+32768n&65535n)-32768n);
}
export function ToInt16_1(u){
  return(u+32768&65535)-32768;
}
export function ToInt16_2(u){
  return(u+32768&65535)-32768;
}
export function ToInt16_3(s){
  return Parse_4(s);
}
export function ToInt16_4(s){
  return(toInt(s)+32768&65535)-32768;
}
export function ToInt16_5(s){
  return(s+32768&65535)-32768;
}
export function ToInt16_6(i){
  return Number((i+32768n&65535n)-32768n);
}
export function ToInt16_7(i){
  return(i+32768&65535)-32768;
}
export function ToInt16_8(i){
  return(i+32768&65535)-32768;
}
export function ToInt16_9(d){
  return(toInt(d)+32768&65535)-32768;
}
export function ToInt16_10(){
  throw new InvalidCastException("New");
}
export function ToInt16_11(c){
  return(c.charCodeAt()+32768&65535)-32768;
}
export function ToInt16_12(b){
  return(b+32768&65535)-32768;
}
export function ToInt16_13(b){
  return b?1:0;
}
export function ToInt64(u){
  return u;
}
export function ToInt64_1(u){
  return BigInt(u);
}
export function ToInt64_2(u){
  return BigInt(u);
}
export function ToInt64_3(s){
  return Parse_5(s);
}
export function ToInt64_4(s){
  return BigInt(toInt(s));
}
export function ToInt64_5(s){
  return BigInt(s);
}
export function ToInt64_6(i){
  return i;
}
export function ToInt64_7(i){
  return BigInt(i);
}
export function ToInt64_8(i){
  return BigInt(i);
}
export function ToInt64_9(d){
  return BigInt(toInt(d));
}
export function ToInt64_10(){
  throw new InvalidCastException("New");
}
export function ToInt64_11(c){
  return BigInt(c.charCodeAt());
}
export function ToInt64_12(b){
  return BigInt(b);
}
export function ToInt64_13(b){
  return b?BigInt(1):BigInt(0);
}
export function ToInt32(u){
  return Number((u+2147483648n&4294967295n)-2147483648n);
}
export function ToInt32_1(u){
  return toInt(u);
}
export function ToInt32_2(u){
  return toInt(u);
}
export function ToInt32_3(s){
  return Parse_6(s);
}
export function ToInt32_4(s){
  return toInt(s);
}
export function ToInt32_5(s){
  return toInt(s);
}
export function ToInt32_6(i){
  return Number((i+2147483648n&4294967295n)-2147483648n);
}
export function ToInt32_7(i){
  return toInt(i);
}
export function ToInt32_8(i){
  return toInt(i);
}
export function ToInt32_9(d){
  return toInt(d);
}
export function ToInt32_10(){
  throw new InvalidCastException("New");
}
export function ToInt32_11(c){
  return c.charCodeAt();
}
export function ToInt32_12(b){
  return toInt(b);
}
export function ToInt32_13(b){
  return b?1:0;
}
export function ToChar(u){
  return String.fromCharCode(u);
}
export function ToChar_1(u){
  return String.fromCharCode(u);
}
export function ToChar_2(u){
  return String.fromCharCode(u);
}
export function ToChar_3(s){
  return s[0];
}
export function ToChar_4(){
  throw new InvalidCastException("New");
}
export function ToChar_5(s){
  return String.fromCharCode(s);
}
export function ToChar_6(i){
  return String.fromCharCode(i);
}
export function ToChar_7(i){
  return String.fromCharCode(i);
}
export function ToChar_8(i){
  return String.fromCharCode(i);
}
export function ToChar_9(){
  throw new InvalidCastException("New");
}
export function ToChar_10(){
  throw new InvalidCastException("New");
}
export function ToChar_11(c){
  return c;
}
export function ToChar_12(b){
  return String.fromCharCode(b);
}
export function ToChar_13(){
  throw new InvalidCastException("New");
}
export function ToSByte(u){
  return Number((u+128n&255n)-128n);
}
export function ToSByte_1(u){
  return(u+128&255)-128;
}
export function ToSByte_2(u){
  return(u+128&255)-128;
}
export function ToSByte_3(s){
  return Number(s)&255;
}
export function ToSByte_4(s){
  return(toInt(s)+128&255)-128;
}
export function ToSByte_5(s){
  return(s+128&255)-128;
}
export function ToSByte_6(i){
  return Number((i+128n&255n)-128n);
}
export function ToSByte_7(i){
  return(i+128&255)-128;
}
export function ToSByte_8(i){
  return(i+128&255)-128;
}
export function ToSByte_9(d){
  return(toInt(d)+128&255)-128;
}
export function ToSByte_10(){
  throw new InvalidCastException("New");
}
export function ToSByte_11(c){
  return(c.charCodeAt()+128&255)-128;
}
export function ToSByte_12(b){
  return(b+128&255)-128;
}
export function ToSByte_13(b){
  return b?1:0;
}
export function ToByte(u){
  return Number(u&255n);
}
export function ToByte_1(u){
  return u&255;
}
export function ToByte_2(u){
  return u&255;
}
export function ToByte_3(s){
  return Number(s)&255;
}
export function ToByte_4(s){
  return toInt(s)&255;
}
export function ToByte_5(s){
  return s&255;
}
export function ToByte_6(i){
  return Number(i&255n);
}
export function ToByte_7(i){
  return i&255;
}
export function ToByte_8(i){
  return i&255;
}
export function ToByte_9(d){
  return toInt(d)&255;
}
export function ToByte_10(){
  throw new InvalidCastException("New");
}
export function ToByte_11(c){
  return c.charCodeAt()&255;
}
export function ToByte_12(b){
  return b;
}
export function ToByte_13(b){
  return b?1:0;
}
export function ToBoolean(u){
  return!(!u);
}
export function ToBoolean_1(u){
  return!(!u);
}
export function ToBoolean_2(u){
  return!(!u);
}
export function ToBoolean_3(s){
  return ParseBool(s);
}
export function ToBoolean_4(s){
  return!(!s);
}
export function ToBoolean_5(s){
  return!(!s);
}
export function ToBoolean_6(i){
  return!(!i);
}
export function ToBoolean_7(i){
  return!(!i);
}
export function ToBoolean_8(i){
  return!(!i);
}
export function ToBoolean_9(d){
  return!(!d);
}
export function ToBoolean_10(){
  throw new InvalidCastException("New");
}
export function ToBoolean_11(){
  throw new InvalidCastException("New");
}
export function ToBoolean_12(b){
  return!(!b);
}
export function ToBoolean_13(b){
  return b;
}
