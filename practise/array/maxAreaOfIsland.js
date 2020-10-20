// 岛屿的最大面积
// 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)
var maxAreaOfIsland = function(grid) {
  let y=grid[0].length,x=grid.length;
  let res=0;
  for(let i=0;i<x;i++){
    for(let j=0;j<y;j++){
      res=Math.max(deep(i,j),res);
      // console.log(res)
    }
  }
  function deep(i,j){
    if(i>=0&&i<x&&j>=0&&j<y){
      if(grid[i][j]==0)return 0;
      grid[i][j]=0;
      let ans=0;
      ans+=deep(i+1,j);
      ans+=deep(i-1,j);
      ans+=deep(i,j-1);
      ans+=deep(i,j+1);
      // console.log(ans+1);
      return ans+1;
    }
    return 0;
  }
  return res;
};