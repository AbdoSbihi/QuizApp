import InvalidOperationException from "./System.InvalidOperationException.js"
import ArgumentException from "./System.ArgumentException.js"
import ArgumentOutOfRangeException from "./System.ArgumentOutOfRangeException.js"
import { length, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
export function sortByKeys(keys, items, index, length_1, comp){
  sortInternal(keys, index, length_1, comp, (_1, _2) => {
    const k=keys[_1];
    keys[_1]=keys[_2];
    keys[_2]=k;
    const v=items[_1];
    items[_1]=items[_2];
    items[_2]=v;
  });
}
export function sortSub(keys, index, length_1, comp){
  sortInternal(keys, index, length_1, comp, (_1, _2) => {
    const k=keys[_1];
    keys[_1]=keys[_2];
    keys[_2]=k;
  });
}
export function sortInternal(keys, index, length_1, comp, swap){
  function quicksort(l, r){
    while(true)
      {
        let i;
        if(l<r){
          const pivot=keys[r];
          i=l-1;
          for(let j=l, _1=r-1;j<=_1;j++)if(comp(keys[j], pivot)<0){
            i=i+1;
            swap(i, j);
          }
          if(comp(keys[r], keys[i+1])<0)swap(i+1, r);
          const p=i+1;
          quicksort(l, p-1);
          l=p+1;
        }
        else return null;
      }
  }
  quicksort(index, index+length_1-1);
}
export function binarySearchComparer(needle){
  return needle.CompareTo0?(o) => needle.CompareTo0(o):(x) => {
    if(x.CompareTo0)return-x.CompareTo0(needle);
    else throw new InvalidOperationException("New_2", "Failed to compare two elements in the array.", new ArgumentException("New_2", "At least one object must implement IComparable."));
  };
}
export function binarySearch(haystack, comparer, start, finish){
  if(start<0)throw new ArgumentOutOfRangeException("New", "index", "Non-negative number required.");
  if(finish>length(haystack))throw new ArgumentException("New_2", "Offset and length were out of bounds for the array or count is greater than the number of elements from index to the end of the source collection.");
  if(finish<start)throw new ArgumentOutOfRangeException("New", "length", "Non-negative number required.");
  function search(left, right){
    while(true)
      {
        if(left>right)return~left;
        else {
          const pivot=(left+right)/2>>0;
          const cmp=comparer(get(haystack, pivot));
          if(left===right)return cmp===0?left:cmp>0?~(left+1):~left;
          else if(cmp<=0)right=pivot;
          else left=pivot+1;
        }
      }
  }
  return search(start, finish-1);
}
