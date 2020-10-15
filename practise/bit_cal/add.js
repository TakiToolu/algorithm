function add(a,b){
  if(a==0)return b;
  if(b==0)return a;
  let newA=a^b;
  let newB=(a&b)<<1;
  return add(newA,newB);
}

console.log(add(8,5))