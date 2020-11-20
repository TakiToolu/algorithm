/*406. 根据身高重建队列
假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，
其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。输入:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
输出:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/


var reconstructQueue = function(people) {
  if(people.length==0)return [];
  people.sort((a,b)=>{
    //降序，升序排序
    if(a[0]==b[0]){
      return a[1]-b[1];
    }else{
      return b[0]-a[0];
    }
  })
  let res=[];
  res.push(people[0]);
  for(let i=1;i<people.length;i++){
    insert(res,people[i],people[i][1]);
  }
  return res;
};
var insert=function(arr,item,i){
  //将item插入到arr 的i位
  arr.push(item);
  for(let j=arr.length-1;j>i;j--){
    let temp=arr[j];
    arr[j]=arr[j-1];
    arr[j-1]=temp;
  }
}