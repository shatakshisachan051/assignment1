let students = [10, 30, 45, 50, 90, 95, 98, 75, 23, 60];

for(let i=0; i<students.length;i++){
    if(students[i] < 40){
        students[i] = students[i] + 20;
    }
    else if(students[i] > 90){
        students[i] = 90;
    }
}

let count =0;
for(let i=0; i<students.length;i++){
    if(students[i] >= 50){
       count++;
       
    }
    
}

console.log(count);
console.log(students);
