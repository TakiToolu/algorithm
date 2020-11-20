//单向链表插入排序
var insertionSortList = function(head) {
  if(head==null||head.next==null)return head;
  let node=new ListNode(1);
  node.next=head;
  node.val=head.val;
  let q=node;
  while(q.next!==null){
    let n=q.next;
    if(q.val>n.val){
      q.next=n.next;
      let temp=node;
      while(temp.next!==null&&temp.next.val<n.val){
        temp=temp.next;
      }
      n.next=temp.next;
      temp.next=n;
    }
    else{
      q=q.next;
    }
  }
  return node.next;
};