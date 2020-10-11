
//返回数组中的非负数所拼接的最小值
var minNumber = function(nums) {
  return nums.sort((a,b)=>(''+a+b)-(''+b+a)).join('');
};