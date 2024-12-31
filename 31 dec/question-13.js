// question 13s

let arr = [[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]];

// given arr is 
// [[1,2,3,4,5],
// [6,7,8,9,1],
// [3,2,5,4,6],
// [7,8,9,1,2]];


for(let i=0; i< arr.length; i++){
  let ele = "";
  if((i+1) % 2 ===1){
    for(let j= arr[i].length-1 ; j>=0; j--){
      ele = ele + arr[i][j] + " ";
    }
  }
  else {
    for(let j=0; j< arr[i].length; j++){
      ele = ele + arr[i][j] + " ";
    }
  }
  
  console.log(ele);
}