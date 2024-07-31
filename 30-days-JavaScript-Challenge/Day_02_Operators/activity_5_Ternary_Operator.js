// Task 14: Write a programe that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// condition ? truthy : falsy

let number = 10;

let result  = number >= 0 ? `${number} is Positve` : `${number} is Negative`;

console.log(result); // expected result is  10 is Positve


number = -10;

result  = number >= 0 ? `${number} is Positve` : `${number} is Negative`;

console.log(result); // expected result is  -10 is Negative