export interface AL0<T0>{
  $:0;
}
export interface AL1<T0>{
  $:1;
  $0:T0;
}
export interface AL2<T0>{
  $:2;
  $0:AppendList<T0>;
  $1:AppendList<T0>;
}
export interface AL3<T0>{
  $:3;
  $0:(T0)[];
}
export type AppendList<T0> = (AL0<T0> | AL1<T0> | AL2<T0> | AL3<T0>)
