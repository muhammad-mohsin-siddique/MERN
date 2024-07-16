//Task 7: Write a program to print a Pattern using nested for loops 
/*
*
* *
* * *
* * * *
* * * * * 
*/

let rightTrianglePattern = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        rightTrianglePattern += '* ' 
    }
    rightTrianglePattern += '\n';
}

console.log(rightTrianglePattern);