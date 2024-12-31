// question 12

let arr = [[1,2],[3,4],[5,6]];

for(let i=0; i< arr.length;i++){
  let sumIndex =""
  for(let j=0; j< arr[1].length; j++){
    sumIndex = sumIndex + (i+j)+ " ";
  }
  console.log(sumIndex);
}