var maxSlidingWindow = function(nums, k) {
  let pos=0,max=0;
  for(let j=0;j<k;j++){
    if(nums[j]>=max){
      max=nums[j];
      pos=j;
    }
  }
  console.log(max);
  let res=[max];
  for(let i=k;i<nums.length;i++){
    console.log('start',i,max,pos)
    // pos--;
    if(pos>i-k){
      console.log('     1,pos:',pos);
      if(nums[i]>=max){
        max=nums[i];
        pos=i
      }
    }else{
      max=nums[i-k+1];
      pos=i-k+1;
      console.log('     2,pos:',pos,'num' +
          's[i]:',nums[i],max,pos);
      for(let j=i-k+1;j<=i;j++){
        if(nums[j]>=max){
          max=nums[j];
          pos=j;
        }
      }

    }

    console.log('end',max,pos)
    res.push(max);
  }
  console.log(res);
  return res;
};

// let nums=[1,3,1,2,0,5]
let nums=[9,10,9,-7,-4,-8,2,-6]
// let k=3;
let k=5;
maxSlidingWindow(nums, k) ;