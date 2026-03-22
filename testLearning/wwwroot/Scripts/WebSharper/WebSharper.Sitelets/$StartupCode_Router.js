import { New } from "./WebSharper.Sitelets.Router`1.js"
import { New as New_1 } from "./WebSharper.Sitelets.Router.js"
import { read, write } from "./WebSharper.Sitelets.StringEncoding.js"
import Route from "./WebSharper.Sitelets.Route.js"
import { Some } from "../WebSharper.StdLib/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Parse } from "../WebSharper.StdLib/System.Char.js"
import { TryParse } from "../WebSharper.StdLib/System.Guid.js"
import { TryParse as TryParse_1 } from "../WebSharper.StdLib/System.Int32.js"
import { TryParse as TryParse_2 } from "../WebSharper.StdLib/System.SByte.js"
import { TryParse as TryParse_3 } from "../WebSharper.StdLib/System.Byte.js"
import { TryParse as TryParse_4 } from "../WebSharper.StdLib/System.Int16.js"
import { TryParse as TryParse_5 } from "../WebSharper.StdLib/System.UInt16.js"
import { TryParse as TryParse_6 } from "../WebSharper.StdLib/System.UInt32.js"
import { TryParse as TryParse_7 } from "../WebSharper.StdLib/System.Int64.js"
import { TryParse as TryParse_8 } from "../WebSharper.StdLib/System.UInt64.js"
import { TryParseBool } from "../WebSharper.StdLib/WebSharper.N.js"
import FSharpList from "../WebSharper.StdLib/Microsoft.FSharp.Collections.FSharpList`1.js"
import { concat } from "../WebSharper.StdLib/Microsoft.FSharp.Core.StringModule.js"
import { string } from "../WebSharper.StdLib/Microsoft.FSharp.Core.Operators.OperatorIntrinsics.js"
import { Create } from "../WebSharper.StdLib/WebSharper.DateTimeHelpers.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class $StartupCode_Router {
  static {
    _c=_i(this);
  }
  static rDateTime;
  static rWildcard;
  static rBool;
  static rSingle;
  static rUInt64;
  static rInt64;
  static rUInt;
  static rUInt16;
  static rInt16;
  static rByte;
  static rSByte;
  static rDouble;
  static rInt;
  static rGuid;
  static rChar;
  static rString;
  static rRoot;
  static Empty;
  static {
    this.Empty=New(() =>[], () => null);
    this.rRoot=New_1((path) =>[path], []);
    this.rString=New((path) => {
      const m=path.Segments;
      if(m.$==0)return[[path, ""]];
      else {
        const t=m.$1;
        const m_1=read(m.$0);
        return m_1!=null&&m_1.$==1?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), m_1.$0]]:[];
      }
    }, (value) => Some([Route.Segment_2(value==null?"null":write(value))]));
    this.rChar=New((path) => {
      let _1;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        const m_1=read(m.$0);
        return m_1!=null&&m_1.$==1&&(m_1.$0.length===1&&(_1=m_1.$0,true))?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), Parse(_1)]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(value)]));
    this.rGuid=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=null;
        return TryParse(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rInt=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_1(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rDouble=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        const _1=Number(m.$0);
        return(isNaN(_1)?false:(res=_1,true))?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rSByte=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_2(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rByte=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_3(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rInt16=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_4(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rUInt16=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_5(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rUInt=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        return TryParse_6(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rInt64=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0n;
        return TryParse_7(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rUInt64=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0n;
        return TryParse_8(m.$0, {get:() => res, set:(v) => {
          res=v;
        }})?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rSingle=New((path) => {
      let res;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        res=0;
        const _1=Number(m.$0);
        return(isNaN(_1)?false:(res=_1,true))?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), res]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(String(value))]));
    this.rBool=New((path) => {
      let o;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        const m_1=(o=null,[TryParseBool(m.$0, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        return m_1[0]?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), m_1[1]]]:[];
      }
      else return[];
    }, (value) => Some([Route.Segment_2(value?"True":"False")]));
    this.rWildcard=New((path) =>[[Route.New(FSharpList.Empty, path.QueryArgs, path.FormData, path.Method, path.Body), concat("/", path.Segments)]], (value) => Some([Route.Segment_2(value)]));
    const pInt=(x) => {
      let o;
      const m=(o=0,[TryParse_1(x, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?Some(m[1]):null;
    };
    this.rDateTime=New((path) => {
      let _1;
      const m=path.Segments;
      if(m.$==1){
        const t=m.$1;
        const h=m.$0;
        if(h.length===19&&h[4]==="-"&&h[7]==="-"&&h[10]==="-"&&h[13]==="."&&h[16]==="."){
          const _2=pInt(string(h, Some(0), Some(3)));
          const _3=pInt(string(h, Some(5), Some(6)));
          const _4=pInt(string(h, Some(8), Some(9)));
          const _5=pInt(string(h, Some(11), Some(12)));
          const _6=pInt(string(h, Some(14), Some(15)));
          const _7=pInt(string(h, Some(17), Some(18)));
          return _2!=null&&_2.$==1&&(_3!=null&&_3.$==1&&(_4!=null&&_4.$==1&&(_5!=null&&_5.$==1&&(_6!=null&&_6.$==1&&(_7!=null&&_7.$==1&&(_1=[_4.$0, _5.$0, _3.$0, _6.$0, _7.$0, _2.$0],true))))))?[[Route.New(t, path.QueryArgs, path.FormData, path.Method, path.Body), Create(_1[5], _1[2], _1[0], _1[1], _1[3], _1[4], 0)]]:[];
        }
        else return[];
      }
      else return[];
    }, (d) => {
      const pad2=(x) => {
        const s_1=String(x);
        return s_1.length===1?"0"+s_1:s_1;
      };
      const s=String((new Date(d)).getFullYear());
      const m=s.length;
      let _1=(m===1?"000"+s:m===2?"00"+s:m===3?"0"+s:s)+"-"+pad2((new Date(d)).getMonth()+1);
      let _2=_1+"-";
      let _3=_2+pad2((new Date(d)).getDate());
      let _4=_3+"-";
      let _5=_4+pad2((new Date(d)).getHours());
      let _6=_5+".";
      let _7=_6+pad2((new Date(d)).getMinutes());
      let _8=_7+".";
      let _9=_8+pad2((new Date(d)).getSeconds());
      let _10=[Route.Segment_2(_9)];
      return Some(_10);
    });
  }
});
export default _c;
