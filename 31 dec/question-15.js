// question 15

let arr = [[1,2,3],[4,5,6],[7,8,9]];

// given arr is 
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
 let i = arr.length-1;
 let x = 0;
 let j=0;
 let y=arr.length -1;

let answer = "";
while(i >= x && j<= y){
  
  for(let k = i ; k>=x ;k--){
    answer = answer + arr[k][j] + " ";
  }
  
  j++;
  
  for( let k = j ;k <= y; k++){
    answer = answer + arr[x][k]+ " ";
  }
  
  x++;
  
  for(let k= x ; k<= i; k++){
    answer = answer + arr[k][y]+ " ";
  }
  
  y--;
  
  
  for(let k= y ; k >=x ;k--){
    answer = answer + arr[i][k] + " ";
  }
  
  i--;
  
  break;
  
}

console.log(answer);