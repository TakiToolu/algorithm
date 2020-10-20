var longestCommonPrefix = function(strs) {
  if(strs==null||strs==0)return '';
  if(strs.length==1)return strs[0];
  let st=strs[0],end=strs[strs.length-1];
  let max=Math.min(st.length,end.length);
  console.log(max,st)
  for(var i=0;i<max&&st[i]==end[i];i++){}
  return st.slice(0,i);

}
// let a=["flower","flow","flight"];
let a=["aaa","aa","aaa"]
console.log(longestCommonPrefix(a))
