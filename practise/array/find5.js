let a=[1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1];
var prefixesDivBy5 = function(A) {
  let temp=0,res=[];
  for(let i=0;i<A.length;i++){
    temp=temp<<1;
    console.log('start',temp);
    temp+=A[i];
    console.log('end',temp);
    res.push(temp%5==0?true:false);

  }
  return res;
};
console.log(prefixesDivBy5(a));