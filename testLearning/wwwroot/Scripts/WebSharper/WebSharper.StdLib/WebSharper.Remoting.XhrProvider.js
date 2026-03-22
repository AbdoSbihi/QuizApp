import Object from "./System.Object.js"
import { ajax } from "./WebSharper.Remoting.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class XhrProvider extends Object {
  static {
    _c=_i(this);
  }
  Sync(url, headers, data){
    const res=[null];
    ajax(false, url, headers, data, (x) => {
      res[0]=x;
    }, (e) => {
      throw e;
    }, () => {
      ajax(false, url, headers, data, (x) => {
        res[0]=x;
      }, (e) => {
        throw e;
      }, void 0);
    });
    return res[0];
  }
  Async(url, headers, data, ok, err){
    ajax(true, url, headers, data, ok, err, () => {
      ajax(true, url, headers, data, ok, err, void 0);
    });
  }
});
export default _c;
