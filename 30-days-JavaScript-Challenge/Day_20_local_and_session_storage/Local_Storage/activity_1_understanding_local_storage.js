// Task 1: Write a script to save a string value to localStorage and retrieve it. log the retrieved value.

const username = 'Muhammad Mohsin Siddique';

const score = 100;

localStorage.setItem('username', username);

localStorage.setItem('score', score);

// console.log('Username: ',localStorage.getItem('username'));
// console.log('Score: ',localStorage.getItem('score'));



// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it 


const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};


localStorage.setItem('user', JSON.stringify(user));

const retrievedUser = localStorage.getItem('user');

const parsedUser = JSON.parse(retrievedUser);

console.log(parsedUser);
