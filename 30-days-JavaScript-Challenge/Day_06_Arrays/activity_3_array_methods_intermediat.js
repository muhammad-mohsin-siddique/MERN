// Task 7: Use the map method to creat a new array where each number is double and log the new array

const myArr = [1,2,3,4,5,6,7,8,9,10];

const myDoubleNumsArray = myArr.map((num)=> (num * 2)); 

console.log(myDoubleNumsArray); // Output: [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20]

// Task 8: Use the filter method to creat a new array with only even numbers and log the new array
const myArr2 = [1,2,3,4,5,6,7,8,9,10];

const myEvenNumsArray = myArr2.filter((num)=> (num % 2 === 0));

console.log(myEvenNumsArray); // Output: [ 2, 4, 6, 8, 10 ]

// Task 9: Use the reduce method to calculate the sum of the all numbers in the array and log the result.

const myArr3 = [100,50,10,20,30,150];

const total = myArr3.reduce((accumulator , num)=> (accumulator + num));

console.log(total); // Output: 360 

// OR

const myArr4 = [100,50,10,20,30,150];

const initialValue = 0;

const total4 = myArr4.reduce((accumulator , num)=> accumulator + num, initialValue);

console.log(total); // Output: 360
