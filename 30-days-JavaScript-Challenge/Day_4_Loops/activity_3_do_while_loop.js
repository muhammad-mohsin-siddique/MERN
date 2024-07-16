// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop 

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);

// Task 6: Write a program to calculate the Factorial of a number using do...while loop.

let factorialNumber = 5;
let result = 1;

do {
    result *= factorialNumber;
    factorialNumber--;

} while (factorialNumber > 0);

console.log(`Factorial = ${result}`);