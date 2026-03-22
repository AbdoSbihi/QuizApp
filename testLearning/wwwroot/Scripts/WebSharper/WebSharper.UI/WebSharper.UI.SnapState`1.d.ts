import ISnap from "./WebSharper.UI.ISnap"
export function Waiting<T0>(Item1:(((a?:T0) => void))[], Item2:((ISnap | (() => void)))[]):SnapState<T0>
export function Ready<T0>(Item1:T0, Item2:((ISnap | (() => void)))[]):SnapState<T0>
export function Forever<T0>():SnapState<T0>
export function Forever<T0>(Item:T0):SnapState<T0>
export interface Forever<T0>{
  $:0;
  $0:T0;
}
export interface Ready<T0>{
  $:2;
  $0:T0;
  $1:((ISnap | (() => void)))[];
}
export interface Waiting<T0>{
  $:3;
  $0:(((a?:T0) => void))[];
  $1:((ISnap | (() => void)))[];
}
export type SnapState<T0> = (Forever<T0> | null | Ready<T0> | Waiting<T0>)
