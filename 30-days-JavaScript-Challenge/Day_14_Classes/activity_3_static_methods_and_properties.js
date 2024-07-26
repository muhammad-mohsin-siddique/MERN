// Task 5: Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static greeting(){
        return `Welcome to our Website!`;
    }
}

console.log(Person.greeting()); // output: Welcome to our Website!

// Task 6: Add a static property to the Student class to keep track number of students created. Increment this propertyin the constructor and log the total number of students


class Student extends Person {
    static numOfStd = 0;
    constructor(name,age,ID){
        super(name,age);
        this.ID = ID;
        Student.numOfStd++;
    }
    getID(){
        return this.ID
    }
}


const student = new Student('Muhammad Mohsin Siddique', 21, '123');
const student2 = new Student('Muhammad Siddique', 23, '123abc');
const student3 = new Student('Muhammad Mohsin ', 25, 'abc123');
const student4 = new Student('Muhammad Farhan Siddique', 20, '1a2b3c');


console.log(`Number if Student class instance is ${Student.numOfStd}`) // Output is: Number if Student class instance is 4