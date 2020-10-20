/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const colume=new Set();
  const tempL=new Set();
  const tempR=new Set();
  return trackBack(n,0,colume,tempL,tempR);
};
const trackBack=(n,r,col,tL,tR)=>{
  if(r === n){
    return 1;
  }else{
    // console.log('r',r)
    let count=0;
    for(let i=0;i<n;i++){
      if(col.has(i)){
        continue;
      }
      let ttl=r-i;
      if(tL.has(ttl)){
        continue;
      }
      let ttr=i+r;
      if(tR.has(ttr)){
        continue;
      }
      col.add(i);
      tL.add(ttl);
      tR.add(ttr);
      count += trackBack(n,r+1,col,tL,tR);
      col.delete(i);
      tL.delete(ttl);
      tR.delete(ttr);
    }
    return count;
  }
}


