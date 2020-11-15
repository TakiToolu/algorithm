/*1356. 根据数字二进制下 1 的数目排序
给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
请你返回排序后的数组。*/

var sortByBits = function(arr) {
  if(arr.length<2)return arr;
  let map=new Map();
  let res=[];
  let count=function(num){
    let count=0;
    while(num!=0){
      if(num&1==1){
        count++;
      }
      num=num>>1;
    }
    return count;
  }
  for(let i=0;i<arr.length;i++){
    let num=count(arr[i]);
    if(map.has(num)){
      map.get(num).push(arr[i]);
    }else{
      map.set(num,[arr[i]]);
    }
  }
  for(let i=0;i<=32;i++){
    if(map.has(i)){
      let temp=map.get(i).sort((a,b)=>Number(a)-Number(b));
      res=res.concat(temp);
    }
  }
  return res;
};