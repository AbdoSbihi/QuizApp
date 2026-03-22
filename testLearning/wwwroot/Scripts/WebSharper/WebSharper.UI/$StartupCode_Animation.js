import Easing from "./WebSharper.UI.Easing.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=Easing.Custom((t) => {
      const t2=t*t;
      return 3*t2-2*(t2*t);
    });
    this.UseAnimations=true;
  }
});
export default _c;
