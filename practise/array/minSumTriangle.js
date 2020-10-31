//三角形最小路径和时间O（n方），空间O(n)
var minimumTotal = function(triangle) {
  if(triangle==null)return 0;
  let sum=new Array(triangle[triangle.length-1].length).fill(0);
  let min=0;
  for(let i=0;i<triangle.length;i++){
    min+=triangle[i][0];
  }
  sum[0]=triangle[0][0];
  for(let i=1;i<triangle.length;i++){
    for(let j=i;j>=0;j--){
      if(j==i){
        sum[j]=sum[j-1]+triangle[i][j];
      }else if(j==0){
        sum[j]+=triangle[i][j];
      }else{
        sum[j]=Math.min(sum[j],sum[j-1])+triangle[i][j];
      }
      if(i==triangle.length-1){
        min=Math.min(min,sum[j])
      }
    }
  }
  return min;
};