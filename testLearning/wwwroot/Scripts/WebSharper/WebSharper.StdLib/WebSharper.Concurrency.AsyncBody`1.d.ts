import { Result } from "./WebSharper.Concurrency.Result`1"
import CT from "./WebSharper.Concurrency.CT"
export function New<T0>(k, ct)
export default interface AsyncBody<T0>{
  k:((a:Result<T0>) => void);
  ct:CT;
}
