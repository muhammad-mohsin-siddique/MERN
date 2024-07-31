// Task 8: Use Enhance Object Literals to creat an object with methods and properties, and log the object to the console 


const title = 'You Are A Goddess - Paperback';
const author =  'Sophie Bashford';
const year = 2018;
function getTitleAndAuthor(){
    return `Book Title: ${this.title} \nPublishing Year : ${this.year}`;
}

// Creating an object using enhanced object literals
const book = {
    title,
    author,
    year,
    getTitleAndAuthor
}

console.log(book);
console.log(book.getTitleAndAuthor());

// we can also define some properites


const book1 = {
    title,
    author,
    year,
    edition: 4,
    getTitleAndAuthor,
    getEddition: function(){
        return this.edition;
    }
}

console.log(book1);
console.log(book1.getEddition());


// Task 9: Creat an object with computed properties names based on variable and log the object to the console 

const prop1 = "firstName";
const prop2 = "lastName";
const prop3 = "age";

const sum = (...number)=>{
    let result = 0;
    number.forEach(num => {
        result+=num;
    });
    return result;
}


const value1 = "John";
const value2 = "Doe";
const value3 = 30;

// Creating an object using computed property names
const person = {
  [prop1]: value1,
  [prop2]: value2,
  [prop3]: value3,
  sumValue: sum
};

// Logging the object to the console
console.log(person.sumValue(1,2,3,4));
