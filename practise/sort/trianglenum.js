//给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
var triangleNumber = function(nums) {
  nums.sort((a,b)=>{return a-b;});
  let result=0;
  let sum=0
  for(let i=0;i<nums.length-2;i++){
    let temp=[];
    for(let j=i+1;j<nums.length-1;j++){
      if(temp[j-1]){
        result=temp[j-1]-1;
        for(let k=j+temp[j-1];j<nums.length;k++){
          if(nums[i]+nums[j]>nums[k]){
            result++;
            // console.log('huancun',nums[i],nums[j],nums[k],result)
          }else{
            break;
          }
        }
        temp[j]=result;
      }else{
        result=0;
        for(let k=j+1;j<nums.length;k++){
          if(nums[i]+nums[j]>nums[k]){
            // result.push([nums[i],nums[j],nums[k]])
            result++;
            // console.log('首个',nums[i],nums[j],nums[k],result)
          }else{
            break;
          }
        }
        temp[j]=result;
      }
      // console.log(j,':',temp[j])
      sum+=temp[j];
    }
  }
  return sum;
};

let a=[1,2,3,4,5,6];
console.log(triangleNumber(a));