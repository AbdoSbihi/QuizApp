import { New } from "./WebSharper.LazyExtensionsProxy.LazyRecord`1.js"
export function Force(x){
  return x.f();
}
export function CreateFromValue(v){
  return New(true, v, cachedLazy);
}
export function Create(f){
  return New(false, f, forceLazy);
}
export function forceLazy(){
  const v=this.v();
  this.c=true;
  this.v=v;
  this.f=cachedLazy;
  return v;
}
export function cachedLazy(){
  return this.v;
}
