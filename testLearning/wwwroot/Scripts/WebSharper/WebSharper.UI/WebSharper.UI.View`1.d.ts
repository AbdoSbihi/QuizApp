import Snap from "./WebSharper.UI.Snap`1"
export interface View<T0>{
  $:0;
  $0:(() => Snap<T0>);
}
export type View_T<T0> = (View_1<T0> & (View<T0>))
export default class View_1<T0>{
  static View<T0>(Item:(() => Snap<T0>)):View_T<T0>
  get V():T0
  $;
  $0;
}
