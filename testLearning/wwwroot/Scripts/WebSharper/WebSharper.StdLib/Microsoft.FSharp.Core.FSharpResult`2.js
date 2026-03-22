export function Error(ErrorValue){
  return{$:1, $0:ErrorValue};
}
export function Ok(ResultValue){
  return{$:0, $0:ResultValue};
}
