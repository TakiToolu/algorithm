//1、只出现一次的数字，其他都出现了两次，让我们找到出现一次的数。我们执行一次全员异或即可。
var singleNumber = function(nums) {
  let res=0;
  for(let i=0;i<nums.length;i++){
    res^=nums[i];
  }
  return res;
};

//2\除了一个数字出现一次，其他都出现了三次，让我们找到出现一次的数。 灵活运用位运算是本题的关键。
var singleNumber = function(nums) {
  let res=0;
  let bit=1;
  for(let i=0;i<32;i++){
    let count=0;
    for(let j=0;j<nums.length;j++){
      if((bit&nums[j])!=0){
        count++
      }
    }
    if(count%3!=0){
      res+=bit;
    }
    bit*=2;
  }
  return res;

};
//3 除了两个数字出现一次，其他都出现了两次，让我们找到这个两个数。分组异或
var singleNumber = function(nums) {
  let a=0;
  for(let i=0;i<nums.length;i++){
    a^=nums[i];
  }
  let temp=a&(-a);
  let b=0,c=0;
  for(let i=0;i<nums.length;i++){
    if((temp&nums[i])==0){
      //  console.log(nums[i]);
      //  console.log(temp);
      b^=nums[i];
    }else{
      c^=nums[i];
    }
  }
  return [b,c];
};