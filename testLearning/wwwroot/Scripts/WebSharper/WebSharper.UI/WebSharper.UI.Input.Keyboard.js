import { ActivateKeyListener, KeyListenerState } from "./WebSharper.UI.Input.js"
import { Map } from "./WebSharper.UI.View.js"
import { exists } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
export function IsPressed(key){
  ActivateKeyListener();
  const p=(x) => x===key;
  return Map((l) => exists(p, l), KeyListenerState().KeysPressed.View);
}
export function get_LastPressed(){
  ActivateKeyListener();
  return KeyListenerState().LastPressed.View;
}
export function get_KeysPressed(){
  ActivateKeyListener();
  return KeyListenerState().KeysPressed.View;
}
