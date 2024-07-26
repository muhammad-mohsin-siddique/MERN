// Task 3: Define a class Student that extends the person class. Add a property studentId and a method to return the student ID. Create an instant of student class and log the student ID

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Welcome ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name,age,ID){
        super(name,age);
        this.ID = ID;
    }
    getID(){
        return this.ID
    }
}


const student = new Student('Muhammad Mohsin Siddique', 21, '123');

console.log(student.getID()); // Ouput: 123
console.log(student.greeting()); // Output: Welcome Muhammad Mohsin Siddique!


// Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overriden greeting message

Student.prototype.greeting = function(){
    return `Student ID: ${this.ID}, Welcome ${this.name}! to the School`;
}


console.log(student.greeting());// Output:  Student ID: 123, Welcome Muhammad Mohsin Siddique! to the School