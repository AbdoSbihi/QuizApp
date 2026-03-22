export function withInner(msg, inner){
  const e=new Error(msg);
  e.inner=inner;
  return e;
}
