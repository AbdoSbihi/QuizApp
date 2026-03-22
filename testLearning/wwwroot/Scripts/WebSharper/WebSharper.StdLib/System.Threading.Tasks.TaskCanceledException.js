export default class TaskCanceledException extends Error {
  constructor(i, _1){
    if(i=="New"){
      i="New_1";
      _1="A task was canceled.";
    }
    if(i=="New_1"){
      const message=_1;
      super(message);
    }
  }
}
