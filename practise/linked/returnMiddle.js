//返回单链表中间节点，若两个则返回第二个节点
var middleNode = function(head) {
  if(head==null)return head;
  let p=head,q=head;
  while(q!==null){
    if(q.next==null){
      return p;
    }
    if(q.next.next==null){
      return p.next;
    }
    p=p.next;
    q=q.next.next;
  }
};