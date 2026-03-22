import AggregateException from "./System.AggregateException"
import Task_1 from "./System.Threading.Tasks.Task"
export default class Task<T0>extends Task_1 {
  func:(() => T0);
  result:T0;
  get Result():T0
  Execute():void
  constructor(i:"New_3", func:(() => T0))
  constructor(i:"New_2", func:(() => T0), ct:{c:boolean,r:(() => void)[]})
  constructor(i:"New_1", func:((a:any) => T0), obj)
  constructor(i:"New", func:((a:any) => T0), obj, ct:{c:boolean,r:(() => void)[]})
  constructor(i:"New_4", func:(() => T0), token:{c:boolean,r:(() => void)[]}, status:number, exc:AggregateException, result:T0)
}
