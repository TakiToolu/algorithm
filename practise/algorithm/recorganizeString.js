var reorganizeString = function(S) {
  let len=S.length;
  let half=Math.floor((len+1)/2);
  let arr=S.split('').sort();
  let map=new Map();
  let even=0,odd=1;
  let flag=true;
  arr.forEach((item)=>{
    if(map.has(item)){
      let a=map.get(item);
      if(a+1<=half){
        map.set(item,a+1);
      }else{
        flag=false;
        return;
      }
    }
    else{
      map.set(item,1);
    }
  })

  if(!flag){
    return '';
  }
  let res=new Array(len).fill(0);
  console.log(flag,map,res)
  for(let i=0;i<len;i++){
    if(map.get(arr[i])>=half&&even<len||odd>len-1){

      res[even]=arr[i];
      console.log(even,res)
      even+=2;

    }else{
      res[odd]=arr[i];
      odd+=2;

    }
  }
  return res.join('');


};

let a="abbabbaaab";
console.log(reorganizeString(a))