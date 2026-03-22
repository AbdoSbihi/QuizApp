import { toInt, FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { replicate, Substring, StartsWith } from "./Microsoft.FSharp.Core.StringModule.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import Pervasives from "./$StartupCode_JavaScript.Pervasives.js"
export function DateFormatter(date, format){
  const d=new Date(date);
  switch(format){
    case"D":
      return String(longDays().get_Item(d.getDay()))+", "+padLeft(2, String(d.getDate()))+" "+String(longMonths().get_Item(d.getMonth()))+" "+String(d.getFullYear());
    case"d":
      return padLeft(2, String(d.getMonth()+1))+"/"+padLeft(2, String(d.getDate()))+"/"+String(d.getFullYear());
    case"T":
      return padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()))+":"+padLeft(2, String(d.getSeconds()));
    case"t":
      return padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()));
    case"o":
    case"O":
      return String(d.getFullYear())+"-"+padLeft(2, String(d.getMonth()+1))+"-"+padLeft(2, String(d.getDate()))+"T"+padLeft(2, String(d.getHours()))+":"+padLeft(2, String(d.getMinutes()))+":"+padLeft(2, String(d.getSeconds()))+"."+padLeft(3, String(d.getMilliseconds()))+dateOffsetString(d);
    default:
      return dateToStringWithCustomFormat(d, format);
  }
}
export function dateToStringWithCustomFormat(d, format){
  let cursorPos=0;
  let tokenLength=0;
  let result="";
  const appendToResult=(s) => {
    result=result+s;
  };
  while(cursorPos<format.length)
    ((() => {
      const token=format[cursorPos];
      switch(token){
        case"d":
          tokenLength=parseRepeatToken(format, cursorPos, "d");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 1:
              return appendToResult(String(d.getDate()));
            case 2:
              return appendToResult(padLeft(2, String(d.getDate())));
            case 3:
              return appendToResult(String(shortDays().get_Item(d.getDay())));
            default:
            case 4:
              return appendToResult(String(longDays().get_Item(d.getDay())));
          }
          break;
        case"f":
          tokenLength=parseRepeatToken(format, cursorPos, "f");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 3:
            case 2:
            case 1:
              const precision=toInt(10**(3-tokenLength));
              return appendToResult(padLeft(tokenLength, String(d.getMilliseconds()/precision>>0)));
            case 7:
            case 6:
            case 5:
            case 4:
              return appendToResult(padRight(tokenLength, String(d.getMilliseconds())));
            default:
              return FailWith("Input string was not in a correct format.");
          }
          break;
        case"F":
          tokenLength=parseRepeatToken(format, cursorPos, "F");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 3:
            case 2:
            case 1:
              const precision_1=toInt(10**(3-tokenLength));
              const value=d.getMilliseconds()/precision_1>>0;
              return value!==0?appendToResult(padLeft(tokenLength, String(value))):null;
            case 7:
            case 6:
            case 5:
            case 4:
              const value_1=d.getMilliseconds();
              return value_1!==0?appendToResult(padLeft(3, String(value_1))):null;
            default:
              return FailWith("Input string was not in a correct format.");
          }
          break;
        case"g":
          tokenLength=parseRepeatToken(format, cursorPos, "g");
          cursorPos=cursorPos+tokenLength;
          return appendToResult("A.D.");
        case"h":
          tokenLength=parseRepeatToken(format, cursorPos, "h");
          cursorPos=cursorPos+tokenLength;
          const hours=d.getHours()%12;
          return appendToResult(tokenLength===1||tokenLength===2&&false?hours===0?"12":String(hours):hours===0?"12":padLeft(2, String(hours)));
        case"H":
          tokenLength=parseRepeatToken(format, cursorPos, "H");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getHours()):padLeft(2, String(d.getHours())));
        case"K":
          tokenLength=parseRepeatToken(format, cursorPos, "K");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(replicate(tokenLength, dateOffsetString(d)));
        case"m":
          tokenLength=parseRepeatToken(format, cursorPos, "m");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getMinutes()):padLeft(2, String(d.getMinutes())));
        case"M":
          let _1;
          tokenLength=parseRepeatToken(format, cursorPos, "M");
          cursorPos=cursorPos+tokenLength;
          switch(tokenLength){
            case 1:
              _1=String(d.getMonth()+1);
              break;
            case 2:
              _1=padLeft(2, String(d.getMonth()+1));
              break;
            case 3:
              _1=String(shortMonths().get_Item(d.getMonth()));
              break;
            default:
            case 4:
              _1=String(longMonths().get_Item(d.getMonth()));
              break;
          }
          return appendToResult(_1);
        case"s":
          tokenLength=parseRepeatToken(format, cursorPos, "s");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?String(d.getSeconds()):padLeft(2, String(d.getSeconds())));
        case"t":
          tokenLength=parseRepeatToken(format, cursorPos, "t");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1||tokenLength===2&&false?d.getHours()<12?"A":"P":d.getHours()<12?"AM":"PM");
        case"y":
          tokenLength=parseRepeatToken(format, cursorPos, "y");
          cursorPos=cursorPos+tokenLength;
          return appendToResult(tokenLength===1?String(d.getFullYear()%100):tokenLength===2?padLeft(2, String(d.getFullYear()%100)):padLeft(tokenLength, String(d.getFullYear())));
        case"z":
          tokenLength=parseRepeatToken(format, cursorPos, "z");
          cursorPos=cursorPos+tokenLength;
          const utcOffsetText=dateOffsetString(d);
          const sign=Substring(utcOffsetText, 0, 1);
          const hours_1=Substring(utcOffsetText, 1, 2);
          const minutes=Substring(utcOffsetText, 4, 2);
          return appendToResult(tokenLength===1?sign+(StartsWith(hours_1, "0")?hours_1.substring(1):hours_1):tokenLength===2?sign+hours_1:sign+hours_1+":"+minutes);
        case":":
          cursorPos=cursorPos+1;
          return appendToResult(":");
        case"/":
          cursorPos=cursorPos+1;
          return appendToResult("/");
        case"'":
        case"\"":
          const p=parseQuotedString(format, cursorPos);
          cursorPos=cursorPos+p[1];
          return appendToResult(p[0]);
        case"%":
          const nextChar=parseNextChar(format, cursorPos);
          return nextChar!=null&&nextChar.$0!=="%"?(cursorPos=cursorPos+2,appendToResult(dateToStringWithCustomFormat(d, nextChar.$0))):FailWith("Invalid format string");
        case"\\":
          const m=parseNextChar(format, cursorPos);
          if(m==null)return FailWith("Invalid format string");
          else {
            const nextChar2=m.$0;
            cursorPos=cursorPos+2;
            return appendToResult(nextChar2);
          }
          break;
        default:
          appendToResult(token);
          {
            cursorPos=cursorPos+1;
            return;
          }
          break;
      }
    })());
  return result;
}
export function parseQuotedString(format, pos){
  const quoteChar=format[pos];
  let result="";
  let foundQuote=false;
  let pos_1=pos;
  let earlyBreak=false;
  while(pos_1<format.length&&!earlyBreak)
    {
      pos_1=pos_1+1;
      const currentChar=format[pos_1];
      if(currentChar===quoteChar){
        foundQuote=true;
        earlyBreak=true;
      }
      else currentChar==="\\"?pos_1<format.length?(pos_1=pos_1+1,result=result+format[pos_1]):FailWith("Invalid string format"):result=result+currentChar;
    }
  if(!foundQuote)FailWith("Invalid string format could not find matching quote for "+String(quoteChar));
  return[result, pos_1-pos+1];
}
export function parseNextChar(format, pos){
  return pos>=format.length-1?null:Some(format[pos+1]);
}
export function parseRepeatToken(format, pos, patternChar){
  let tokenLength=0;
  let internalPos=pos;
  while(internalPos<format.length&&format[internalPos]===patternChar)
    {
      internalPos=internalPos+1;
      tokenLength=tokenLength+1;
    }
  return tokenLength;
}
export function dateOffsetString(d){
  const offset=d.getTimezoneOffset()*-60000;
  const offset_1=Math.abs(offset);
  return(offset<0?"-":"+")+padLeft(2, String(toInt(offset_1/3600000)))+":"+padLeft(2, String(toInt(offset_1%3600000/60000)));
}
export function padRight(minLength, x){
  return x.length<minLength?x+replicate(minLength-x.length, "0"):x;
}
export function padLeft(minLength, x){
  return x.length<minLength?replicate(minLength-x.length, "0")+x:x;
}
export function longMonths(){
  return Pervasives.longMonths;
}
export function shortMonths(){
  return Pervasives.shortMonths;
}
export function longDays(){
  return Pervasives.longDays;
}
export function shortDays(){
  return Pervasives.shortDays;
}
