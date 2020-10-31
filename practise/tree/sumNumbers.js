/*
129. 求根到叶子节点数字之和
给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
例如，从根到叶子节点路径 1->2->3 代表数字 123。
计算从根到叶子节点生成的所有数字之和。
*/
var sumNumbers = function(root) {
  let res=0;
  // let temp=1;
  (function countM(root){
    if(root==null)return 0;
    if(!root.left&&!root.right){//这里不能用==null判断
      res+=root.val;
      return 1;
    }
    let mul=(countM(root.left)+countM(root.right))*10;
    res+=mul*root.val;
    return mul;
  })(root)
  return res;
};
