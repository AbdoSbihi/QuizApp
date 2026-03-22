import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
export function Create(y, mo, d, h, m, s, ms){
  let d_1=new Date(y, mo-1, d, h, m, s, ms);
  if(y<99)d_1.setFullYear(y);
  return d_1.getTime();
}
export function LongTime(d){
  return(new Date(d)).toLocaleTimeString({}, {
    hour:"2-digit", 
    minute:"2-digit", 
    second:"2-digit", 
    hour12:false
  });
}
export function ShortTime(d){
  return(new Date(d)).toLocaleTimeString({}, {
    hour:"2-digit", 
    minute:"2-digit", 
    hour12:false
  });
}
export function LongDate(d){
  return(new Date(d)).toLocaleDateString({}, {
    year:"numeric", 
    month:"long", 
    day:"numeric", 
    weekday:"long"
  });
}
export function Parse(s){
  const m=TryParse(s);
  return m!=null&&m.$==1?m.$0:FailWith("Failed to parse date string.");
}
export function TryParse(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
export function AddMonths(d, months){
  const e=new Date(d);
  return(new Date(e.getFullYear(), e.getMonth()+months, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())).getTime();
}
export function AddYears(d, years){
  const e=new Date(d);
  return(new Date(e.getFullYear()+years, e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())).getTime();
}
export function TimePortion(d){
  const e=new Date(d);
  return(((24*0+e.getHours())*60+e.getMinutes())*60+e.getSeconds())*1E3+e.getMilliseconds();
}
export function DatePortion(d){
  const e=new Date(d);
  return(new Date(e.getFullYear(), e.getMonth(), e.getDate())).getTime();
}
