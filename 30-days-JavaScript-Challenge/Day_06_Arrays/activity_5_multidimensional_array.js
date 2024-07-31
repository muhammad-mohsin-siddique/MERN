// Task 12: creat a two dimensional array (metrix) and log the result to the console

const metrixOfNums = [[0,1,2],[3,4,5],[6,7,8]]; // 3x3 metrix 
let metrixSrting = '';

for (let row = 0; row < metrixOfNums.length; row++) {
    for (let column = 0; column < metrixOfNums.length; column++) {

        metrixSrting += metrixOfNums[row][column] + ' ';
    }
    metrixSrting+='\n';
}
console.log(metrixSrting);

/* 

Output: 

0 1 2
3 4 5
6 7 8

*/


//Task 13: Access and log a specific element from the two-dimensional array.

const num = metrixOfNums[1][0] // 2nd row and first element which is 3

console.log(num); // Output: 3
