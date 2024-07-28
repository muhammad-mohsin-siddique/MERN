// Task 3: Write the recursion function to find the sum of all elements in an array. log the result for a few test cases.



function sumOfArrElement(array, length = array.length - 1){

    if (length < 0) return 0; 

    return array[length] + sumOfArrElement(array, length - 1); 
}

// 2nd approach

function sumOfArrayNumber(array){
    function recursiveSum(index){
        if (index < 0) return 0;
        return array[index] + recursiveSum(index - 1);
    }
    return recursiveSum(array.length - 1 );
}
const myNumArr = [0,100,2,3,4,5,6,7,8,9,10];

console.log(sumOfArrElement(myNumArr)); // Output: 55
console.log(sumOfArrayNumber(myNumArr)); // Output: 55


// Task 4: Write the recursion function to find the maximum elements in an array. log the result for a few test cases.

function maximumNumberInArray(array, length = array.length - 1){

    if (array.length === 0) throw new Error("Array cannot be empty");

    if (length < 0) return array[0]; 

    return Math.max(array[length], maximumNumberInArray(array, length - 1)); 
}

try {
    console.log(maximumNumberInArray(myNumArr));

    const myNumArr2 = [3, 5, 7, 2, 8, -1, 4, 10, 12];
    console.log(maximumNumberInArray(myNumArr2));

    const singleElementArr = [42];
    console.log(maximumNumberInArray(singleElementArr));
    
    const emptyArr = [];
    console.log(maximumNumberInArray(emptyArr));

} catch (e) {
    console.error(e.message); // Output: Array cannot be empty
}