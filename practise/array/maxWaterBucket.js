//盛最多水的容器,双指针，矮的向前中间移动，相等的不影响
var maxArea = function(height) {
  let p=0,q=height.length-1,max=0;
  while(p<q){
    let s=Math.min(height[p],height[q])*(q-p);
    max=Math.max(max,s);
    if(height[p]<height[q]){
      p++
    }else{q--}
  }
  return max;
};