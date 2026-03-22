import { append, collect, map } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.SeqModule.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
export function op_Addition(a, b){
  return New((path) => append(a.Parse(path), b.Parse(path)), (value) => {
    const m=a.Write(value);
    return m==null?b.Write(value):m;
  });
}
export function op_Division(before, after){
  return New((path) => collect((_1) => {
    const x=_1[1];
    return map((p) =>[p, x], after.Parse(_1[0]));
  }, before.Parse(path)), (v) => {
    const o=before.Write(v);
    return o==null?null:Some(append(o.$0, after.Segment));
  });
}
export function op_Division_1(before, after){
  return New((path) => collect(after.Parse, before.Parse(path)), (v) => {
    const o=after.Write(v);
    return o==null?null:Some(append(before.Segment, o.$0));
  });
}
export function op_Division_2(before, after){
  return New((path) => collect((_1) => {
    const x=_1[1];
    return map((_2) =>[_2[0], [x, _2[1]]], after.Parse(_1[0]));
  }, before.Parse(path)), (t) => {
    let _1;
    const _2=before.Write(t[0]);
    const _3=after.Write(t[1]);
    return _2!=null&&_2.$==1&&(_3!=null&&_3.$==1&&(_1=[_2.$0, _3.$0],true))?Some(append(_1[0], _1[1])):null;
  });
}
export function New(Parse, Write){
  return{Parse:Parse, Write:Write};
}
