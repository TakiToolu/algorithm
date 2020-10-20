var lengthOfLongestSubstring = function(s) {
  let temp=new Map();
  let res=0;
  let p=0;
  for(let i=0;i<s.length;i++){
    if(temp.has(s[i])){
      let q=temp.get(s[i]);
      p=q>=p?q+1:p;
    }
    temp.set(s[i],i);
    res=Math.max(res,i-p+1);
  }
  return res;
};