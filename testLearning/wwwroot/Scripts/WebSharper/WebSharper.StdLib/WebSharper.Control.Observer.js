export function New(f, e, c){
  return{
    OnNext(x){
      return f(x);
    }, 
    OnError(x){
      return e(x);
    }, 
    OnCompleted(){
      return c();
    }
  };
}
export function Of(f){
  return{
    OnNext(x){
      return f(x);
    }, 
    OnError(x){
      throw x;
    }, 
    OnCompleted(){
      return null;
    }
  };
}
