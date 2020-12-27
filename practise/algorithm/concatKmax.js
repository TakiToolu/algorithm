/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let maxhead=0;
  let maxArr=[];
  for(let i=0;i<k;i++){
    let a=findkmax(nums1,i),b=findkmax(nums2,k-i);
    let max=a[0]>b[0]?a[0]:b[0];
    if(max>=maxhead){
      if(max>maxhead){
        maxArr=[]
      }
      maxArr.push([a,b])
      maxhead=max;
    }
  }
  let res=[];
  // console.log("maxArr",maxArr);
  maxArr.forEach((item)=>{
    let temp=merge(item[0],item[1]);
    // console.log(temp)
    res=temp>res?temp:res;
  })
  return res;

};

// 找数组中k位最大值
var findkmax=function(arr,k){
  let len=arr.length,count=0;
  if(k>len||k==0)return 0;
  if(k==len)return arr;
  let res=[];
  // console.log(arr,k)
  for(let i=0;i<len;i++){
    // console.log(i,arr[i],len-1)

    if(k-count==len-i||(arr[i]>arr[i+1])||((i==len-1)&&i>1)){
      res.push(arr[i]);
      // console.log("测试a",arr[i])
      count++;

    }
    // console.log("测试a",res)
  }
  // console.log("测试",res)
  return findkmax(res,k);
}

//按最大化原则合并两个数组
var merge=function(arr1,arr2){
  let res=[],p=0,q=0;
  let lena=arr1.length||0,lenb=arr2.length||0;
  while(p<=lena||q<=lenb){
    if(p<lena&&q<lenb){
      let a=arr1[p],b=arr2[q];
      if(a>b||a==b&&(arr1[p+1]>arr2[q+1])){
        res.push(a);
        console.log("a,b pusha",a,b)
        p++;
      }else{
        res.push(b);
        console.log("a,b pushB",a,b)
        q++;
      }
    }else{
      if(p==lena){
        res=res.concat(arr2.slice(q,lenb));
        break;
      }
      if(q==lenb){
        res=res.concat(arr1.slice(p-1,lenb-1));
        break;
      }

    }
  }
  return res;
}

let a=[8,6,9]
  , b=[1,7,5],k=3;
console.log("resm",maxNumber(a, b, k))