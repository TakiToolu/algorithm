//给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
var longestConsecutive = function(nums) {
  let map=new Map();
  let max=0;
  for(let num of nums){
    if(!map.has(num)){
      let preL=map.get(num-1)||0;
      let nextL=map.get(num+1)||0;
      let nowL=preL+nextL+1;
      map.set(num,nowL);
      max=Math.max(max,nowL);
      map.set(num-preL,nowL);
      map.set(num+nextL,nowL);
    }

  }
  return max;
};