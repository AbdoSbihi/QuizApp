export function Waiting(Item1, Item2){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2
  };
}
export function Ready(Item1, Item2){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2
  };
}
export function Forever(Item){
  return{$:0, $0:Item};
}
