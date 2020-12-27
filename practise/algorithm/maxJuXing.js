var maximalRectangle = function(matrix) {
  let res=0;
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      res=Math.max(res,dfs(matrix,i,j));
    }
  }
  return res;
};
var dfs=function(matrix,i,j){
  let max=0;
  if(matrix[i][j]){
    let lenl=matrix.length-1,lenr=matrix[0].length-1;
    let p=j,minq=lenl+1;
    while(p<=lenr&&matrix[i][p]==1){
      let q=i;
      while(q<minq&&matrix[q][p]==1){
        q++;
      }
      minq=Math.min(minq,q);
      let s=(p-j+1)*(minq-i);
      max=Math.max(max,s)
      console.log('横','(',i,j,')',q,p,minq,s,max);
      p++;
    }
    p=i;
    minq=lenr+1;
    while(p<=lenl&&matrix[p][j]==1){
      let q=j;
      while(q<minq&&matrix[p][q]==1){
        q++;
      }
      minq=Math.min(minq,q);
      let s=(p-i+1)*(minq-j);
      max=Math.max(max,s)
      console.log('竖','(',i,j,')',q,minq,s,max);
      p++;
    }
  }
  console.log('yici','(',i,j,')',i,j,max)
  return max;
}

let a=[["1","0","1","0"],["1","0","1","1"],["1","0","1","1"],["1","1","1","1"]]
console.log(maximalRectangle(a));