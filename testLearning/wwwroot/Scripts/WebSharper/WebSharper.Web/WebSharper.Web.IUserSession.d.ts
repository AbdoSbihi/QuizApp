import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
export function isIUserSession(x):x is IUserSession
export default interface IUserSession {
  WebSharper_Web_IUserSession$GetLoggedInUser():((a:AsyncBody<FSharpOption<string>>) => void)
  WebSharper_Web_IUserSession$LoginUser(a:string, b:FSharpOption<boolean>):((a:AsyncBody<void>) => void)
  WebSharper_Web_IUserSession$LoginUser_1(a:string, b:number):((a:AsyncBody<void>) => void)
  WebSharper_Web_IUserSession$Logout():((a:AsyncBody<void>) => void)
  get WebSharper_Web_IUserSession$IsAvailable():boolean
}
