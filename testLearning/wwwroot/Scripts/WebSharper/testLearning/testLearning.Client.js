import Var from "../WebSharper.UI/WebSharper.UI.Var.js"
import ProviderBuilder from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.ProviderBuilder.js"
import { EventQ2, CompleteHoles } from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.Handler.js"
import { StartImmediate, Delay, Bind, Zero } from "../WebSharper.StdLib/WebSharper.Concurrency.js"
import { DoSomething } from "./testLearning.Server.js"
import TemplateHole from "../WebSharper.UI/WebSharper.UI.TemplateHole.js"
import TextView from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.TextView.js"
import TemplateInstance from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.TemplateInstance.js"
import { mainform } from "./$Generated.js"
export function Main(){
  const rvReversed=Var.Create_1("");
  const R=rvReversed.View;
  const t=new ProviderBuilder("New_1");
  const this_1=(t.h.push(EventQ2(t.k, "onsend", () => t.i, (e) => {
    StartImmediate(Delay(() => Bind(DoSomething(TemplateHole.Value(e.Vars.Hole("texttoreverse")).Get()), (a) => {
      rvReversed.Set(a);
      return Zero();
    })), null);
  })),t);
  const b=(this_1.h.push(new TextView("reversed", R)),this_1);
  const p=CompleteHoles(b.k, b.h, [["texttoreverse", 0, null]]);
  const i=new TemplateInstance(p[1], mainform(p[0]));
  let _1=(b.i=i,i);
  return _1.Doc;
}
