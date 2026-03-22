import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import HashSet from "../WebSharper.StdLib/System.Collections.Generic.HashSet`1"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
export function failNotLoaded(name:string):void
export function fill(fillWith:Element, p:Node, n:Node):void
export function fillTextHole(instance:Element, fillWith:string, templateName:string):FSharpOption<string>
export function removeHolesExcept(instance:Element, dontRemove:HashSet<string>):void
export function fillInstanceAttrs(instance:Element, fillWith:Element):void
export function mapHoles(t:Element, mappings:Dictionary<string, string>):void
export function convertTextNode(n:Node):void
export function convertAttrs(el:Element):void
