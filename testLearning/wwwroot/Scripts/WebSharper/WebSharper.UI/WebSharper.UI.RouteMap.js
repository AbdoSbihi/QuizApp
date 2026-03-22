import { InstallMap } from "./WebSharper.UI.Routing.js"
import FSharpMap from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpMap`2.js"
export function Install(map){
  return InstallMap(map);
}
export function Create(ser, des){
  return{Des:(x) => des(x[0]), Ser:(x) =>[ser(x), new FSharpMap("New", [])]};
}
export function CreateWithQuery(ser, des){
  return{Des:des, Ser:ser};
}
