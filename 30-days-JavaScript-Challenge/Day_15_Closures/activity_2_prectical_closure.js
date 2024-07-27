// Task 3: Write a function that generates Unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

function generatRandomID(){
    let lastID = 0;

    function getID(){
        lastID++;
        return lastID
    }
    return getID;
}

const generateID = generatRandomID();

console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2
console.log(generateID()); // Output: 3


// Task 4: Create a closure that captures a user's name and return a function that greets the user by name


function greet(){
    function greeting(name){
        return `Welcome ${name}!`;
    }
    return greeting;
}

const greetingFunction = greet();
console.log(greetingFunction('Muhammad Mohsin Siddique'));