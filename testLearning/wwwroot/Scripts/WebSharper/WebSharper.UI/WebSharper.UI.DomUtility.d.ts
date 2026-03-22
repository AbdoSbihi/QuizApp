export function ParseHTMLIntoFakeRoot(elem:string):Element
export function defaultWrap():[number, string, string]
export function wrapMap():{[a:string]:[number, string, string]}
export function rhtml():RegExp
export function rtagName():RegExp
export function rxhtmlTag():RegExp
export function IterSelectorDoc(selector:string, f:((a:Element) => void)):void
export function IterSelector(el:Element, selector:string, f:((a:Element) => void)):void
export function ChildrenArray(element:Element):Node[]
export function RemoveClass(element:Element, cl:string):void
export function AddClass(element:Element, cl:string):void
export function setClass(element:Element, value:string):void
export function getClass(element:Element):string
export function clsRE(cls:string):RegExp
export function InsertAt(parent:Element, pos:Node, node:Node):void
export function RemoveNode(parent:Element, el:Node):void
