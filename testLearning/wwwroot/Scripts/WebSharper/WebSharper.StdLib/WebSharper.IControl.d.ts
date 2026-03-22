import IControlBody from "./WebSharper.IControlBody"
export function isIControl(x):x is IControl
export default interface IControl {
  get Body():IControlBody
}
