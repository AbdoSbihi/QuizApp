import Object from "./System.Object"
export default class Scheduler extends Object {
  idle:boolean;
  robin:((() => void))[];
  tick():void
  Fork(action:(() => void)):void
  constructor()
}
