//Task 1:  Creat an Object representing a book with properties like title , author and year, and log the object to the console 

const book = {
    title: 'New Revelations of the Americas Before Columbus',
    author: 'Charles C. Mann',
    year : 2005
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object

let bookTitle = book.title;

let bookAuthor = book.author;

console.log(`Book Title: ${bookTitle} and the author is: ${bookAuthor}`);

//Another way to access the properties of an object

bookTitle = book['title'];
bookAuthor = book['author'];

console.log(`Book Title: ${bookTitle} and the author is: ${bookAuthor}`);

