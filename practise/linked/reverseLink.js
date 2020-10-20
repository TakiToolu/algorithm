/*
* 剑指 Offer 24. 反转链表定义一个函数，

* */

var reverseList = function(head) {
  let cur=head;
  if(cur){
    let pre=null;
    let next;
    while(cur.next!=null){
      next=cur.next;
      cur.next=pre;
      pre=cur;
      cur=next;
      //console.log(cur);
    }
    if(cur.next==null){
      cur.next=pre;
    }
  }
  return cur;
};