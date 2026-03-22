import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
import { FailWith } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.js"
export default class View {
  static View(Item){
    return Create(View, {$:0, $0:Item});
  }
  get V(){
    return FailWith("View<'T>.V can only be called in an argument to a V-enabled function or if 'T = Doc.");
  }
  $;
  $0;
}
