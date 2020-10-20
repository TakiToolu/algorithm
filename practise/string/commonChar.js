/**
 * @param {string[]} A
 * 1002. 查找常用字符
 给定仅有小写字母组成的字符串数组 A，
 返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 你可以按任意顺序返回答案。
 */
var commonChars = function(A) {
  if(!A){
    return 0;
  }
  let arr=A[0];
  let map=new Map();
  for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],1);
    }else{
      let temp=map.get(arr[i])
      map.set(arr[i],temp+1);
    }
  }
  // console.log(map)
  let nextMap=new Map();
  let res= A.reduce(function(preV,next){
    nextMap.clear();
    for(let i=0;i<next.length;i++){
      if(!nextMap.has(next[i])){
        nextMap.set(next[i],1);
        // console.log(next[i],1)
      }else{
        let temp=nextMap.get(next[i])+1;
        // console.log(next[i],temp)
        nextMap.set(next[i],temp);
      }
    }
    // console.log(preV);
    // console.log(nextMap);
    preV.forEach((val,key)=>{
      // console.log(key)
      if(nextMap.has(key)){
        //    console.log(key)
        if(val>nextMap.get(key)){
          preV.set(key,nextMap.get(key));
        }
      }else{
        preV.delete(key);
      }
    })
    // console.log(preV);
    return preV;
  },map)
  // console.log(res);
  let result=[];
  res.forEach((val,key)=>{
    for(let i=0;i<val;i++){
      result.push(key);
    }
  })
  return result;
};