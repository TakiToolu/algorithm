/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 * 自己的未成功，仍有报错
 * 注释为标准答案
 */
var videoStitching = function(clips, T) {
  clips.sort((a,b)=>{
    return a[0]-b[0];
  })
  if(clips[0][0]!==0){
    console.log(clips[0][0]);
    return -1;
  }
  let start=clips[0][1]+1,end=0;
  let res=[];
  let flag=-1;
  res.push(clips[0]);
  for(let i=1;i<clips.length;i++){
    // console.log(clips[i]);
    if(end>=T){return res.length};
    if(clips[i][0]<start&&clips[i][1]>=start){
      flag=Math.max(end,clips[i][0]);
      if((clips[i][0]==res[res.length-1][0]||clips[i][0]<flag)&&(clips[i][1]>res[res.length-1][1])){
        console.log(res,clips[i])
        res.pop();
      }
      res.push(clips[i]);
      end=clips[i-1][1],
      start=clips[i][1];
      // console.log(res[res.length-1])
    }else if(clips[i][0]>start){
      console.log(clips);
      console.log(res[res.length-1])
      console.log(clips[i][0],start,end)
      return -1;
    }
  }
  // console.log(clips);
  console.log(res);
  if(end>=T-1){
    return res.length
  }else{
    // console.log(end)
    return -1;
  }
};


// let a=[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]];
// let a=[[0,2],[4,8]]
// let a=[[0,5],[6,8]]
// let a=[[8,10],[17,39],[18,19],[8,16],[13,35],[33,39],[11,19],[18,35]];
let a=[[17,18],[25,26],[16,21],[3,3],[19,23],[1,5],[0,2],[9,20],[5,17],[8,10]]
console.log(videoStitching(a,15));

/*var videoStitching = function(clips, T, p = 0, r = []) {
    clips.sort((a, b) => (a[0] - b[0]) * 100 + a[1] - b[1])
    if (clips[0][0] !== 0 || clips[clips.length - 1][1] < T) return - 1
    for (var i = 0; i < clips.length; i++) {
        if (clips[i][0] > p) {
            if (r[0] && clips[i - 1][0] > r[r.length - 1][1]) return - 1
            r.push(clips[i - 1])
            p = clips[i - 1][1]
        }
        if (clips[i][1] >= T) {
            if (r[0] && clips[i][0] > r[r.length - 1][1]) return - 1
            r.push(clips[i])
            break
        }
    }
    return r.length // r为选的区间列表
};
*/