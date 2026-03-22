import { setSub, sub2D, set, get2D, set2D, get, setSub2D } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export function string(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?"":source.slice(0, f+1);
    }
    else return"";
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    const s=start.$0;
    return f_1<0?"":source.slice(s, f_1+1);
  }
}
export function array(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?[]:source.slice(0, f+1);
    }
    else return[];
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    const s=start.$0;
    return f_1<0?[]:source.slice(s, f_1+1);
  }
}
export function setArray(dst, start, finish, src){
  const start_1=start!=null&&start.$==1?start.$0:0;
  setSub(dst, start_1, (finish!=null&&finish.$==1?finish.$0:dst.length-1)-start_1+1, src);
}
export function array2D(arr, start1, finish1, start2, finish2){
  const start1_1=start1!=null&&start1.$==1?start1.$0:0;
  const start2_1=start2!=null&&start2.$==1?start2.$0:0;
  return sub2D(arr, start1_1, start2_1, (finish1!=null&&finish1.$==1?finish1.$0:arr.length-1)-start1_1+1, (finish2!=null&&finish2.$==1?finish2.$0:(arr.length?arr[0].length:0)-1)-start2_1+1);
}
export function array2Dfix1(arr, fixed1, start2, finish2){
  const start2_1=start2!=null&&start2.$==1?start2.$0:0;
  const finish2_1=finish2!=null&&finish2.$==1?finish2.$0:(arr.length?arr[0].length:0)-1;
  const len2=finish2_1-start2_1+1;
  const dst=new Array(len2);
  for(let j=0, _1=len2-1;j<=_1;j++)set(dst, j, get2D(arr, fixed1, start2_1+j));
  return dst;
}
export function array2Dfix2(arr, start1, finish1, fixed2){
  const start1_1=start1!=null&&start1.$==1?start1.$0:0;
  const finish1_1=finish1!=null&&finish1.$==1?finish1.$0:arr.length-1;
  const len1=finish1_1-start1_1+1;
  const dst=new Array(len1);
  for(let i=0, _1=len1-1;i<=_1;i++)set(dst, i, get2D(arr, start1_1+i, fixed2));
  return dst;
}
export function setArray2Dfix1(dst, fixed1, start2, finish2, src){
  const start2_1=start2!=null&&start2.$==1?start2.$0:0;
  const finish2_1=finish2!=null&&finish2.$==1?finish2.$0:(dst.length?dst[0].length:0)-1;
  for(let j=0, _1=finish2_1-start2_1+1-1;j<=_1;j++)set2D(dst, fixed1, start2_1+j, get(src, j));
}
export function setArray2Dfix2(dst, start1, finish1, fixed2, src){
  const start1_1=start1!=null&&start1.$==1?start1.$0:0;
  const finish1_1=finish1!=null&&finish1.$==1?finish1.$0:dst.length-1;
  for(let i=0, _1=finish1_1-start1_1+1-1;i<=_1;i++)set2D(dst, start1_1+i, fixed2, get(src, i));
}
export function setArray2D(dst, start1, finish1, start2, finish2, src){
  const start1_1=start1!=null&&start1.$==1?start1.$0:0;
  const start2_1=start2!=null&&start2.$==1?start2.$0:0;
  setSub2D(dst, start1_1, start2_1, (finish1!=null&&finish1.$==1?finish1.$0:dst.length-1)-start1_1+1, (finish2!=null&&finish2.$==1?finish2.$0:(dst.length?dst[0].length:0)-1)-start2_1+1, src);
}
