import { Bind, Return } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import AjaxRemotingProvider from "../WebSharper.StdLib/WebSharper.Remoting.AjaxRemotingProvider.js"
export function DoSomething(input){
  return Bind((new AjaxRemotingProvider()).Async("Server/DoSomething", [input]), (o) => Return(o));
}
