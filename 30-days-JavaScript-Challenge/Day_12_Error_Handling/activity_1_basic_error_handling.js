// Task 1: Write a function that intentionally throws an error and use try and catch block to handle the error log an appropriate error message to the console.

function valueAtIndex(array, index){
    if(index >= array.length){
        throw 'Array index is invalid'
    }else{
        return array[index];
    }

}
try {
    const number = valueAtIndex([1,2,3,4,5], 5);
    console.log(number);
} catch (error) {
    console.log(error);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use try-catch block to handle this error


function division(numerator,denominator){
    if(denominator == 0){
        throw 'Dividing by Zero';
    }else
    {
        return numerator / denominator;
    }

}
try {
    const result = division(10,0);
} catch (error) {
    console.log(error);
}