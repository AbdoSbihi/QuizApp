export default interface Serializer<T0>{
  Encode:((a?:T0) => any);
  Decode:((a:any) => T0);
}
