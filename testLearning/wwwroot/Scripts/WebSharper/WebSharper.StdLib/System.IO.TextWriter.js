import Object from "./System.Object.js"
import { SFormat } from "./Microsoft.FSharp.Core.StringModule.js"
import { sub } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export default class TextWriter extends Object {
  get Encoding(){
    return null;
  }
  WriteLine(x){
    console.log(x.join(""));
  }
  WriteLine_1(x){
    console.log(String(x));
  }
  WriteLine_2(x){
    console.log(String(x));
  }
  WriteLine_3(o){
    console.log(String(o));
  }
  WriteLine_4(x, o1, o2, o3){
    console.log(x);
  }
  WriteLine_5(x, o1, o2){
    console.log(x);
  }
  WriteLine_6(x){
    console.log(x);
  }
  WriteLine_7(x){
    console.log(x);
  }
  WriteLine_8(x){
    console.log(x);
  }
  WriteLine_9(x){
    console.log(String(x));
  }
  WriteLine_10(x){
    console.log(String(x));
  }
  WriteLine_11(x, o){
    console.log(SFormat(x, [o]));
  }
  WriteLine_12(x, o){
    console.log(SFormat(x, o));
  }
  WriteLine_13(x, s, c){
    console.log(sub(x, s, c).join(""));
  }
  WriteLine_14(x){
    console.log(x);
  }
  WriteLine_15(x){
    console.log(x);
  }
  WriteLine_16(){
    console.log("");
  }
  Write(x){
    console.log(x.join(""));
  }
  Write_1(x){
    console.log(String(x));
  }
  Write_2(x){
    console.log(String(x));
  }
  Write_3(o){
    console.log(String(o));
  }
  Write_4(x, o1, o2){
    console.log(x);
  }
  Write_5(x){
    console.log(x);
  }
  Write_6(x){
    console.log(x);
  }
  Write_7(x){
    console.log(x);
  }
  Write_8(x){
    console.log(String(x));
  }
  Write_9(x){
    console.log(String(x));
  }
  Write_10(x, o){
    console.log(SFormat(x, [o]));
  }
  Write_11(x, o){
    console.log(SFormat(x, o));
  }
  Write_12(x, s, c){
    console.log(sub(x, s, c).join(""));
  }
  Write_13(x){
    console.log(x);
  }
  Write_14(x){
    console.log(x);
  }
}
