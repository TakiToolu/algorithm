
function  left_rotate(x){
  let y=detach(x.right);
  let b=detach(y.left);
  y.left=x;
  x.parent=y;
  // transplant(y.left,x);

  x.right=b;
  b.parent=x;
  // rtansplant(x.right,b)

}
function right_rotate(x){
  let y=detach(x.left);
  let b=detach(y.right);
  y.right=x;
  x.parent=y;
  transplanr(y.right,x)

  x.left=b;
  b.parent=x;
}
//将节点摘出兵返回
function detach(z){
  if(z.parent==null){return z;}
  if(z.parent.left ==z){
    z.parent.left=null;
  }else{
    z.parent.right=null;
  }
  z.parent=null;
  return z;
}


//移植功能：用v替换u节点
function transplant(u,v){
  if(u.parent==null){
    return v;
  }else if(u==u.parent.left){
    u.parent.left=v;
  }else if(u==u.parent.right){
    u.parent.right=v;
  }
  return u;
}
