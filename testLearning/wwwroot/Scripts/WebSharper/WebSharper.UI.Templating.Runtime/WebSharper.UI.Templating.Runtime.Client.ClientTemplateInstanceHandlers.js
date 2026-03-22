import TemplateInitializer from "./WebSharper.UI.Templating.Runtime.Server.TemplateInitializer.js"
export function AfterRenderQ2Client(key, el, f){
  const i=TemplateInitializer.GetInstance(key);
  i.SetAnchorRoot(el);
  f({
    Vars:i, 
    Anchors:i, 
    Target:el, 
    Event:null
  });
}
export function EventQ2Client(key, el, f){
  return(ev) => {
    const i=TemplateInitializer.GetInstance(key);
    i.SetAnchorRoot(el);
    f({
      Vars:i, 
      Anchors:i, 
      Target:el, 
      Event:ev
    });
  };
}
export function EventClientRev(el, f){
  return(ev) => {
    f(ev, el);
  };
}
export function EventClient(el, f){
  return(ev) => {
    f(el, ev);
  };
}
