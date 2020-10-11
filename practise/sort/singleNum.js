/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let mask=0;
  for(let i=0;i<nums.length;i++){
    mask^=nums[i];
    // console.log(mask)
  }
  // console.log(mask)
  mask&=(-mask);
  console.log(mask)
  let arr1=0;
  let arr2=0;
  for(let i=0;i<nums.length;i++){
    if((mask&nums[i])==0){
      arr1^=nums[i];
    }else{
      arr2^=nums[i];
    }
  }
  return [arr1,arr2];
};
let a=[1,2,5,2];
console.log(singleNumbers(a));