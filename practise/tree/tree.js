function newNode(){
  return {value:null,left:null,right:null,have:0};
}
function tree(obj){
  let obj1=obj.split(')');
  obj1.pop();
  let newObj=[];
  for (let i = 0; i <obj1.length; i++) {
    newObj.push(obj1[i].replace('(',''));
  }
  let root=newNode();
  for (let i=0;i<newObj.length;i++){
    let a=newObj[i].split(',');
    let a0=a[0];
    let a1=a[1];
    let u=root;
    if(a1!==''){
      for (let j=0;j<a1.length;j++){
        if(a1[j]==='L'){
          if(u.left==null){
            u.left=newNode();
            u=u.left;
          }else{
            u=u.left;
          }
        }else if(a1[j]==='R'){
          if(u.right==null){
            u.right=newNode();
            u=u.right;
          }else{
            u=u.right;
          }
        }else{
          console.log('非法字符')
          console.log(a1[j]);
        }
      }
      if(u.have!=1){
        u.value=a0;
        u.have=1;
      }
    }else{
      root.value=a0;
      u.have=1;
    }
  }
  console.log(root)
  return root;
}

let myTree=tree('(11,LL)(7,LLL)(8,R)(5,)(4,L)(13,RL)(2,LLR)(1,RRR)(4,RR)');
//前序遍历
function goF(tree){
  if(tree){
    (tree.value===null)?console.log(''):console.log(tree.value);
    if(tree.hasOwnProperty('left')||tree.hasOwnProperty('right')){
      goF(tree.left);
      goF(tree.right);
    }
  }
}
// goF(myTree);

//中序遍历
function goM (tree) {
  if(tree){
    if(tree.hasOwnProperty('left')||tree.hasOwnProperty('right')){
      goM(tree.left);
      console.log(tree.value);
      goM(tree.right);
    }
  }
}
// goM(myTree);

//后序遍历
function goB (tree) {
  if(tree){
    if(tree.hasOwnProperty('left')||tree.hasOwnProperty('right')){
      goB(tree.left);
      goB(tree.right);
      console.log(tree.value);
    }
  }
}
// goB(myTree);

//层序遍历
function goL(tree) {
  let deque=[];//队列用数组代替
  deque.push(tree);
  while(deque.length!==0){
    let front=deque.shift();
    if(front){
      if(front.hasOwnProperty('left')){
        deque.push(front.left);
        deque.push(front.right);
      }
      if(front.value){
        console.log(front.value);
      }
    }

  }
}
goL(myTree);