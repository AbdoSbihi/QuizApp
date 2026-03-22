import { concat } from "./Microsoft.FSharp.Core.StringModule.js"
import { map } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ListModule.js"
import { range, toInt } from "./Microsoft.FSharp.Core.Operators.js"
import { fold } from "./Microsoft.FSharp.Collections.SeqModule.js"
export function ToBinaryStr(arr){
  return"0b"+concat("", map(ToBin, arr.slice().reverse()));
}
export function ToBin(n){
  const x=ofSeq(range(0, 7));
  let _1=fold((_2, _3) =>(((_4) => {
    const num=_4[0];
    const binstr=_4[1];
    return(i) => num/toInt(Math.pow(2, 7-i))>>0===1?[num%toInt(Math.pow(2, 7-i)), binstr+"1"]:[num, binstr+"0"];
  })(_2))(_3), [toInt(n), ""], x);
  return _1[1];
}
