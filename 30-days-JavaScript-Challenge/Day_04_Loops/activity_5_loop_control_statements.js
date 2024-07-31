//Task 8: Write a program to print numbers from 1 to 10, but skip 5 using a continur statement.

for (let index = 1; index <= 10; index++) {
    if(index === 5){
        continue;
    }
    console.log(index);
    
}
//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement.

//this loop will print 1-6
for (let index = 1; index <= 10; index++) {
    if(index === 7){
        break;
    }
    console.log(index);
}

//OR
//this loop will print 1-7
for (let index = 1; index <= 10; index++) {
    console.log(index);
    if(index === 7){
        break;
    }
}