export default interface Anim<T0>{
  Compute:((a:number) => T0);
  Duration:number;
}
