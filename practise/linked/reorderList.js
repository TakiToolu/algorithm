//给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
// 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

var reorderList = function(head) {
  if(head==null||head.length<=1)return head;
  let mid=middleNode(head);
  let right=mid.next;
  mid.next=null;
  right=reverseList(right);
  // console.log('right',right);
  let show=mergeTwoLists(head,right);
  // console.log('show',show);
  return show;
};
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
var reverseList = function(head) {
  //动态规划
  if(head==null)return head;
  let p=null,q=head,temp=head.next;
  while(temp!=null){
    q.next=p;
    p=q;
    q=temp;
    temp=temp.next;
  }
  q.next=p;
  return q;
};
var mergeTwoLists = function(l1, l2) {
  let p=l1,q=l2,temp;
  let flag=1;
  while(p.next!==null&&q!==null){
    if(flag){
      temp=p.next;
      p.next=q;
      p=p.next;
      q=q.next;
      p.next=temp;
      flag=0;
    }else{
      p=p.next;
      flag=1;
    }
  }
  if(p.next==null){
    p.next=q;
  }
  return l1;

};