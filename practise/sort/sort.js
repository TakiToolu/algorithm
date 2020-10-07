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
    while(j>=0&&data[j]>key){
      data[j+1]=data[i];
      j--;
    }
    data[j+1]=key;
  }
  return data;
}
console.log(insert(a));