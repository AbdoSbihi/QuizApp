export interface Finally {
  $:0;
  $0:(() => void);
}
export interface Work {
  $:1;
  $0:{Compute:((a:number) => void),Duration:number};
}
export type Animation = (Finally | Work)
