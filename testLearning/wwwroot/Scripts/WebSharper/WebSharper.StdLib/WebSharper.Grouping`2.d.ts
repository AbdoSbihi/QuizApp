import IEnumerator from "./System.Collections.Generic.IEnumerator`1"
import Object from "./System.Object"
import IGrouping from "./System.Linq.IGrouping`2"
import IEnumerable from "./System.Collections.Generic.IEnumerable`1"
export default class Grouping<T0, T1>extends Object implements IGrouping<T0, T1>, IEnumerable<T1> {
  k:T0;
  v:(T1)[];
  get System_Linq_IGrouping_2$Key():T0
  GetEnumerator():IEnumerator<T1>
  constructor(k:T0, v:(T1)[])
}
