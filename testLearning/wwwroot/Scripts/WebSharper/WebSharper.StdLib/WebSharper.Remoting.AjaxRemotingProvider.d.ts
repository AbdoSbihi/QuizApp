import AsyncBody from "./WebSharper.Concurrency.AsyncBody`1"
import Task from "./System.Threading.Tasks.Task`1"
import Object from "./System.Object"
import IRemotingProvider from "./WebSharper.Remoting.IRemotingProvider"
export default class AjaxRemotingProvider extends Object implements IRemotingProvider {
  get Headers():([string, string])[]
  get EndPoint():string
  AsyncBase(m:string, data:(any)[]):((a:AsyncBody<any>) => void)
  Send(m:string, data:(any)[]):void
  Task(m:string, data:(any)[]):Task<any>
  Async(m:string, data:(any)[]):((a:AsyncBody<any>) => void)
  Sync(m:string, data:(any)[])
}
