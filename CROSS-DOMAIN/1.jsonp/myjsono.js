let  a={name:'zxx',age:12};
function b(){};
function c(params,cb){
  let k={...params,cb};
  console.log(k);
}
c(a,b);

function myJSON({url,params,cb}){
  return new Promise((resolve,reject)=>{
    window[cb]=function(data){
      resolve(data);
      console.log(data);
    }
    let uu={...params,cb};
    let arr=[];
    for(let key in uu){
      arr.push(`${key}=${uu[key]}`);
    }
    let finalurl=`${url}?${arr.join('&')}`;
    let script=document.createElement('script');
    script.src=finalurl;
    document.body.appendChild(script);
  })
}