
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