var removeKdigits = function(num, k) {
  if(k>=num.length)return '0';
  let res=num.split('');
  let s=0,n=1;
  while(k){
    // console.log('s,n',res[s],res[n],k)
    if(res[s]>res[n]){
      res.splice(s,1);
      if(s>0){
        s--;
        n--;
      }
      console.log(res);
      k--;
    }else{
      s++;
      n++;
    }
    if(s==res.length){
      while(k){
        res.splice(s-1,1)
        s--
        console.log('gaga',res)
        k--;

      }
    }

  }
  while(res[0]==0&&res.length>1){
    res=res.slice(1,res.length);
  }
  // console.log(res)
  if(res==null)res='0';
  return res.join('');
};

let s="112";
let k=1;
console.log(s,k,removeKdigits(s, 1))