import ArgumentException from "./System.ArgumentException.js"
import KeyNotFoundException from "./System.Collections.Generic.KeyNotFoundException.js"
export function getHashCode(c, x){
  return c.CGetHashCode(x);
}
export function equals(c){
  return(_1, _2) => c.CEquals(_1, _2);
}
export function alreadyAdded(){
  throw new ArgumentException("New_2", "An item with the same key has already been added.");
}
export function notPresent(){
  throw new KeyNotFoundException("New");
}
