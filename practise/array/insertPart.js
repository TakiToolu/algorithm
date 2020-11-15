//不重叠升序区间集合，插入一个区间，性质不变（经过合并、插入后）
var insert = function(intervals, newInterval) {
  let res=[];
  if(intervals.length==0){
    res.push(newInterval);
    return res;
  }
  let temp=JSON.parse(JSON.stringify(newInterval));
  for(let i=0;i<intervals.length;i++){
    if(temp[0]>intervals[i][1]||temp[1]<intervals[i][0]){
      res.push(intervals[i]);
    }else{
      if(temp[0]>intervals[i][0]){
        temp[0]=intervals[i][0];
      }
      if(temp[1]<intervals[i][1]){
        temp[1]=intervals[i][1];
      }
    }
  }
  res.push(temp);
  let i=res.length-1,tt=[];
  res.sort((a,b)=>a[0]-b[0]);
  return res;
};