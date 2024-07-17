// Task 9:  Write a higher order function that takes a function and a number, and calls the function that many times.

function higherOrderFunction(ranomColorCodeGenerator, repeat){
    for (let index = repeat; index >=0; index--) {
       console.log( ranomColorCodeGenerator());
    }
}

function ranomColorCodeGenerator(){
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexString = randomNumber.toString(16).padStart(6, '0');
    return `#${hexString}`; 
}

higherOrderFunction(ranomColorCodeGenerator, 5);


// Tasl 10:  Write a higher order Function that takes two functions and a value, applies the first function to the value and then applies the second function to the result 


function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}


function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

const initialValue = 5;
const finalResult = applyFunctions(square, double, initialValue);

console.log(finalResult);