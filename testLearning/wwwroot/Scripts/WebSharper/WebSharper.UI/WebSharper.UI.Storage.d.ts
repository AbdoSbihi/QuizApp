import Storage from "./WebSharper.UI.Storage`1"
export function LocalStorage<T0>(id:string, serializer:{Encode:((a?:T0) => any),Decode:((a:any) => T0)}):Storage<T0>
export function InMemory<T0>(init:(T0)[]):Storage<T0>
