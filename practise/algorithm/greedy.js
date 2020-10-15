//记忆(+动态规划)——接雨水
//按列求 O(n) O(n)
function getrain(nums){
  if(!nums){return 0;}
  let maxL=[];
  let maxR=[];
  let size=nums.length;
  let res=0
  maxL[0]=nums[0];
  maxR[size-1]=nums[size-1];
  for(let i=1;i<size-1;i++){
    maxL[i]=Math.max(maxL[i-1],nums[i]);
    maxR[size-1-i]=Math.max(maxR[size-i],nums[size-1-i]);
  }
  for(i=0;i<size-1;i++){
    res+=(Math.min(maxL[i],maxR[j])-nums[i]);
  }
}

