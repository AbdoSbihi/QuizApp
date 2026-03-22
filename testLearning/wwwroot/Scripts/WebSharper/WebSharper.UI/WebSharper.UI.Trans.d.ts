import Trans from "./WebSharper.UI.Trans`1"
export function Exit<T0>(f:((a?:T0) => {Compute:((a:number) => T0),Duration:number}), tr:Trans<T0>):Trans<T0>
export function Enter<T0>(f:((a?:T0) => {Compute:((a:number) => T0),Duration:number}), tr:Trans<T0>):Trans<T0>
export function Change<T0>(ch:((a?:T0) => ((a?:T0) => {Compute:((a:number) => T0),Duration:number})), tr:Trans<T0>):Trans<T0>
export function Create<T0>(ch:((a:T0, b:T0) => {Compute:((a:number) => T0),Duration:number})):Trans<T0>
export function Trivial<T0>():Trans<T0>
export function CanAnimateExit<T0>(tr:Trans<T0>):boolean
export function CanAnimateEnter<T0>(tr:Trans<T0>):boolean
export function CanAnimateChange<T0>(tr:Trans<T0>):boolean
export function AnimateExit<T0>(tr:Trans<T0>, x:T0):{Compute:((a:number) => T0),Duration:number}
export function AnimateEnter<T0>(tr:Trans<T0>, x:T0):{Compute:((a:number) => T0),Duration:number}
export function AnimateChange<T0>(tr:Trans<T0>, x:T0, y:T0):{Compute:((a:number) => T0),Duration:number}
