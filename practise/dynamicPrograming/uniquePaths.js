/*一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
*/

var uniquePaths = function(m, n) {
  if(m<n){
    let temp=m;
    m=n;
    n=temp;
  }
  const f = new Array(m).fill(1);
  for(let i=1;i<n;i++){
    for(let j=i;j<m;j++){
      if(j==i){
        f[j]=2*f[j];
      }else{
        f[j]=f[j-1]+f[j];
      }
    }
  }
  return f[m-1];
};
