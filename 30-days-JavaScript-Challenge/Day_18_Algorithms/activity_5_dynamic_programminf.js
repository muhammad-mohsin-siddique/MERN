// Task 10: Write the Function solve the fabonacci sequence using dynamic programming. Log the fabonacci numbers.


// Dynamic Prograamming with Memoizing

function fibonacci(number,memoize = {}){
    if(number <= 1) return number;
    if(memoize[number]) return memoize[number];

    memoize[number] = fibonacci(number - 1, memoize) + fibonacci(number - 2, memoize);
    return memoize[number];
}

console.log(fibonacci(50));


// Task 11: Write a function to solve a knapsack problem using dynamic programming. Log the maximum value that can be obtained

function knapsack(weights, values, capacity) {
    const sizeOfWeight = weights.length;
    const dynamicProgramming = Array(sizeOfWeight + 1).fill().map(() => Array(capacity + 1).fill(0));
    // console.log(dynamicProgramming);

    for (let i = 1; i <= sizeOfWeight ; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (weights[i - 1] <= j ) {
                dynamicProgramming[i][j] = Math.max(values[i - 1] + dynamicProgramming[i - 1][j  - weights[i - 1]], dynamicProgramming[i - 1][j]);
            } else {
                dynamicProgramming[i][j] = dynamicProgramming[i - 1][j];
            }
        }
    }

    console.log(dynamicProgramming);
    return dynamicProgramming[sizeOfWeight][capacity];
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

console.log(knapsack(weights, values, capacity));