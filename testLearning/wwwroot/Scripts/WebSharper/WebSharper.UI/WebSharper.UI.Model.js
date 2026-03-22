import Var from "./WebSharper.UI.Var.js"
import Model from "./WebSharper.UI.Model`2.js"
export function Update(update, m){
  Var.Update(m.u0076ar, (x) => {
    update(x);
    return x;
  });
}
export function Create(proj, init){
  return new Model("New", proj, init);
}
