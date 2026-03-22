import { sub, length, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { blit, init } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import ArgumentNullException from "./System.ArgumentNullException.js"
import ArgumentOutOfRangeException from "./System.ArgumentOutOfRangeException.js"
import IndexOutOfRangeException from "./System.IndexOutOfRangeException.js"
export function reverse(array, offset, length_1){
  const a=sub(array, offset, length_1).slice().reverse();
  blit(a, 0, array, offset, length(a));
}
export function findLastIndexBound(array, startIndex, count, predicate){
  if(array==null)throw new ArgumentNullException("New_1", "array");
  if(predicate==null)throw new ArgumentNullException("New_1", "match");
  if(startIndex<0)throw new ArgumentOutOfRangeException("New", "startIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
  if(count<0||startIndex+count>length(array))throw new ArgumentOutOfRangeException("New", "count", "Count must be positive and count must refer to a location within the string/array/collection.");
  function f(i){
    while(true)
      {
        if(i<startIndex)return -1;
        else if(predicate(get(array, i)))return i;
        else i=i-1;
      }
  }
  return f(startIndex+count-1);
}
export function findIndexBound(array, startIndex, count, predicate){
  if(array==null)throw new ArgumentNullException("New_1", "array");
  if(predicate==null)throw new ArgumentNullException("New_1", "match");
  if(startIndex<0)throw new ArgumentOutOfRangeException("New", "startIndex", "Index was out of range. Must be non-negative and less than the size of the collection.");
  if(count<0||startIndex+count>length(array))throw new ArgumentOutOfRangeException("New", "count", "Count must be positive and count must refer to a location within the string/array/collection.");
  function f(finish, i){
    while(true)
      {
        if(i===finish)return -1;
        else if(predicate(get(array, i)))return i;
        else i=i+1;
      }
  }
  return f(startIndex+count, startIndex);
}
export function constrainedCopy(src, srcIndex, dst, dstIndex, length_1){
  if(src===dst&&dstIndex<=srcIndex+length_1)blit(init(length_1, (i) => get(src, srcIndex+i)), 0, dst, dstIndex, length_1);
  else blit(src, srcIndex, dst, dstIndex, length_1);
}
export function clear(array, index, length_1){
  if(array==null)throw new ArgumentNullException("New_1", "array");
  else void 0;
  if(index<0||length_1<0||index+length_1>length(array))throw new IndexOutOfRangeException("New");
  else void 0;
  for(let i=index, _1=index+length_1-1;i<=_1;i++)array[i]=typeof array[i]=="number"?0:null;
}
