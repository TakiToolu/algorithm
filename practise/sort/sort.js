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
//希尔排序，插入排序的升级版，按照下标设置步长后分组（奇偶组），每组内进行插入排序，分组数=len/步长+，步长=1时，返回
function shell(arr){
  var step=arr.length/3+1;
  while(step>1){
    for(let i=0;i<step;i++){
      console.log(i)
      for(let j=i;j<arr.length;j+=step){
        for(let k=j;k>i;k-=step){
          if(arr[k]<arr[k-step]){
            // swap(a[k],a[k-step]);
            let temp=a[k];
            a[k]=a[k-step];
            a[k-step]=a[k];
          }else{
            break;
          }
        }

      }
    }
    step=step/3+1;
  }
  return arr;
  console.log(arr)
}
shell(a)
// console.log(shell(a));


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
// quicksort(a,0,a.length-1);
console.log(a);


//堆排序
//利用子节点是父节点索引的2倍+1和2倍+2
function adjust(arr,index){
  //调整某个节点的函数
  let left=index*2+1;
  let right=index*2+2;
  let max=index;
  if(left<arr.length&&arr[left]>arr[max]){
    max=left;
  }
  if(right<arr.length&&arr[right]>arr[max]){
    max=right;
  }
  if(max!=index){
    swap(arr[max],arr[index]);
    adjust(arr,max);
  }
}
function heapsort(arr){
  for(let i=arr.length/2-1;i>=0;i--){
    adjust(arr,i);
  }
  //找到第k大的值，就要把堆顶与最后一个交换，相当于删除，然后哦重新对排序



}




