//找出两条单向链表的相交节点
//3种思路
/*
* 1、set 一条将节点add，再遍历第二条
* 2、遍历两条得出长度差值，将长的移动差值个长度，再同时比较
* 3、一共遍历两遍，同时遍历，若一方到头则将这个指针指到对方的头部；
* 两个正反拼接的原理
* */


var getIntersectionNode = function(headA, headB) {
  let p=headA,q=headB;

  while(p!=q){
    p=p==null?headB:p.next;
    q=q==null?headA:q.next;
  }
  return p;
};

var getIntersectionNode = function(headA, headB) {
  if(headA==null||headB==null)return null;
  let p=headA,q=headB;
  let lenA=lenB=0;
  while(p!=null){
    p=p.next;
    lenA++;
  }
  while(q!=null){
    q=q.next;
    lenB++;
  }
  let count=0;
  if(lenA>lenB){
    p=headA;
    q=headB;
    count=lenA-lenB;
  }else{
    p=headB;
    q=headA;
    count=lenB-lenA;
  }
  console.log(count)
  while(count){
    p=p.next;
    count--;
  }
  while(p!=null){
    if(p===q)return p;
    p=p.next;
    q=q.next;
  }
  return null;

};
