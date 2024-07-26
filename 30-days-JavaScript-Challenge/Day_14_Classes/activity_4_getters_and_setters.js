// Task 7: Add a getter method to the Person class to return the full name  (assume a firstname and lastname property). Create an instance of and log the full name using getter

class Person {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get FullName(){
        return `Full Name: ${this.firstname} ${this.lastname}!`;
    }
}

const person = new Person("Muhammad Mohsin", "Siddique");

console.log(person.FullName); // Output: Full Name: Muhammad Mohsin Siddique!

// Task 8: Add a setter method to the person class to update the name property ( firstname and lastname). Update the name using the setter method and log the updated full name

Object.defineProperty(Person.prototype,'FullName',{
    set: function(name){
        const [firstname, lastname] = name.split(' ');
        this.firstname = firstname;
        this.lastname = lastname;
    }

});

person.FullName = 'Muhammad Mohsin';

console.log(person.FullName);