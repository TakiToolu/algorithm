//字符串解密问题，一个单词奇数位抽出来做前半部分，偶数位倒序后做后半部分，
// 拼接起来，形成一个串，你要解密出原来的字符串。加密过程 “Welcome” --》 “wloe” + “mce”，
// 你要做加密算法。
function  decode(str){
  let result=new String('');
  let tempO=new String('');
  for(let i=0;i<str.length;i++){
    if((i+1)%2==0){
      tempO+=str[i];
      console.log(tempO)
    }else{
      result+=str[i];
    }
  }
  let i=tempO.length;
  while(i){
    result=result+tempO[i-1];
    i--;
  }
  console.log(result)
  return result;
}
let a=decode('abcdefg');
console.log(a);