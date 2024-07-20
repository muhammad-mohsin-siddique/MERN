// Task 3: Use array destructuring to extract the first and second element of an array of numbers and log them to the console

// Array Destructuring 


let myArr = [100,200,3,4,5,6];

let {0: firstElement, 1: secondElement} = myArr;

console.log(`First Element of Array: ${firstElement} and Second Element of Array: ${secondElement}`);

//OR


[firstElement, secondElement] = [1000,2000,3,4,5,6];

console.log(`First Element of Array: ${firstElement} and Second Element of Array: ${secondElement}`);

//OR

[firstElement, secondElement, ...myArr] = [1,2,3,4,5,6];

console.log(`First Element of Array: ${firstElement} and Second Element of Array: ${secondElement}`);
console.log(`Remaining Array ${myArr}`);



// Task 4: Use object destructutring to extract the title and author from a book object and log them to the console.

const book = {
    title: 'You Are A Goddess - Paperback',
    author: 'Sophie Bashford',
    year : 2018
}


let {title, author} = book;

console.log(`Title of Book: ${title} and The Author is: ${author}`);

// OR 

({title: bookTitle, author: authorName} = book);

console.log(`Title of Book: ${bookTitle} and The Author is: ${authorName}`);


// OR

({title: bookTitle = 'Not Available', author: authorName = 'Not Available'} = book);

console.log(`Title of Book: ${bookTitle} and The Author is: ${authorName}`);