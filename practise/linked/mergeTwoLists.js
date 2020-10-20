/*Offer 25. 合并两个排序的链表
*输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
示例1：
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

var mergeTwoLists = function(l1, l2) {
  let st=new ListNode(0);
  let cur=st,p=l1,q=l2;
  while(p!==null&&q!==null){
    if(p.val>=q.val){
      cur.next=q;
      cur=cur.next;
      q=q.next;
    }else{
      cur.next=p;
      cur=cur.next;
      p=p.next;
    }
  }
  if(p==null){
    cur.next=q;
  }else{
    cur.next=p;
  }
  return st.next;

};