// Task 11: Write the Program that uses the && operator to combine two conditions and log the result to the console.
// && if both conditions are true it will return true otherwise return false

let number1 = 10;
let number2 = 20;

let greaterThan = number1 > number2;  // greaterThan contian the false value 
let lessThan = number1 < number2;    // lessThan contain the true value

console.log("&& Operator Results: ");

console.log(greaterThan && lessThan); // false && true, false will display
console.log(lessThan && greaterThan); // true && false, false will display

number1 = 20;
number2 = 20;

let  equalTo = number1 === number2; //equalTo contian the true value 

console.log(equalTo && lessThan); // true && true, true will display

let  notEqualTo = number1 !== number2; //norEqualTo contian the false value 


console.log(greaterThan && notEqualTo); // false && false, false will display


// Task 12: Write the Program that uses the || operator to combine two conditions and log the result to the console.
//|| one of the conditions is true it will return true if both condition false then return false 

let number3 = 10;
let number4 = 20;

 greaterThan = number3 > number4;  // greaterThan contian the false value 
 lessThan = number3 < number4;    // lessThan contain the true value

 console.log("|| Operator Results: ");

console.log(greaterThan || lessThan); // false && true, true will display
console.log(lessThan || greaterThan); // true && false, true will display

number3 = 20;
number4 = 20;

equalTo = number3 === number4; //equalTo contian the true value 

console.log(equalTo || lessThan); // true && true, true will display

notEqualTo = number1 !== number2; //norEqualTo contian the false value 


console.log(greaterThan || notEqualTo); // false && false, false will display
    
    
// Task 11: Write the Program that uses the ! operator to negate a condition and log the result to the console.
//! if the result of the condition is true it will negate and return false and vice versa

let number5 = 10;
let number6 = 20;

 greaterThan = number5 > number6;  // greaterThan contian the false value 
 lessThan = number5 < number6;    // lessThan contain the true value

 console.log("! Operator Results: ");

 console.log(!greaterThan); // !false , true will display
console.log(!lessThan); // !true, false will display


// we can also combined the conditions

console.log("combined Operator Results: ");

console.log(!(greaterThan && lessThan) || (equalTo || notEqualTo )) 

// !( false && true ) || ( true || false )
// !(false) || (true)
// true || true
// true