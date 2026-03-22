import { NewFromSeq } from "./WebSharper.JavaScript.Pervasives.js"
import { map, distinctBy } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import $StartupCode_Remoting from "./$StartupCode_Remoting.js"
import { StartsWith, Replace } from "./Microsoft.FSharp.Core.StringModule.js"
export function ajax(async, url, headers, data, ok, err, csrf){
  let xhr=new XMLHttpRequest();
  let csrf_1=document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*csrftoken\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1");
  xhr.open("POST", url, async);
  if(async==true)xhr.withCredentials=true;
  let h;
  for(var h_1 in headers)xhr.setRequestHeader(h_1, headers[h_1]);
  if(csrf_1)xhr.setRequestHeader("x-csrftoken", csrf_1);
  function k(){
    if(xhr.status==200)ok(xhr.responseText);
    else if(csrf&&xhr.status==403&&xhr.responseText=="CSRF")csrf();
    else {
      let msg="Response status is not 200: ";
      err(new Error(msg+xhr.status));
    }
  }
  if("onload"in xhr)xhr.onload=xhr.onerror=xhr.onabort=k;
  else xhr.onreadystatechange=() => {
    if(xhr.readyState==4)k();
  };
  xhr.send(data);
}
export function makePayload(data){
  return JSON.stringify(data);
}
export function makeHeaders(headers){
  return NewFromSeq(map((_1) =>[_1[0], _1[1]], distinctBy((t) => t[0], headers.concat([["content-type", "application/json"]]))));
}
export function AjaxProvider(){
  return $StartupCode_Remoting.AjaxProvider;
}
export function set_AjaxProvider(_1){
  $StartupCode_Remoting.AjaxProvider=_1;
}
export function UseHttps(){
  try {
    return!StartsWith(globalThis.location.href, "https://")&&(set_EndPoint(Replace(globalThis.location.origin, "http://", "https://")),true);
  }
  catch(m){
    return false;
  }
}
export function EndPoint(){
  return $StartupCode_Remoting.EndPoint;
}
export function set_EndPoint(_1){
  $StartupCode_Remoting.EndPoint=_1;
}
