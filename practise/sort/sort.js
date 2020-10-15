let a=[1,48,5,2,46,7,9,55,24,7,56];
//冒泡排序O(n2)
function bubble(data){
  let temp=0;
  for (let j=data.length;j>1;j--){
    for (let i=0;i<j;i++)
      if(data[i]>data[i+1]){
        temp=data[i+1];
        data[i+1]=data[i];
        data[i]=temp;
      }
  }
  return data;
}
// console.log(bubble(a));

//选择排序_堆排序常用O(nlogn)
function select(data) {
  for(let i=0;i<data.length;i++){
    let min=data[i];
    let temp;
    for (let j=i+1;j<data.length;j++){
      if(data[j]<min){
        temp=min;
        min=data[j];
        data[j]=temp;
      }
    }
    data[i]=min;
  }
  return data;
}
// console.log(select(a));

//插入排序
function  insert(data){
  var len=data.length;
  for(var i=0;i<len;i++){
    var key=data[i];
    var j=i-1;
    // var temp=0;
    while(j>=0&&data[j]>key){
      // temp=data[j];
      // data[j]=data[j+1];
      // data[j+1]=temp;
      data[j+1]=data[j];
      j--;
    }
    data[j+1]=key;
  }
  return data;
}
// console.log(insert(a));


//快排
function quicksort(arr,s,e){
  if(s<e){
    let flag=arr[e];//以最后一个为标准
    let i=s,j=e;
    let temp=0;
    while(i<j){
      while(i<j&&arr[i]<flag){
        i++;
      }
      while(i<j&&arr[j]>=flag){
        j--
      }
      temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
    arr[e]=arr[j];
    arr[j]=flag;

    quicksort(arr,s,j-1);
    quicksort(arr,j+1,e);
    // console.log(arr)
  }
}
quicksort(a,0,a.length-1);
console.log(a);

