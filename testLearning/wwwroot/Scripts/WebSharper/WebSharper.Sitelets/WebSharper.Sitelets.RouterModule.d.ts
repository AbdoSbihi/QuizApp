import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Router from "./WebSharper.Sitelets.Router`1"
import { FSharpList_T } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Router_1 from "./WebSharper.Sitelets.Router"
import AsyncBody from "../WebSharper.StdLib/WebSharper.Concurrency.AsyncBody`1"
import Route from "./WebSharper.Sitelets.Route"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2"
import IRouter from "./WebSharper.Sitelets.IRouter`1"
export function Cast<T0, T1>(tryParseCast:((a?:T0) => FSharpOption<T1>), tryWriteCast:((a?:T1) => FSharpOption<T0>), router:Router<T0>):Router<T1>
export function Unbox<T0>(tryUnbox:((a:any) => FSharpOption<T0>), router:Router<any>):Router<T0>
export function Box<T0>(tryUnbox:((a:any) => FSharpOption<T0>), router:Router<T0>):Router<any>
export function List<T0>(item:Router<T0>):Router<FSharpList_T<T0>>
export function Option<T0>(item:Router<T0>):Router<FSharpOption<T0>>
export function Nullable<T0>(item:Router<T0>):Router<T0>
export function Array<T0>(item:Router<T0>):Router<(T0)[]>
export function Delay<T0>(getRouter:(() => Router<T0>)):Router<T0>
export function Single<T0>(endpoint:T0, route:string):Router<T0>
export function Table<T0>(mapping:IEnumerable<[T0, string]>):Router<T0>
export function Sum<T0>(routers:IEnumerable<Router<T0>>):Router<T0>
export function MapTo<T0>(value:T0, router:Router_1):Router<T0>
export function Filter<T0>(predicate:((a?:T0) => boolean), router:Router<T0>):Router<T0>
export function TryMap<T0, T1>(decode:((a?:T0) => FSharpOption<T1>), encode:((a?:T1) => FSharpOption<T0>), router:Router<T0>):Router<T1>
export function Map<T0, T1>(decode:((a?:T0) => T1), encode:((a?:T1) => T0), router:Router<T0>):Router<T1>
export function Embed<T0, T1>(decode:((a?:T0) => T1), encode:((a?:T1) => FSharpOption<T0>), router:Router<T0>):Router<T1>
export function Slice<T0, T1>(decode:((a?:T0) => FSharpOption<T1>), encode:((a?:T1) => T0), router:Router<T0>):Router<T1>
export function HashLink<T0>(router:Router<T0>, endpoint:T0):string
export function Fetch<T0>(router:Router<T0>, endpoint:T0):Promise<Response>
export function FetchWith<T0>(baseUrl:FSharpOption<string>, options:Request, router:Router<T0>, endpoint:T0):Promise<Response>
export function XHR<T0>(router:Router<T0>, endpoint:T0):((a:AsyncBody<string>) => void)
export function XHRWith<T0>(conf:{ResponseT:XMLHttpRequestResponseType,Url:string,IsAsync:boolean,Username:string,Password:string,Timeout:number,WithCredentials:boolean}, router:Router<T0>, endpoint:T0):((a:AsyncBody<string>) => void)
export function Link<T0>(router:Router<T0>, endpoint:T0):string
export function TryLink<T0>(router:Router<T0>, endpoint:T0):FSharpOption<string>
export function Write<T0>(router:Router<T0>, endpoint:T0):FSharpOption<Route>
export function Parse<T0>(router:Router<T0>, path:Route):FSharpOption<T0>
export function FormData<T0>(item:Router<T0>):Router<T0>
export function Body<T0>(deserialize:((a:string) => FSharpOption<T0>), serialize:((a?:T0) => string)):Router<T0>
export function Method(m:string):Router_1
export function QueryNullable<T0>(key:string, item:Router<T0>):Router<T0>
export function QueryOption<T0>(key:string, item:Router<T0>):Router<FSharpOption<T0>>
export function Query<T0>(key:string, item:Router<T0>):Router<T0>
export function CreateWithQuery<T0>(ser:((a?:T0) => [FSharpList_T<string>, FSharpMap<string, string>]), des:((a:FSharpList_T<string>, b:FSharpMap<string, string>) => FSharpOption<T0>)):Router<T0>
export function Create<T0>(ser:((a?:T0) => FSharpList_T<string>), des:((a:FSharpList_T<string>) => FSharpOption<T0>)):Router<T0>
export function New<T0>(route:((a:any) => FSharpOption<T0>), link:((a?:T0) => FSharpOption<any>)):IRouter<T0>
export function Empty():Router<any>
