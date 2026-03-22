import Runtime from "./WebSharper.Core.JavaScript/Runtime.js"
Runtime.ScriptBasePath="/Scripts/";
import { Lazy, Create as Create_1, GetOptional, SetOptional } from "./WebSharper.Core.JavaScript/Runtime.js"
function isIDisposable(x){
  return"Dispose"in x;
}
function Main(){
  const _1=renderApp();
  LoadLocalTemplates("");
  Doc.RunById("main", _1);
}
function renderApp(){
  return Doc.BindView((state) => {
    if(state.$==1)return loadingScreen();
    else if(state.$==2)return questionScreen(state.$0, state.$1, state.$2, state.$3, null);
    else if(state.$==3)return questionScreen(state.$0, state.$1, state.$2, state.$3, Some(state.$4));
    else if(state.$==4){
      const result=state.$0;
      const lb=_c.Create_1(FSharpList.Empty);
      Start(Delay(() => Bind_1(GetLeaderboard(), (a) => {
        lb.Set(a);
        return Zero();
      })), null);
      return Doc.BindView((es) => resultScreen(result, es), lb.View);
    }
    else {
      const cats=_c.Create_1(FSharpList.Empty);
      Start(Delay(() => Bind_1(GetCategories(), (a) => {
        cats.Set(a);
        return Zero();
      })), null);
      return Doc.BindView(welcomeScreen, cats.View);
    }
  }, quizState().View);
}
function quizState(){
  return _c_1.quizState;
}
function loadingScreen(){
  return Doc.Element("div", [Attr.Create("class", "screen loading-screen")], [Doc.Element("div", [Attr.Create("class", "spinner")], []), Doc.Element("p", [], [Doc.TextNode("Loading questions\u2026")])]);
}
function questionScreen(questions, idx, score, correct, lastResult){
  let feedbackDoc;
  let nextDoc;
  const q=questions.get_Item(idx);
  const total=questions.Length;
  const answered=lastResult!=null;
  if(!answered)startTimer(q.TimeLimit, () => {
    stopTimer();
    StartImmediate(Delay(() => Bind_1(SubmitAnswer(q.Id, -1, 0), (a) => {
      quizState().Set(ShowingAnswer(questions, idx, score, correct, a));
      return Zero();
    })), null);
  });
  const progressPct=toInt(idx/total*100);
  const progressBar=Doc.Element("div", [Attr.Create("class", "progress-wrap")], [Doc.Element("div", [Attr.Create("class", "progress-label")], [Doc.Element("span", [], [Doc.TextNode(((((_8) =>(_9) =>(_10) => _8("Question "+String(_9)+" / "+String(_10)))((x) => x))(idx+1))(total))]), Doc.Element("span", [], [Doc.TextNode((((_8) =>(_9) => _8("Score: "+String(_9)))((x) => x))(score))])]), Doc.Element("div", [Attr.Create("class", "progress-track")], [Doc.Element("div", [Attr.Create("class", "progress-fill"), Attr.Create("style", (((_8) =>(_9) => _8("width:"+String(_9)+"%"))((x) => x))(progressPct))], [])])]);
  const timerDoc=Doc.Element("div", [Attr.Create("class", "timer-row")], [Doc.BindView((secs) => Doc.Element("div", [Attr.Create("class", secs<=5&&!answered?"timer-circle urgent":"timer-circle")], [Doc.TextNode(String(secs))]), timerSeconds().View), Doc.Element("div", [Attr.Create("class", "timer-bar-wrap")], [Doc.Element("div", [Attr.Create("class", "timer-bar-track")], [Doc.BindView((style) => Doc.Element("div", [Attr.Create("class", "timer-bar-fill"), Attr.Create("style", style)], []), Map2((_8, _9) => {
    const a=_9===0?0:toInt(_8/_9*100);
    return(((_10) =>(_11) => _10("width:"+String(_11)+"%"))((x) => x))(a);
  }, timerSeconds().View, timerMax().View))])])]);
  const optionsDoc=Doc.Element("div", [Attr.Create("class", "options-grid")], mapi((_8, _9) => Doc.Element("button", [Attr.Create("class", lastResult==null?"btn-option":_8===lastResult.$0.CorrectIndex?"btn-option correct":"btn-option dimmed"), Attr.HandlerImpl("click", () =>() => {
    if(!answered){
      stopTimer();
      const timeLeft=timerSeconds().Get();
      return StartImmediate(Delay(() => Bind_1(SubmitAnswer(q.Id, _8, timeLeft), (a) => {
        quizState().Set(ShowingAnswer(questions, idx, score+a.PointsEarned+a.TimeBonus, correct+(a.IsCorrect?1:0), a));
        return Zero();
      })), null);
    }
    else return null;
  })], [Doc.Element("span", [Attr.Create("class", "option-letter")], [Doc.TextNode((((_10) =>(_11) => _10(_11+"."))((x) => x))(String.fromCharCode(65+_8)))]), Doc.Element("span", [], [Doc.TextNode(_9)])]), q.Options));
  if(lastResult!=null&&lastResult.$==1){
    const res=lastResult.$0;
    const msg=res.IsCorrect?((((_8) =>(_9) =>(_10) => _8("Correct! +"+String(_9)+" pts"+toSafe(_10)))((x) => x))(res.PointsEarned))(res.TimeBonus>0?(((_8) =>(_9) => _8(" + "+String(_9)+" time bonus"))((x) => x))(res.TimeBonus):""):(((_8) =>(_9) => _8("Wrong. Correct answer: "+toSafe(_9)))((x) => x))(q.Options.get_Item(res.CorrectIndex));
    feedbackDoc=Doc.Element("div", [Attr.Create("class", res.IsCorrect?"feedback correct-feedback":"feedback wrong-feedback")], [Doc.TextNode(msg)]);
  }
  else feedbackDoc=Doc.Empty;
  if(lastResult!=null&&lastResult.$==1){
    const isLast=idx+1>=total;
    nextDoc=Doc.Element("button", [Attr.Create("class", "btn btn-next"), Attr.HandlerImpl("click", () =>() => {
      stopTimer();
      if(isLast){
        const timeTaken=toInt((Date.now()-quizStartTime())/1E3);
        const m_1=buildConfig().Difficulty;
        const diffLabel=m_1!=null&&m_1.$==1?m_1.$0.Label:"Mixed";
        const result=New(Trim(playerName().Get()), score, total, correct, timeTaken, diffLabel, Date.now());
        return StartImmediate(Delay(() => Bind_1(SaveResult(result), () => {
          quizState().Set(Finished(result));
          return Zero();
        })), null);
      }
      else return quizState().Set(InQuestion(questions, idx+1, score, correct));
    })], [Doc.TextNode(isLast?"See Results":"Next Question")]);
  }
  else nextDoc=Doc.Empty;
  let _1=[Attr.Create("class", "screen question-screen")];
  let _2=[Attr.Create("class", "question-meta")];
  const m=q.Difficulty;
  let _3=[Attr.Create("class", m.$==1?"badge badge-medium":m.$==2?"badge badge-hard":"badge badge-easy")];
  let _4=Doc.Element("span", _3, [Doc.TextNode(q.Difficulty.Label)]);
  let _5=[_4, Doc.Element("span", [Attr.Create("class", "badge badge-cat")], [Doc.TextNode(q.Category)])];
  let _6=Doc.Element("div", _2, _5);
  let _7=[progressBar, timerDoc, _6, Doc.Element("p", [Attr.Create("class", "question-text")], [Doc.TextNode(q.Text)]), feedbackDoc, optionsDoc, nextDoc];
  return Doc.Element("div", _1, _7);
}
function resultScreen(result, leaderboard){
  const pct=percentage(result);
  const grade_1=grade(result);
  const leaderboardDoc=leaderboard.$==0?Doc.Element("p", [Attr.Create("class", "empty-lb")], [Doc.TextNode("No scores yet \u2014 you are first!")]):Doc.Element("table", ofArray([Attr.Create("class", "lb-table")]), ofArray([Doc.Element("thead", FSharpList.Empty, ofArray([Doc.Element("tr", FSharpList.Empty, map((h) => Doc.Element("th", FSharpList.Empty, ofArray([Doc.TextNode(h)])), ofArray(["#", "Player", "Score", "Grade", "Mode"])))])), Doc.Element("tbody", FSharpList.Empty, map((e) => {
    let _1=FSharpList.Empty;
    const m=e.Rank;
    let _2=[Attr.Create("class", m===1?"rank-gold":m===2?"rank-silver":m===3?"rank-bronze":"")];
    let _3=ofArray(_2);
    let _4=Doc.Element("td", _3, ofArray([Doc.TextNode(String(e.Rank))]));
    let _5=[_4, Doc.Element("td", FSharpList.Empty, ofArray([Doc.TextNode(e.PlayerName)])), Doc.Element("td", FSharpList.Empty, ofArray([Doc.TextNode(String(e.Score))])), Doc.Element("td", FSharpList.Empty, ofArray([Doc.TextNode(e.Grade)])), Doc.Element("td", FSharpList.Empty, ofArray([Doc.TextNode(e.Difficulty)]))];
    let _6=ofArray(_5);
    return Doc.Element("tr", _1, _6);
  }, leaderboard))]));
  return Doc.Element("div", [Attr.Create("class", "screen result-screen")], [Doc.Element("p", [Attr.Create("class", "result-score")], [Doc.TextNode((((_1) =>(_2) => _1(String(_2)+" pts"))((x) => x))(result.Score))]), Doc.Element("p", [Attr.Create("class", "result-grade")], [Doc.TextNode(((((_1) =>(_2) =>(_3) => _1("Grade "+toSafe(_2)+" \u2014 "+String(_3)+"% correct"))((x) => x))(grade_1))(pct))]), Doc.Element("div", [Attr.Create("class", "result-grid")], [Doc.Element("div", [Attr.Create("class", "stat-card")], [Doc.Element("span", [Attr.Create("class", "stat-val")], [Doc.TextNode(String(result.CorrectAnswers))]), Doc.Element("span", [Attr.Create("class", "stat-lbl")], [Doc.TextNode("Correct")])]), Doc.Element("div", [Attr.Create("class", "stat-card")], [Doc.Element("span", [Attr.Create("class", "stat-val")], [Doc.TextNode(String(result.TotalQuestions-result.CorrectAnswers))]), Doc.Element("span", [Attr.Create("class", "stat-lbl")], [Doc.TextNode("Wrong")])]), Doc.Element("div", [Attr.Create("class", "stat-card")], [Doc.Element("span", [Attr.Create("class", "stat-val")], [Doc.TextNode((((_1) =>(_2) => _1(String(_2)+"s"))((x) => x))(result.TimeTaken))]), Doc.Element("span", [Attr.Create("class", "stat-lbl")], [Doc.TextNode("Time")])]), Doc.Element("div", [Attr.Create("class", "stat-card")], [Doc.Element("span", [Attr.Create("class", "stat-val")], [Doc.TextNode(result.Difficulty)]), Doc.Element("span", [Attr.Create("class", "stat-lbl")], [Doc.TextNode("Mode")])])]), Doc.Element("button", [Attr.Create("class", "btn btn-start"), Attr.HandlerImpl("click", () =>() => {
    playerName().Set("");
    difficultyStr().Set("");
    categoryStr().Set("");
    questionCountStr().Set("10");
    startError().Set("");
    timerSeconds().Set(0);
    return quizState().Set(Welcome);
  })], [Doc.TextNode("Play Again")]), Doc.Element("h3", [Attr.Create("class", "lb-title")], [Doc.TextNode("Leaderboard \u2014 Top 10")]), leaderboardDoc]);
}
function welcomeScreen(categories){
  const a=FSharpList.Cons(Doc.Element("option", ofArray([Attr.Create("value", "")]), ofArray([Doc.TextNode("All Difficulties")])), map((d) => Doc.Element("option", ofArray([Attr.Create("value", d)]), ofArray([Doc.TextNode(d)])), ofArray(["Easy", "Medium", "Hard"])));
  const diffSelect=Doc.Element("select", ofArray([Attr.Create("class", "form-select"), Attr.HandlerImpl("change", (el) =>() => difficultyStr().Set(getElementValue(el)))]), a);
  const a_1=FSharpList.Cons(Doc.Element("option", ofArray([Attr.Create("value", "")]), ofArray([Doc.TextNode("All Categories")])), map((c) => Doc.Element("option", ofArray([Attr.Create("value", c)]), ofArray([Doc.TextNode(c)])), categories));
  const catSelect=Doc.Element("select", ofArray([Attr.Create("class", "form-select"), Attr.HandlerImpl("change", (el) =>() => categoryStr().Set(getElementValue(el)))]), a_1);
  const a_2=map((n) => {
    const extraAttrs=n===10?ofArray([Attr.Create("selected", "selected")]):FSharpList.Empty;
    return Doc.Element("option", FSharpList.Cons(Attr.Create("value", String(n)), extraAttrs), ofArray([Doc.TextNode(String(n))]));
  }, ofArray([5, 10, 15]));
  const countSelect=Doc.Element("select", ofArray([Attr.Create("class", "form-select"), Attr.HandlerImpl("change", (el) =>() => questionCountStr().Set(getElementValue(el)))]), a_2);
  const errorDoc=Doc.BindView((err) => err==""?Doc.Empty:Doc.Element("div", [Attr.Create("class", "error-box")], [Doc.TextNode(err)]), startError().View);
  return Doc.Element("div", [Attr.Create("class", "screen welcome-screen")], [Doc.Element("h1", [Attr.Create("class", "app-title")], [Doc.TextNode("QuizApp")]), Doc.Element("div", [Attr.Create("class", "form-card")], [Doc.Element("div", [Attr.Create("class", "form-field")], [Doc.Element("label", [], [Doc.TextNode("Your Name")]), Doc.Input([Attr.Create("class", "form-input"), Attr.Create("placeholder", "Enter your name\u2026")], playerName())]), Doc.Element("div", [Attr.Create("class", "form-field")], [Doc.Element("label", [], [Doc.TextNode("Difficulty")]), diffSelect]), Doc.Element("div", [Attr.Create("class", "form-field")], [Doc.Element("label", [], [Doc.TextNode("Category")]), catSelect]), Doc.Element("div", [Attr.Create("class", "form-field")], [Doc.Element("label", [], [Doc.TextNode("Number of Questions")]), countSelect]), errorDoc, Doc.Element("button", [Attr.Create("class", "btn btn-start"), Attr.HandlerImpl("click", () =>() => {
    startError().Set("");
    const cfg=buildConfig();
    const m=validate(cfg);
    if(m.$==0){
      quizState().Set(Loading);
      return StartImmediate(Delay(() => Bind_1(GetQuestions(cfg), (a_3) => {
        if(a_3.$==0){
          const questions=a_3.$0;
          set_quizStartTime(Date.now());
          quizState().Set(InQuestion(questions, 0, 0, 0));
          return Zero();
        }
        else {
          const msg_1=a_3.$0;
          quizState().Set(Welcome);
          startError().Set(msg_1);
          return Zero();
        }
      })), null);
    }
    else {
      const msg=m.$0;
      return startError().Set(msg);
    }
  })], [Doc.TextNode("Start Quiz")])])]);
}
function startTimer(seconds, onExpire){
  let cancelled;
  stopTimer();
  timerSeconds().Set(seconds);
  timerMax().Set(seconds);
  cancelled=false;
  set_timerCancel(Some(() => {
    cancelled=true;
  }));
  Start(Delay(() => {
    let rem;
    rem=seconds;
    return Combine(While(() => rem>0&&!cancelled, Delay(() => Bind_1(Sleep(1000), () =>!cancelled?(rem=rem-1,timerSeconds().Set(rem),Zero()):Zero()))), Delay(() => rem===0&&!cancelled?(onExpire(),Zero()):Zero()));
  }), null);
}
function stopTimer(){
  if(timerCancel()==null){ }
  else {
    timerCancel().$0();
    set_timerCancel(null);
  }
}
function playerName(){
  return _c_1.playerName;
}
function buildConfig(){
  let o;
  let _1=Trim(playerName().Get());
  let _2=parseDifficulty(difficultyStr().Get());
  let _3=categoryStr().Get();
  const m=(o=0,[TryParse(questionCountStr().Get(), {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  return New_1(_1, _2, _3, m[0]?m[1]:10);
}
function quizStartTime(){
  return _c_1.quizStartTime;
}
function timerSeconds(){
  return _c_1.timerSeconds;
}
function timerMax(){
  return _c_1.timerMax;
}
function difficultyStr(){
  return _c_1.difficultyStr;
}
function categoryStr(){
  return _c_1.categoryStr;
}
function questionCountStr(){
  return _c_1.questionCountStr;
}
function startError(){
  return _c_1.startError;
}
function set_quizStartTime(_1){
  _c_1.quizStartTime=_1;
}
function getElementValue(el){
  return el.value;
}
function set_timerCancel(_1){
  _c_1.timerCancel=_1;
}
function timerCancel(){
  return _c_1.timerCancel;
}
function parseDifficulty(s){
  return s=="Easy"?Some(Difficulty.Easy):s=="Medium"?Some(Difficulty.Medium):s=="Hard"?Some(Difficulty.Hard):null;
}
function toInt(x){
  const u=toUInt(x);
  return u>2147483647?u-4294967296:u;
}
function FailWith(msg){
  throw new Error(msg);
}
function toUInt(x){
  return(x<0?Math.ceil(x):Math.floor(x))>>>0;
}
function KeyValue(kvp){
  return[kvp.K, kvp.V];
}
function range(min, max_1){
  const count=1+max_1-min;
  return count<=0?[]:init_1(count, (x) => x+min);
}
class Object_1 {
  Equals(obj){
    return this===obj;
  }
  GetHashCode(){
    return -1;
  }
}
class Var extends Object_1 { }
function Some(Value_1){
  return{$:1, $0:Value_1};
}
let _c=Lazy((_i) => class Var_1 extends Object_1 {
  static {
    _c=_i(this);
  }
  static Create_1(v){
    return new ConcreteVar(false, {s:Ready(v, [])}, v);
  }
  static { }
});
class FSharpList {
  static Empty=Create_1(FSharpList, {$:0});
  get_Item(x){
    return nth(x, this);
  }
  get Length(){
    return length(this);
  }
  static Cons(Head, Tail){
    return Create_1(FSharpList, {
      $:1, 
      $0:Head, 
      $1:Tail
    });
  }
  GetEnumerator(){
    return new T(this, null, (e) => {
      const m=e.s;
      if(m.$==0)return false;
      else {
        const xs=m.$1;
        e.c=m.$0;
        e.s=xs;
        return true;
      }
    }, void 0);
  }
  $;
  $0;
  $1;
}
function GetLeaderboard(){
  return Bind_1((new AjaxRemotingProvider()).Async("Server/GetLeaderboard", []), (o) => Return(((DecodeList(Id()))())(o)));
}
function GetCategories(){
  return Bind_1((new AjaxRemotingProvider()).Async("Server/GetCategories", []), (o) => Return(((DecodeList(Id()))())(o)));
}
function SubmitAnswer(questionId, selectedIndex, timeRemaining){
  return Bind_1((new AjaxRemotingProvider()).Async("Server/SubmitAnswer", [questionId, selectedIndex, timeRemaining]), (o) => Return(o));
}
function SaveResult(result){
  return(new AjaxRemotingProvider()).Async("Server/SaveResult", [(EncodeJson_QuizResult())(result)]);
}
function GetQuestions(cfg){
  return Bind_1((new AjaxRemotingProvider()).Async("Server/GetQuestions", [(EncodeJson_QuizConfig())(cfg)]), (o) => Return((DecodeJson_FSharpResult_2())(o)));
}
function LoadLocalTemplates(baseName){
  !LocalTemplatesLoaded()?(set_LocalTemplatesLoaded(true),LoadNestedTemplates(globalThis.document.body, "")):void 0;
  LoadedTemplates().set_Item(baseName, LoadedTemplateFile(""));
}
function LocalTemplatesLoaded(){
  return _c_3.LocalTemplatesLoaded;
}
function set_LocalTemplatesLoaded(_1){
  _c_3.LocalTemplatesLoaded=_1;
}
function LoadNestedTemplates(root, baseName){
  const loadedTpls=LoadedTemplateFile(baseName);
  const rawTpls=new Dictionary("New_5");
  const wsTemplates=root.querySelectorAll("[ws-template]");
  for(let i=0, _1=wsTemplates.length-1;i<=_1;i++){
    const node=wsTemplates[i];
    const name=node.getAttribute("ws-template").toLowerCase();
    node.removeAttribute("ws-template");
    rawTpls.set_Item(name, FakeRootSingle(node));
  }
  const wsChildrenTemplates=root.querySelectorAll("[ws-children-template]");
  for(let i_1=0, _2=wsChildrenTemplates.length-1;i_1<=_2;i_1++){
    const node_1=wsChildrenTemplates[i_1];
    const name_1=node_1.getAttribute("ws-children-template").toLowerCase();
    node_1.removeAttribute("ws-children-template");
    rawTpls.set_Item(name_1, FakeRoot(node_1));
  }
  const html5TemplateBasedTemplates=root.querySelectorAll("template[id]");
  for(let i_2=0, _3=html5TemplateBasedTemplates.length-1;i_2<=_3;i_2++){
    const node_2=html5TemplateBasedTemplates[i_2];
    rawTpls.set_Item(node_2.getAttribute("id").toLowerCase(), FakeRootFromHTMLTemplate(node_2));
  }
  const html5TemplateBasedTemplates_1=root.querySelectorAll("template[name]");
  for(let i_3=0, _4=html5TemplateBasedTemplates_1.length-1;i_3<=_4;i_3++){
    const node_3=html5TemplateBasedTemplates_1[i_3];
    rawTpls.set_Item(node_3.getAttribute("name").toLowerCase(), FakeRootFromHTMLTemplate(node_3));
  }
  const instantiated=new HashSet("New_3");
  function prepareTemplate(name_2){
    if(!loadedTpls.ContainsKey(name_2)){
      let o;
      const m=(o=null,[rawTpls.TryGetValue(name_2, {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0]){
        instantiated.SAdd(name_2);
        rawTpls.RemoveKey(name_2);
        PrepareTemplateStrict(baseName, Some(name_2), m[1], Some(prepareTemplate));
      }
      else console.warn(instantiated.Contains(name_2)?"Encountered loop when instantiating "+name_2:"Local template does not exist: "+name_2);
    }
  }
  while(rawTpls.count>0)
    prepareTemplate(head_1(rawTpls.Keys));
}
function LoadedTemplates(){
  return _c_3.LoadedTemplates;
}
function LoadedTemplateFile(name){
  let o;
  const m=(o=null,[LoadedTemplates().TryGetValue(name, {get:() => o, set:(v) => {
    o=v;
  }}), o]);
  if(m[0])return m[1];
  else {
    const d=new Dictionary("New_5");
    LoadedTemplates().set_Item(name, d);
    return d;
  }
}
function FakeRootSingle(el){
  el.removeAttribute("ws-template");
  const m=el.getAttribute("ws-replace");
  if(m==null){ }
  else {
    el.removeAttribute("ws-replace");
    const m_1=el.parentNode;
    if(Equals(m_1, null)){ }
    else {
      const n=globalThis.document.createElement(el.tagName);
      n.setAttribute("ws-replace", m);
      m_1.replaceChild(n, el);
    }
  }
  const fakeroot=globalThis.document.createElement("div");
  fakeroot.appendChild(el);
  return fakeroot;
}
function FakeRoot(parent){
  const fakeroot=globalThis.document.createElement("div");
  while(parent.hasChildNodes())
    fakeroot.appendChild(parent.firstChild);
  return fakeroot;
}
function FakeRootFromHTMLTemplate(parent){
  const fakeroot=globalThis.document.createElement("div");
  const content=parent.content;
  for(let i=0, _1=content.childNodes.length-1;i<=_1;i++)fakeroot.appendChild(content.childNodes[i].cloneNode(true));
  return fakeroot;
}
function PrepareTemplateStrict(baseName, name, fakeroot, prepareLocalTemplate){
  const processedHTML5Templates=new HashSet("New_3");
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!==null){
            const next=_1.nextSibling;
            if(Equals(_1.nodeType, Node.TEXT_NODE))convertTextNode(_1);
            else if(Equals(_1.nodeType, Node.ELEMENT_NODE))convertElement(_1);
            _1=next;
          }
          else return null;
          break;
        case 1:
          const name_2=string(_1.nodeName, Some(3), null).toLowerCase();
          const m=name_2.indexOf(".");
          const p=m===-1?[baseName, name_2]:[string(name_2, null, Some(m-1)), string(name_2, Some(m+1), null)];
          const instName=p[1];
          const instBaseName=p[0];
          if(instBaseName!=""&&!LoadedTemplates().ContainsKey(instBaseName))return failNotLoaded(instName);
          else {
            if(instBaseName==""&&prepareLocalTemplate!=null)prepareLocalTemplate.$0(instName);
            const d=LoadedTemplates().Item(instBaseName);
            if(!d.ContainsKey(instName))return failNotLoaded(instName);
            else {
              const t=d.Item(instName);
              const instance=t.cloneNode(true);
              const usedHoles=new HashSet("New_3");
              const mappings=new Dictionary("New_5");
              const attrs=_1.attributes;
              for(let i=0, _4=attrs.length-1;i<=_4;i++){
                const name_3=attrs.item(i).name.toLowerCase();
                const m_1=attrs.item(i).nodeValue;
                let _2=m_1==""?name_3:m_1.toLowerCase();
                mappings.set_Item(name_3, _2);
                if(!usedHoles.SAdd(name_3))console.warn("Hole mapped twice", name_3);
              }
              for(let i_1=0, _5=_1.childNodes.length-1;i_1<=_5;i_1++){
                const n=_1.childNodes[i_1];
                if(Equals(n.nodeType, Node.ELEMENT_NODE))if(!usedHoles.SAdd(n.nodeName.toLowerCase()))console.warn("Hole filled twice", instName);
              }
              const singleTextFill=_1.childNodes.length===1&&Equals(_1.firstChild.nodeType, Node.TEXT_NODE);
              if(singleTextFill){
                const x=fillTextHole(instance, _1.firstChild.textContent, instName);
                const f=((usedHoles_1) =>(i_2) => usedHoles_1.SAdd(i_2))(usedHoles);
                let _3=((a) =>(o) => {
                  if(o!=null)a(o.$0);
                })((x_1) => {
                  f(x_1);
                });
                _3(x);
              }
              removeHolesExcept(instance, usedHoles);
              if(!singleTextFill){
                for(let i_2=0, _6=_1.childNodes.length-1;i_2<=_6;i_2++){
                  const n_1=_1.childNodes[i_2];
                  if(Equals(n_1.nodeType, Node.ELEMENT_NODE))if(n_1.hasAttributes())fillInstanceAttrs(instance, n_1);
                  else fillDocHole(instance, n_1);
                }
              }
              mapHoles(instance, mappings);
              fill(instance, _1.parentNode, _1);
              _1.parentNode.removeChild(_1);
              return;
            }
          }
          break;
      }
  }
  function fillDocHole(instance, fillWith){
    const name_2=fillWith.nodeName.toLowerCase();
    const fillHole=(p, n) => {
      if(name_2=="title"&&fillWith.hasChildNodes()){
        const parsed=ParseHTMLIntoFakeRoot(fillWith.textContent);
        fillWith.removeChild(fillWith.firstChild);
        while(parsed.hasChildNodes())
          fillWith.appendChild(parsed.firstChild);
      }
      convertElement(fillWith);
      return fill(fillWith, p, n);
    };
    foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
      const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
      for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
        const attrName=get(holeAttrs, i);
        let this_1=new RegExp("\\${"+name_2+"}", "ig");
        let _1=e.getAttribute(attrName).replace(this_1, fillWith.textContent);
        e.setAttribute(attrName, _1);
      }
    });
    const m=instance.querySelector("[ws-hole="+name_2+"]");
    if(Equals(m, null)){
      const m_1=instance.querySelector("[ws-replace="+name_2+"]");
      if(Equals(m_1, null)){
        const m_2=instance.querySelector("slot[name="+name_2+"]");
        return instance.tagName.toLowerCase()=="template"?(fillHole(m_2.parentNode, m_2),void m_2.parentNode.removeChild(m_2)):null;
      }
      else {
        fillHole(m_1.parentNode, m_1);
        m_1.parentNode.removeChild(m_1);
        return;
      }
    }
    else {
      while(m.hasChildNodes())
        m.removeChild(m.lastChild);
      m.removeAttribute("ws-hole");
      return(((a) => {
        const _1=a;
        return(_2) => fillHole(_1, _2);
      })(m))(null);
    }
  }
  function convertElement(el){
    if(!el.hasAttribute("ws-preserve"))if(StartsWith(el.nodeName.toLowerCase(), "ws-"))convertInstantiation(el);
    else {
      convertAttrs(el);
      convertNodeAndSiblings(el.firstChild);
    }
  }
  function convertNodeAndSiblings(n){
    return recF(0, n);
  }
  function convertInstantiation(el){
    return recF(1, el);
  }
  function convertNestedTemplates(el){
    while(true)
      {
        const m=el.querySelector("[ws-template]");
        if(Equals(m, null)){
          const m_1=el.querySelector("[ws-children-template]");
          if(Equals(m_1, null)){
            const idTemplates=el.querySelectorAll("template[id]");
            for(let i=1, _1=idTemplates.length-1;i<=_1;i++){
              const n=idTemplates[i];
              if(processedHTML5Templates.Contains(n)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n.getAttribute("id")), n, null);
                processedHTML5Templates.SAdd(n);
              }
            }
            const nameTemplates=el.querySelectorAll("template[name]");
            for(let i_1=1, _2=nameTemplates.length-1;i_1<=_2;i_1++){
              const n_1=nameTemplates[i_1];
              if(processedHTML5Templates.Contains(n_1)){ }
              else {
                PrepareTemplateStrict(baseName, Some(n_1.getAttribute("name")), n_1, null);
                processedHTML5Templates.SAdd(n_1);
              }
            }
            return null;
          }
          else {
            const name_2=m_1.getAttribute("ws-children-template");
            m_1.removeAttribute("ws-children-template");
            PrepareTemplateStrict(baseName, Some(name_2), m_1, null);
            el=el;
          }
        }
        else {
          const name_3=m.getAttribute("ws-template");
          (PrepareSingleTemplate(baseName, Some(name_3), m))(null);
          el=el;
        }
      }
  }
  const name_1=(name==null?"":name.$0).toLowerCase();
  LoadedTemplateFile(baseName).set_Item(name_1, fakeroot);
  if(fakeroot.hasChildNodes()){
    convertNestedTemplates(fakeroot);
    convertNodeAndSiblings(fakeroot.firstChild);
  }
}
function foreachNotPreserved(root, selector, f){
  IterSelector(root, selector, (p) => {
    if(p.closest("[ws-preserve]")==null)f(p);
  });
}
function PrepareSingleTemplate(baseName, name, el){
  const root=FakeRootSingle(el);
  return(p) => {
    PrepareTemplateStrict(baseName, name, root, p);
  };
}
function TextHoleRE(){
  return _c_3.TextHoleRE;
}
class Doc extends Object_1 {
  docNode;
  updates;
  static RunById(id, tr){
    const m=globalThis.document.getElementById(id);
    if(Equals(m, null))FailWith("invalid id: "+id);
    else Doc.Run(m, tr);
  }
  static BindView(f, view){
    return Doc.EmbedView(Map(f, view));
  }
  static get Empty(){
    return Doc.Mk(null, Const());
  }
  static TextNode(v){
    return Doc.Mk(TextNodeDoc(globalThis.document.createTextNode(v)), Const());
  }
  static Element(name, attr_1, children){
    const a=Attr.Concat(attr_1);
    const c=Doc.Concat(children);
    return Elt.New(globalThis.document.createElement(name), a, c);
  }
  static Run(parent, doc){
    LinkElement(parent, doc.docNode);
    Doc.RunInPlace(false, parent, doc);
  }
  static EmbedView(view){
    const node=CreateEmbedNode();
    return Doc.Mk(EmbedDoc(node), Map(() => { }, Bind((doc) => {
      UpdateEmbedNode(node, doc.docNode);
      return doc.updates;
    }, view)));
  }
  static Mk(node, updates){
    return new Doc(node, updates);
  }
  static Concat(xs){
    return TreeReduce(Doc.Empty, Doc.Append, ofSeqNonCopying(xs));
  }
  static Input(attr_1, var_1){
    return Doc.InputInternal("input", () => append(attr_1, [Value(var_1)]));
  }
  static RunInPlace(childrenOnly, parent, doc){
    const st=CreateRunState(parent, doc.docNode);
    Sink(get_UseAnimations()||BatchUpdatesEnabled()?StartProcessor(PerformAnimatedUpdate(childrenOnly, st, doc.docNode)):() => {
      PerformSyncUpdate(childrenOnly, st, doc.docNode);
    }, doc.updates);
  }
  static Append(a, b){
    return Doc.Mk(AppendDoc(a.docNode, b.docNode), Map2Unit(a.updates, b.updates));
  }
  static InputInternal(elemTy, attr_1){
    const el=globalThis.document.createElement(elemTy);
    return Elt.New(el, Attr.Concat(attr_1(el)), Doc.Empty);
  }
  constructor(docNode, updates){
    super();
    this.docNode=docNode;
    this.updates=updates;
  }
}
function NewFromSeq(fields){
  const r={};
  const e=Get(fields);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        r[f[0]]=f[1];
      }
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
  return r;
}
let _c_1=Lazy((_i) => class $StartupCode_Client {
  static {
    _c_1=_i(this);
  }
  static quizStartTime;
  static timerCancel;
  static timerMax;
  static timerSeconds;
  static startError;
  static questionCountStr;
  static categoryStr;
  static difficultyStr;
  static playerName;
  static quizState;
  static {
    this.quizState=_c.Create_1(Welcome);
    this.playerName=_c.Create_1("");
    this.difficultyStr=_c.Create_1("");
    this.categoryStr=_c.Create_1("");
    this.questionCountStr=_c.Create_1("10");
    this.startError=_c.Create_1("");
    this.timerSeconds=_c.Create_1(0);
    this.timerMax=_c.Create_1(20);
    this.timerCancel=null;
    this.quizStartTime=Date.now();
  }
});
class attr extends Object_1 { }
function ShowingAnswer(Item1, Item2, Item3, Item4, Item5){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2, 
    $2:Item3, 
    $3:Item4, 
    $4:Item5
  };
}
function Finished(Item){
  return{$:4, $0:Item};
}
function InQuestion(Item1, Item2, Item3, Item4){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2, 
    $2:Item3, 
    $3:Item4
  };
}
let Welcome={$:0};
let Loading={$:1};
class Difficulty {
  get Label(){
    return this.$==1?"Medium":this.$==2?"Hard":"Easy";
  }
  static Easy=Create_1(Difficulty, {$:0});
  static Medium=Create_1(Difficulty, {$:1});
  static Hard=Create_1(Difficulty, {$:2});
  $;
}
function New(PlayerName, Score, TotalQuestions, CorrectAnswers, TimeTaken, Difficulty_1, CompletedAt){
  return{
    PlayerName:PlayerName, 
    Score:Score, 
    TotalQuestions:TotalQuestions, 
    CorrectAnswers:CorrectAnswers, 
    TimeTaken:TimeTaken, 
    Difficulty:Difficulty_1, 
    CompletedAt:CompletedAt
  };
}
function New_1(PlayerName, Difficulty_1, Category, QuestionCount){
  return{
    PlayerName:PlayerName, 
    Difficulty:Difficulty_1, 
    Category:Category, 
    QuestionCount:QuestionCount
  };
}
function toSafe(s){
  return s==null?"":s;
}
function mapi(f, x){
  let r;
  let l;
  let i;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create_1(FSharpList, {$:1});
    r=res;
    l=x;
    i=0;
    go=true;
    while(go)
      {
        r.$0=f(i, l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create_1(FSharpList, {$:1});
          r=(r.$1=t,t);
          i=i+1;
        }
      }
    r.$1=FSharpList.Empty;
    return res;
  }
}
function ofArray(arr){
  let r=FSharpList.Empty;
  for(let i=length_1(arr)-1, _1=0;i>=_1;i--)r=FSharpList.Cons(get(arr, i), r);
  return r;
}
function map(f, x){
  let r;
  let l;
  let go;
  if(x.$==0)return x;
  else {
    const res=Create_1(FSharpList, {$:1});
    r=res;
    l=x;
    go=true;
    while(go)
      {
        r.$0=f(l.$0);
        l=l.$1;
        if(l.$==0)go=false;
        else {
          const t=Create_1(FSharpList, {$:1});
          r=(r.$1=t,t);
        }
      }
    r.$1=FSharpList.Empty;
    return res;
  }
}
function length(l){
  let r=l;
  let i=0;
  while(r.$==1)
    {
      r=tail(r);
      i=i+1;
    }
  return i;
}
function init(s, f){
  return ofArray(init_2(s, f));
}
function tail(l){
  return l.$==1?l.$1:listEmpty();
}
function listEmpty(){
  return FailWith("The input list was empty.");
}
function head(l){
  return l.$==1?l.$0:listEmpty();
}
function Map2(fn, a, a_1){
  return CreateLazy(() => Map2_1(fn, a(), a_1()));
}
function Map(fn, a){
  return CreateLazy(() => Map_1(fn, a()));
}
function Const(x){
  const o={s:Forever(x)};
  return() => o;
}
function CreateLazy(observe){
  const lv={c:null, o:observe};
  return() => {
    let c=lv.c;
    if(c===null){
      c=lv.o();
      lv.c=c;
      const _1=c.s;
      if(_1!=null&&_1.$==0)lv.o=null;
      else WhenObsoleteRun(c, () => {
        lv.c=null;
      });
      return c;
    }
    else return c;
  };
}
function Bind(fn, view){
  return Join(Map(fn, view));
}
function Sink(act, a){
  function loop(){
    WhenRun(a(), act, () => {
      scheduler().Fork(loop);
    });
  }
  scheduler().Fork(loop);
}
function Join(a){
  return CreateLazy(() => Join_1(a()));
}
function Map2Unit(a, a_1){
  return CreateLazy(() => Map2Unit_1(a(), a_1()));
}
class ConcreteVar extends Var {
  isConst;
  current;
  snap;
  view;
  id;
  get View(){
    return this.view;
  }
  Set(v){
    if(this.isConst)(((_1) => _1("WebSharper.UI: invalid attempt to change value of a Var after calling SetFinal"))((s) => {
      console.log(s);
    }));
    else {
      Obsolete(this.snap);
      this.current=v;
      this.snap={s:Ready(v, [])};
    }
  }
  Get(){
    return this.current;
  }
  UpdateMaybe(f){
    const m=f(this.Get());
    if(m!=null&&m.$==1)this.Set(m.$0);
  }
  constructor(isConst, initSnap, initValue){
    super();
    this.isConst=isConst;
    this.current=initValue;
    this.snap=initSnap;
    this.view=() => this.snap;
    this.id=Int();
  }
}
function Map2_1(fn, sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(fn(_1.$0, _2.$0))}:Map2Opt1(fn, _1.$0, sn2);
  else if(_2!=null&&_2.$==0)return Map2Opt2(fn, _2.$0, sn1);
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, fn(_3.$0[0], _4.$0[0]));
        else MarkReady(res, fn(_3.$0[0], _4.$0[0]));
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function Map_1(fn, sn){
  const m=sn.s;
  if(m!=null&&m.$==0)return{s:Forever(fn(m.$0))};
  else {
    const res={s:Waiting([], [])};
    When(sn, (a) => {
      MarkDone(res, sn, fn(a));
    }, res);
    return res;
  }
}
function WhenObsoleteRun(snap, obs){
  const m=snap.s;
  if(m==null)obs();
  else m!=null&&m.$==2?(m.$0,m.$1.push(obs)):m!=null&&m.$==3?(m.$0,m.$1.push(obs)):m.$0;
}
function Map2Opt1(fn, x, sn2){
  return Map_1((y) => fn(x, y), sn2);
}
function Map2Opt2(fn, y, sn1){
  return Map_1((x) => fn(x, y), sn1);
}
function ValueAndForever(snap){
  const m=snap.s;
  return m!=null&&m.$==0?Some([m.$0, true]):m!=null&&m.$==2?Some([m.$0, false]):null;
}
function MarkForever(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q=m.$0;
    sn.s=Forever(v);
    for(let i=0, _1=length_1(q)-1;i<=_1;i++)(get(q, i))(v);
  }
  else void 0;
}
function MarkReady(sn, v){
  const m=sn.s;
  if(m!=null&&m.$==3){
    const q2=m.$1;
    const q1=m.$0;
    sn.s=Ready(v, q2);
    for(let i=0, _1=length_1(q1)-1;i<=_1;i++)(get(q1, i))(v);
  }
  else void 0;
}
function When(snap, avail, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else if(m!=null&&m.$==2){
    const v=m.$0;
    EnqueueSafe(m.$1, obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    EnqueueSafe(q2, obs);
  }
  else avail(m.$0);
}
function MarkDone(res, sn, v){
  const _1=sn.s;
  if(_1!=null&&_1.$==0)MarkForever(res, v);
  else MarkReady(res, v);
}
function EnqueueSafe(q, x){
  q.push(x);
  if(q.length%20===0){
    const qcopy=q.slice(0);
    Clear(q);
    for(let i=0, _1=length_1(qcopy)-1;i<=_1;i++){
      const o=get(qcopy, i);
      if(typeof o=="object")(((sn) => {
        if(sn.s)q.push(sn);
      })(o));
      else(((f) => {
        q.push(f);
      })(o));
    }
  }
  else void 0;
}
function WhenRun(snap, avail, obs){
  const m=snap.s;
  if(m==null)obs();
  else if(m!=null&&m.$==2){
    const v=m.$0;
    m.$1.push(obs);
    avail(v);
  }
  else if(m!=null&&m.$==3){
    const q2=m.$1;
    m.$0.push(avail);
    q2.push(obs);
  }
  else avail(m.$0);
}
function Join_1(snap){
  const res={s:Waiting([], [])};
  When(snap, (x) => {
    const y=x();
    When(y, (v) => {
      let _1;
      const _2=y.s;
      if(_2!=null&&_2.$==0){
        const _3=snap.s;
        _1=_3!=null&&_3.$==0;
      }
      else _1=false;
      if(_1)MarkForever(res, v);
      else MarkReady(res, v);
    }, res);
  }, res);
  return res;
}
function Copy(sn){
  const m=sn.s;
  if(m==null)return sn;
  else if(m!=null&&m.$==2){
    const res={s:Ready(m.$0, [])};
    WhenObsolete(sn, res);
    return res;
  }
  else if(m!=null&&m.$==3){
    const res_1={s:Waiting([], [])};
    When(sn, (v) => {
      MarkDone(res_1, sn, v);
    }, res_1);
    return res_1;
  }
  else return sn;
}
function Map2Unit_1(sn1, sn2){
  const _1=sn1.s;
  const _2=sn2.s;
  if(_1!=null&&_1.$==0)return _2!=null&&_2.$==0?{s:Forever(null)}:sn2;
  else if(_2!=null&&_2.$==0)return sn1;
  else {
    const res={s:Waiting([], [])};
    const cont=() => {
      const m=res.s;
      if(!(m!=null&&m.$==0||m!=null&&m.$==2)){
        const _3=ValueAndForever(sn1);
        const _4=ValueAndForever(sn2);
        if(_3!=null&&_3.$==1)if(_4!=null&&_4.$==1)if(_3.$0[1]&&_4.$0[1])MarkForever(res, null);
        else MarkReady(res, null);
      }
    };
    When(sn1, cont, res);
    When(sn2, cont, res);
    return res;
  }
}
function WhenObsolete(snap, obs){
  const m=snap.s;
  if(m==null)Obsolete(obs);
  else m!=null&&m.$==2?(m.$0,EnqueueSafe(m.$1, obs)):m!=null&&m.$==3?(m.$0,EnqueueSafe(m.$1, obs)):m.$0;
}
function Delay(mk){
  return(c) => {
    try {
      (mk())(c);
    }
    catch(e){
      c.k(No(e));
    }
  };
}
function Bind_1(r, f){
  return checkCancel((c) => {
    r(New_2((a) => {
      if(a.$==0){
        const x=a.$0;
        scheduler().Fork(() => {
          try {
            (f(x))(c);
          }
          catch(e){
            c.k(No(e));
          }
        });
      }
      else scheduler().Fork(() => {
        c.k(a);
      });
    }, c.ct));
  });
}
function Zero(){
  return _c_2.Zero;
}
function Start(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  scheduler().Fork(() => {
    if(!ct.c)c(New_2((a) => {
      if(a.$==1)UncaughtAsyncError(a.$0);
    }, ct));
  });
}
function StartImmediate(c, ctOpt){
  const d=(defCTS())[0];
  const ct=ctOpt==null?d:ctOpt.$0;
  if(!ct.c)c(New_2((a) => {
    if(a.$==1)UncaughtAsyncError(a.$0);
  }, ct));
}
function checkCancel(r){
  return(c) => {
    if(c.ct.c)cancel(c);
    else r(c);
  };
}
function defCTS(){
  return _c_2.defCTS;
}
function UncaughtAsyncError(e){
  console.log("WebSharper: Uncaught asynchronous exception", e);
}
function Combine(a, b){
  return Bind_1(a, () => b);
}
function While(g, c){
  return g()?Bind_1(c, () => While(g, c)):Return();
}
function Sleep(ms){
  return(c) => {
    let pending;
    let creg;
    pending=void 0;
    creg=void 0;
    pending=setTimeout(() => {
      creg.Dispose();
      scheduler().Fork(() => {
        c.k(Ok(null));
      });
    }, ms);
    creg=Register(c.ct, () => {
      clearTimeout(pending);
      scheduler().Fork(() => {
        cancel(c);
      });
    });
  };
}
function cancel(c){
  c.k(Cc(new OperationCanceledException("New", c.ct)));
}
function scheduler(){
  return _c_2.scheduler;
}
function Return(x){
  return(c) => {
    c.k(Ok(x));
  };
}
function Register(ct, callback){
  if(ct===noneCT())return{Dispose(){
    return null;
  }};
  else {
    const i=ct.r.push(callback)-1;
    return{Dispose(){
      return set(ct.r, i, () => { });
    }};
  }
}
function noneCT(){
  return _c_2.noneCT;
}
function GetCT(){
  return _c_2.GetCT;
}
function FromContinuations(subscribe){
  return(c) => {
    const continued=[false];
    const once=(cont) => {
      if(continued[0])FailWith("A continuation provided by Async.FromContinuations was invoked multiple times");
      else {
        continued[0]=true;
        scheduler().Fork(cont);
      }
    };
    subscribe((a) => {
      once(() => {
        c.k(Ok(a));
      });
    }, (e) => {
      once(() => {
        c.k(No(e));
      });
    }, (e) => {
      once(() => {
        c.k(Cc(e));
      });
    });
  };
}
class AjaxRemotingProvider extends Object_1 {
  AsyncBase(m, data){
    return Delay(() => {
      const headers=makeHeaders(this.Headers);
      const payload=makePayload(data);
      return Bind_1(GetCT(), (a) => Bind_1(FromContinuations((ok, err, cc) => {
        const waiting=[true];
        const reg=Register(a, () => {
          if(waiting[0]){
            waiting[0]=false;
            cc(new OperationCanceledException("New", a));
          }
        });
        return AjaxProvider().Async(this.EndPoint+"/"+m, headers, payload, (x) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            ok(x);
          }
        }, (e) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            err(e);
          }
        });
      }), (a_1) => Return(JSON.parse(a_1))));
    });
  }
  get EndPoint(){
    return EndPoint();
  }
  get Headers(){
    return[];
  }
  Async(m, data){
    return this.AsyncBase(m, data);
  }
}
function DecodeList(decEl){
  return() =>(a) => {
    const e=decEl();
    return init(length_1(a), (i) => e(get(a, i)));
  };
}
function Id(){
  return() =>(x) => x;
}
function EncodeRecord(_1, fields){
  return() =>(x) => {
    const o={};
    iter_1((_2) => {
      const name=_2[0];
      const enc=_2[1];
      const kind=_2[2];
      if(kind===0){
        o[name]=(enc())(x[name]);
        return;
      }
      else if(kind===1){
        const m=x[name];
        return m==null?null:void(o[name]=(enc())(m.$0));
      }
      else return kind===2?x.hasOwnProperty(name)?void(o[name]=(enc())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(enc())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return o;
  };
}
function EncodeDateTime(){
  return() =>(x) =>(new Date(x)).toISOString();
}
function DecodeUnion(t, discr, cases){
  return() =>(x) => {
    let tag;
    if(typeof x==="object"&&x!=null){
      const o={};
      if(typeof discr==="string"){
        const tagName=x[discr];
        tag=findIndex((case_1) =>!Equals(case_1, null)&&case_1[0]==tagName, cases);
      }
      else {
        const r=[void 0];
        let k;
        for(var k_1 in discr)if(((k_2) => x.hasOwnProperty(k_2)&&(r[0]=discr[k_2],true))(k_1))break;
        tag=r[0];
      }
      o.$=tag;
      iter_1((_1) => {
        const from=_1[0];
        const __to__=_1[1];
        const dec=_1[2];
        const kind=_1[3];
        if(from==null){
          const r_1=(dec())(x);
          if(__to__)delete r_1[discr];
          o.$0=r_1;
          return;
        }
        else return kind===0?void(o[from]=(dec())(x[__to__])):kind===1?void(o[from]=x.hasOwnProperty(__to__)?Some((dec())(x[__to__])):null):FailWith("Invalid field option kind");
      }, (get(cases, tag))[1]);
      return t===void 0?o:t(o);
    }
    else return x;
  };
}
function EncodeUnion(_1, discr, cases){
  return() =>(x) => {
    if(typeof x==="object"&&x!=null){
      const o={};
      const p=get(cases, x.$);
      if(Equals(typeof discr, "string"))o[discr]=p[0];
      iter_1((_2) => {
        const from=_2[0];
        const __to__=_2[1];
        const enc=_2[2];
        const kind=_2[3];
        if(from==null){
          const record=(enc())(x.$0);
          let k;
          for(var k_1 in record)if(((f) => {
            o[f]=record[f];
            return false;
          })(k_1))break;
          return;
        }
        else if(kind===0){
          o[__to__]=(enc())(x[from]);
          return;
        }
        else if(kind===1){
          const m=x[from];
          return m==null?null:void(o[__to__]=(enc())(m.$0));
        }
        else return FailWith("Invalid field option kind");
      }, p[1]);
      return o;
    }
    else return x;
  };
}
function DecodeRecord(t, fields){
  return() =>(x) => {
    const o={};
    iter_1((_1) => {
      const name=_1[0];
      const dec=_1[1];
      const kind=_1[2];
      return kind===0?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):FailWith("Missing mandatory field: "+name):kind===1?void(o[name]=x.hasOwnProperty(name)?Some((dec())(x[name])):null):kind===2?x.hasOwnProperty(name)?void(o[name]=(dec())(x[name])):null:kind===3?x[name]===void 0?void(o[name]=(dec())(x[name])):null:FailWith("Invalid field option kind");
    }, fields);
    return t===void 0?o:t(o);
  };
}
function grade(r){
  const m=percentage(r);
  return m>=90?"A+":m>=80?"A":m>=70?"B":m>=60?"C":"F";
}
function percentage(r){
  return r.TotalQuestions===0?0:toInt(r.CorrectAnswers/r.TotalQuestions*100);
}
function validate(cfg){
  return Trim(cfg.PlayerName)==""?Error_1("Please enter your name."):cfg.QuestionCount<1||cfg.QuestionCount>15?Error_1("Pick 1\u201315 questions."):Ok_1(null);
}
function GetFieldValues(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push(o[k_1]);
  return r;
}
class Dictionary extends Object_1 {
  equals;
  hash;
  count;
  data;
  set_Item(k, v){
    this.set(k, v);
  }
  ContainsKey(k){
    const d=this.data[this.hash(k)];
    return d==null?false:exists_1((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
  }
  TryGetValue(k, res){
    const d=this.data[this.hash(k)];
    if(d==null)return false;
    else {
      const v=tryPick((a) => {
        const a_1=KeyValue(a);
        return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
      }, d);
      return v!=null&&v.$==1&&(res.set(v.$0),true);
    }
  }
  RemoveKey(k){
    return this.remove(k);
  }
  get Keys(){
    return new KeyCollection(this);
  }
  set(k, v){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null){
      this.count=this.count+1;
      this.data[h]=new Array({K:k, V:v});
    }
    else {
      const m=tryFindIndex((a) => this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      if(m==null){
        this.count=this.count+1;
        d.push({K:k, V:v});
      }
      else d[m.$0]={K:k, V:v};
    }
  }
  remove(k){
    const h=this.hash(k);
    const d=this.data[h];
    if(d==null)return false;
    else {
      const r=filter((a) =>!this.equals.apply(null, [(KeyValue(a))[0], k]), d);
      return length_1(r)<d.length&&(this.count=this.count-1,this.data[h]=r,true);
    }
  }
  Item(k){
    return this.get(k);
  }
  get(k){
    const d=this.data[this.hash(k)];
    return d==null?notPresent():pick((a) => {
      const a_1=KeyValue(a);
      return this.equals.apply(null, [a_1[0], k])?Some(a_1[1]):null;
    }, d);
  }
  GetEnumerator(){
    return Get0(concat_2(GetFieldValues(this.data)));
  }
  constructor(i, _1, _2, _3){
    if(i=="New_5"){
      i="New_6";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_6"){
      const init_3=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.count=0;
      this.data=[];
      const e=Get(init_3);
      try {
        while(e.MoveNext())
          {
            const x=e.Current;
            this.set(x.K, x.V);
          }
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
function Equals(a, b){
  if(a===b)return true;
  else {
    const m=typeof a;
    if(m=="object"){
      if(a===null||a===void 0||b===null||b===void 0||!Equals(typeof b, "object"))return false;
      else if("Equals"in a)return a.Equals(b);
      else if("Equals"in b)return false;
      else if(a instanceof Array&&b instanceof Array)return arrayEquals(a, b);
      else if(a instanceof Date&&b instanceof Date)return dateEquals(a, b);
      else {
        const a_1=a;
        const b_1=b;
        const eqR=[true];
        let k;
        for(var k_2 in a_1)if(((k_3) => {
          eqR[0]=!a_1.hasOwnProperty(k_3)||b_1.hasOwnProperty(k_3)&&Equals(a_1[k_3], b_1[k_3]);
          return!eqR[0];
        })(k_2))break;
        if(eqR[0]){
          let k_1;
          for(var k_3 in b_1)if(((k_4) => {
            eqR[0]=!b_1.hasOwnProperty(k_4)||a_1.hasOwnProperty(k_4);
            return!eqR[0];
          })(k_3))break;
        }
        return eqR[0];
      }
    }
    else return m=="function"&&("$Func"in a?a.$Func===b.$Func&&a.$Target===b.$Target:"$Invokes"in a&&"$Invokes"in b&&arrayEquals(a.$Invokes, b.$Invokes));
  }
}
function arrayEquals(a, b){
  let eq;
  let i;
  if(length_1(a)===length_1(b)){
    eq=true;
    i=0;
    while(eq&&i<length_1(a))
      {
        !Equals(get(a, i), get(b, i))?eq=false:void 0;
        i=i+1;
      }
    return eq;
  }
  else return false;
}
function dateEquals(a, b){
  return a.getTime()===b.getTime();
}
function Hash(o){
  const m=typeof o;
  return m=="function"?0:m=="boolean"?o?1:0:m=="number"?o:m=="string"?hashString(o):m=="object"?o==null?0:o instanceof Array?hashArray(o):hashObject(o):m=="bigint"?hashString(String(o)):m=="symbol"?hashString(o.description):0;
}
function hashString(s){
  let hash;
  if(s===null)return 0;
  else {
    hash=5381;
    for(let i=0, _1=s.length-1;i<=_1;i++)hash=hashMix(hash, s[i].charCodeAt());
    return hash;
  }
}
function hashArray(o){
  let h=-34948909;
  for(let i=0, _1=length_1(o)-1;i<=_1;i++)h=hashMix(h, Hash(get(o, i)));
  return h;
}
function hashObject(o){
  if("GetHashCode"in o)return o.GetHashCode();
  else {
    const ____=hashMix;
    const h=[0];
    let k;
    for(var k_1 in o)if(((key) => {
      h[0]=____(____(h[0], hashString(key)), Hash(o[key]));
      return false;
    })(k_1))break;
    return h[0];
  }
}
function hashMix(x, y){
  return(x<<5)+x+y;
}
function Compare(a, b){
  if(a===b)return 0;
  else {
    const m=typeof a;
    switch(m=="boolean"?1:m=="number"?1:m=="bigint"?1:m=="string"?1:m=="object"?2:m=="function"?3:m=="symbol"?4:0){
      case 0:
        return typeof b=="undefined"?0:-1;
      case 1:
        return a<b?-1:1;
      case 2:
        if(a===null)return -1;
        else if(b===null)return 1;
        else if("CompareTo"in a)return a.CompareTo(b);
        else if("CompareTo0"in a)return a.CompareTo0(b);
        else if(a instanceof Array&&b instanceof Array)return compareArrays(a, b);
        else if(a instanceof Date&&b instanceof Date)return compareDates(a, b);
        else {
          const a_1=a;
          const b_1=b;
          const cmp=[0];
          let k;
          for(var k_2 in a_1)if(((k_3) =>!a_1.hasOwnProperty(k_3)?false:!b_1.hasOwnProperty(k_3)?(cmp[0]=1,true):(cmp[0]=Compare(a_1[k_3], b_1[k_3]),cmp[0]!==0))(k_2))break;
          if(cmp[0]===0){
            let k_1;
            for(var k_3 in b_1)if(((k_4) =>!b_1.hasOwnProperty(k_4)?false:!a_1.hasOwnProperty(k_4)&&(cmp[0]=-1,true))(k_3))break;
          }
          return cmp[0];
        }
        break;
      case 3:
        return FailWith("Cannot compare function values.");
      case 4:
        return FailWith("Cannot compare symbol values.");
    }
  }
}
function compareArrays(a, b){
  let cmp;
  let i;
  if(length_1(a)<length_1(b))return -1;
  else if(length_1(a)>length_1(b))return 1;
  else {
    cmp=0;
    i=0;
    while(cmp===0&&i<length_1(a))
      {
        cmp=Compare(get(a, i), get(b, i));
        i=i+1;
      }
    return cmp;
  }
}
function compareDates(a, b){
  return Compare(a.getTime(), b.getTime());
}
function TryParse(s, r){
  return TryParse_1(s, -2147483648, 2147483647, r);
}
class Attr {
  static Create(name, value){
    return Attr.A3((el) => {
      el.setAttribute(name, value);
    });
  }
  static HandlerImpl(event, q){
    return Attr.A3((el) => {
      el.addEventListener(event, (d) =>(q(el))(d), false);
    });
  }
  static Concat(xs){
    const x=ofSeqNonCopying(xs);
    return TreeReduce(EmptyAttr(), (_1, _2) => AppendTree(_1, _2), x);
  }
  static A3(init_3){
    return Create_1(Attr, {$:3, $0:init_3});
  }
  static A2(Item1, Item2){
    return Create_1(Attr, {
      $:2, 
      $0:Item1, 
      $1:Item2
    });
  }
  static A1(Item){
    return Create_1(Attr, {$:1, $0:Item});
  }
  $;
  $0;
  $1;
}
function Trim(s){
  return s.replace(new RegExp("^\\s+"), "").replace(new RegExp("\\s+$"), "");
}
function concat(separator, strings){
  return ofSeq(strings).join(separator);
}
function SplitChars(s, sep, opts){
  return Split(s, new RegExp("["+RegexEscape(sep.join(""))+"]"), opts);
}
function StartsWith(t, s){
  return t.substring(0, s.length)==s;
}
function Split(s, pat, opts){
  return opts===1?filter((x) => x!=="", SplitWith(s, pat)):SplitWith(s, pat);
}
function RegexEscape(s){
  return s.replace(new RegExp("[-\\/\\\\^$*+?.()|[\\]{}]", "g"), "\\$&");
}
function SplitWith(str, pat){
  return str.split(pat);
}
function forall(f, s){
  return forall_1(f, protect(s));
}
function protect(s){
  return s==null?"":s;
}
let Encoder_QuizResult;
let Encoder_Difficulty;
let Encoder_QuizConfig;
let Decoder_Difficulty;
let Decoder_ClientQuestion;
let Decoder_FSharpResult_2;
function EncodeJson_QuizResult(){
  return Encoder_QuizResult?Encoder_QuizResult:Encoder_QuizResult=(EncodeRecord(void 0, [["PlayerName", Id(), 0], ["Score", Id(), 0], ["TotalQuestions", Id(), 0], ["CorrectAnswers", Id(), 0], ["TimeTaken", Id(), 0], ["Difficulty", Id(), 0], ["CompletedAt", EncodeDateTime(), 0]]))();
}
function EncodeJson_QuizConfig(){
  return Encoder_QuizConfig?Encoder_QuizConfig:Encoder_QuizConfig=(EncodeRecord(void 0, [["PlayerName", Id(), 0], ["Difficulty", EncodeJson_Difficulty, 1], ["Category", Id(), 0], ["QuestionCount", Id(), 0]]))();
}
function DecodeJson_FSharpResult_2(){
  return Decoder_FSharpResult_2?Decoder_FSharpResult_2:Decoder_FSharpResult_2=(DecodeUnion(void 0, "$", [[0, [["$0", "ResultValue", DecodeList(DecodeJson_ClientQuestion), 0]]], [1, [["$0", "ErrorValue", Id(), 0]]]]))();
}
function EncodeJson_Difficulty(){
  return Encoder_Difficulty?Encoder_Difficulty:Encoder_Difficulty=(EncodeUnion((o) => Create_1(Difficulty, o), "$", [[0, []], [1, []], [2, []]]))();
}
function DecodeJson_ClientQuestion(){
  return Decoder_ClientQuestion?Decoder_ClientQuestion:Decoder_ClientQuestion=(DecodeRecord(void 0, [["Id", Id(), 0], ["Text", Id(), 0], ["Options", DecodeList(Id()), 0], ["Difficulty", DecodeJson_Difficulty, 0], ["Category", Id(), 0], ["TimeLimit", Id(), 0]]))();
}
function DecodeJson_Difficulty(){
  return Decoder_Difficulty?Decoder_Difficulty:Decoder_Difficulty=(DecodeUnion((o) => Create_1(Difficulty, o), "$", [[0, []], [1, []], [2, []]]))();
}
function ParseHTMLIntoFakeRoot(elem){
  const root=globalThis.document.createElement("div");
  if(!rhtml().test(elem)){
    root.appendChild(globalThis.document.createTextNode(elem));
    return root;
  }
  else {
    const m=rtagName().exec(elem);
    const tag=Equals(m, null)?"":get(m, 1).toLowerCase();
    const w=(wrapMap())[tag];
    const p=w?w:defaultWrap();
    root.innerHTML=p[1]+elem.replace(rxhtmlTag(), "<$1></$2>")+p[2];
    function unwrap(elt, a){
      while(true)
        {
          if(a===0)return elt;
          else {
            const i=a;
            elt=elt.lastChild;
            a=i-1;
          }
        }
    }
    return(((a) => {
      const _1=a;
      return(_2) => unwrap(_1, _2);
    })(root))(p[0]);
  }
}
function rhtml(){
  return _c_7.rhtml;
}
function wrapMap(){
  return _c_7.wrapMap;
}
function defaultWrap(){
  return _c_7.defaultWrap;
}
function rxhtmlTag(){
  return _c_7.rxhtmlTag;
}
function rtagName(){
  return _c_7.rtagName;
}
function IterSelector(el, selector, f){
  const l=el.querySelectorAll(selector);
  for(let i=0, _1=l.length-1;i<=_1;i++)f(l[i]);
}
function InsertAt(parent, pos, node){
  let _1;
  if(node.parentNode===parent){
    const m=node.nextSibling;
    let _2=Equals(m, null)?null:m;
    _1=pos===_2;
  }
  else _1=false;
  if(!_1)parent.insertBefore(node, pos);
}
function RemoveNode(parent, el){
  if(el.parentNode===parent)parent.removeChild(el);
}
function TextNodeDoc(Item){
  return{$:5, $0:Item};
}
function EmbedDoc(Item){
  return{$:2, $0:Item};
}
function ElemDoc(Item){
  return{$:1, $0:Item};
}
function AppendDoc(Item1, Item2){
  return{
    $:0, 
    $0:Item1, 
    $1:Item2
  };
}
function Int(){
  set_counter(counter()+1);
  return counter();
}
function set_counter(_1){
  _c_4.counter=_1;
}
function counter(){
  return _c_4.counter;
}
function Ready(Item1, Item2){
  return{
    $:2, 
    $0:Item1, 
    $1:Item2
  };
}
function Forever(Item){
  return{$:0, $0:Item};
}
function Waiting(Item1, Item2){
  return{
    $:3, 
    $0:Item1, 
    $1:Item2
  };
}
function New_2(k, ct){
  return{k:k, ct:ct};
}
function No(Item){
  return{$:1, $0:Item};
}
function Ok(Item){
  return{$:0, $0:Item};
}
function Cc(Item){
  return{$:2, $0:Item};
}
function get(arr, n){
  checkBounds(arr, n);
  return arr[n];
}
function length_1(arr){
  return arr.dims===2?arr.length*arr.length:arr.length;
}
function checkBounds(arr, n){
  if(n<0||n>=arr.length)FailWith("Index was outside the bounds of the array.");
}
function set(arr, n, x){
  checkBounds(arr, n);
  arr[n]=x;
}
let _c_2=Lazy((_i) => class $StartupCode_Concurrency {
  static {
    _c_2=_i(this);
  }
  static GetCT;
  static Zero;
  static defCTS;
  static scheduler;
  static noneCT;
  static {
    this.noneCT=New_3(false, []);
    this.scheduler=new Scheduler();
    this.defCTS=[new CancellationTokenSource()];
    this.Zero=Return();
    this.GetCT=(c) => {
      c.k(Ok(c.ct));
    };
  }
});
function New_3(IsCancellationRequested, Registrations){
  return{c:IsCancellationRequested, r:Registrations};
}
function Error_1(ErrorValue){
  return{$:1, $0:ErrorValue};
}
function Ok_1(ResultValue){
  return{$:0, $0:ResultValue};
}
let _c_3=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c_3=_i(this);
  }
  static RenderedFullDocTemplate;
  static TextHoleRE;
  static GlobalHoles;
  static LocalTemplatesLoaded;
  static LoadedTemplates;
  static {
    this.LoadedTemplates=new Dictionary("New_5");
    this.LocalTemplatesLoaded=false;
    this.GlobalHoles=new Dictionary("New_5");
    this.TextHoleRE="\\${([^}]+)}";
    this.RenderedFullDocTemplate=null;
  }
});
class HashSet extends Object_1 {
  equals;
  hash;
  data;
  count;
  SAdd(item){
    return this.add(item);
  }
  Contains(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrContains(item, arr);
  }
  add(item){
    const h=this.hash(item);
    const arr=this.data[h];
    return arr==null?(this.data[h]=[item],this.count=this.count+1,true):this.arrContains(item, arr)?false:(arr.push(item),this.count=this.count+1,true);
  }
  arrContains(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item]))c=false;
      else i=i+1;
    return!c;
  }
  GetEnumerator(){
    return Get(concat_3(this.data));
  }
  ExceptWith(xs){
    const e=Get(xs);
    try {
      while(e.MoveNext())
        this.Remove(e.Current);
    }
    finally {
      const _1=e;
      if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
    }
  }
  get Count(){
    return this.count;
  }
  IntersectWith(xs){
    const other=new HashSet("New_4", xs, this.equals, this.hash);
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++){
      const item=all[i];
      if(!other.Contains(item))this.Remove(item);
    }
  }
  Remove(item){
    const arr=this.data[this.hash(item)];
    return arr==null?false:this.arrRemove(item, arr)&&(this.count=this.count-1,true);
  }
  CopyTo(arr, index){
    const all=concat_3(this.data);
    for(let i=0, _1=all.length-1;i<=_1;i++)set(arr, i+index, all[i]);
  }
  arrRemove(item, arr){
    let c=true;
    let i=0;
    const l=arr.length;
    while(c&&i<l)
      if(this.equals.apply(null, [arr[i], item])){
        arr.splice(i, 1);
        c=false;
      }
      else i=i+1;
    return!c;
  }
  constructor(i, _1, _2, _3){
    if(i=="New_3"){
      i="New_4";
      _1=[];
      _2=Equals;
      _3=Hash;
    }
    let init_3;
    if(i=="New_2"){
      init_3=_1;
      i="New_4";
      _1=init_3;
      _2=Equals;
      _3=Hash;
    }
    if(i=="New_4"){
      const init_4=_1;
      const equals=_2;
      const hash=_3;
      super();
      this.equals=equals;
      this.hash=hash;
      this.data=[];
      this.count=0;
      const e=Get(init_4);
      try {
        while(e.MoveNext())
          this.add(e.Current);
      }
      finally {
        const _4=e;
        if(typeof _4=="object"&&isIDisposable(_4))e.Dispose();
      }
    }
  }
}
function head_1(s){
  const e=Get(s);
  try {
    return e.MoveNext()?e.Current:insufficient();
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function append(s1, s2){
  return{GetEnumerator:() => {
    const e1=Get(s1);
    const first=[true];
    return new T(e1, null, (x) => {
      if(x.s.MoveNext()){
        x.c=x.s.Current;
        return true;
      }
      else {
        const x_1=x.s;
        if(!Equals(x_1, null))x_1.Dispose();
        x.s=null;
        return first[0]&&(first[0]=false,x.s=Get(s2),x.s.MoveNext()?(x.c=x.s.Current,true):(x.s.Dispose(),x.s=null,false));
      }
    }, (x) => {
      const x_1=x.s;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function nth(index, s){
  if(index<0)FailWith("negative index requested");
  let pos=-1;
  const e=Get(s);
  try {
    while(pos<index)
      {
        !e.MoveNext()?insufficient():void 0;
        pos=pos+1;
      }
    return e.Current;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function fold(f, x, s){
  let r=x;
  const e=Get(s);
  try {
    while(e.MoveNext())
      r=f(r, e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function iter(p, s){
  const e=Get(s);
  try {
    while(e.MoveNext())
      p(e.Current);
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function delay(f){
  return{GetEnumerator:() => Get(f())};
}
function collect(f, s){
  return concat_1(map_1(f, s));
}
function map_1(f, s){
  return{GetEnumerator:() => {
    const en=Get(s);
    return new T(null, null, (e) => en.MoveNext()&&(e.c=f(en.Current),true), () => {
      en.Dispose();
    });
  }};
}
function distinctBy(f, s){
  return{GetEnumerator:() => {
    const o=Get(s);
    const seen=new HashSet("New_3");
    return new T(null, null, (e) => {
      let cur;
      let has;
      if(o.MoveNext()){
        cur=o.Current;
        has=seen.SAdd(f(cur));
        while(!has&&o.MoveNext())
          {
            cur=o.Current;
            has=seen.SAdd(f(cur));
          }
        return has&&(e.c=cur,true);
      }
      else return false;
    }, () => {
      o.Dispose();
    });
  }};
}
function concat_1(ss){
  return{GetEnumerator:() => {
    const outerE=Get(ss);
    function next(st){
      while(true)
        {
          const m=st.s;
          if(Equals(m, null)){
            if(outerE.MoveNext()){
              st.s=Get(outerE.Current);
              st=st;
            }
            else {
              outerE.Dispose();
              return false;
            }
          }
          else if(m.MoveNext()){
            st.c=m.Current;
            return true;
          }
          else {
            st.Dispose();
            st.s=null;
            st=st;
          }
        }
    }
    return new T(null, null, next, (st) => {
      const x=st.s;
      if(!Equals(x, null))x.Dispose();
      const x_1=outerE;
      if(!Equals(x_1, null))x_1.Dispose();
    });
  }};
}
function init_1(n, f){
  return take(n, initInfinite(f));
}
function max(s){
  const e=Get(s);
  try {
    if(!e.MoveNext())seqEmpty();
    let m=e.Current;
    while(e.MoveNext())
      {
        const x=e.Current;
        if(Compare(x, m)===1)m=x;
      }
    return m;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
function take(n, s){
  n<0?nonNegative():void 0;
  return{GetEnumerator:() => {
    const e=[Get(s)];
    return new T(0, null, (o) => {
      o.s=o.s+1;
      if(o.s>n)return false;
      else {
        const en=e[0];
        return Equals(en, null)?insufficient():en.MoveNext()?(o.c=en.Current,o.s===n?(en.Dispose(),e[0]=null):void 0,true):(en.Dispose(),e[0]=null,insufficient());
      }
    }, () => {
      const x=e[0];
      if(!Equals(x, null))x.Dispose();
    });
  }};
}
function initInfinite(f){
  return{GetEnumerator:() => new T(0, null, (e) => {
    e.c=f(e.s);
    e.s=e.s+1;
    return true;
  }, void 0)};
}
function forall_1(p, s){
  return!exists((x) =>!p(x), s);
}
function seqEmpty(){
  return FailWith("The input sequence was empty.");
}
function exists(p, s){
  const e=Get(s);
  try {
    let r=false;
    while(!r&&e.MoveNext())
      r=p(e.Current);
    return r;
  }
  finally {
    const _1=e;
    if(typeof _1=="object"&&isIDisposable(_1))e.Dispose();
  }
}
class View { }
class Exception extends Object_1 { }
function LinkElement(el, children){
  InsertDoc(el, children, null);
}
function CreateEmbedNode(){
  return{Current:null, Dirty:false};
}
function UpdateEmbedNode(node, upd){
  node.Current=upd;
  node.Dirty=true;
}
function InsertDoc(parent, doc, pos){
  while(true)
    {
      if(doc!=null&&doc.$==1)return InsertNode(parent, doc.$0.El, pos);
      else if(doc!=null&&doc.$==2){
        const d=doc.$0;
        d.Dirty=false;
        doc=d.Current;
      }
      else if(doc==null)return pos;
      else if(doc!=null&&doc.$==4)return InsertNode(parent, doc.$0.Text, pos);
      else if(doc!=null&&doc.$==5)return InsertNode(parent, doc.$0, pos);
      else if(doc!=null&&doc.$==6)return foldBack((_1, _2) =>((((parent_1) =>(el) =>(pos_1) => el==null||el.constructor===Object?InsertDoc(parent_1, el, pos_1):InsertNode(parent_1, el, pos_1))(parent))(_1))(_2), doc.$0.Els, pos);
      else {
        const b=doc.$1;
        const a=doc.$0;
        doc=a;
        pos=InsertDoc(parent, b, pos);
      }
    }
}
function CreateRunState(parent, doc){
  return New_5(get_Empty_1(), CreateElemNode(parent, EmptyAttr(), doc));
}
function PerformAnimatedUpdate(childrenOnly, st, doc){
  return get_UseAnimations()?Delay(() => {
    const cur=FindAll(doc);
    const change=ComputeChangeAnim(st, cur);
    const enter=ComputeEnterAnim(st, cur);
    return Bind_1(Play(Append(change, ComputeExitAnim(st, cur))), () => Bind_1(SyncElemNodesNextFrame(childrenOnly, st), () => Bind_1(Play(enter), () => {
      st.PreviousNodes=cur;
      return Return(null);
    })));
  }):SyncElemNodesNextFrame(childrenOnly, st);
}
function PerformSyncUpdate(childrenOnly, st, doc){
  const cur=FindAll(doc);
  SyncElemNode(childrenOnly, st.Top);
  st.PreviousNodes=cur;
}
function CreateElemNode(el, attr_1, children){
  LinkElement(el, children);
  const attr_2=Insert(el, attr_1);
  return DocElemNode.New(attr_2, children, null, el, Int(), GetOptional(attr_2.OnAfterRender));
}
function InsertNode(parent, node, pos){
  InsertAt(parent, pos, node);
  return node;
}
function SyncElemNodesNextFrame(childrenOnly, st){
  if(BatchUpdatesEnabled()){
    const c=(ok) => {
      requestAnimationFrame(() => {
        SyncElemNode(childrenOnly, st.Top);
        ok();
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
  else {
    SyncElemNode(childrenOnly, st.Top);
    return Return(null);
  }
}
function ComputeExitAnim(st, cur){
  return Concat(map_2((n) => GetExitAnim(n.Attr), ToArray(Except(cur, Filter((n) => HasExitAnim(n.Attr), st.PreviousNodes)))));
}
function ComputeEnterAnim(st, cur){
  return Concat(map_2((n) => GetEnterAnim(n.Attr), ToArray(Except(st.PreviousNodes, Filter((n) => HasEnterAnim(n.Attr), cur)))));
}
function ComputeChangeAnim(st, cur){
  const f=(n) => HasChangeAnim(n.Attr);
  const relevant=(a) => Filter(f, a);
  return Concat(map_2((n) => GetChangeAnim(n.Attr), ToArray(Intersect(relevant(st.PreviousNodes), relevant(cur)))));
}
function SyncElemNode(childrenOnly, el){
  !childrenOnly?SyncElement(el):void 0;
  Sync(el.Children);
  AfterRender(el);
}
function SyncElement(el){
  function hasDirtyChildren(el_1){
    function dirty(doc){
      while(true)
        {
          if(doc!=null&&doc.$==0){
            const b=doc.$1;
            const a=doc.$0;
            if(dirty(a))return true;
            else doc=b;
          }
          else if(doc!=null&&doc.$==2){
            const d=doc.$0;
            if(d.Dirty)return true;
            else doc=d.Current;
          }
          else if(doc!=null&&doc.$==6){
            const t=doc.$0;
            return t.Dirty||exists_1(hasDirtyChildren, t.Holes);
          }
          else return false;
        }
    }
    return dirty(el_1.Children);
  }
  Sync_1(el.El, el.Attr);
  if(hasDirtyChildren(el))DoSyncElement(el);
}
function Sync(doc){
  while(true)
    {
      if(doc!=null&&doc.$==1)return SyncElemNode(false, doc.$0);
      else if(doc!=null&&doc.$==2){
        const n=doc.$0;
        doc=n.Current;
      }
      else if(doc==null)return null;
      else if(doc!=null&&doc.$==5)return null;
      else if(doc!=null&&doc.$==4){
        const d=doc.$0;
        return d.Dirty?(d.Text.nodeValue=d.Value,d.Dirty=false):null;
      }
      else if(doc!=null&&doc.$==6){
        const t=doc.$0;
        iter_1((h) => {
          SyncElemNode(false, h);
        }, t.Holes);
        iter_1((t_1) => {
          Sync_1(t_1[0], t_1[1]);
        }, t.Attrs);
        return AfterRender(t);
      }
      else {
        const b=doc.$1;
        const a=doc.$0;
        Sync(a);
        doc=b;
      }
    }
}
function AfterRender(el){
  const m=GetOptional(el.Render);
  if(m!=null&&m.$==1){
    m.$0(el.El);
    SetOptional(el, "Render", null);
  }
}
function DoSyncElement(el){
  const parent=el.El;
  function ins(doc, pos){
    while(true)
      {
        if(doc!=null&&doc.$==1)return doc.$0.El;
        else if(doc!=null&&doc.$==2){
          const d=doc.$0;
          if(d.Dirty){
            d.Dirty=false;
            return InsertDoc(parent, d.Current, pos);
          }
          else doc=d.Current;
        }
        else if(doc==null)return pos;
        else if(doc!=null&&doc.$==4)return doc.$0.Text;
        else if(doc!=null&&doc.$==5)return doc.$0;
        else if(doc!=null&&doc.$==6){
          const t=doc.$0;
          if(t.Dirty)t.Dirty=false;
          return foldBack((_3, _4) => _3==null||_3.constructor===Object?ins(_3, _4):_3, t.Els, pos);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          doc=a;
          pos=ins(b, pos);
        }
      }
  }
  const p=el.El;
  Iter((e) => {
    RemoveNode(p, e);
  }, Except_2(DocChildren(el), Children(el.El, GetOptional(el.Delimiters))));
  let _1=el.Children;
  const m=GetOptional(el.Delimiters);
  let _2=m!=null&&m.$==1?m.$0[1]:null;
  ins(_1, _2);
}
function Updates(dyn){
  return MapTreeReduce((x) => x.NChanged, Const(), Map2Unit, dyn.DynNodes);
}
function AppendTree(a, b){
  if(a===null)return b;
  else if(b===null)return a;
  else {
    const x=Attr.A2(a, b);
    SetFlags(x, Flags(a)|Flags(b));
    return x;
  }
}
function EmptyAttr(){
  return _c_6.EmptyAttr;
}
function Insert(elem, tree){
  const nodes=[];
  const oar=[];
  function loop(node){
    while(true)
      {
        if(!(node===null)){
          if(node!=null&&node.$==1)return nodes.push(node.$0);
          else if(node!=null&&node.$==2){
            const b=node.$1;
            const a=node.$0;
            loop(a);
            node=b;
          }
          else return node!=null&&node.$==3?node.$0(elem):node!=null&&node.$==4?oar.push(node.$0):null;
        }
        else return null;
      }
  }
  loop(tree);
  const arr=nodes.slice(0);
  let _1=New_4(elem, Flags(tree), arr, oar.length===0?null:Some((el) => {
    iter((f) => {
      f(el);
    }, oar);
  }));
  return _1;
}
function SetFlags(a, f){
  a.flags=f;
}
function Flags(a){
  return a!==null&&a.hasOwnProperty("flags")?a.flags:0;
}
function HasExitAnim(attr_1){
  const flag=2;
  return(attr_1.DynFlags&flag)===flag;
}
function GetExitAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetExitAnim(_2));
}
function HasEnterAnim(attr_1){
  const flag=1;
  return(attr_1.DynFlags&flag)===flag;
}
function GetEnterAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetEnterAnim(_2));
}
function HasChangeAnim(attr_1){
  const flag=4;
  return(attr_1.DynFlags&flag)===flag;
}
function GetChangeAnim(dyn){
  return GetAnim(dyn, (_1, _2) => _1.NGetChangeAnim(_2));
}
function Dynamic(view, set_1){
  return Attr.A1(new DynamicAttrNode(view, set_1));
}
function GetAnim(dyn, f){
  return Concat(map_2((n) => f(n, dyn.DynElem), dyn.DynNodes));
}
function Sync_1(elem, dyn){
  iter_1((d) => {
    d.NSync(elem);
  }, dyn.DynNodes);
}
function TryParse_1(s, min, max_1, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max_1;
  if(ok)r.set(x);
  return ok;
}
function Obsolete(sn){
  let _1;
  const m=sn.s;
  if(m==null||(m!=null&&m.$==2?(_1=m.$1,false):m!=null&&m.$==3?(_1=m.$1,false):true))void 0;
  else {
    sn.s=null;
    for(let i=0, _2=length_1(_1)-1;i<=_2;i++){
      const o=get(_1, i);
      if(typeof o=="object")(((sn_1) => {
        Obsolete(sn_1);
      })(o));
      else o();
    }
  }
}
class Scheduler extends Object_1 {
  idle;
  robin;
  Fork(action){
    this.robin.push(action);
    this.idle?(this.idle=false,setTimeout(() => {
      this.tick();
    }, 0)):void 0;
  }
  tick(){
    const t=Date.now();
    let loop=true;
    while(loop)
      if(this.robin.length===0){
        this.idle=true;
        loop=false;
      }
      else {
        (this.robin.shift())();
        Date.now()-t>40?(setTimeout(() => {
          this.tick();
        }, 0),loop=false):void 0;
      }
  }
  constructor(){
    super();
    this.idle=true;
    this.robin=[];
  }
}
function init_2(size, f){
  if(size<0)FailWith("Negative size given.");
  else null;
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=f(i);
  return r;
}
function exists_1(f, x){
  let e=false;
  let i=0;
  const l=length_1(x);
  while(!e&&i<l)
    if(f(x[i]))e=true;
    else i=i+1;
  return e;
}
function tryPick(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      const m=f(arr[i]);
      if(m!=null&&m.$==1)res=m;
      i=i+1;
    }
  return res;
}
function tryFindIndex(f, arr){
  let res=null;
  let i=0;
  while(i<arr.length&&res==null)
    {
      f(arr[i])?res=Some(i):void 0;
      i=i+1;
    }
  return res;
}
function iter_1(f, arr){
  for(let i=0, _1=arr.length-1;i<=_1;i++)f(arr[i]);
}
function ofList(xs){
  const q=[];
  let l=xs;
  while(!(l.$==0))
    {
      q.push(head(l));
      l=tail(l);
    }
  return q;
}
function findIndex(f, arr){
  const m=tryFindIndex(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function filter(f, arr){
  const r=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++)if(f(arr[i]))r.push(arr[i]);
  return r;
}
function map_2(f, arr){
  const r=new Array(arr.length);
  for(let i=0, _1=arr.length-1;i<=_1;i++)r[i]=f(arr[i]);
  return r;
}
function foldBack(f, arr, zero){
  let acc=zero;
  const len=arr.length;
  for(let i=1, _1=len;i<=_1;i++)acc=f(arr[len-i], acc);
  return acc;
}
function pick(f, arr){
  const m=tryPick(f, arr);
  return m==null?FailWith("KeyNotFoundException"):m.$0;
}
function distinctBy_1(f, a){
  return ofSeq(distinctBy(f, a));
}
function ofSeq(xs){
  if(xs instanceof Array)return xs.slice();
  else if(xs instanceof FSharpList)return ofList(xs);
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      const _1=o;
      if(typeof _1=="object"&&isIDisposable(_1))o.Dispose();
    }
  }
}
function choose(f, arr){
  const q=[];
  for(let i=0, _1=arr.length-1;i<=_1;i++){
    const m=f(arr[i]);
    if(m==null){ }
    else q.push(m.$0);
  }
  return q;
}
function concat_2(xs){
  return Array.prototype.concat.apply([], ofSeq(xs));
}
function create(size, value){
  const r=new Array(size);
  for(let i=0, _1=size-1;i<=_1;i++)r[i]=value;
  return r;
}
function forall_2(f, x){
  let a=true;
  let i=0;
  const l=length_1(x);
  while(a&&i<l)
    if(f(x[i]))i=i+1;
    else a=false;
  return a;
}
class CancellationTokenSource extends Object_1 {
  init;
  c;
  pending;
  r;
  constructor(){
    super();
    this.c=false;
    this.pending=null;
    this.r=[];
    this.init=1;
  }
}
class Elt extends Doc {
  docNode_1;
  updates_1;
  elt;
  rvUpdates;
  static New(el, attr_1, children){
    const node=CreateElemNode(el, attr_1, children.docNode);
    const rvUpdates=Updates_1.Create(children.updates);
    return new Elt(ElemDoc(node), Map2Unit(Updates(node.Attr), rvUpdates.v), el, rvUpdates);
  }
  constructor(docNode, updates, elt, rvUpdates){
    super(docNode, updates);
    this.docNode_1=docNode;
    this.updates_1=updates;
    this.elt=elt;
    this.rvUpdates=rvUpdates;
  }
}
function ofSeqNonCopying(xs){
  if(xs instanceof Array)return xs;
  else if(xs instanceof FSharpList)return ofList(xs);
  else if(xs===null)return[];
  else {
    const q=[];
    const o=Get(xs);
    try {
      while(o.MoveNext())
        q.push(o.Current);
      return q;
    }
    finally {
      const _1=o;
      if(typeof _1=="object"&&isIDisposable(_1))o.Dispose();
    }
  }
}
function TreeReduce(defaultValue, reduction, array){
  const l=length_1(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return get(array, off);
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function MapTreeReduce(mapping, defaultValue, reduction, array){
  const l=length_1(array);
  function loop(off){
    return(len) => {
      let _1;
      switch(len<=0?0:len===1?off>=0&&off<l?1:(_1=len,2):(_1=len,2)){
        case 0:
          return defaultValue;
        case 1:
          return mapping(get(array, off));
        case 2:
          const l2=len/2>>0;
          return reduction((loop(off))(l2), (loop(off+l2))(len-l2));
      }
    };
  }
  return(loop(0))(l);
}
function Value(var_1){
  return ValueWith(StringApply(), var_1);
}
function ValueWith(bind, var_1){
  const p=bind(var_1);
  return AppendTree(Attr.A3(p[0]), DynamicCustom(p[1], p[2]));
}
function DynamicCustom(set_1, view){
  return Dynamic(view, set_1);
}
class TemplateHole extends Object_1 { }
function notPresent(){
  throw new KeyNotFoundException("New");
}
function convertTextNode(n){
  let m=null;
  let li=0;
  const s=n.textContent;
  const strRE=new RegExp(TextHoleRE(), "g");
  while(m=strRE.exec(s),m!==null)
    {
      n.parentNode.insertBefore(globalThis.document.createTextNode(string(s, Some(li), Some(strRE.lastIndex-get(m, 0).length-1))), n);
      li=strRE.lastIndex;
      const hole=globalThis.document.createElement("span");
      hole.setAttribute("ws-replace", get(m, 1).toLowerCase());
      n.parentNode.insertBefore(hole, n);
    }
  strRE.lastIndex=0;
  n.textContent=string(s, Some(li), null);
}
function failNotLoaded(name){
  console.warn("Instantiating non-loaded template", name);
}
function fillTextHole(instance, fillWith, templateName){
  const m=instance.querySelector("[ws-replace]");
  return Equals(m, null)?(console.warn("Filling non-existent text hole", templateName),null):(m.parentNode.replaceChild(globalThis.document.createTextNode(fillWith), m),Some(m.getAttribute("ws-replace")));
}
function removeHolesExcept(instance, dontRemove){
  const run=(attrName) => {
    foreachNotPreserved(instance, "["+attrName+"]", (e) => {
      if(!dontRemove.Contains(e.getAttribute(attrName)))e.removeAttribute(attrName);
    });
  };
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(instance, "[ws-hole]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-hole"))){
      e.removeAttribute("ws-hole");
      while(e.hasChildNodes())
        e.removeChild(e.lastChild);
    }
  });
  foreachNotPreserved(instance, "[ws-replace]", (e) => {
    if(!dontRemove.Contains(e.getAttribute("ws-replace")))e.parentNode.removeChild(e);
  });
  foreachNotPreserved(instance, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat(" ", filter((x) => dontRemove.Contains(get(SplitChars(x, [":"], 1), 1)), SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(instance, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _2=holeAttrs.length-1;i<=_2;i++){
      const attrName=get(holeAttrs, i);
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=e.getAttribute(attrName).replace(this_1, (_3, _4) => dontRemove.Contains(_4)?_3:"");
      e.setAttribute(attrName, _1);
    }
  });
}
function fillInstanceAttrs(instance, fillWith){
  convertAttrs(fillWith);
  const name=fillWith.nodeName.toLowerCase();
  const m=instance.querySelector("[ws-attr="+name+"]");
  if(Equals(m, null))console.warn("Filling non-existent attr hole", name);
  else {
    m.removeAttribute("ws-attr");
    for(let i=0, _1=fillWith.attributes.length-1;i<=_1;i++){
      const a=fillWith.attributes.item(i);
      if(a.name=="class"&&m.hasAttribute("class"))m.setAttribute("class", m.getAttribute("class")+" "+a.nodeValue);
      else m.setAttribute(a.name, a.nodeValue);
    }
  }
}
function mapHoles(t, mappings){
  const run=(attrName) => {
    foreachNotPreserved(t, "["+attrName+"]", (e) => {
      let o;
      const m=(o=null,[mappings.TryGetValue(e.getAttribute(attrName).toLowerCase(), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      if(m[0])e.setAttribute(attrName, m[1]);
    });
  };
  run("ws-hole");
  run("ws-replace");
  run("ws-attr");
  run("ws-onafterrender");
  run("ws-var");
  foreachNotPreserved(t, "[ws-on]", (e) => {
    e.setAttribute("ws-on", concat(" ", map_2((x) => {
      let o;
      const a=SplitChars(x, [":"], 1);
      const m=(o=null,[mappings.TryGetValue(get(a, 1), {get:() => o, set:(v) => {
        o=v;
      }}), o]);
      return m[0]?get(a, 0)+":"+m[1]:x;
    }, SplitChars(e.getAttribute("ws-on"), [" "], 1))));
  });
  foreachNotPreserved(t, "[ws-attr-holes]", (e) => {
    const holeAttrs=SplitChars(e.getAttribute("ws-attr-holes"), [" "], 1);
    for(let i=0, _1=holeAttrs.length-1;i<=_1;i++)((() => {
      const attrName=get(holeAttrs, i);
      return e.setAttribute(attrName, fold((_2, _3) => {
        const a=KeyValue(_3);
        return _2.replace(new RegExp("\\${"+a[0]+"}", "ig"), "${"+a[1]+"}");
      }, e.getAttribute(attrName), mappings));
    })());
  });
}
function fill(fillWith, p, n){
  while(true)
    {
      if(fillWith.hasChildNodes())n=p.insertBefore(fillWith.lastChild, n);
      else return null;
    }
}
function convertAttrs(el){
  const attrs=el.attributes;
  const toRemove=[];
  const events=[];
  const holedAttrs=[];
  for(let i=0, _2=attrs.length-1;i<=_2;i++){
    const a=attrs.item(i);
    if(StartsWith(a.nodeName, "ws-on")&&a.nodeName!="ws-onafterrender"&&a.nodeName!="ws-on"){
      toRemove.push(a.nodeName);
      events.push(string(a.nodeName, Some("ws-on".length), null)+":"+a.nodeValue.toLowerCase());
    }
    else if(!StartsWith(a.nodeName, "ws-")&&(new RegExp(TextHoleRE())).test(a.nodeValue)){
      let this_1=new RegExp(TextHoleRE(), "g");
      let _1=a.nodeValue.replace(this_1, (_3, _4) =>"${"+_4.toLowerCase()+"}");
      a.nodeValue=_1;
      holedAttrs.push(a.nodeName);
    }
    else void 0;
  }
  if(!(events.length==0))el.setAttribute("ws-on", concat(" ", events));
  if(!(holedAttrs.length==0))el.setAttribute("ws-attr-holes", concat(" ", holedAttrs));
  const lowercaseAttr=(name) => {
    const m=el.getAttribute(name);
    if(m==null){ }
    else el.setAttribute(name, m.toLowerCase());
  };
  lowercaseAttr("ws-hole");
  lowercaseAttr("ws-replace");
  lowercaseAttr("ws-attr");
  lowercaseAttr("ws-onafterrender");
  lowercaseAttr("ws-var");
  iter_1((a_1) => {
    el.removeAttribute(a_1);
  }, toRemove);
}
function string(source, start, finish){
  if(start==null){
    if(finish!=null&&finish.$==1){
      const f=finish.$0;
      return f<0?"":source.slice(0, f+1);
    }
    else return"";
  }
  else if(finish==null)return source.slice(start.$0);
  else {
    const f_1=finish.$0;
    const s=start.$0;
    return f_1<0?"":source.slice(s, f_1+1);
  }
}
function Get(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):x.GetEnumerator();
}
function ArrayEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<length_1(s)&&(e.c=get(s, i),e.s=i+1,true);
  }, void 0);
}
function StringEnumerator(s){
  return new T(0, null, (e) => {
    const i=e.s;
    return i<s.length&&(e.c=s[i],e.s=i+1,true);
  }, void 0);
}
function Get0(x){
  return x instanceof Array?ArrayEnumerator(x):Equals(typeof x, "string")?StringEnumerator(x):"GetEnumerator0"in x?x.GetEnumerator0():x.GetEnumerator();
}
function insufficient(){
  return FailWith("The input sequence has an insufficient number of elements.");
}
function arrContains(item, arr){
  let c=true;
  let i=0;
  const l=length_1(arr);
  while(c&&i<l)
    if(Equals(arr[i], item))c=false;
    else i=i+1;
  return!c;
}
function nonNegative(){
  return FailWith("The input must be non-negative.");
}
class KeyCollection extends Object_1 {
  d;
  GetEnumerator(){
    return Get(map_1((kvp) => kvp.K, this.d));
  }
  constructor(d){
    super();
    this.d=d;
  }
}
class DocElemNode {
  Attr;
  Children;
  Delimiters;
  El;
  ElKey;
  Render;
  Equals(o){
    return this.ElKey===o.ElKey;
  }
  GetHashCode(){
    return this.ElKey;
  }
  static New(Attr_1, Children_1, Delimiters, El, ElKey, Render){
    const _1={
      Attr:Attr_1, 
      Children:Children_1, 
      El:El, 
      ElKey:ElKey
    };
    let _2=(SetOptional(_1, "Delimiters", Delimiters),SetOptional(_1, "Render", Render),_1);
    return Create_1(DocElemNode, _2);
  }
}
function get_UseAnimations(){
  return UseAnimations();
}
function Play(anim){
  return Delay(() => Bind_1(Run(() => { }, Actions(anim)), () => {
    Finalize(anim);
    return Return(null);
  }));
}
function Append(a, a_1){
  return Anim(Append_1(a.$0, a_1.$0));
}
function Run(k, anim){
  const dur=anim.Duration;
  if(dur===0)return Zero();
  else {
    const c=(ok) => {
      function loop(start){
        return(now) => {
          const t=now-start;
          anim.Compute(t);
          k();
          return t<=dur?void requestAnimationFrame((t_1) => {
            (loop(start))(t_1);
          }):ok();
        };
      }
      requestAnimationFrame((t) => {
        (loop(t))(t);
      });
    };
    return FromContinuations((_1, _2, _3) => c.apply(null, [_1, _2, _3]));
  }
}
function Anim(Item){
  return{$:0, $0:Item};
}
function Concat(xs){
  return Anim(Concat_1(map_1(List, xs)));
}
function get_Empty(){
  return Anim(Empty());
}
function BatchUpdatesEnabled(){
  return _c_5.BatchUpdatesEnabled;
}
function StartProcessor(procAsync){
  const st=[0];
  function work(){
    return Delay(() => Bind_1(procAsync, () => {
      const m=st[0];
      return Equals(m, 1)?(st[0]=0,Zero()):Equals(m, 2)?(st[0]=1,work()):Zero();
    }));
  }
  return() => {
    const m=st[0];
    if(Equals(m, 0)){
      st[0]=1;
      Start(work(), null);
    }
    else Equals(m, 1)?st[0]=2:void 0;
  };
}
let _c_4=Lazy((_i) => class $StartupCode_Abbrev {
  static {
    _c_4=_i(this);
  }
  static counter;
  static {
    this.counter=0;
  }
});
class OperationCanceledException extends Error {
  ct;
  constructor(i, _1, _2, _3){
    let ct;
    if(i=="New"){
      ct=_1;
      i="New_1";
      _1="The operation was canceled.";
      _2=null;
      _3=ct;
    }
    if(i=="New_1"){
      const message=_1;
      const inner=_2;
      const ct_1=_3;
      super(message);
      this.inner=inner;
      this.ct=ct_1;
    }
  }
}
class Updates_1 {
  c;
  s;
  v;
  static Create(v){
    let var_1;
    var_1=null;
    var_1=Updates_1.New(v, null, () => {
      let c;
      c=var_1.s;
      return c===null?(c=Copy(var_1.c()),var_1.s=c,WhenObsoleteRun(c, () => {
        var_1.s=null;
      }),c):c;
    });
    return var_1;
  }
  static New(Current, Snap, VarView){
    return Create_1(Updates_1, {
      c:Current, 
      s:Snap, 
      v:VarView
    });
  }
}
class T extends Object_1 {
  s;
  c;
  n;
  d;
  e;
  MoveNext(){
    const m=this.n(this);
    this.e=m?1:2;
    return m;
  }
  get Current(){
    return this.e===1?this.c:this.e===0?FailWith("Enumeration has not started. Call MoveNext."):FailWith("Enumeration already finished.");
  }
  Dispose(){
    if(this.d)this.d(this);
  }
  constructor(s, c, n, d){
    super();
    this.s=s;
    this.c=c;
    this.n=n;
    this.d=d;
    this.e=0;
  }
}
function StringApply(){
  return _c_6.StringApply;
}
function ApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    const onChange=() => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(!Equals(expectedValue.$0, v)&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    };
    el.addEventListener("change", onChange);
    el.addEventListener("input", onChange);
    el.addEventListener("keypress", onChange);
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function StringSet(){
  return _c_6.StringSet;
}
function StringGet(){
  return _c_6.StringGet;
}
function StringListSet(){
  return _c_6.StringListSet;
}
function StringListGet(){
  return _c_6.StringListGet;
}
function DateTimeSetUnchecked(){
  return _c_6.DateTimeSetUnchecked;
}
function DateTimeGetUnchecked(){
  return _c_6.DateTimeGetUnchecked;
}
function FileApplyValue(get_1, set_1, var_1){
  let expectedValue;
  expectedValue=null;
  return[(el) => {
    el.addEventListener("change", () => {
      var_1.UpdateMaybe((v) => {
        let _1;
        expectedValue=get_1(el);
        return expectedValue!=null&&expectedValue.$==1&&(expectedValue.$0!==v&&(_1=[expectedValue, expectedValue.$0],true))?_1[0]:null;
      });
    });
  }, (x) => {
    const _1=set_1(x);
    return(_2) => _2==null?null:_1(_2.$0);
  }, Map((v) => {
    let _1;
    return expectedValue!=null&&expectedValue.$==1&&(Equals(expectedValue.$0, v)&&(_1=expectedValue.$0,true))?null:Some(v);
  }, var_1.View)];
}
function FileSetUnchecked(){
  return _c_6.FileSetUnchecked;
}
function FileGetUnchecked(){
  return _c_6.FileGetUnchecked;
}
function IntSetUnchecked(){
  return _c_6.IntSetUnchecked;
}
function IntGetUnchecked(){
  return _c_6.IntGetUnchecked;
}
function IntSetChecked(){
  return _c_6.IntSetChecked;
}
function IntGetChecked(){
  return _c_6.IntGetChecked;
}
function FloatSetUnchecked(){
  return _c_6.FloatSetUnchecked;
}
function FloatGetUnchecked(){
  return _c_6.FloatGetUnchecked;
}
function FloatSetChecked(){
  return _c_6.FloatSetChecked;
}
function FloatGetChecked(){
  return _c_6.FloatGetChecked;
}
function New_4(DynElem, DynFlags, DynNodes, OnAfterRender){
  const _1={
    DynElem:DynElem, 
    DynFlags:DynFlags, 
    DynNodes:DynNodes
  };
  SetOptional(_1, "OnAfterRender", OnAfterRender);
  return _1;
}
function New_5(PreviousNodes, Top){
  return{PreviousNodes:PreviousNodes, Top:Top};
}
function get_Empty_1(){
  return NodeSet(new HashSet("New_3"));
}
function FindAll(doc){
  const q=[];
  function recF(recI, _1){
    while(true)
      switch(recI){
        case 0:
          if(_1!=null&&_1.$==0){
            const b=_1.$1;
            const a=_1.$0;
            recF(0, a);
            _1=b;
          }
          else if(_1!=null&&_1.$==1){
            const el=_1.$0;
            _1=el;
            recI=1;
          }
          else if(_1!=null&&_1.$==2){
            const em=_1.$0;
            _1=em.Current;
          }
          else if(_1!=null&&_1.$==6){
            const x=_1.$0.Holes;
            return(((a_1) =>(a_2) => {
              iter_1(a_1, a_2);
            })(loopEN))(x);
          }
          else return null;
          break;
        case 1:
          q.push(_1);
          _1=_1.Children;
          recI=0;
          break;
      }
  }
  function loop(node){
    return recF(0, node);
  }
  function loopEN(el){
    return recF(1, el);
  }
  loop(doc);
  return NodeSet(new HashSet("New_2", q));
}
function NodeSet(Item){
  return{$:0, $0:Item};
}
function Filter(f, a){
  return NodeSet(Filter_1(f, a.$0));
}
function Except(a, a_1){
  return NodeSet(Except_1(a.$0, a_1.$0));
}
function ToArray(a){
  return ToArray_2(a.$0);
}
function Intersect(a, a_1){
  return NodeSet(Intersect_1(a.$0, a_1.$0));
}
function UseAnimations(){
  return _c_8.UseAnimations;
}
function Actions(a){
  return ConcatActions(choose((a_1) => a_1.$==1?Some(a_1.$0):null, ToArray_1(a.$0)));
}
function Finalize(a){
  iter_1((a_1) => {
    if(a_1.$==0)a_1.$0();
  }, ToArray_1(a.$0));
}
function ConcatActions(xs){
  const xs_1=ofSeqNonCopying(xs);
  const m=length_1(xs_1);
  if(m===0)return Const_1();
  else if(m===1)return get(xs_1, 0);
  else {
    const dur=max(map_1((anim) => anim.Duration, xs_1));
    const xs_2=map_2((x) => Prolong(dur, x), xs_1);
    return Def(dur, (t) => {
      iter_1((anim) => {
        anim.Compute(t);
      }, xs_2);
    });
  }
}
function List(a){
  return a.$0;
}
function Const_1(v){
  return Def(0, () => v);
}
function Def(d, f){
  return{Compute:f, Duration:d};
}
function Prolong(nextDuration, anim){
  const comp=anim.Compute;
  const dur=anim.Duration;
  const last=Create(() => anim.Compute(anim.Duration));
  return{Compute:(t) => t>=dur?last.f():comp(t), Duration:nextDuration};
}
let _c_5=Lazy((_i) => class Proxy {
  static {
    _c_5=_i(this);
  }
  static BatchUpdatesEnabled;
  static {
    this.BatchUpdatesEnabled=true;
  }
});
function AjaxProvider(){
  return _c_9.AjaxProvider;
}
function makePayload(data){
  return JSON.stringify(data);
}
function makeHeaders(headers){
  return NewFromSeq(map_2((_1) =>[_1[0], _1[1]], distinctBy_1((t) => t[0], headers.concat([["content-type", "application/json"]]))));
}
function EndPoint(){
  return _c_9.EndPoint;
}
function ajax(async, url, headers, data, ok, err, csrf){
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
let _c_6=Lazy((_i) => class Client {
  static {
    _c_6=_i(this);
  }
  static FloatApplyChecked;
  static FloatGetChecked;
  static FloatSetChecked;
  static FloatApplyUnchecked;
  static FloatGetUnchecked;
  static FloatSetUnchecked;
  static IntApplyChecked;
  static IntGetChecked;
  static IntSetChecked;
  static IntApplyUnchecked;
  static IntGetUnchecked;
  static IntSetUnchecked;
  static FileApplyUnchecked;
  static FileGetUnchecked;
  static FileSetUnchecked;
  static DateTimeApplyUnchecked;
  static DateTimeGetUnchecked;
  static DateTimeSetUnchecked;
  static StringListApply;
  static StringListGet;
  static StringListSet;
  static StringApply;
  static StringGet;
  static StringSet;
  static BoolCheckedApply;
  static EmptyAttr;
  static {
    this.EmptyAttr=null;
    this.BoolCheckedApply=(var_1) =>[(el) => {
      el.addEventListener("change", () => var_1.Get()!=el.checked?var_1.Set(el.checked):null);
    }, (_1) =>(_2) => _2!=null&&_2.$==1?void(_1.checked=_2.$0):null, Map((V) => Some(V), var_1.View)];
    this.StringSet=(el) =>(s_8) => {
      el.value=s_8;
    };
    this.StringGet=(el) => Some(el.value);
    const g=StringGet();
    const s=StringSet();
    this.StringApply=(v) => ApplyValue(g, s, v);
    this.StringListSet=(el) =>(s_8) => {
      const options_=el.options;
      for(let i=0, _1=options_.length-1;i<=_1;i++)((() => {
        const option=options_.item(i);
        option.selected=arrContains(option.value, s_8);
      })());
    };
    this.StringListGet=(el) => {
      const selectedOptions=el.selectedOptions;
      return Some(ofSeq(delay(() => collect((i) =>[selectedOptions.item(i).value], range(0, selectedOptions.length-1)))));
    };
    const g_1=StringListGet();
    const s_1=StringListSet();
    this.StringListApply=(v) => ApplyValue(g_1, s_1, v);
    this.DateTimeSetUnchecked=(el) =>(i) => {
      el.value=(new Date(i)).toLocaleString();
    };
    this.DateTimeGetUnchecked=(el) => {
      let o;
      let m;
      const s_8=el.value;
      if(isBlank(s_8))return Some(-8640000000000000);
      else {
        o=0;
        const m_1=TryParse_2(s_8);
        let _1=m_1!=null&&m_1.$==1&&(o=m_1.$0,true);
        m=[_1, o];
        return m[0]?Some(m[1]):null;
      }
    };
    const g_2=DateTimeGetUnchecked();
    const s_2=DateTimeSetUnchecked();
    this.DateTimeApplyUnchecked=(v) => ApplyValue(g_2, s_2, v);
    this.FileSetUnchecked=() =>() => null;
    this.FileGetUnchecked=(el) => {
      const files=el.files;
      return Some(ofSeq(delay(() => map_1((i) => files.item(i), range(0, files.length-1)))));
    };
    const g_3=FileGetUnchecked();
    const s_3=FileSetUnchecked();
    this.FileApplyUnchecked=(v) => FileApplyValue(g_3, s_3, v);
    this.IntSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.IntGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return pd!==pd>>0?null:Some(pd);
      }
    };
    const g_4=IntGetUnchecked();
    const s_4=IntSetUnchecked();
    this.IntApplyUnchecked=(v) => ApplyValue(g_4, s_4, v);
    this.IntSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.IntGetChecked=(el) => {
      let _1;
      let o;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const m=(o=0,[TryParse(s_8, {get:() => o, set:(v) => {
          o=v;
        }}), o]);
        _1=m[0]?CheckedInput.Valid(m[1], s_8):CheckedInput.Invalid(s_8);
      }
      return Some(_1);
    };
    const g_5=IntGetChecked();
    const s_5=IntSetChecked();
    this.IntApplyChecked=(v) => ApplyValue(g_5, s_5, v);
    this.FloatSetUnchecked=(el) =>(i) => {
      el.value=String(i);
    };
    this.FloatGetUnchecked=(el) => {
      const s_8=el.value;
      if(isBlank(s_8))return Some(0);
      else {
        const pd=+s_8;
        return isNaN(pd)?null:Some(pd);
      }
    };
    const g_6=FloatGetUnchecked();
    const s_6=FloatSetUnchecked();
    this.FloatApplyUnchecked=(v) => ApplyValue(g_6, s_6, v);
    this.FloatSetChecked=(el) =>(i) => {
      const i_1=i.Input;
      return el.value!=i_1?void(el.value=i_1):null;
    };
    this.FloatGetChecked=(el) => {
      let _1;
      const s_8=el.value;
      if(isBlank(s_8))_1=(el.checkValidity?el.checkValidity():true)?CheckedInput.Blank(s_8):CheckedInput.Invalid(s_8);
      else {
        const i=+s_8;
        _1=isNaN(i)?CheckedInput.Invalid(s_8):CheckedInput.Valid(i, s_8);
      }
      return Some(_1);
    };
    const g_7=FloatGetChecked();
    const s_7=FloatSetChecked();
    this.FloatApplyChecked=(v) => ApplyValue(g_7, s_7, v);
  }
});
let _c_7=Lazy((_i) => class $StartupCode_DomUtility {
  static {
    _c_7=_i(this);
  }
  static defaultWrap;
  static wrapMap;
  static rhtml;
  static rtagName;
  static rxhtmlTag;
  static {
    this.rxhtmlTag=new RegExp("<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>", "gi");
    this.rtagName=new RegExp("<([\\w:]+)");
    this.rhtml=new RegExp("<|&#?\\w+;");
    const table=[1, "<table>", "</table>"];
    let _1=Object.fromEntries([["option", [1, "<select multiple='multiple'>", "</select>"]], ["legend", [1, "<fieldset>", "</fieldset>"]], ["area", [1, "<map>", "</map>"]], ["param", [1, "<object>", "</object>"]], ["thead", table], ["tbody", table], ["tfoot", table], ["tr", [2, "<table><tbody>", "</tbody></table>"]], ["col", [2, "<table><colgroup>", "</colgoup></table>"]], ["td", [3, "<table><tbody><tr>", "</tr></tbody></table>"]]]);
    this.wrapMap=_1;
    this.defaultWrap=[0, "", ""];
  }
});
let _c_8=Lazy((_i) => class $StartupCode_Animation {
  static {
    _c_8=_i(this);
  }
  static UseAnimations;
  static CubicInOut;
  static {
    this.CubicInOut=Easing.Custom((t) => {
      const t2=t*t;
      return 3*t2-2*(t2*t);
    });
    this.UseAnimations=true;
  }
});
function Append_1(x, y){
  return x.$==0?y:y.$==0?x:{
    $:2, 
    $0:x, 
    $1:y
  };
}
function ToArray_1(xs){
  const out=[];
  function loop(xs_1){
    while(true)
      {
        if(xs_1.$==1)return out.push(xs_1.$0);
        else if(xs_1.$==2){
          const y=xs_1.$1;
          const x=xs_1.$0;
          loop(x);
          xs_1=y;
        }
        else return xs_1.$==3?iter_1((v) => {
          out.push(v);
        }, xs_1.$0):null;
      }
  }
  loop(xs);
  return out.slice(0);
}
function Concat_1(xs){
  const x=ofSeqNonCopying(xs);
  return TreeReduce(Empty(), Append_1, x);
}
function Empty(){
  return _c_10.Empty;
}
let _c_9=Lazy((_i) => class $StartupCode_Remoting {
  static {
    _c_9=_i(this);
  }
  static AjaxProvider;
  static EndPoint;
  static {
    this.EndPoint=globalThis.location.origin;
    this.AjaxProvider=new XhrProvider();
  }
});
function Clear(a){
  a.splice(0, length_1(a));
}
function isBlank(s){
  return forall(IsWhiteSpace, s);
}
class CheckedInput {
  get Input(){
    return this.$==1?this.$0:this.$==2?this.$0:this.$1;
  }
  static Blank(inputText){
    return Create_1(CheckedInput, {$:2, $0:inputText});
  }
  static Invalid(inputText){
    return Create_1(CheckedInput, {$:1, $0:inputText});
  }
  static Valid(value, inputText){
    return Create_1(CheckedInput, {
      $:0, 
      $0:value, 
      $1:inputText
    });
  }
  $;
  $0;
  $1;
}
class KeyNotFoundException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="The given key was not present in the dictionary.";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
class Easing extends Object_1 {
  transformTime;
  static Custom(f){
    return new Easing(f);
  }
  constructor(transformTime){
    super();
    this.transformTime=transformTime;
  }
}
function Filter_1(ok, set_1){
  return new HashSet("New_2", filter(ok, ToArray_2(set_1)));
}
function Except_1(excluded, included){
  const set_1=new HashSet("New_2", ToArray_2(included));
  set_1.ExceptWith(ToArray_2(excluded));
  return set_1;
}
function ToArray_2(set_1){
  const arr=create(set_1.Count, void 0);
  set_1.CopyTo(arr, 0);
  return arr;
}
function Intersect_1(a, b){
  const set_1=new HashSet("New_2", ToArray_2(a));
  set_1.IntersectWith(ToArray_2(b));
  return set_1;
}
class XhrProvider extends Object_1 {
  Async(url, headers, data, ok, err){
    ajax(true, url, headers, data, ok, err, () => {
      ajax(true, url, headers, data, ok, err, void 0);
    });
  }
}
function concat_3(o){
  let r=[];
  let k;
  for(var k_1 in o)r.push.apply(r, o[k_1]);
  return r;
}
function IsWhiteSpace(c){
  return c.match(new RegExp("\\s"))!==null;
}
function TryParse_2(s){
  const d=Date.parse(s);
  return isNaN(d)?null:Some(d);
}
class DynamicAttrNode extends Object_1 {
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
}
function Children(elem, delims){
  let n;
  if(delims!=null&&delims.$==1){
    const rdelim=delims.$0[1];
    const ldelim=delims.$0[0];
    const a=[];
    n=ldelim.nextSibling;
    while(n!==rdelim)
      {
        a.push(n);
        n=n.nextSibling;
      }
    return DomNodes(a);
  }
  else {
    let _1=elem.childNodes.length;
    const o=elem.childNodes;
    let _2=init_2(_1, (i) => o[i]);
    return DomNodes(_2);
  }
}
function Except_2(a, a_1){
  const excluded=a.$0;
  return DomNodes(filter((n) => forall_2((k) =>!(n===k), excluded), a_1.$0));
}
function Iter(f, a){
  iter_1(f, a.$0);
}
function DocChildren(node){
  const q=[];
  function loop(doc){
    while(true)
      {
        if(doc!=null&&doc.$==2){
          const d=doc.$0;
          doc=d.Current;
        }
        else if(doc!=null&&doc.$==1)return q.push(doc.$0.El);
        else if(doc==null)return null;
        else if(doc!=null&&doc.$==5)return q.push(doc.$0);
        else if(doc!=null&&doc.$==4)return q.push(doc.$0.Text);
        else if(doc!=null&&doc.$==6){
          const x=doc.$0.Els;
          return(((a_1) =>(a_2) => {
            iter_1(a_1, a_2);
          })((a_1) => {
            if(a_1==null||a_1.constructor===Object)loop(a_1);
            else q.push(a_1);
          }))(x);
        }
        else {
          const b=doc.$1;
          const a=doc.$0;
          loop(a);
          doc=b;
        }
      }
  }
  loop(node.Children);
  return DomNodes(ofSeqNonCopying(q));
}
function DomNodes(Item){
  return{$:0, $0:Item};
}
function Create(f){
  return New_6(false, f, forceLazy);
}
function forceLazy(){
  const v=this.v();
  this.c=true;
  this.v=v;
  this.f=cachedLazy;
  return v;
}
function cachedLazy(){
  return this.v;
}
let _c_10=Lazy((_i) => class $StartupCode_AppendList {
  static {
    _c_10=_i(this);
  }
  static Empty;
  static {
    this.Empty={$:0};
  }
});
function New_6(created, evalOrVal, force){
  return{
    c:created, 
    v:evalOrVal, 
    f:force
  };
}
Main();

