import Snap from "./WebSharper.UI.Snap`1"
export default interface LazyView<T0>{
  c:Snap<T0>;
  o:(() => Snap<T0>);
}
