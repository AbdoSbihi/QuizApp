import { New } from "./WebSharper.UI.Input.MousePosSt.js"
import Var from "./WebSharper.UI.Var.js"
import { New as New_1 } from "./WebSharper.UI.Input.MouseBtnSt.js"
import { MouseBtnSt, KeyListenerState } from "./WebSharper.UI.Input.js"
import { New as New_2 } from "./WebSharper.UI.Input.KeyListenerSt.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { exists, append, ofArray, filter } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Input {
  static {
    _c=_i(this);
  }
  static ActivateKeyListener;
  static KeyListenerState;
  static ActivateButtonListener;
  static MouseBtnSt;
  static MousePosSt;
  static {
    this.MousePosSt=New(false, Var.Create_1([0, 0]));
    this.MouseBtnSt=New_1(false, Var.Create_1(false), Var.Create_1(false), Var.Create_1(false));
    const buttonListener=(evt, down) => {
      const m=evt.button;
      return m===0?Var.Set(MouseBtnSt().Left, down):m===1?Var.Set(MouseBtnSt().Middle, down):m===2?Var.Set(MouseBtnSt().Right, down):null;
    };
    let _1=!MouseBtnSt().Active?(MouseBtnSt().Active=true,globalThis.document.addEventListener("mousedown", (evt) => buttonListener(evt, true)),globalThis.document.addEventListener("mouseup", (evt) => buttonListener(evt, false))):null;
    this.ActivateButtonListener=_1;
    this.KeyListenerState=New_2(Var.Create_1(FSharpList.Empty), false, Var.Create_1(-1));
    this.ActivateKeyListener=!KeyListenerState().KeyListenerActive?(KeyListenerState().KeyListenerActive=true,globalThis.document.addEventListener("keydown", (evt) => {
      const keyCode=evt.which;
      const keyCode_1=keyCode===null?evt.keyCode:keyCode;
      Var.Set(KeyListenerState().LastPressed, keyCode_1);
      const xs=KeyListenerState().KeysPressed.Get();
      return!exists((x) => x===keyCode_1, xs)?KeyListenerState().KeysPressed.Set(append(xs, ofArray([keyCode_1]))):null;
    }),globalThis.document.addEventListener("keyup", (evt) => {
      const keyCode=evt.which;
      const keyCode_1=keyCode===null?evt.keyCode:keyCode;
      let _2=KeyListenerState().KeysPressed;
      const p=(x) => x!==keyCode_1;
      return Var.Update(_2, (l) => filter(p, l));
    })):null;
  }
});
export default _c;
