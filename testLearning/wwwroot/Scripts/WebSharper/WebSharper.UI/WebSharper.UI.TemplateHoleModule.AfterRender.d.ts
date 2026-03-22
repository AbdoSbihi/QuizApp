import TemplateHole from "./WebSharper.UI.TemplateHole"
export default class AfterRender extends TemplateHole {
  name:string;
  fillWith:((a:Element) => void);
  get Value():((a:Element) => void)
  WithName(n:string):TemplateHole
  get ValueObj()
  get Name():string
  constructor(name:string, fillWith:((a:Element) => void))
}
