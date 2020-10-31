//只有一个岛的周长
var islandPerimeter = function(grid) {
  let res=0;
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      if(grid[i][j]==1){
        return countZ(i,j);
      }
    }
  }
  function countZ(i,j){
    if(i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]==0)return 1;
    if(grid[i][j]==2){
      return 0;
    }else{
      // res+=2;
      grid[i][j]=2;
      return countZ(i,j+1)+countZ(i,j-1)+countZ(i+1,j)+countZ(i-1,j);
    }
  }
};
