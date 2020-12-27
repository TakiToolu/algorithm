// let a=[5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5]
let a=[5,5,5,5,20,20,5,5,20,5]

var lemonadeChange = function(bills) {
  let map=new Map([[5,0],[10,0],[20,0]]),flag=1;
  console.log(map);
  bills.forEach(item=> {
    let temp5 = map.get(5);
    let temp10 = map.get(10);
    if (!flag) return;
    switch (item) {
      case 5:
        map.set(5, temp5 + 1);
        break;
      case 10:
        if (temp5 > 0) {
          map.set(10, temp10 + 1);
          map.set(5, temp5 - 1);
        } else {
          flag = false;
        }
        break;
      case 20:
        if (temp10 == 0 && temp5 < 3 || temp5 == 0) {
          flag = 0;
        } else {
          if(temp10==0){
            map.set(5,temp5-3);
          }else{
            map.set(10, temp10 - 1);
            map.set(5, temp5 - 1);
          }
        }
        break;
    }
    console.log(map)
  })

  if(flag)return true;
  return false;
};

console.log(lemonadeChange(a))
