import { New } from "./WebSharper.Concurrency.CT.js"
import Scheduler from "./WebSharper.Concurrency.Scheduler.js"
import CancellationTokenSource from "./System.Threading.CancellationTokenSource.js"
import { Return } from "./WebSharper.Concurrency.js"
import { Ok } from "./WebSharper.Concurrency.Result`1.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New(false, []);
    this.scheduler=new Scheduler();
    this.defCTS=[new CancellationTokenSource()];
    this.Zero=Return();
    this.GetCT=(c) => {
      c.k(Ok(c.ct));
    };
  }
});
export default _c;
