// Task 5: Create a module that export mutliple constant and funcitons. Import the entire module as an Object in another script and use its properties

import * as math from './module.js';

console.log('Value of PI:', math.PI); // Outputs: Value of PI: 3.14159
console.log('Value of E:', math.E); // Outputs: Value of E: 2.71828

console.log('Area of circle with radius 5:', math.circleArea(5)); // Outputs: Area of circle with radius 5: 78.53975
console.log('Circumference of circle with radius 5:', math.circleCircumference(5)); // Outputs: Circumference of circle with radius 5: 31.4159
console.log('Natural logarithm of 10:', math.naturalLogarithm(10)); // Outputs: Natural logarithm of 10: 2.302585092994046


