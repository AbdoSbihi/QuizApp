import { Trim, Substring, Replace } from "./Microsoft.FSharp.Core.StringModule.js"
import FormatException from "./System.FormatException.js"
export function NewGuid(){
  return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(new RegExp("[xy]", "g"), (c) => {
    const r=Math.random()*16|0;
    const v=c=="x"?r:r&3|8;
    return v.toString(16);
  });
}
export function TryParseExact(input, format, output){
  try {
    output.set(ParseExact(input, format));
    return true;
  }
  catch(m){
    return false;
  }
}
export function TryParse(input, output){
  try {
    output.set(Parse(input));
    return true;
  }
  catch(m){
    return false;
  }
}
export function ParseExact(input, format){
  const parseD=(s_5) => {
    for(let i=0, _1=35;i<=_1;i++){
      if(i===8||(i===13||(i===18||i===23))){
        if(s_5[i]!=="-")ShapeError();
      }
      else {
        const c_2=s_5[i];
        if(!("0"<=c_2&&c_2<="9"||"a"<=c_2&&c_2<="f"))ShapeError();
      }
    }
    return s_5;
  };
  const m=format.toUpperCase();
  if(m=="N"){
    const s=Trim(input).toLowerCase();
    if(s.length!==32)ShapeError();
    for(let i=0, _1=31;i<=_1;i++){
      const c=s[i];
      if(!("0"<=c&&c<="9"||"a"<=c&&c<="f"))ShapeError();
    }
    return Substring(s, 0, 8)+"-"+Substring(s, 8, 4)+"-"+Substring(s, 12, 4)+"-"+Substring(s, 16, 4)+"-"+s.substring(20);
  }
  else if(m=="D"){
    const s_1=Trim(input).toLowerCase();
    if(s_1.length!==36)ShapeError();
    return parseD(s_1);
  }
  else if(m=="B"){
    const s_2=Trim(input).toLowerCase();
    if(s_2.length!==38||s_2[0]!=="{"||s_2[17]!=="}")ShapeError();
    return parseD(Substring(s_2, 1, 36));
  }
  else if(m=="P"){
    const s_3=Trim(input).toLowerCase();
    if(s_3.length!==38||s_3[0]!=="("||s_3[17]!==")")ShapeError();
    return parseD(Substring(s_3, 1, 36));
  }
  else if(m=="X"){
    const s_4=Trim(input).toLowerCase();
    if(s_4.length!==68)ShapeError();
    for(let i_1=0, _2=67;i_1<=_2;i_1++){
      switch(i_1){
        case 26:
        case 0:
          if(s_4[i_1]!=="{")ShapeError();
          break;
        case 62:
        case 57:
        case 52:
        case 47:
        case 42:
        case 37:
        case 32:
        case 27:
        case 19:
        case 12:
        case 1:
          if(s_4[i_1]!=="0")ShapeError();
          break;
        case 63:
        case 58:
        case 53:
        case 48:
        case 43:
        case 38:
        case 33:
        case 28:
        case 20:
        case 13:
        case 2:
          if(s_4[i_1]!=="x")ShapeError();
          break;
        case 61:
        case 56:
        case 51:
        case 46:
        case 41:
        case 36:
        case 31:
        case 25:
        case 18:
        case 11:
          if(s_4[i_1]!==",")ShapeError();
          break;
        case 67:
        case 66:
          if(s_4[i_1]!=="{")ShapeError();
          break;
        default:
          const c_1=s_4[i_1];
          if(!("0"<=c_1&&c_1<="9"||"a"<=c_1&&c_1<="f"))ShapeError();
          break;
      }
    }
    return Substring(s_4, 3, 8)+"-"+Substring(s_4, 14, 4)+"-"+Substring(s_4, 21, 4)+"-"+Substring(s_4, 29, 2)+Substring(s_4, 34, 2)+"-"+Substring(s_4, 39, 2)+Substring(s_4, 44, 2)+Substring(s_4, 49, 2)+Substring(s_4, 54, 2)+Substring(s_4, 59, 2)+Substring(s_4, 64, 2);
  }
  else return FormatError();
}
export function Parse(input){
  try {
    return ParseExact(input, "D");
  }
  catch(m){
    try {
      return ParseExact(input, "B");
    }
    catch(m_1){
      try {
        return ParseExact(input, "P");
      }
      catch(m_2){
        try {
          return ParseExact(input, "N");
        }
        catch(m_3){
          return ParseExact(input, "X");
        }
      }
    }
  }
}
export function ToString(this_1, format){
  const m=format.toUpperCase();
  if(m=="N")return Replace(this_1, "-", "");
  else if(m=="D")return this_1;
  else if(m=="B")return"{"+this_1+"}";
  else if(m=="P")return"("+this_1+")";
  else if(m=="X"){
    const s=this_1;
    return"{0x"+Substring(s, 0, 8)+",0x"+Substring(s, 9, 4)+",0x"+Substring(s, 14, 4)+",{0x"+Substring(s, 19, 2)+",0x"+Substring(s, 21, 2)+",0x"+Substring(s, 24, 2)+",0x"+Substring(s, 26, 2)+",0x"+Substring(s, 28, 2)+",0x"+Substring(s, 30, 2)+",0x"+Substring(s, 32, 2)+",0x"+Substring(s, 34, 2)+"}}";
  }
  else return FormatError();
}
export function ParseError(){
  throw new FormatException("New_1", "Unrecognized Guid format.");
}
export function ShapeError(){
  throw new FormatException("New_1", "Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
}
export function HexaError(){
  throw new FormatException("New_1", "Hexadecimal Guid printing not implemented by WebSharper.");
}
export function FormatError(){
  throw new FormatException("New_1", "Format String can be only \"D\", \"d\", \"N\", \"n\", \"P\", \"p\", \"B\", \"b\", \"X\" or \"x\".");
}
