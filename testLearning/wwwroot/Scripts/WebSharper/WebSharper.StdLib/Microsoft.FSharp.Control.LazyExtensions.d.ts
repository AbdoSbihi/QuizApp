import LazyRecord from "./WebSharper.LazyExtensionsProxy.LazyRecord`1"
export function Force<T0>(x:LazyRecord<T0>):T0
export function CreateFromValue<T0>():LazyRecord<T0>
export function CreateFromValue<T0>(v?:T0):LazyRecord<T0>
export function Create<T0>(f:(() => T0)):LazyRecord<T0>
export function forceLazy<T0>():T0
export function cachedLazy<T0>():((() => any) | any)
