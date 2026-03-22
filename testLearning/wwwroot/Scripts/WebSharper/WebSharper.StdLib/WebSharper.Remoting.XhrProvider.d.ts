import Object from "./System.Object"
import IAjaxProvider from "./WebSharper.Remoting.IAjaxProvider"
export default class XhrProvider extends Object implements IAjaxProvider {
  Sync(url:string, headers, data:string):string
  Async(url:string, headers, data:string, ok:((a:string) => void), err:((a:Error) => void)):void
}
