export default interface TemplateEvent<T0, T1, T2>{
  Vars:T0;
  Anchors:T1;
  Target:Element;
  Event:T2;
}
