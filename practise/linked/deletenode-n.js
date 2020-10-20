//删除链表的倒数第N个节点
var removeNthFromEnd = function(head, n) {
  //双指针法
  if(head==null)return [];
  let node=new ListNode(0);
  node.next=head;
  let q=head;
  let p=node;
  while(n-->0&&q!=null){
    q=q.next;
  }
  while(q!=null){
    p=p.next;
    q=q.next;
  }
  //删除p.next的下一节点即可
  if(p.next.next==null){
    p.next=null;
  }else{
    let temp=p.next.next;
    p.next=temp;
  }
  return node.next;

//循环两边法
  // let num=0;
  // let node=new ListNode(0);
  // node.next=head;
  // while(head!==null){
  //     num++;
  //     head=head.next;
  // }
  // head=node;
  // let count=0;
  // while(count!=num-n&&head.next!==null){
  //     count++;
  //     head=head.next;
  // }
  // let temp=head.next;
  // if(temp==null){
  //     head==null;
  // }else{
  //     head.next=temp.next;
  // }
  // return node.next;
};