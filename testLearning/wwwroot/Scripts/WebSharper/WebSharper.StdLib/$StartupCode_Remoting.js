import XhrProvider from "./WebSharper.Remoting.XhrProvider.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
export default _c;
