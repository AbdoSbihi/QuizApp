import { init as init_1, ofSeq, create, map as map_1, filter, exists as exists_1, blit } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { exists as exists_2, forall as forall_1, iter as iter_1, iteri as iteri_1, mapi as mapi_1, choose } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Equals, Compare as Compare_1 } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
export function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
export function SplitWith(str, pat){
  return str.split(pat);
}
export function Join(sep, values){
  return values.join(sep);
}
export function TrimEndWS(s){
  return s.replace(new RegExp("\\s+$"), "");
}
export function TrimStartWS(s){
  return s.replace(new RegExp("^\\s+"), "");
}
export function Trim(s){
  return s.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
}
export function StartsWith(t, s){
  return t.substring(0, s.length)==s;
}
export function Substring(s, ix, ct){
  return s.substr(ix, ct);
}
export function ReplaceOnce(string, search, replace){
  return string.replace(search, replace);
}
export function Remove(x, ix, ct){
  return x.substring(0, ix)+x.substring(ix+ct);
}
export function PadRightWith(s, n, c){
  return n>s.length?s+Array(n-s.length+1).join(c):s;
}
export function PadLeftWith(s, n, c){
  return n>s.length?Array(n-s.length+1).join(c)+s:s;
}
export function LastIndexOf(s, c, i){
  return s.lastIndexOf(c, i);
}
export function IsNullOrWhiteSpace(x){
  return x==null||(new RegExp("^\\s*$")).test(x);
}
export function IsNullOrEmpty(x){
  return x==null||x=="";
}
export function Insert(x, index, s){
  return x.substring(0, index-1)+s+x.substring(index);
}
export function IndexOf(s, c, i){
  return s.indexOf(c, i);
}
export function EndsWith(x, s){
  return x.substring(x.length-s.length)==s;
}
export function collect(f, s){
  return init_1(s.length, (i) => f(s[i])).join("");
}
export function concat(separator, strings){
  return ofSeq(strings).join(separator);
}
export function exists(f, s){
  return exists_2(f, protect(s));
}
export function forall(f, s){
  return forall_1(f, protect(s));
}
export function init(count, f){
  return init_1(count, f).join("");
}
export function iter(f, s){
  iter_1(f, protect(s));
}
export function iteri(f, s){
  iteri_1(f, protect(s));
}
export function length(s){
  return protect(s).length;
}
export function map(f, s){
  return collect(f, protect(s));
}
export function mapi(f, s){
  return ofSeq(mapi_1(f, s)).join("");
}
export function replicate(count, s){
  return create(count, s).join("");
}
export function protect(s){
  return s==null?"":s;
}
export function SFormat(format, args){
  return format.replace(new RegExp("{(0|[1-9]\\d*)(?:,(-?[1-9]\\d*|0))?(?::(.*?))?}", "g"), (_1, _2, w) => {
    const r=String(get(args, +_2));
    if(!Equals(w, void 0)){
      const w1=+w;
      const w2=Math.abs(w1);
      return w2>r.length?w1>0?PadLeft(r, w2):PadRight(r, w2):r;
    }
    else return r;
  });
}
export function Filter(f, s){
  return ofSeq(choose((c) => f(c)?Some(c):null, s)).join("");
}
export function SplitStrings(s, sep, opts){
  return Split(s, new RegExp(concat("|", map_1(RegexEscape, sep))), opts);
}
export function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
export function Split(s, pat, opts){
  return opts===1?filter((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
export function TrimEnd(s, t){
  let i;
  let go;
  if(Equals(t, null)||t.length==0)return TrimEndWS(s);
  else {
    i=s.length-1;
    go=true;
    while(i>=0&&go)
      ((() => {
        const c=s[i];
        return exists_1((y) => c===y, t)?void(i=i-1):void(go=false);
      })());
    return Substring(s, 0, i+1);
  }
}
export function TrimStart(s, t){
  let i;
  let go;
  if(Equals(t, null)||t.length==0)return TrimStartWS(s);
  else {
    i=0;
    go=true;
    while(i<s.length&&go)
      ((() => {
        const c=s[i];
        return exists_1((y) => c===y, t)?void(i=i+1):void(go=false);
      })());
    return s.substring(i);
  }
}
export function ToCharArrayRange(s, startIndex, length_1){
  return init_1(length_1, (i) => s[startIndex+i]);
}
export function ToCharArray(s){
  return init_1(s.length, (x) => s[x]);
}
export function ReplaceChar(s, oldC, newC){
  return Replace(s, oldC, newC);
}
export function Replace(subject, search, replace){
  function replaceLoop(subj){
    const index=subj.indexOf(search);
    if(index!==-1){
      const replaced=ReplaceOnce(subj, search, replace);
      const nextStartIndex=index+replace.length;
      return Substring(replaced, 0, index+replace.length)+replaceLoop(replaced.substring(nextStartIndex));
    }
    else return subj;
  }
  return replaceLoop(subject);
}
export function PadRight(s, n){
  return PadRightWith(s, n, " ");
}
export function PadLeft(s, n){
  return PadLeftWith(s, n, " ");
}
export function CopyTo(s, o, d, off, ct){
  blit(ToCharArray(s), o, d, off, ct);
}
export function Compare(x, y){
  return Compare_1(x, y);
}
