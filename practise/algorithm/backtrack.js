var treeback=function(string,index,set,map,temp,res,sinres){
  // if(!map.has(index))return;
  for(let i=index;i<=string.length;i++){
    if(i==string.length){
      //  console.log('flag',flag)
      if(flag){
        let a=temp.join(' ');
        // console.log('temp',temp)
        // console.log('a',a);
        if(a&&!sinres.has(a)){
          res.push(a);
          sinres.add(a);
          console.log('res:',res,temp)
        }
        temp.pop();
        // temp.length=0;
        // console.log('DeTemp',temp);
        flag=false;
        break;
      }else{
        temp.pop();
        //  console.log('popTemp',temp);
        break;
      }
    }
    let subString=string.substring(index,i+1);
    // console.log('zichuan:',subString)

    if(set.has(subString)){
      // console.log('zidianyoudezichuan:',subString);
      // console.log('qian',temp);
      temp.push(subString);
      // console.log('hou',temp);
      // map.set(i,subString);
      // console.log('i:',i+1);
      flag=true;
      treeback(string,i+1,set,map,temp,res,sinres);
    }else{
      flag=false;
    }
  }
  // map.set(index,temp)
}