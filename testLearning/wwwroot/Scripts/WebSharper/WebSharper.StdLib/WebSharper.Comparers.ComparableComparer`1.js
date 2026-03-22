import Comparer from "./System.Collections.Generic.Comparer`1.js"
export default class ComparableComparer extends Comparer {
  Compare_1(x, y){
    return x.CompareTo(y);
  }
}
