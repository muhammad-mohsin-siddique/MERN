// Task 1: Define a class person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Welcome ${this.name}!`;
    }
}

const user = new Person("Muhammad Mohsin Siddique", 21);

console.log(user.greeting());


// Task 2: Add a method to the person class that updates the age property and logs the updated age

Person.prototype.updateAge = function(age){
    this.age = age;
    return this.age;
}

console.log(Person);