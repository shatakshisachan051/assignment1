let task_to_manage = ["get_rest", "make_coffee", "finish_HW", "gym", "meetings"];
let x=0;
// 1
for( x=0; x < task_to_manage.length-1; x++){
      task_to_manage[x]=task_to_manage[x+1];

}
// console.log(task_to_manage);

// 2
task_to_manage[x+1] ="abc";
x++;
task_to_manage[x+1] ="abc";

for( let i= task_to_manage.length-1; i>=1; i--){
      task_to_manage[i]=task_to_manage[i-1];
     
}

for( let i= task_to_manage.length-1; i>=1; i--){
      task_to_manage[i]=task_to_manage[i-1];
      
}
// console.log(task_to_manage);

// 3

task_to_manage[0]="watchMove";
task_to_manage[1]="playGame";

task_to_manage[task_to_manage.length-1]= "clotheWash"



// 4
console.log(task_to_manage);