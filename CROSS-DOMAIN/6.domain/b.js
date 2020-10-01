let express=require('express');
let app=express();//外部疯转的js框架
//中间件 -以当前目录
app.use(express.static(__dirname));
app.listen(4000);