import { Delay, Bind, Zero, Start } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import { Equals } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.Unchecked.js"
export function StartProcessor(procAsync){
  const st=[0];
  function work(){
    return Delay(() => Bind(procAsync, () => {
      const m=st[0];
      return Equals(m, 1)?(st[0]=0,Zero()):Equals(m, 2)?(st[0]=1,work()):Zero();
    }));
  }
  return() => {
    const m=st[0];
    if(Equals(m, 0)){
      st[0]=1;
      Start(work(), null);
    }
    else Equals(m, 1)?st[0]=2:void 0;
  };
}
