var champagneTower = function(poured, query_row, query_glass) {
  let arr=new Array(query_row+1).fill(0).map(_=>new Array(query_row+1));
  arr[0][0]=Math.max(poured,0);//表示每个位置经历多少酒
  let l=0,r=0;
  for(let i=1;i<=query_row;i++){
    for(let j=0;j<=i;j++){
      l=j==0?0:(arr[i-1][j-1]-1);
      r=j==i?0:(arr[i-1][j]-1);
      l=Math.max(l/2,0); //流入本块的量
      r=Math.max(r/2,0);
      // console.log(l,r)
      arr[i][j]=Math.max(l+r,0);
      // console.log('arr[i][j]',arr[i][j],l,r)
    }
  }
  return Math.min(Number(arr[query_row][query_glass]),1);
};
console.log(champagneTower(2,1,1))
