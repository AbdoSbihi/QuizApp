import LocalStorageBackend from "./WebSharper.UI.Storage.LocalStorageBackend`1.js"
import ArrayStorage from "./WebSharper.UI.Storage.ArrayStorage`1.js"
export function LocalStorage(id, serializer){
  return new LocalStorageBackend(id, serializer);
}
export function InMemory(init){
  return new ArrayStorage(init);
}
