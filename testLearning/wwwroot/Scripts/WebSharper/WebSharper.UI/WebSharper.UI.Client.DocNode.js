export function TreeDoc(Item){
  return{$:6, $0:Item};
}
export function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
export function TextDoc(Item){
  return{$:4, $0:Item};
}
export function EmbedDoc(Item){
  return{$:2, $0:Item};
}
export function ElemDoc(Item){
  return{$:1, $0:Item};
}
export function AppendDoc(Item1, Item2){
  return{
    $:0, 
    $0:Item1, 
    $1:Item2
  };
}
