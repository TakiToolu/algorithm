//动态规划
//你曾楼梯每次能够上1或2层，问n层共有多少办法
function upStairs(n){
  if(n){
    let p=0,q=0,r=1;
    for(let i=1;i<=n;i++){
      p=q;
      q=r;
      r=p+q;
    }
    return r;
  }
  return 0;
}

console.log(upStairs());

