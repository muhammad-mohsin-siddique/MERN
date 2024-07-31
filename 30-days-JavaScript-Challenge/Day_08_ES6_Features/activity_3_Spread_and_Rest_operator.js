// Task 5: Use the Spread operator to creat a new array that includes all element of an existing array plus additional Element, and log the new array to the console


const myArr = [2,4,6,8,10];

const myNewArr = [...myArr,'a','e','i','o','u'];

// const myNewArr = [...myArr,...myArr];

console.log(myNewArr);

// Task 6: use a rest operator in function to accept an arbitrary number of arguments, sum them, and return the result

function sum(...number){
    let result = 0;
    number.forEach(num => {
        result+=num;
    });
    return result;
}

console.log(sum(100));
console.log(sum()); // Output: 0
console.log(sum(100, 10,200));
