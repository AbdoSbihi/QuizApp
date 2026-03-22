import FormatException from "./System.FormatException.js"
import OverflowException from "./System.OverflowException.js"
export function TryParseBool(s, r){
  const m=s.toLowerCase();
  return m=="true"?(r.set(true),true):m=="false"&&(r.set(false),true);
}
export function ParseBool(s){
  const m=s.toLowerCase();
  if(m=="true")return true;
  else if(m=="false")return false;
  else throw new FormatException("New_1", "String was not recognized as a valid Boolean.");
}
export function TryParseBigInt(s, min, max, r){
  let _1;
  let o=0n;
  try {
    _1=(o=BigInt(s),true);
  }
  catch(m_1){
    _1=false;
  }
  const m=[_1, o];
  if(m[0]){
    const x=m[1];
    const ok=x===x-x%1n&&x>=min&&x<=max;
    if(ok)r.set(x);
    return ok;
  }
  else return false;
}
export function ParseBigInt(s, min, max, overflowMsg){
  const x=BigInt(s);
  if(x!==x-x%1n)throw new FormatException("New_1", "Input string was not in a correct format.");
  else if(x<min||x>max)throw new OverflowException("New_1", overflowMsg);
  else return x;
}
export function TryParse(s, min, max, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max;
  if(ok)r.set(x);
  return ok;
}
export function Parse(s, min, max, overflowMsg){
  const x=+s;
  if(x!==x-x%1)throw new FormatException("New_1", "Input string was not in a correct format.");
  else if(x<min||x>max)throw new OverflowException("New_1", overflowMsg);
  else return x;
}
