import { ofArray } from "./Microsoft.FSharp.Collections.ListModule.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class Pervasives {
  static {
    _c=_i(this);
  }
  static longMonths;
  static shortMonths;
  static longDays;
  static shortDays;
  static {
    this.shortDays=ofArray(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
    this.longDays=ofArray(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    this.shortMonths=ofArray(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    this.longMonths=ofArray(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
  }
});
export default _c;
