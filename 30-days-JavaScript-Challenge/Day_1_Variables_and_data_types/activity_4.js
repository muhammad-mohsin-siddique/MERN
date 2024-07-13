//++++++++++++++++++++++ Activity 4: Reassigning Variables +++++++++++++++++++++

// Task 5: Declare a variable using let, assign it an initial value, reasign a new value, and log both value to the console.

let score = 100; // Initial Value in the Variable

console.log(`Current Score = ${score}`);

score = 150; // Reasign a new Value to the varibale 

console.log(`Updated Score = ${score}`);


// ++++++++++++++++++++++ Difference in Behavior between let and const  +++++++++++++++++++++


// let alllows reassignment and const not let's see

const number = 10;
const username = "Muhammad Mohsin Siddique";
const flag = false;
const gameScore = [10, 4, 50, 10, 15];
const user = {
    username: "Muhammad Mohsin Siddique",
    age: 21
}

number = 11; 

console.log(number); // TypeError: Assignment to constant variable.

username = "Muhammad Mohsin Siddique";

console.log(username);// TypeError: Assignment to constant variable.

flag = true;

console.log(flag);// TypeError: Assignment to constant variable.



//In the case of an array, the elements in the array can be changed, but the reference of the variable will not change if it is of constant type.

//Let's see how

//gameScore[0] = 10 // Original Value


gameScore[0] = 20;

console.log(gameScore[0]); // no error

// But if we will try this 

gameScore = [100, 200, 300, 400, 500]; 

console.log(gameScore); //// TypeError: Assignment to constant variable.


// Same in Objects we can update, remove and add the properties in it but we can not change the reference of the variable

//user.age = 21 // original value

user.age = 22;

console.log(user); // no error 

user = {
    username: "Muhammad Farhan Siddique",
    age: 28
}

console.log(user) // TypeError: Assignment to constant variable.


let Letnumber = 10;
let Letname = "Muhammad Mohsin Siddique";
let Letflag = false;
let LetgameScore = [10, 4, 50, 10, 15];
let Letuser = {
    username: "Muhammad Farhan Siddique",
    age: 28
}


console.log('let');

Letnumber = 11; 

console.log(Letnumber); // no error
Letname = "Muhammad Mohsin Siddique";

console.log(Letname);// no error

Letflag = true;

console.log(Letflag);// no error

//In the case of an array, the elements in the array can be changed, but the reference of the variable will not change if it is of constant type.

//Let's see how

//LetgameScore[0] = 10 // Original Value


LetgameScore[0] = 20;

console.log(LetgameScore[0]); // no error

// But if we will try this 

LetgameScore = [100, 200, 300, 400, 500]; 

console.log(LetgameScore); //// no error


// Same in Objects we can update, remove and add the properties in it but we can not change the reference of the variable

// Letuser.age = 28 // original value

Letuser.age = 22;

console.log(Letuser); // no error 

Letuser = {
    username: "Muhammad Farhan Siddique",
    age: 28
}

console.log(Letuser) // no error