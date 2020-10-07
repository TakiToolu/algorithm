/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//反转单向链表，不使用其他数据结构
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

//反转字符串，不使用额外结构，空间O（1）
var reverseString = function(s) {
  // let temp;
  // let count=Math.floor(s.length/2);
  // for(let i=0;i<=count;i++){
  //     temp=s[i];
  //     s[i]=s[s.length-1-i];
  //     s[s.length-1-i]=temp;
  // }
  // return s;
  let i=-1,j=s.length;
  while(++i<--j){
    [s[i],s[j]]=[s[j],s[i]];
  }
};