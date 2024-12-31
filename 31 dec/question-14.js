let N = 5;

for(let i=0; i<N ; i++){
  let pattern = "";
  if(i===0 || i===N-1){
    for(let j=0; j< N; j++){
      pattern = pattern + "*"+ " ";
    }
  }
  else {
    
    pattern = pattern + "*";
    
  }
  console.log(pattern);
  console.log(" ");
}