import CT from "./WebSharper.Concurrency.CT"
import AsyncBody from "./WebSharper.Concurrency.AsyncBody`1"
import CancellationTokenSource from "./System.Threading.CancellationTokenSource"
import Scheduler from "./WebSharper.Concurrency.Scheduler"
export default class $StartupCode_Concurrency {
  static GetCT:((a:AsyncBody<CT>) => void);
  static Zero:((a:AsyncBody<void>) => void);
  static defCTS:[CancellationTokenSource];
  static scheduler:Scheduler;
  static noneCT:CT;
}
