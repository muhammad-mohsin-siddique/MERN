// Task 3: Create a module that export multiple functions using named exports. Import and use functions in another script 


import { add, subtract, multiply, divide } from './basic_Math_Functions.js';

console.log('Adding 5 and 3:', add(5, 3)); // Outputs: Adding 5 and 3: 8
console.log('Subtracting 5 from 3:', subtract(3, 5)); // Outputs: Subtracting 5 from 3: -2
console.log('Multiplying 5 and 3:', multiply(5, 3)); // Outputs: Multiplying 5 and 3: 15
try {
    console.log('Dividing 5 by 0:', divide(5, 0));
} catch (error) {
    console.error(error.message); // Outputs: Division by zero is not allowed.
}


// Task 4: Creat a module that export single function using default export. Import and use this function in another script


import greeting from './default_export.js';

console.log(greeting('Muhammad Mohsin Siddique'));