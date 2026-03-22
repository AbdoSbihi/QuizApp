export function Array<T0>(Item_1:(ItemOrArray<T0>)[]):ItemOrArray<T0>
export function Item<T0>():ItemOrArray<T0>
export function Item<T0>(Item_1:T0):ItemOrArray<T0>
export interface Item<T0>{
  $:0;
  $0:T0;
}
export interface Array_1<T0>{
  $:1;
  $0:(ItemOrArray<T0>)[];
}
export type ItemOrArray<T0> = (Item<T0> | Array_1<T0>)
