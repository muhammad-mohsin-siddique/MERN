// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array 


function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {

            if(array[j-1] >= array[j]){
                [array[j-1], array[j]] = [array[j], array[j-1]]; // ES6 feature destructuring 
            }
        }
        
    }
    return array;
}

let array = [3,-5,6,79,10,2,-1,-110,100,20]

console.log(bubbleSort(array));


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array 

function selectionSort(array){

    for (let i = 0; i < array.length; i++) {

        let minimumIndex = i; 

        for (let j = i + 1; j < array.length; j++) {

            if(array[minimumIndex] >= array[j])  minimumIndex = j;
        }

        [array[minimumIndex], array[i]]=[array[i], array[minimumIndex]];
        
    }

    return array;

}

array = [3,-5,6,79,10,2,-1,-110,100,20]

console.log(selectionSort(array));


// Task 3: Implement the Quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array


function quickSort(array, start = 0, end = array.length - 1){
    if(start < end ){

        pivot_index = partition(array,start,end);

        quickSort(array, start, pivot_index - 1);
        quickSort(array, pivot_index + 1, end);
    }
    return array;
}
function partition(array, start, end){

    let pivot = array[end];
    let i = start - 1;

    for (let index = start; index < end; index++) {
        if(array[index] < pivot){
            i++;
            // let temp = array[i];
            // array[i] = array[index];
            // array[index] = temp; 
            [array[i],array[index]] = [array[index],array[i]]; // Swap smaller element

        }
    }
    i++;
    // let temp = array[i];
    // array[i] = pivot;
    // array[end] = temp; 

    [array[i],array[end]] = [pivot,array[i]];

    return i;
}


array = [3,-5,6,79,10,2,-1,-110,100,20];

console.log(quickSort(array));