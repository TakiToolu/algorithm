//221.最大正方形 动态规划
var maximalSquare = function(matrix) {
  let max=0;
  let arr=[];
  for(let i=0;i<matrix.length;i++){
    arr[i]=Array(matrix[0].length).fill(0);
  }
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      if(matrix[i][j]==1){
        let left=j>0?arr[i][j-1]:0;
        let right=i>0?arr[i-1][j]:0;
        let x=(i>0&&j>0)?arr[i-1][j-1]:0;
        arr[i][j]=Math.min(left,right,x)+1;
        max=Math.max(max,arr[i][j]);
      }
    }
  }
  return max*max;
};
