var detectCycle = function(head) {
  if(head){
    let slow=head;
    if(head.next){
      let fast=head.next;
      while(fast!==null&&fast.next!==null){
        if(fast==slow){
          //有环，判断起始位置
          //使用额外空间一个数组,循环一次搞定
          //不用额外空间,利用公式推导出a=（n-1）环长度b+c
          let ptr=head;
          slow=slow.next;
          while(ptr!==slow){
            ptr=ptr.next;
            slow=slow.next;
          }
          return ptr;
        }
        fast=fast.next.next;
        slow=slow.next;
      }
    }
  }
  return null;
};
let a=[-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5];
console.log(detectCycle(a));