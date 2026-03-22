import Route from "./WebSharper.Sitelets.Route"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
export function op_Addition(a:Router, b:Router):Router
export function op_Division(before:Router, after:Router):Router
export function FromString(name:string):Router
export function New(Parse, Segment)
export default interface Router {
  Parse:((a:Route) => IEnumerable<Route>);
  Segment:IEnumerable<Route>;
}
