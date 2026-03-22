import WeakRef from "./WebSharper.UI.WeakRef`1"
export function tryBack(index:number):boolean
export function markPrev(index:number):void
export function install(nav:{Get:(() => number),Set:((a:number) => void)}):number
export function markState():void
export function flowPrevStateName():string
export function flowStateName():string
export function flowVars():(WeakRef<{Get:(() => number),Set:((a:number) => void)}>)[]
