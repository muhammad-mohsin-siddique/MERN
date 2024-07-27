// Task 1: Write a function that returns another funciton, where the inner function accesses a variable from the other function's scope. Call the inner funciton and log the result

function outer(){
    const username = 'Muhamamd Mohsin Siddique';
    function inner(){
        console.log(`Welcome ${username}`);
    }
    return inner;
}

const myfunction = outer();

myfunction();

// Task 2: Create a clouser that maintains a private counter. Implement functions to increment and get the current value of the counter 


function counter(){
    let private_counter = 0

    function increment(){
        private_counter++;
    }
    function getCounter(){
        return private_counter;
    }
    return {
        increment,
        getCounter
    }
}


const count = counter();

count.increment();
count.increment();
count.increment();
count.increment();
count.increment();
count.increment();
count.increment();
count.increment();

console.log(count.getCounter()); // Output: 8