//左右翻转二叉树
var invertTree = function(root) {
  let temp;
  if(root){
    temp=root.left;
    root.left=invertTree(root.right);
    root.right=invertTree(temp);
  }
  return root;
};