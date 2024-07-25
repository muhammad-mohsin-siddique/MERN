// Task 1: Creat a module that exports a function to add two numbers. Import and use this module in another script

export function addTwoNumber(num1, num2){
    return typeof num1 === typeof num2 ? num1 + num2 : 'Input Error';
}

