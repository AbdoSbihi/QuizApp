import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Get } from "./WebSharper.Enumerator.js"
import T from "./WebSharper.Enumerator.T`2.js"
export function createEvent(add, remove, create){
  return{
    AddHandler(h){
      return add(h);
    }, 
    RemoveHandler(h){
      return remove(h);
    }, 
    Subscribe(r){
      const h=create(() =>(args) => r.OnNext(args));
      add(h);
      return{Dispose(){
        return remove(h);
      }};
    }
  };
}
export function enumWhile(f, s){
  return{GetEnumerator:() => {
    function next(en){
      while(true)
        {
          const m=en.s;
          if(Equals(m, null)){
            if(f()){
              en.s=Get(s);
              en=en;
            }
            else return false;
          }
          else if(m.MoveNext()){
            en.c=m.Current;
            return true;
          }
          else {
            m.Dispose();
            en.s=null;
            en=en;
          }
        }
    }
    return new T(null, null, next, (en) => {
      const x=en.s;
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
export function enumFunc(c, n, v){
  return{GetEnumerator:() => {
    const st=c();
    return new T(st, null, (e) => n(st)&&(e.c=v(st),true), void 0);
  }};
}
export function enumTryWith(s, f, h){
  return{GetEnumerator:() => {
    let enum_1;
    let orig;
    enum_1=null;
    orig=true;
    return new T(null, null, (e) => {
      try {
        Equals(enum_1, null)?enum_1=Get(s):void 0;
        return enum_1.MoveNext()&&(e.c=enum_1.Current,true);
      }
      catch(m){
        if(orig&&f(m)===1){
          orig=false;
          const x=enum_1;
          if(!Equals(x, null))x.Dispose();
          enum_1=Get(h(m));
          return enum_1.MoveNext()&&(e.c=enum_1.Current,true);
        }
        else throw m;
      }
    }, () => {
      const x=enum_1;
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
export function enumUsing(x, f){
  return{GetEnumerator:() => {
    let enum_1;
    try {
      enum_1=Get(f(x));
    }
    catch(e){
      let c=x;
      c.Dispose();
      throw e;
    }
    return new T(null, null, (e_1) => enum_1.MoveNext()&&(e_1.c=enum_1.Current,true), () => {
      let c_1;
      enum_1.Dispose();
      c_1=x;
      c_1.Dispose();
    });
  }};
}
export function enumFinally(s, f){
  return{GetEnumerator:() => {
    let enum_1;
    try {
      enum_1=Get(s);
    }
    catch(e){
      f();
      throw e;
    }
    return new T(null, null, (e_1) => enum_1.MoveNext()&&(e_1.c=enum_1.Current,true), () => {
      enum_1.Dispose();
      f();
    });
  }};
}
