
function _new(Func,...args){
  let obj=Obiect.create(Func.prototype);
  let result=Func.call(obj,...args);
  //若客户自己返回引用值，则以自己返回的为主，否则返回创建的实例
  if((result!==null&&typeof result==="object")||(typeof result ==="function")){
    return result;
  }
  return obj;
}

// let a=new Function();
// let a=new Array();
let a=new String();

console.log(a);

function mynew(Func,...args){
  let obj=Object.create(Func.prototype);

}