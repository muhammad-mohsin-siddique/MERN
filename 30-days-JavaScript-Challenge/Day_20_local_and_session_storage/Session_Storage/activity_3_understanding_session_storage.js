// Task 5: Write a script to save a string value to sessionStorage and retriece it. log the retrieced value

const  myname = "muhammad-mohsin-siddique";

sessionStorage.setItem('username', myname);

const email = "muhammadmohsinsiddique789@gmail.com";

sessionStorage.setItem('email', email)

// Task 6: Write a script to save an object to sessionStorage by converting it to JSON string. Retrieve and parse the object, then log it 

const myobj = {
    username: 'Muhammad Mohsin Siddique',
    email: 'muhammadmohsinsiddique789@gmail.com',
    age: 21
};

sessionStorage.setItem('user', JSON.stringify(myobj));


const retrieveUserData = sessionStorage.getItem('user');

console.log('User Data: ', JSON.parse(retrieveUserData));



