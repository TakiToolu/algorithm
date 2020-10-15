//利用蹦床函数原理，将递归改写为循环
//以下为递归优化
function toc(f){
  let value;
  let active=false;
  let accu=[];
  return function accumulator(){
    accu.push(arguments);
    if(!active){
      while(accu.length){
        value=f.apply(this,accu.shift());//柯理化，将函数改写成只有一个参数
      }
      active=false;
      return value;
    }
  }
}

//递归函数要写成每一步返回另一个函数
function sum(x,y){
  if(y>0) return sum();
  else return x;
}