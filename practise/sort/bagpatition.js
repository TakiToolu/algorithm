//分割等和子集
//找出一个数组使其和=sum得问一半，动规划
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if(nums.length<2){
    return false;
  }
  let sum=0;
  let max=0;
  for(let num of nums){
    sum+=num;
    max=Math.max(max,num);
  }
  sum=sum/2;
  if(sum%2==1||max>sum){return false;}
  let arr=[];

  let i=1
  while(i<=sum){
    if(index)
      arr[sum]

    i++;
  }

  console.log(sum);
};
let a=[1,2,3,4,5,6];
console.log(canPartition(a));