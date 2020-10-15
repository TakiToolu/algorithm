//三个颜色分类
//交换两个值

//单指针，循环两边
var sortColors = function(nums) {
  let q0=0;
  let temp;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
      temp=nums[q0];
      nums[q0]=0;
      nums[i]=temp;
      if(q1>q0){
        temp=nums[q1];
        nums[q1]=nums[i];
        nums[i]=temp;
      }
      q0++;
      q1++;
    }else if(nums[i]==1){
      temp=nums[q1];
      nums[q1]=1;
      nums[i]=temp;
      q1++;
    }
  }
  return nums;
};


//双指针，循环一边
var sortColors = function(nums) {
  let q1=0;
  let q0=0;
  let temp;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
      temp=nums[q0];
      nums[q0]=0;
      nums[i]=temp;
      if(q1>q0){
        temp=nums[q1];
        nums[q1]=nums[i];
        nums[i]=temp;
      }
      q0++;
      q1++;
    }else if(nums[i]==1){
      temp=nums[q1];
      nums[q1]=1;
      nums[i]=temp;
      q1++;
    }
  }
  return nums;
};