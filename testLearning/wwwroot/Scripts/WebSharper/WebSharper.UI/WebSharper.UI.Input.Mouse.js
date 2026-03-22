import { ActivateButtonListener, MouseBtnSt, MousePosSt } from "./WebSharper.UI.Input.js"
import { Apply, Const } from "./WebSharper.UI.View.js"
import Var from "./WebSharper.UI.Var.js"
export function get_MousePressed(){
  ActivateButtonListener();
  return Apply(Apply(Apply(Const((l) =>(m) =>(r) => l||m||r), MouseBtnSt().Left.View), MouseBtnSt().Middle.View), MouseBtnSt().Right.View);
}
export function get_RightPressed(){
  ActivateButtonListener();
  return MouseBtnSt().Right.View;
}
export function get_MiddlePressed(){
  ActivateButtonListener();
  return MouseBtnSt().Middle.View;
}
export function get_LeftPressed(){
  ActivateButtonListener();
  return MouseBtnSt().Left.View;
}
export function get_Position(){
  !MousePosSt().Active?(globalThis.document.addEventListener("mousemove", (evt) => Var.Set(MousePosSt().PosV, [evt.clientX, evt.clientY])),MousePosSt().Active=true):void 0;
  return MousePosSt().PosV.View;
}
