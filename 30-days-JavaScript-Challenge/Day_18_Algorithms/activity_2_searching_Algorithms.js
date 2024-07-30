// Task 4: Implement the linear search to find the a target value in an array. Log the index of the target value.

// We can use for loop, while, do while 

function linearSearch(arry, target){
    return  arry.findIndex(element => element === target);
}

const array = [50, 60, 70, 80, 90, 100];
const target = 100;

const index = linearSearch(array, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}

// Task 5: Implement the binary search algorithm to find the a target value in a sorted array. Log the index of the target value.
function binarySearch(array, target){

    let endOfArray = array.length - 1;

    for (let start = 0; start <= endOfArray; start++) {

        let midPoint = Math.floor((index + endOfArray) / 2);

        if(array[midPoint] < target){

            start = midPoint + 1;

        }else if(array[midPoint] === target){
            return midPoint;
        }
        else{
            endOfArray = midPoint - 1;
        }
    }
    return undefined;
}


const index1 = binarySearch(array, target);

if (index1 !== undefined) {
    console.log(`Element found with binary search at index: ${index1}`);
} else {
    console.log('Element not found');
}