import Object from "./System.Object.js"
import { sumBy } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import ArgumentOutOfRangeException from "./System.ArgumentOutOfRangeException.js"
import { Replace } from "./Microsoft.FSharp.Core.StringModule.js"
export default class StringBuilder extends Object {
  init;
  strings;
  toString(){
    const res=this.strings.join("");
    this.strings=[res];
    return res;
  }
  get Length(){
    return sumBy((s) => s.length, this.strings);
  }
  Replace(search, replace, i, l){
    const s=String(this);
    if(i<0||l<0||i+l>s.length)throw new ArgumentOutOfRangeException("New_2");
    else null;
    this.strings=[s.slice(0, i)+Replace(s.slice(i, l), search, replace)+s.slice(i+l)];
    return this;
  }
  Replace_1(search, replace){
    this.strings=[Replace(String(this), search, replace)];
    return this;
  }
  Remove(i, l){
    const s=String(this);
    if(i<0||l<0||i+l>s.length)throw new ArgumentOutOfRangeException("New_2");
    else null;
    this.strings=[s.slice(0, i)+s.slice(i+l)];
    return this;
  }
  Insert(i, part){
    const s=String(this);
    if(i<0||i>s.length)throw new ArgumentOutOfRangeException("New_2");
    else null;
    this.strings=[s.slice(0, i)+part+s.slice(i)];
    return this;
  }
  Clear(){
    this.strings=[];
    return this;
  }
  set_Chars(i, v){
    const s=String(this);
    if(i<0||i>=s.length)throw new ArgumentOutOfRangeException("New_2");
    else void 0;
    this.strings=[s.slice(0, i)+v+s.slice(i+1)];
  }
  get_Chars(i){
    return(String(this))[i];
  }
  AppendLine(part){
    this.strings.push(part);
    this.strings.push("\n");
    return this;
  }
  Append(part){
    this.strings.push(part);
    return this;
  }
  constructor(i, _1){
    let _2;
    let init;
    if(i=="New"){
      _2=true;
      init=_1;
      i="New_1";
    }
    if(i=="New_1"){
      super();
      this.strings=[];
      this.init=1;
    }
    if(_2){
      this[0]=this;
      this.init=1;
      this.Append(init);
    }
  }
}
