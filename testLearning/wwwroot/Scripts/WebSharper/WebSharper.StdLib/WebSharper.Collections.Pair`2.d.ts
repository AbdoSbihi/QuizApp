import IComparable from "./System.IComparable"
export default class Pair<T0, T1>implements IComparable {
  Key:T0;
  Value:T1;
  Equals(other):boolean
  GetHashCode():number
  CompareTo0(other):number
  static New<T0, T1>(Key:T0, Value:T1):Pair<T0, T1>
}
