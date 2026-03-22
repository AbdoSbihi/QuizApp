import Object from "./System.Object"
export default class StringBuilder extends Object {
  init:number;
  strings:string[];
  toString():string
  get Length():number
  Replace(search:string, replace:string, i:number, l:number):StringBuilder
  Replace_1(search:string, replace:string):StringBuilder
  Remove(i:number, l:number):StringBuilder
  Insert(i:number, part:string):StringBuilder
  Clear():StringBuilder
  set_Chars(i:number, v:string):void
  get_Chars(i:number):string
  AppendLine(part:string):StringBuilder
  Append(part:string):StringBuilder
  constructor(i:"New", init:string)
  constructor(i:"New_1")
}
