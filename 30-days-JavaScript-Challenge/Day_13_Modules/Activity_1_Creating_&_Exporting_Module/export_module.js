// Task 1: Creat a module that exports a function to add two numbers. Import and use this module in another script

import {addTwoNumber} from "./create_module.js";

console.log(addTwoNumber(10,30));

// Task 2: Creat a module that exports an object representinng a person with properties and methods. Import and use this module in another Script

import {person} from './export_object.js'

console.log(`Name: ${person.name}\nAge: ${person.age}`);
person.greet();
console.log(person);
person.incrementAge();
console.log(person);
