export function concat(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
}
