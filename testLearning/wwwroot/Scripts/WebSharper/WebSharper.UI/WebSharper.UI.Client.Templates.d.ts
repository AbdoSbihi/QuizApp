import { FSharpOption } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1"
import TemplateHole from "./WebSharper.UI.TemplateHole"
import IEnumerable from "../WebSharper.StdLib/System.Collections.Generic.IEnumerable`1"
import Doc from "./WebSharper.UI.Doc"
import { DocNode } from "./WebSharper.UI.Client.DocNode"
import DocElemNode from "./WebSharper.UI.Client.DocElemNode"
import Dyn from "./WebSharper.UI.Client.Attrs.Dyn"
import { View_T } from "./WebSharper.UI.View`1"
import Dictionary from "../WebSharper.StdLib/System.Collections.Generic.Dictionary`2"
export function GetOrLoadTemplate(baseName:string, name:FSharpOption<string>, fakeroot:(() => Element), fillWith:IEnumerable<TemplateHole>):Doc
export function NamedTemplate(baseName:string, name:FSharpOption<string>, fillWith:IEnumerable<TemplateHole>):Doc
export function RunFullDocTemplate(fillWith:IEnumerable<TemplateHole>):Doc
export function RenderedFullDocTemplate():FSharpOption<Doc>
export function set_RenderedFullDocTemplate(_1:FSharpOption<Doc>):FSharpOption<Doc>
export function LoadLocalTemplates(baseName:string):void
export function LoadNestedTemplates(root:Element, baseName:string):void
export function PrepareTemplate(baseName:string, name:FSharpOption<string>, fakeroot:(() => Element)):void
export function PrepareSingleTemplate(baseName:string, name:FSharpOption<string>, el:Element):((a:FSharpOption<((a:string) => void)>) => void)
export function PrepareTemplateStrict(baseName:string, name:FSharpOption<string>, fakeroot:Element, prepareLocalTemplate:FSharpOption<((a:string) => void)>):void
export function FakeRootSingle(el:Element):Element
export function FakeRootFromHTMLTemplate(parent:HTMLTemplateElement):Element
export function FakeRoot(parent:Element):Element
export function ChildrenTemplate(el:Element, fillWith:IEnumerable<TemplateHole>):Doc
export function InlineTemplate(el:Element, fillWith:IEnumerable<TemplateHole>):[{Els:((Node | DocNode))[],Dirty:boolean,Holes:(DocElemNode)[],Attrs:([Element, Dyn])[],Render:FSharpOption<((a:Element) => void)>,El:FSharpOption<Element>}, View_T<void>]
export function foreachNotPreservedwsDOM(selector:string, f:((a:Element) => void)):void
export function foreachNotPreserved(root:Element, selector:string, f:((a:Element) => void)):void
export function TextHoleRE():string
export function GlobalHoles():Dictionary<string, TemplateHole>
export function set_GlobalHoles(_1:Dictionary<string, TemplateHole>):Dictionary<string, TemplateHole>
export function LocalTemplatesLoaded():boolean
export function set_LocalTemplatesLoaded(_1:boolean):boolean
export function LoadedTemplateFile(name:string):Dictionary<string, Element>
export function LoadedTemplates():Dictionary<string, Dictionary<string, Element>>
