export default interface FlowActions<T0>{
  back:(() => void);
  cancel:(() => void);
  next:((a?:T0) => void);
}
