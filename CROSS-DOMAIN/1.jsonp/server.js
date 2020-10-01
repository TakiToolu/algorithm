let express=require('express');
let app=express();//外部疯转的js框架

app.get('/say',function(req,res){
  let {wd,cb}=req.query;
  console.log(wd);
  res.end(`${cb}('啦啦啦')`)
})
app.listen(3000);