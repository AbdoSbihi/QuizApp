import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { InvalidOp, FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { init, create } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import IndexOutOfRangeException from "./System.IndexOutOfRangeException.js"
export function checkThis(this_1){
  return Equals(this_1, null)?InvalidOp("The initialization of an object or value resulted in an object or value being accessed recursively before it was fully initialized."):this_1;
}
export function length(arr){
  return arr.dims===2?arr.length*arr.length:arr.length;
}
export function setSub2D(dst, src1, src2, len1, len2, src){
  for(let i=0, _1=len1-1;i<=_1;i++)for(let j=0, _2=len2-1;j<=_2;j++)set2D(dst, src1+i, src2+j, get2D(src, i, j));
}
export function sub2D(src, src1, src2, len1, len2){
  const len1_1=len1<0?0:len1;
  const len2_1=len2<0?0:len2;
  const dst=zeroCreate2D(len1_1, len2_1);
  for(let i=0, _1=len1_1-1;i<=_1;i++)for(let j=0, _2=len2_1-1;j<=_2;j++)set2D(dst, i, j, get2D(src, src1+i, src2+j));
  return dst;
}
export function zeroCreate2D(n, m){
  const arr=init(n, () => create(m, null));
  arr.dims=2;
  return arr;
}
export function set2D(arr, n1, n2, x){
  checkBounds2D(arr, n1, n2);
  arr[n1][n2]=x;
}
export function get2D(arr, n1, n2){
  checkBounds2D(arr, n1, n2);
  return arr[n1][n2];
}
export function setSub(arr, start, len, src){
  for(let i=0, _1=len-1;i<=_1;i++)set(arr, start+i, get(src, i));
}
export function sub(arr, start, length_1){
  checkRange(arr, start, length_1);
  return arr.slice(start, start+length_1);
}
export function get(arr, n){
  checkBounds(arr, n);
  return arr[n];
}
export function set(arr, n, x){
  checkBounds(arr, n);
  arr[n]=x;
}
export function checkRange(arr, start, size){
  if(size<0||start<0||arr.length<start+size)FailWith("Index was outside the bounds of the array.");
}
export function checkBounds2D(arr, n1, n2){
  if(n1<0||n2<0||n1>=arr.length||n2>=(arr.length?arr[0].length:0))throw new IndexOutOfRangeException("New");
}
export function checkBounds(arr, n){
  if(n<0||n>=arr.length)FailWith("Index was outside the bounds of the array.");
}
