import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1.js"
import { filter, create } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
export function Filter(ok, set){
  return new HashSet("New_2", filter(ok, ToArray(set)));
}
export function Intersect(a, b){
  const set=new HashSet("New_2", ToArray(a));
  set.IntersectWith(ToArray(b));
  return set;
}
export function Except(excluded, included){
  const set=new HashSet("New_2", ToArray(included));
  set.ExceptWith(ToArray(excluded));
  return set;
}
export function ToArray(set){
  const arr=create(set.Count, void 0);
  set.CopyTo(arr, 0);
  return arr;
}
