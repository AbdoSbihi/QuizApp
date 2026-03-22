import AggregateException from "./System.AggregateException"
import Task_1 from "./System.Threading.Tasks.Task`1"
import Object from "./System.Object"
export default class Task extends Object {
  action:(() => void);
  token:{c:boolean,r:(() => void)[]};
  status:number;
  continuations:(Task)[];
  exc:AggregateException;
  static Yield()
  static WhenAll<T0>(tasks:(Task_1<T0>)[]):Task_1<(T0)[]>
  static WhenAll_1(tasks:(Task)[]):Task
  static WhenAny<T0>(tasks:(Task_1<T0>)[]):Task_1<Task_1<T0>>
  static WhenAny_1(tasks:(Task)[]):Task_1<Task>
  static Delay(time:number, ct:{c:boolean,r:(() => void)[]}):Task
  static Delay_1(time:number):Task
  static Run<T0>(func:(() => Task_1<T0>), ct:{c:boolean,r:(() => void)[]}):Task_1<T0>
  static Run_1<T0>(func:(() => T0), ct:{c:boolean,r:(() => void)[]}):Task_1<T0>
  static Run_2(func:(() => Task), ct:{c:boolean,r:(() => void)[]}):Task
  static Run_3(action:(() => void), ct:{c:boolean,r:(() => void)[]}):Task
  static FromResult<T0>():Task_1<T0>
  static FromResult<T0>(res?:T0):Task_1<T0>
  static FromException<T0>(exc:Error):Task_1<T0>
  static FromException_1(exc:Error):Task
  static FromCanceled<T0>(ct:{c:boolean,r:(() => void)[]}):Task_1<T0>
  static FromCanceled_1(ct:{c:boolean,r:(() => void)[]}):Task
  Start():void
  StartContinuation():void
  ContinueWith<T0>(func:((a:Task) => T0), ct:{c:boolean,r:(() => void)[]}):Task_1<T0>
  ContinueWith_1(action:((a:Task) => void), ct:{c:boolean,r:(() => void)[]}):Task
  RunContinuations():void
  OnCompleted(cont:(() => void)):void
  get Status():number
  get IsFaulted():boolean
  get IsCompleted():boolean
  get IsCanceled():boolean
  get Exception():AggregateException
  Execute():void
  constructor(i:"New_3", action:(() => void))
  constructor(i:"New_2", action:(() => void), ct:{c:boolean,r:(() => void)[]})
  constructor(i:"New_1", action:((a:any) => void), obj)
  constructor(i:"New", action:((a:any) => void), obj, ct:{c:boolean,r:(() => void)[]})
  constructor(i:"New_4", action:(() => void), token:{c:boolean,r:(() => void)[]}, status:number, exc:AggregateException)
}
