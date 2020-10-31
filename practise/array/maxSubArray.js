//最大连续子序和  前面的和>0？加入原队列，否则自开启
var maxSubArray = function(nums) {
  let max=nums[0];
  let sum=nums[0];
  for(let i=1;i<nums.length;i++){
    sum=sum>0?sum+nums[i]:nums[i];
    max=Math.max(sum,nums[i],max);
  }
  return max;
};