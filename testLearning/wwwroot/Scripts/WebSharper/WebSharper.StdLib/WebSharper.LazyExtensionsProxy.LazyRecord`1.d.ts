export function New<T0>(created, evalOrVal, force)
export default interface LazyRecord<T0>{
  c:boolean;
  v:((() => T0) | T0);
  f:(() => T0);
}
