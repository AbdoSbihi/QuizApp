import { zeroCreate2D, set2D, get2D } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export function init(n, m, f){
  const array=zeroCreate2D(n, m);
  for(let i=0, _1=n-1;i<=_1;i++)for(let j=0, _2=m-1;j<=_2;j++)set2D(array, i, j, f(i, j));
  return array;
}
export function iter(f, array){
  for(let i=0, _1=array.length-1;i<=_1;i++)for(let j=0, _2=(array.length?array[0].length:0)-1;j<=_2;j++)f(get2D(array, i, j));
}
export function iteri(f, array){
  for(let i=0, _1=array.length-1;i<=_1;i++)for(let j=0, _2=(array.length?array[0].length:0)-1;j<=_2;j++)f(i, j, get2D(array, i, j));
}
export function map(f, array){
  return init(array.length, array.length?array[0].length:0, (_1, _2) => f(get2D(array, _1, _2)));
}
export function mapi(f, array){
  return init(array.length, array.length?array[0].length:0, (_1, _2) => f(_1, _2, get2D(array, _1, _2)));
}
export function copy(array){
  return init(array.length, array.length?array[0].length:0, (_1, _2) => get2D(array, _1, _2));
}
