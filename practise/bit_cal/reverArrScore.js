var matrixScore = function(A) {
  let line=A.length,col=A[0].length;
  for(let i=0;i<line;i++){
    if(!A[i][0]){
      for(let j=0;j<col;j++){
        A[i][j]=!A[i][j];
      }
    }
  }
  for(let j=0;j<col;j++){
    let temp=0;
    for(let i=0;i<line;i++){
      if(A[i][j]) {
        temp++;
      }
    }
    if(temp*2<line){
      for(let i=0;i<line;i++){
        A[i][j]=!A[i][j];
      }
    }
  }
  let res=0;
  let c=1;
  for(let j=col-1;j>=0;j--){
    for(let i=0;i<line;i++){
      if(A[i][j]){
        res+=c;
      }
    }
    c=c*2;
  }
  return res;
};
let a=[[0,1,1],[1,1,1],[0,1,0]];
console.log(matrixScore(a));
var matrixScore = function(A) {
  let line=A.length,col=A[0].length;
  let res=0,c=1;
  for(let i=0;i<line;i++){
    if(!A[i][0]){
      for(let j=0;j<col;j++){
        A[i][j]=!A[i][j];
      }
    }
  }
  for(let j=col-1;j>=0;j--){
    let temp=0;
    for(let i=0;i<line;i++){
      if(A[i][j]) {
        temp++;
      }
    }
    if(temp*2<line){
      for(let i=0;i<line;i++){
        A[i][j]=!A[i][j];
      }
      temp=line-temp;
    }
    res+=c*temp;
    c=c*2;
  }

  return res;
};