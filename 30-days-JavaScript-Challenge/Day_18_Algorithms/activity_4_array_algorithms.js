// Task 8: Write a function to rotate an array by k positions. Log the rotated array

function rotateArray(array, position = array.length / 2) {

    const normalizedPosition = position % array.length; // To avoid the position which greater then the length of the Array

    return array.slice(normalizedPosition).concat(array.slice(0, normalizedPosition));
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Rotated Array : ', rotateArray(numArray, 3));


// Task 9: Write a funciton to merge two sorted arrays into one sorted array. Log the merged array

//const sortedArray1 = [1, 3, 5, 7];
// const sortedArray2 = [2, 4, 6, 8, 10];

function mergeSortedArrays(array1, array2) {

    let array2Index = 0, array1Index = 0;

    const mergedSortedArray = [];

    while (array1Index < array1.length && array2Index < array2.length) {

        if (array1[array1Index] <= array2[array2Index]) {
            mergedSortedArray.push(array1[array1Index]);
            array1Index++;
        } else {
            mergedSortedArray.push(array2[array2Index]);
            array2Index++;
        }
    }



    // If there are remaining elements in array2, add them to mergedArray


    while (array1Index < array1.length) {

        mergedSortedArray.push(array1[array1Index]);

        array1Index++;
    }


    while (array2Index < array2.length) {
        mergedSortedArray.push(array2[array2Index]);
        array2Index++;
    }

    return mergedSortedArray;

}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [0, 2, 4, 6, 8, 9, 10];

const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
console.log('Merged Array:', mergedArray);