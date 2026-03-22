import Router from "../WebSharper.Sitelets/WebSharper.Sitelets.Router`1"
import Var from "./WebSharper.UI.Var`1"
import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import Route from "../WebSharper.Sitelets/WebSharper.Sitelets.Route"
export function InstallHash<T0>(onParseError:T0, router:Router<T0>):Var<T0>
export function InstallHashInto<T0>(var_1:Var<T0>, onParseError:T0, router:Router<T0>):void
export function getCurrentHash<T0>(parse:((a:string) => FSharpOption<T0>), onParseError:T0):T0
export function Install<T0>(onParseError:T0, router:Router<T0>):Var<T0>
export function InstallInto<T0>(var_1:Var<T0>, onParseError:T0, router:Router<T0>):void
export function findLinkHref(n:Element):FSharpOption<string>
export function hrefToAbsolute(href:string):FSharpOption<string>
export function trimFragment(url:string):string
export function getCurrent<T0>(parse:((a:Route) => FSharpOption<T0>), onParseError:T0):T0
