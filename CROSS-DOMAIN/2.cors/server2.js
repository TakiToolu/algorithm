let express=require('express');
let app=express();//服务器端的js框架
let whitelist=['http://localhost:3000'];
app.use(function (req,res,next) {
  let origin=req.headers.origin;
  if(whitelist.includes(origin)){//设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin',origin);//允许哪个源访问我，*与携带cookie冲突
    res.setHeader('Access-Control-Allow-Headers','name,zxx');//允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Methods','PUT');//允许put方法，需+app.put()
    res.setHeader('Access-Control-Allow-Credentials',true);//允许携带cookie
    res.setHeader('Access-Control-Expose-Headers','name1');//允许返回的头，解决添加cookie报错的方法，将cookie的那么暴露在外
    res.setHeader('Access-Control-Max-Age',6000);//预检的存活时间 每6秒 发一次试探请求
    if(req.methods =='OPTIONS'){

      res.end();//多余的OPTION请求（域检测）不做任何处理
    }
  }
  next();
});
app.put('/getData',function (req,res,next) {
  res.setHeader('name1','zdd');
  console.log(req.headers);
  res.end('怎么说我都不爱你');
})
app.get('/getData',function(req,res){
  console.log(req.headers);
  res.end('我不爱你');
})

//中间件 -以当前目录
// app.use(express.static(__dirname));
app.listen(4000);