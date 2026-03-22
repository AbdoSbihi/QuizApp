import { SetOptional, Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class DocElemNode {
  Attr;
  Children;
  Delimiters;
  El;
  ElKey;
  Render;
  GetHashCode(){
    return this.ElKey;
  }
  Equals(o){
    return this.ElKey===o.ElKey;
  }
  static New(Attr, Children, Delimiters, El, ElKey, Render){
    const _1={
      Attr:Attr, 
      Children:Children, 
      El:El, 
      ElKey:ElKey
    };
    let _2=(SetOptional(_1, "Delimiters", Delimiters),SetOptional(_1, "Render", Render),_1);
    return Create(DocElemNode, _2);
  }
}
