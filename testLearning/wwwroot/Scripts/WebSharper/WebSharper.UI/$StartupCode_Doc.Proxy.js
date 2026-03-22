import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class Proxy {
  static {
    _c=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
export default _c;
