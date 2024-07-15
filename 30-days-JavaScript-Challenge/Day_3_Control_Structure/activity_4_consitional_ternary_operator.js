//Task 6: Write a program that use the ternary operator to check if a number is even or odd and log the result to the console

let number = 11;

number % 2 === 0 ? console.log(`The Number ${number} is EVEN`) : console.log(`The Number ${number} is ODD`);

// OR

const result = number % 2 === 0 ? `The Number ${number} is EVEN` : `The Number ${number} is ODD`;

console.log(result);
