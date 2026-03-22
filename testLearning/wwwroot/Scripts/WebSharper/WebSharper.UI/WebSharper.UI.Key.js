import { Int } from "./WebSharper.UI.Abbrev.Fresh.js"
export function Key(Item){
  return{$:0, $0:Item};
}
export function Fresh(){
  return Key(Int());
}
