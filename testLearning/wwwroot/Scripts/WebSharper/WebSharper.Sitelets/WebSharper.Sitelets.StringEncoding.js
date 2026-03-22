import { MarkResizable } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { concat, PadLeftWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { ofSeq } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { map, mapi } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
export function read(s){
  const buf=MarkResizable([]);
  function loop(chars){
    while(true)
      {
        const m=readEscapedFromChars(chars);
        if(m[0]===-2)return null;
        else if(m[0]===-1)return Some((((s_1) =>(s_2) => concat(s_1, s_2))(""))(buf));
        else {
          buf.push(String.fromCharCode(m[0]));
          chars=m[1];
        }
      }
  }
  return loop(ofSeq(map((v) => v.charCodeAt(), s)));
}
export function readEscapedFromChars(chars){
  let _1;
  let chars_1=chars;
  const read_1=() => {
    if(chars_1.$==1){
      const t=chars_1.$1;
      const h=chars_1.$0;
      chars_1=t;
      return h;
    }
    else return -1;
  };
  const hex=(x) => x>="0".charCodeAt()&&x<="9".charCodeAt()?x-"0".charCodeAt():x>="a".charCodeAt()&&x<="f".charCodeAt()?x-"a".charCodeAt()+10:x>="A".charCodeAt()&&x<="F".charCodeAt()?x-"A".charCodeAt()+10:-2;
  const m=read_1();
  if(m==="~".charCodeAt()){
    const m_1=read_1();
    if(m_1==="u".charCodeAt()){
      const a=read_1();
      const b=read_1();
      const c=read_1();
      const d=read_1();
      _1=a>=0&&b>=0&&c>=0&&d>=0?op_PlusPlus(op_PlusPlus(op_PlusPlus(hex(a), hex(b)), hex(c)), hex(d)):-2;
    }
    else {
      const y=read_1();
      _1=m_1>=0&&y>=0?op_PlusPlus(hex(m_1), hex(y)):-2;
    }
  }
  else _1=m;
  return[_1, chars_1];
}
export function op_PlusPlus(a, b){
  return(a<<4)+b;
}
export function write(s){
  return concat("", mapi((_1, _2) => writeEscapedAsString(_1+1===s.length, _2), s));
}
export function writeEscapedAsString(isLast, c){
  const k=c.charCodeAt();
  return isUnreserved(isLast, c)?c:k<256?"~"+PadLeftWith(k.toString(16), 2, "0"):"~u"+PadLeftWith(k.toString(16), 4, "0");
}
export function isUnreserved(isLast, c){
  return c==="-"||(c==="."?!isLast:c==="_"||(c>="A"&&c<="Z"||(c>="a"&&c<="z"||c>="0"&&c<="9")));
}
