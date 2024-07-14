//Task 8: Write a program to compare two numbers using > and < and log the result to the console

let number1 = 10; //Declare and assign a value to a number1 variable
let number2 = 20; //Declare and assign a value to a number1 variable

console.log(number1 > number2); // Compare two numbers and 10 is less then 20 which is false, the result is false
console.log(number2 > number1); // Compare two numbers and 20 is greater then 10 which is true,  the result is true

console.log(number1 < number2); // Compare two numbers and 10 is less then 20 which is true, the result is true
console.log(number2 < number1); // Compare two numbers and 20 is greater then 10 which is false,  the result is false

// we can also hold the result

let result = number2 > number1; // Compare two numbers and 20 is greater then 10 which is true,  the result is true

console.log(result); // Display true in the console and the datatype of the result is boolean

//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console

// >= greater than or equal to this operator combined with two conditions with Logical operator OR || 

let number3 = 20; //Declare and assign a value to a number1 variable
let number4 = 20; //Declare and assign a value to a number1 variable

console.log(number3 >= number4); // Compare two numbers and 20 is not greater then 20  but 20 is equal to 20 then result is (false || true) which is true, the result is true

//let's update the values of the variables
number3  = 30;
number4  = 27;

console.log(number4 >= number3); // Compare two numbers and 30 is greater then 27 but 30 is not equal to 27  then result is (true || false) which is true, the result is true

// <= less than or equal to this operator combined with two conditions with Logical operator OR || 


console.log(number3 <= number4); // Compare two numbers and 30 is not less then 27 but 30 is not equal to 27  then result is (false || false) which is false, the result is false

//let's update the values of the variables
number3  = 30;
number4  = 30;

console.log(number4 <= number3); // Compare two numbers and 30 is not less then 27 but 30 is equal to 27  then result is (false || true) which is true, the result is true

//Task 10: Write a program to compare two numbers using == and === and log the result to the console

let number5 = 10; //Declare and assign a value to a number1 variable
let number6 = 20; //Declare and assign a value to a number1 variable

console.log(number5 == number6); // Compare two numbers and 10 is not equal to 20 which is false, the result is false

//let's update the values of the variables
number5  = 30;
number6  = 30;

console.log(number5 === number6); // Compare two numbers and 30 is equal to 30 which is true also it checks the datatypes of the variables which is same the result is treu (true && true),  the result is true

