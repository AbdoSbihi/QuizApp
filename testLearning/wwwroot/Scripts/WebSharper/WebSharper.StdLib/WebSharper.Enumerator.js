import { findIndexBound } from "./System.Array.js"
import { length, set, get } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { Equals } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
import { arrContains } from "./WebSharper.CollectionInternals.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
import ArgumentException from "./System.ArgumentException.js"
import { blit } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import T from "./WebSharper.Enumerator.T`2.js"
export function LRemoveAt(x, index){
  if(x instanceof Array){
    if("resizable"in x)x.splice(index, 1);
    else FailReadOnly();
  }
  else x.LRemoveAt(index);
}
export function LInsert(x, index, value){
  if(x instanceof Array){
    if("resizable"in x)x.splice(index, 0, value);
    else FailReadOnly();
  }
  else x.LInsert(index, value);
}
export function LIndexOf(x, item){
  if(x instanceof Array){
    const haystack=x;
    const needle=item;
    return findIndexBound(haystack, 0, length(haystack), needle==null?(v) => v==null:(o) => {
      let c;
      c=needle;
      return Equals(c, o);
    });
  }
  else return x.LIndexOf(item);
}
export function LItemSet(x, index, value){
  if(x instanceof Array){
    if("readonly"in x)FailReadOnly();
    else set(x, index, value);
  }
  else x.set_LItem(index, value);
}
export function LItemGet(x, index){
  return x instanceof Array?get(x, index):x.LItem(index);
}
export function LRemoveAt0(x, index){
  if(x instanceof Array){
    if("resizable"in x)x.splice(index, 1);
    else FailReadOnly();
  }
  else x.LRemoveAt0(index);
}
export function LRemove0(x, item){
  if(x instanceof Array){
    if("resizable"in x){
      const haystack=x;
      const m=findIndexBound(haystack, 0, length(haystack), item==null?(v) => v==null:(o) => {
        let c;
        c=item;
        return Equals(c, o);
      });
      if(m===-1){ }
      else x.splice(m, 1);
    }
    else FailReadOnly();
  }
  else x.LRemove0(item);
}
export function LInsert0(x, index, value){
  if(x instanceof Array){
    if("resizable"in x)x.splice(index, 0, value);
    else FailReadOnly();
  }
  else x.LInsert0(index, value);
}
export function LIndexOf0(x, item){
  if(x instanceof Array){
    const haystack=x;
    return findIndexBound(haystack, 0, length(haystack), item==null?(v) => v==null:(o) => {
      let c;
      c=item;
      return Equals(c, o);
    });
  }
  else return x.LIndexOf0(item);
}
export function LContains(x, item){
  return x instanceof Array?arrContains(item, x):x.LContains(item);
}
export function LClear(x){
  if(x instanceof Array){
    if("resizable"in x){
      let this_1=x;
      let delete_1=length(x);
      this_1.splice(0, delete_1);
    }
    else if("readonly"in x)FailReadOnly();
    else for(let i=0, _1=length(x)-1;i<=_1;i++)set(x, i, null);
  }
  else x.LClear();
}
export function LAdd(x, item){
  return x instanceof Array?"resizable"in x?(x.push(item),length(x)-1):FailReadOnly():x.LAdd(item);
}
export function LItem0Set(x, index, value){
  if(x instanceof Array){
    if("readonly"in x)FailReadOnly();
    else set(x, index, value);
  }
  else x.set_LItem0(index, value);
}
export function LItem0Get(x, index){
  return x instanceof Array?get(x, index):x.LItem0(index);
}
export function LIsReadOnly(x){
  return x instanceof Array?"readonly"in x:x.LIsReadOnly;
}
export function IsFixedSize(x){
  return x instanceof Array?!("resizable"in x):x.LIsReadOnly;
}
export function Remove(x, item){
  if(x instanceof Array){
    if("resizable"in x){
      const haystack=x;
      const m=findIndexBound(haystack, 0, length(haystack), item==null?(v) => v==null:(o) => {
        let c;
        c=item;
        return Equals(c, o);
      });
      return m===-1?false:(x.splice(m, 1),true);
    }
    else return FailReadOnly();
  }
  else return"Remove"in x?x.Remove(item):FailReadOnly();
}
export function Contains(x, item){
  return x instanceof Array?arrContains(item, x):x.Contains(item);
}
export function Clear(x){
  if(x instanceof Array){
    if("resizable"in x){
      let this_1=x;
      let delete_1=length(x);
      this_1.splice(0, delete_1);
    }
    else FailReadOnly();
  }
  else if("Clear"in x)x.Clear();
  else FailReadOnly();
}
export function Add(x, item){
  if(x instanceof Array){
    if("resizable"in x)x.push(item);
    else FailReadOnly();
  }
  else if("Add"in x)x.Add(item);
  else FailReadOnly();
}
export function FailReadOnly(){
  return FailWith("Collection is read-only.");
}
export function IsReadOnly(x){
  return x instanceof Array?!("resizable"in x):x.IsReadOnly;
}
export function CopyTo0(x, array, index){
  if(x instanceof Array)ArrayCopyTo(x, array, index);
  else if("CopyTo0"in x)x.CopyTo0(array, index);
  else x.CopyTo(array, index);
}
export function CopyTo(x, array, index){
  if(x instanceof Array)ArrayCopyTo(x, array, index);
  else x.CopyTo(array, index);
}
export function ArrayCopyTo(x, array, index){
  if(length(x)+index<length(array))throw new ArgumentException("New_2", "array");
  else void 0;
  blit(x, 0, array, index, length(x));
}
export function Count0(x){
  return x instanceof Array?length(x):"Count0"in x?x.Count0:x.Count;
}
export function Count(x){
  return x instanceof Array?length(x):x.Count;
}
export function Reset(x){
  if("Reset"in x)x.Reset();
  else FailWith("IEnumerator.Reset not supported");
}
export function Get0(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
}
export function Get(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):x.GetEnumerator();
}
export function StringEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<s.length&&(e.c=s[i],e.s=i+1,true);
  }, void 0);
}
export function ArrayEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<length(s)&&(e.c=get(s, i),e.s=i+1,true);
  }, void 0);
}
