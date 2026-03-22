export function get_Now(){
  let d=new Date();
  return{d:d.getTime(), o:-d.getTimezoneOffset()};
}
export function get_DateTime(this_1){
  return this_1.d;
}
