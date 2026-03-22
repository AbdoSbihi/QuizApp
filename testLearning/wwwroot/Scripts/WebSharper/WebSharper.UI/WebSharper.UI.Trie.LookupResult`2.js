export function Found(value, remainder){
  return{
    $:0, 
    $0:value, 
    $1:remainder
  };
}
export let NotFound={$:1};
