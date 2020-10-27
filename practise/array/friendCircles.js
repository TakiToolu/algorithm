//二维数组，朋友圈个数
//深度优先遍历+set并集
var findCircleNum = function(M) {
  if(M==null)return 0;
  let count=0;
  let len=M.length;
  let set=new Set();
  var dfsFind=function(i){
    for(let j=0;j<len;j++){
      if(M[i][j]==1&&(!set.has(j))){
        set.add(j);
        dfsFind(j);
      }
    }
  }
  for(let i=0;i<len;i++){
    if(!set.has(i)){
      count++;
      set.add(i);
      dfsFind(i);
    }
  }
  return count;
};