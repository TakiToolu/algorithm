function instance_of(L,R){
  let O=R.prototype;
  while(1){
    if(L===null){
      return false;
    }
    if(L===O){
      return true;
    }
    console.log(L);
    L=L.__proto__;
  }
}
function a(){};
function b(){};
a.prototype=new b();
let c=new a();
//   console.log(instance_of(a,Object))
  console.log(instance_of(c,Object))