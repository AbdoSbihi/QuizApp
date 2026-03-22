import ErrorTextWriter from "./WebSharper.Console.ErrorTextWriter.js"
import OutTextWriter from "./WebSharper.Console.OutTextWriter.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Console {
  static {
    _c=_i(this);
  }
  static outWriter;
  static errorWriter;
  static {
    this.errorWriter=new ErrorTextWriter();
    this.outWriter=new OutTextWriter();
  }
});
export default _c;
