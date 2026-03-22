export function isIAjaxProvider(x):x is IAjaxProvider
export default interface IAjaxProvider {
  Async(a:string, b, c:string, d:((a:string) => void), e:((a:Error) => void)):void
  Sync(a:string, b, c:string):string
}
