
var isPossible = function(nums) {
  let map=new Map();
  nums.forEach((item)=>{
    if(map.has(item)){
      map.set(item,map.get(item)+1);
    }else{
      map.set(item,1);
    }
  })
  // console.log(map)
  let keys=map.keys();
  let prelen=0,count=0,queue=[],nowlen=0;
  let pre=0;
  for (let key of keys){
    nowlen=map.get(key);
    if(!pre)pre=key-1;
    if(key!==pre+1){
      for(let i=0;i<queue.length;i++){
        if(queue[i]<3){
          console.log("断点小于3")
          return false
        }
        queue=[];
        prelen=0;
        pre=0;
      }
    };
    // console.log("-------进入循环",key,prelen,nowlen)
    if(nowlen==prelen){
      // console.log("长度相等",nowlen,prelen)
      for(let i=0;i<queue.length;i++){
        queue[i]=queue[i]+1;
      }
      // console.log("现有队列",queue)
    }else if(nowlen>prelen){
      // console.log("增高",prelen,nowlen)
      count=nowlen-prelen;
      for(let i=0;i<queue.length;i++){
        queue[i]=queue[i]+1;
      }
      while(count--){
        queue.push(1);
      }
      // console.log("现有队列",queue)
      prelen=nowlen;
      // console.log("这里测试",prelen)
    }else{//<

      count=prelen-nowlen;
      // console.log("减少",prelen,nowlen,count)

      while(count--){
        let temp=queue.shift();
        if(temp<3){
          console.log("~Error！,弹出长度《3",temp,key,count)
          return false;
        }
      }
      for(let i=0;i<queue.length;i++){
        queue[i]=queue[i]+1;
      }
      prelen=nowlen;
    }
    console.log(key,queue)
    pre=key;
  }
  for(let i=0;i<queue.length;i++){
    if(queue[i]<3){
      console.log("弹出小于3")
      return false
    };
  }
  return true;
}
let a=[9,10,11,12,13,14,29,30,31,32,33,34,35,36,37,38,39,40,41,41,42,42,43,44,45,46,47,47,48,48,49,49,50,50,51,51,51,52,52,52,53,53,53,54,54,54,55,55,55,56,56,56,57,57,57,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,64,64,64,64,65,65,65,65,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,70,71,71,71,71,72,72,72,72,73,73,73,73,74,74,74,74,75,75,75,75,76,76,76,76,76,77,77,77,77,77,78,78,78,78,78,79,79,79,79,80,80,80,80,81,81,81,81,82,82,82,82,83,83,83,83,84,84,84,84,85,85,85,85,85,86,86,86,86,86,86,87,87,87,87,87,87,88,88,88,88,88,88,89,89,89,89,89,89,90,90,90,90,90,90,91,91,91,91,91,91,92,92,92,92,92,92,93,93,93,93,93,93,94,94,94,94,94,94,95,95,95,95,95,95,96,96,96,96,96,96,96,97,97,97,97,97,97,97,98,98,98,98,98,98,98,99,99,99,99,99,99,99,100,100,100,100,100,100,100,101,101,101,101,101,101,101,102,102,102,102,102,102,102,103,103,103,103,103,103,103,104,104,104,104,104,104,104,105,105,105,105,105,105,106,106,106,106,106,106,107,107,107,107,107,107,108,108,108,108,108,108,109,109,109,109,109,109,110,110,110,110,110,111,111,111,111,111,112,112,112,112,112,113,113,113,113,113,114,114,114,114,114,115,115,115,115,115,116,116,116,116,116,117,117,117,117,118,118,118,118,119,119,119,119,120,120,120,120,121,121,121,122,122,122,123,123,123,124,124,124,125,125,125,126,126,126,127,127,127,128,128,128,129,129,129,130,130,130,131,131,132,132,133,133,134,134,135,135,136,136,137,137,138,138,139,139,140,140,141,141,142,142,143,143,144,144,145,145,146,146,147]
console.log(isPossible(a))

//以下代码简化版

// var addLen=function(queue){
//   for(let i=0;i<queue.length;i++){
//     queue[i]=queue[i]+1;
//   }
// }
// var ifless3=function(queue){
//   for(let i=0;i<queue.length;i++){
//     if(queue[i]<3){ return true}
//   }
//   return false;
// }
// var isPossible = function(nums) {
//   let map=new Map();
//   nums.forEach((item)=>{
//     if(map.has(item)){ map.set(item,map.get(item)+1);
//     }else{map.set(item,1); }
//   })
//   let keys=map.keys();
//   let prelen=0,count=0,queue=[],nowlen=0,pre=0;
//   for (let key of keys){
//     nowlen=map.get(key);
//     if(!pre)pre=key-1;
//     if(key!==pre+1){
//       if(ifless3(queue))return false;
//       queue=[];
//       prelen=0;
//       pre=0;
//     };
//     let flag=nowlen-prelen;
//     if(flag==0){
//       addLen(queue);
//     }else if(flag>0){
//       addLen(queue);
//       count=flag;
//       while(count--){queue.push(1);}
//       prelen=nowlen;
//     }else{//<
//       count=-flag;
//       while(count--){
//         let temp=queue.shift();
//         if(temp<3){
//           return false;
//         }
//       }
//       addLen(queue);
//       prelen=nowlen;
//     }
//     pre=key;
//   }
//   if(ifless3(queue))return false;
//   return true;
// }