/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  len=num1.length+num2.length;
  let res=new Array(len).fill(0);
  console.log(res);

  let temp=0;
  let jin=0;
  //num1上 被num2乘
  for(let i=num2.length-1;i>=0;i--){
    for(let j=num1.length-1;j>=0;j--){
      temp=num1[j]*num2[i];
      res[i+j+1]+=(temp%10);
      if(res[i+j+1]>9){

        jin=Math.floor(res[i+j+1]/10)
        res[i+j+1]%=10;
        console.log(jin);
      }else{
        jin=0;
      }
      res[i+j]+=Math.floor(temp/10+jin);
      console.log(temp,res[i+j+1],res[i+j])
    }
  }
  if(res[0]==0){
    res.splice(0,1);
  }
  console.log(res);
  return res.join('');
};
let s1="123";
let s2="456";
console.log(multiply(s1,s2));