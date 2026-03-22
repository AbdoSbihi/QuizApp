export function SequenceCompareTo(x, y, comparer){
  function comp(i){
    while(true)
      {
        const _1=x.length<i+1;
        const _2=y.length<i+1;
        if(_1)return _2?0:-1;
        else if(_2)return 1;
        else {
          const m=comparer.Compare(x[i], y[i]);
          if(m===0)i=i+1;
          else return m;
        }
      }
  }
  return comp(0);
}
