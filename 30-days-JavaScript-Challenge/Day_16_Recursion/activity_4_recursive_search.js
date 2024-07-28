// Task 7: Write a recursive function to perform binary search  on a sorted array. log the index of the target element for a few test cases.

function binarySearch(array, key , start = 0, end = array.length - 1){

    if(start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if(array[mid] === key) {

        return mid;

    }else if(array[mid] < key){

        return binarySearch(array, key, mid + 1, end);

    }else{

        return binarySearch(array, key, start, mid - 1);
    }
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(binarySearch(array, 7)); // Output: 6

console.log(binarySearch(array, 11)); // Output: -1


// Task 8: Write a recursive function to count the occurence of a target element in an array. log the the result for a few test cases.


function occurence(array, target, length = array.length - 1){

    if(length < 0){
        return 0
   }
    if(array[length] === target){
       return 1 +  occurence( array, target, length - 1);
    }
    if(array[length] !== target){
        return occurence( array, target, length - 1);
    }

}

const array1 = [1, 2, 3, 2, 4, 2, 5];
const array2 = [7, 7, 7, 7, 7];
const array3 = [1, 2, 3, 4, 5];
const array4 = [1];

console.log(occurence(array1, 2)); // Output: 3
console.log(occurence(array2, 7)); // Output: 5
console.log(occurence(array3, 6)); // Output: 0
console.log(occurence(array4, 1)); // Output: 1