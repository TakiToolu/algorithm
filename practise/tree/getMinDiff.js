var getMinimumDifference = function (root) {
  const stack = []
  let res = Number.MAX_SAFE_INTEGER
  let pre = null, cur = null
  let node = root
  while(node||stack.length){
    if(node){
      stack.push(node);
      node=node.left;
    }else{
      let temp=stack.pop();
      let cur=temp.val;
      if(pre!=null){
        res=Math.min(cur-pre,res);
      }
      pre=cur;
      node=temp.right;
    }
  }
  return res;
};