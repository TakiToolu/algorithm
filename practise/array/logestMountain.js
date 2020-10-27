var longestMountain = function(A) {
  if(A.length<3)return 0;
  let upState,downState,count,max=0;
  let p=0,i=0;
  while(i<A.length-1){
    p=i;
    upState=0;
    downState=0;
    count=0;
    while(A[i]<A[i+1]){
      upState=1;
      count++;
      console.log(i,'up',count)
      i++;
    }
    while(A[i]>A[i+1]){
      downState=1;
      count++;
      console.log(i,'down',count)
      i++
    }
    if(upState&&downState){
      max=Math.max(max,count+1);
    }
    if(A[i]==A[i+1])i++;
  }
  console.log(max);
  return max;
}