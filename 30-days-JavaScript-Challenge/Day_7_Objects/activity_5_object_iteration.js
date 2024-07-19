// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value

const book = {
    title: 'You Are A Goddess - Paperback',
    author: 'Sophie Bashford',
    year : 2018,
}

for (const key in book) {
    if(key === 'title')
    {
        console.log(`Book Title: ${book[key]}`);
    }else if (key === 'author')
    {
        console.log(`Book Author: ${book[key]}`);
    } else{
        console.log(`Publishing Year : ${book[key]}`);
    }
}

// Task 9: Use the Object.keys and Object.values method to log all the keys and values of the book object 

console.log(Object.keys(book));
console.log(Object.values(book));
