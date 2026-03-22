import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class CheckedInput {
  static Valid(value, inputText){
    return Create(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
  static Invalid(inputText){
    return Create(CheckedInput, {$:1, $0:inputText});
  }
  static Blank(inputText){
    return Create(CheckedInput, {$:2, $0:inputText});
  }
  static Make(x){
    let c;
    return CheckedInput.Valid(x, (c=x,String(c)));
  }
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  $;
  $0;
  $1;
}
