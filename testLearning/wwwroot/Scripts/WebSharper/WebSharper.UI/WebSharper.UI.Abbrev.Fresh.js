import $StartupCode_Abbrev from "./$StartupCode_Abbrev.js"
export function Id(){
  set_counter(counter()+1);
  return"uid"+String(counter());
}
export function Int(){
  set_counter(counter()+1);
  return counter();
}
export function counter(){
  return $StartupCode_Abbrev.counter;
}
export function set_counter(_1){
  $StartupCode_Abbrev.counter=_1;
}
