import { Sink } from "./WebSharper.UI.View.js"
export function applyTypedVarHole(bind, v, el){
  const p=bind(v);
  p[0](el);
  Sink(p[1](el), p[2]);
}
