export function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
export function GetFieldNames(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(k_1);
  return r;
}
export function GetFields(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push([k_1, o[k_1]]);
  return r;
}
