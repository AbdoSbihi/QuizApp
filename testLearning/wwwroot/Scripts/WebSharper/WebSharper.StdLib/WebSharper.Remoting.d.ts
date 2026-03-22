import IAjaxProvider from "./WebSharper.Remoting.IAjaxProvider"
export function ajax(async:boolean, url:string, headers, data:string, ok:((a:string) => void), err:((a:Error) => void), csrf:(() => void)):void
export function makePayload(data:(any)[]):string
export function makeHeaders<T0>(headers:([string, string])[]):T0
export function AjaxProvider():IAjaxProvider
export function set_AjaxProvider(_1:IAjaxProvider):IAjaxProvider
export function UseHttps():boolean
export function EndPoint():string
export function set_EndPoint(_1:string):string
