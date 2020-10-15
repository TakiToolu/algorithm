//填充它的每个 next 指针，让这个指针指向其下一个右侧节点。
// 如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
var connect = function(root) {
  if(!root){return root}
  if(root.left){
    root.left.next=root.left;
    root.right.next=root.next==null?null:root.next.left;
    connect(root.left);
    connect(root.right);
  }
  return root;
};