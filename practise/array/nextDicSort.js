/*字典序排列 的下一个排列
思路：
第一次遍历：从右往左找到第一个升序组合i，i+1
第二次遍历：从右往左找到第一个比i位置值大的数p
i 与 p交换，并将i+1后面reverse（即升序排序） 即为结果
* */
var nextPermutation = function(nums) {
  let len=nums.length;
  if(len<2)return nums;
  let reverseP=function(s){
    let q=len-1;
    while(s<q){
      swag(s++,q--);
    }
  }
  let swag=function(a,b){
    let temp=nums[a];
    nums[a]=nums[b];
    nums[b]=temp;
  }
  for(var i=len-2;i>=0;i--){
    if(nums[i]<nums[i+1]){
      break;
    }
  }
  if(i==-1){
    return nums.reverse();
  }else{
    let p=len-1;
    while(nums[p]<=nums[i]){
      p--;
    }
    swag(i,p);
    reverseP(i+1);
    return nums;
  }
};