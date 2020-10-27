/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
  // return arr.indexOf(target)
  //二分查找不论旋转几次，效果都是一次的效果
  if(arr==null)return -1;
  let l=0,r=arr.length-1;
  let mid=Math.floor((l+r)/2);
  if(arr[mid]==arr[l]){
    for(let i=0;i<arr.length;i++){
      if(arr[i]==target){return i;}
    }
    return -1;
  }
  let count=0;
  if(arr[l]<=target){
      while(arr[mid]!=target&&count<arr.length){
        mid=Math.floor((l+r)/2);
        console.log(l,mid,r)
        if(arr[mid]==target)break;
        if(arr[mid]>arr[0]&&arr[mid]<target){
          l=mid
        }else {
          r=mid;
        }
        count++;
      }
    }else{//l>target
      while(arr[mid]!=target&&count<arr.length){
        mid=Math.floor((l+r)/2);
        console.log(l,mid,r)
        if(arr[mid]>target&&arr[mid]<=arr[0]){
          r=mid;
        }else{
          l=mid;
        }
        count++;
      }
    }
    if(arr[mid]==target){
      while(mid-1>-1&&arr[mid-1]==target){
        mid-=1
      }
      return mid;
    }

  return -1;
};

// let a=[1,1,1,1,1,2,1,1,1];
let a= [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
console.log(search(a,5))