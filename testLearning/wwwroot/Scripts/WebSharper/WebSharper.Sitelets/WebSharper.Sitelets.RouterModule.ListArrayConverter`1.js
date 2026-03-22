import Object from "../WebSharper.StdLib/System.Object.js"
import { ofList } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofArray } from "../WebSharper.StdLib/Microsoft.FSharp.Collections.ListModule.js"
export default class ListArrayConverter extends Object {
  WebSharper_Sitelets_RouterModule_IListArrayConverter$ToArray(l){
    return ofList(l);
  }
  WebSharper_Sitelets_RouterModule_IListArrayConverter$OfArray(a){
    return ofArray(a);
  }
}
