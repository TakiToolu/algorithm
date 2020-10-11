//双指针，快慢指针，
//两个以上元素才能有环，快指针设到head.next ，慢每次+1，块+2
// 若无环则一定会有fast！==slow，fast将会先到达终点

var hasCycle = function(head) {
  if(head && head.next){
    let slow=head;
    let fast=head.next;
    while(slow!==fast){
      if(!fast||!fast.next){
        return false;
      }
      slow=slow.next;
      fast=fast.next.next
    }
    return true;
  }
  return false;

};
