import TextWriter from "./System.IO.TextWriter.js"
import { SFormat } from "./Microsoft.FSharp.Core.StringModule.js"
import { sub } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export default class ErrorTextWriter extends TextWriter {
  WriteLine_10(x){
    console.error(x);
  }
  WriteLine_9(x){
    console.error(x);
  }
  WriteLine_12(x, o){
    console.error(SFormat(x, o));
  }
  WriteLine_4(x, o1, o2, o3){
    console.error(SFormat(x, [o1, o2, o3]));
  }
  WriteLine_5(x, o1, o2){
    console.error(SFormat(x, [o1, o2]));
  }
  WriteLine_11(x, o1){
    console.error(SFormat(x, [o1]));
  }
  WriteLine_8(x){
    console.error(x);
  }
  WriteLine_6(x){
    console.error(x);
  }
  WriteLine_3(x){
    console.error(String(x));
  }
  WriteLine_2(x){
    console.error(x);
  }
  WriteLine_1(x){
    console.error(x);
  }
  WriteLine_7(x){
    console.error(x);
  }
  WriteLine_13(x, s, c){
    console.error(sub(x, s, c).join(""));
  }
  WriteLine(x){
    console.error(x.join(""));
  }
  WriteLine_14(x){
    console.error(x);
  }
  WriteLine_15(x){
    console.error(x);
  }
  WriteLine_16(){
    console.error("");
  }
  Write(x){
    console.error(x.join(""));
  }
  Write_1(x){
    console.error(String(x));
  }
  Write_2(x){
    console.error(String(x));
  }
  Write_3(o){
    console.error(String(o));
  }
  Write_4(x, o1, o2){
    console.error(x);
  }
  Write_5(x){
    console.error(x);
  }
  Write_6(x){
    console.error(x);
  }
  Write_7(x){
    console.error(x);
  }
  Write_8(x){
    console.error(String(x));
  }
  Write_9(x){
    console.error(String(x));
  }
  Write_10(x, o){
    console.error(SFormat(x, [o]));
  }
  Write_11(x, o){
    console.error(SFormat(x, o));
  }
  Write_12(x, s, c){
    console.error(sub(x, s, c).join(""));
  }
  Write_13(x){
    console.error(x);
  }
  Write_14(x){
    console.error(x);
  }
  get Encoding(){
    return null;
  }
}
