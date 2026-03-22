export function isIDelegateEvent(x){
  return"AddHandler"in x&&"RemoveHandler"in x;
}
