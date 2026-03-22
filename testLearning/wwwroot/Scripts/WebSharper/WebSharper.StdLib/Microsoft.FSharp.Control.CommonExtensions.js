export function observer(h){
  return{
    OnCompleted(){
      return null;
    }, 
    OnError(){
      return null;
    }, 
    OnNext(args){
      return h(args);
    }
  };
}
