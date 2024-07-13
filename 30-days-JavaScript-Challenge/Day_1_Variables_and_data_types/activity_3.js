//++++++++++++++++++++++ Activity 3: Data Types +++++++++++++++++++++


/* Task 4: creat different variables of different data types (number, string, boolean, object, array )
 and log each variables using the typeof operator*/

// Number

let score = new Number(300);
let score2 = 300;

console.log(score);        // Output: [Number: 300]
console.log(typeof score); // Output: object

console.log(score2);         //Output: 300
console.log(typeof score2); // Output: number


//String

let userName = new String("Muhammad Mohsin Siddique");
let website = 'www.youtube.come';

console.log(userName);                  // Output: [String: 'Muhammad Mohsin Siddique']
console.log(typeof userName);          // Output: object

console.log(website);                 //Output: www.youtube.come
console.log(typeof website);         // Output: string


//boolean

let isUserLoggedIn = new Boolean(false);
let flag = true;

console.log(isUserLoggedIn);                  // Output: [Boolean: false]
console.log(typeof isUserLoggedIn);          // Output: object

console.log(flag);                 //Output: true
console.log(typeof flag);         // Output: boolean


//object 

let user1 = new Object({
    username: "Muhammad Farhan Siddique",
    age: 28,
    enrolledCourses: ['30 days JS Challenge'],
    isCourseFree: false
});
const user2 = {
    username: "Muhammad Mohsin Siddique",
    age: 21,
    enrolledCourses: ['30 days JS Challenge'],
    isCourseFree: true
};

console.log(user1);                  /* Output: 
{
    username: "Muhammad Farhan Siddique",
    age: 28,
    enrolledCourses: ['30 days JS Challenge'],
    isCourseFree: false
}

 */

console.log(typeof user1);          // Output: object

console.log(user2);                 /* Output:

{
    username: "Muhammad Mohsin Siddique",
    age: 21,
    enrolledCourses: ['30 days JS Challenge'],
    isCourseFree: true
}; 

*/

console.log(typeof user2);         // Output: boolean


//Array

let subjects = new Array('English', 'Maths', 'Urdu', 'Science');
let gameScore = [10,20,30,50,0,10,4,2,1];

console.log(subjects);                  // Output: ['English', 'Maths', 'Urdu', 'Science']
console.log(typeof subjects);          // Output: object

console.log(gameScore);                 //Output: [10,20,30,50,0,10,4,2,1]
console.log(typeof gameScore);         // Output: object