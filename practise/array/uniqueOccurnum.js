/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map=new Map();
  for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],1);
    }else{
      map.set(arr[i],map.get(arr[i])+1);
    }
  }
  // console.log(map)
  let set=new Set();
  let flag=1;
  map.forEach(function(value){
    if(!set.has(value)){
      set.add(value)
    }else{
      // return false;// forEach函数中return无法结束函数，作用只是跳出循环
      flag=0;
      return;
    }
  })
  if(flag){
    return true;
  }else{
    return false;
  }

};