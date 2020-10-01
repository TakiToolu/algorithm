let express=require('express');
let app=express();//外部疯转的js框架
//安装ws包 npm install ws
let WebSocket = require('ws');
let wss=new WebSocket.Server({port:4000});
console.log(wss)
wss.on('connect',function(ws){

  ws.on('message',function(e){
    console.log(e.data);
  })
  // next();
})

app.use(express.static(__dirname));
app.listen(3000);