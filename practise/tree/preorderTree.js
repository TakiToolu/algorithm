//前序遍历树
//递归
// var preorderTraversal = function(root) {
//     if(!root)return [];
//     let res=[root.val];
//     // if(root.left){}
//     let nodeL=root.left?preorderTraversal(root.left):[];
//     let nodeR=root.right?preorderTraversal(root.right):[];
//     return res.concat(nodeL,nodeR);
// };

//迭代
var preorderTraversal = function(root) {
  if(!root)return [];
  let res=[];
  let tree=[root];
  while(tree.length>0){
    let node=tree.pop();
    res.push(node.val);
    if(node.right){
      tree.push(node.right)
    }
    if(node.left){
      tree.push(node.left);
    }
  }
  return res;
};