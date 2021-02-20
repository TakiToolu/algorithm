function LIS( arr ) {
  // write code here
  let res=[];
  let pre=arr[0]-1,p=0,len=0,s=0,e=0;
  for(let i=0;i<arr.length;i++){
    console.log('a',i,pre,arr[i],s,e,p,res);
    if(arr[i]<pre||i==arr.length){
      if(i-p>len){
        s=p;
        e=i;
        len=i-p;
      }else if(i-p==len){
        let n=p;
        for(let m=s;m<e;m++){
          if(arr[m]>arr[n]){
            s=p;
            e=i;
            break;
          }
          n++;
        }
      }
      p=i;
    }
    pre=arr[i];
  }
  console.log(arr.slice(s,e),s,e);
  return arr.slice(s,e);
}
let a=[2,1,5,3,6,4,8,9,7];
LIS(a)

