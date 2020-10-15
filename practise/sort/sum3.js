//找出数组中不重复的三个数，他们的和等于特定值
var threeSum = function(nums) {
  nums.sort((a,b)=>{return a-b});
  let result=[];
  console.log(nums);
  for(let i=0;i<=nums.length-3;i++){
    if(i>0&&nums[i]==nums[i-1]){
      continue;
    }
    let last=nums.length-1;
    //定义这个要放到外面，放里面没层循环多一次定义分配空间，压力测试过不去，压死骆驼的最后一根稻草
    let target=-nums[i];
    for(let sec=i+1;sec<=nums.length-2;sec++){
      if(sec-i>1&&nums[sec]==nums[sec-1]){
        continue;
      }
      while(last>sec&&(nums[sec]+nums[last]>target)){
        --last;
      }
      if(sec==last){break;}
      if((nums[sec]+nums[last])==target){
        result.push([nums[i],nums[sec],nums[last]]);
        continue;
      }
    }
  }
  console.log(result);
  return result;
};
let a=[-1,0,1,2,-1,-4];
let c=[1,2,-2,-1];
let b=[0,0,0];

// let c=b==0?'yes':'no';
// console.log(c)
threeSum(c);