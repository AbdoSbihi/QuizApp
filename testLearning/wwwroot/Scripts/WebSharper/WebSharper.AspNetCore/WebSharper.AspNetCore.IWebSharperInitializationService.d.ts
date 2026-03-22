import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
export function isIWebSharperInitializationService(x):x is IWebSharperInitializationService
export default interface IWebSharperInitializationService {
  get WebSharper_AspNetCore_IWebSharperInitializationService$JsonProvider():FSharpOption<any>
  get WebSharper_AspNetCore_IWebSharperInitializationService$MetadataAndGraph():FSharpOption<[any, any]>
  get WebSharper_AspNetCore_IWebSharperInitializationService$Options()
  get WebSharper_AspNetCore_IWebSharperInitializationService$RemotingServer():FSharpOption<any>
}
