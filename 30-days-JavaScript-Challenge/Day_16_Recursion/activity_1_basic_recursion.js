// Task 1: Write a recursive function to calculate the factorial of a number. log the result for a few test cases.

function factorial(number){
    if(number === 1 || number === 0){
        return 1;
    }else{
        return factorial(number - 1) * number;
    }
}


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


// Task 2: Write a recursive function to calculate the nth fabonacci number. log the result for a few test cases.

function fabonacci(number){

    if(number < 0)      return undefined;
    if(number === 0)    return 0;    
    if(number === 1)    return 1;

    return fabonacci(number - 1) + fabonacci(number - 2);
}

console.log(fabonacci(5));  // Expected: 5
console.log(fabonacci(10)); // Expected: 55

console.time('fibonacci with out Memoized');

console.log(fabonacci(50)); // takes 1:40:951 (m:ss:mmm)

console.timeEnd('fibonacci with out Memoized');
//console.log(fabonacci(50)); // Expected: 12586269025
//console.log(fabonacci(100)); // Expected: 354224848179261915075 it takes a lot of time 


// We can also used the memoized technique


function fabonaccimemoiz(){
    const memoiz = {};
    function fabonacci(number){
        if(number < 0)      return undefined;
        if(number === 0)    return 0;    
        if(number === 1)    return 1;
        if(memoiz[number]) return memoiz[number];

        memoiz[number] = fabonacci(number - 1) + fabonacci(number - 2);
        return memoiz[number]
    }
    return fabonacci;
}


const fibonacci = fabonaccimemoiz();

console.time('fibonacciMemoized');

console.log(fibonacci(100)); // takes 0.36ms

console.timeEnd('fibonacciMemoized');


