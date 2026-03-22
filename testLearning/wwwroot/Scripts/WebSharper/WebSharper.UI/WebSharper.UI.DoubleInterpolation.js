import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class DoubleInterpolation {
  static DoubleInterpolation=Create(DoubleInterpolation, {$:0});
  Interpolate(t, x, y){
    return x+t*(y-x);
  }
  $;
}
