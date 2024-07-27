// Task 7: Create a function that memoizes the results of another function. User coluser to store the results of previous computations

function memoize(fn) {
    const cache = {};

    // console.log(cache);
  
    return function(...args) {

        console.log(...args);

        // console.log(cache);
        
        const key = JSON.stringify(args);

        // console.log(key);

       
        if (cache[key]) {
            return cache[key];
        }

        
        const result = fn(...args);
        cache[key] = result;

        
        return result;
    };
}

function add(a, b) {
    console.log("Computing...");
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Output: Computing... 3

console.log(memoizedAdd(1, 2)); // Output: 3 (cached result)




// Task 8:  Create a memoized function that calculate the factorial of a number;


function factorialMemoize(fn) {
    const cache = {};

  
    return function(number) {
        
        const key = number;
       
        if (cache[key]) {
            return cache[key];
        }
        
        const result = fn(number);
        cache[key] = result;

        return result;
    };
}

function factorialCalculation(number) {
    let result = 1;
    console.log('enter');

    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

const factorial = factorialMemoize(factorialCalculation);

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));


// now the factorial calculation will not happen the results are already stored in cache object 

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));




